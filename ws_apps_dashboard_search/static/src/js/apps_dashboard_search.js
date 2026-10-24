(function () {
    const APP_SEARCH_ID = 'ws_apps_dashboard_search_wrapper';
    const SEARCH_INPUT_SELECTOR = `#${APP_SEARCH_ID} input.ws_apps_dashboard_search_input`;

    function normalizeText(value) {
        return (value || '').replace(/\s+/g, ' ').trim().toLowerCase();
    }

    function getAppMenuContainer() {
        return (
            document.querySelector('.o_navbar_apps_menu .o-dropdown--menu') ||
            document.querySelector('.o_navbar_apps_menu .dropdown-menu') ||
            document.querySelector('.o_navbar_apps_menu .o_dropdown_menu') ||
            document.querySelector('.o_app_menu') ||
            document.querySelector('.o_main_navbar .o-dropdown--menu') ||
            document.querySelector('.o_apps_menu') ||
            document.querySelector('.o_menu_apps') ||
            document.querySelector('.o_menu')
        );
    }

    function isAppMenuItem(node) {
        if (!(node instanceof HTMLElement)) {
            return false;
        }

        const appSelectors = '.o_app, .o-dropdown-item, .dropdown-item, .o_menu_item';
        const hasAppMarker =
            node.matches(appSelectors) ||
            Boolean(node.dataset.menuXmlid || node.dataset.menuId || node.dataset.appId);

        if (!hasAppMarker) {
            return false;
        }

        return normalizeText(node.textContent || node.getAttribute('title') || '').length > 0;
    }

    function getAppItems(container) {
        return Array.from(container.children || []).filter((node) => isAppMenuItem(node));
    }

    function getEmptyState() {
        const empty = document.createElement('div');
        empty.className = 'ws_apps_dashboard_search_empty';
        empty.textContent = 'No apps found';
        return empty;
    }

    function applyFilter() {
        const container = getAppMenuContainer();
        if (!container) {
            return;
        }

        const query = normalizeText(container.querySelector(SEARCH_INPUT_SELECTOR)?.value || '');
        const appItems = getAppItems(container);
        let visibleCount = 0;

        appItems.forEach((item) => {
            const label = normalizeText(item.textContent || item.getAttribute('title') || '');
            const shouldDisplay = !query || label.includes(query);
            item.style.display = shouldDisplay ? '' : 'none';
            if (shouldDisplay) {
                visibleCount += 1;
            }
        });

        let emptyState = container.querySelector('.ws_apps_dashboard_search_empty');
        if (!emptyState) {
            emptyState = getEmptyState();
        }

        if (query && visibleCount === 0) {
            container.appendChild(emptyState);
        } else {
            emptyState.remove();
        }

        const clearButton = container.querySelector(`#${APP_SEARCH_ID} .ws_apps_dashboard_search_clear`);
        if (clearButton) {
            clearButton.style.visibility = query ? 'visible' : 'hidden';
        }
    }

    function createSearchBar() {
        const wrapper = document.createElement('div');
        wrapper.id = APP_SEARCH_ID;
        wrapper.className = 'ws_apps_dashboard_search_wrapper';
        wrapper.innerHTML = `
            <label class="ws_apps_dashboard_search" aria-label="Search apps">
                <span class="ws_apps_dashboard_search_icon" aria-hidden="true">🔎</span>
                <input
                    type="text"
                    class="ws_apps_dashboard_search_input"
                    placeholder="Search apps..."
                    aria-label="Search apps"
                />
                <button type="button" class="ws_apps_dashboard_search_clear" aria-label="Clear search">×</button>
            </label>
        `;

        const input = wrapper.querySelector('input');
        const clearButton = wrapper.querySelector('button');

        clearButton.style.visibility = 'hidden';

        input.addEventListener('input', () => {
            applyFilter();
        });

        clearButton.addEventListener('click', () => {
            input.value = '';
            applyFilter();
            input.focus();
        });

        return wrapper;
    }

    function injectSearchBar() {
        const container = getAppMenuContainer();
        if (!container) {
            return;
        }

        if (container.querySelector(`#${APP_SEARCH_ID}`)) {
            return;
        }

        const searchBar = createSearchBar();
        const firstAppNode = getAppItems(container)[0];

        if (firstAppNode) {
            container.insertBefore(searchBar, firstAppNode);
        } else {
            container.prepend(searchBar);
        }

        applyFilter();
    }

    function start() {
        injectSearchBar();

        const observer = new MutationObserver(() => {
            injectSearchBar();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    }

    if (typeof window !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', start);
        } else {
            start();
        }
    }
})();
