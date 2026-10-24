.ws_apps_dashboard_search_wrapper {
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 8px 10px 6px;
    background: rgba(255, 255, 255, 0.96);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.ws_apps_dashboard_search {
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 38px;
    padding: 0 10px;
    background: #f5f6f7;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    box-sizing: border-box;
}

.ws_apps_dashboard_search:focus-within {
    border-color: #2f7cf6;
    box-shadow: 0 0 0 2px rgba(47, 124, 246, 0.12);
}

.ws_apps_dashboard_search_icon {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.ws_apps_dashboard_search_input {
    flex: 1 1 auto;
    min-width: 0;
    border: none;
    background: transparent;
    outline: none;
    font-size: 14px;
    color: #2f3136;
    box-shadow: none;
}

.ws_apps_dashboard_search_input::placeholder {
    color: rgba(0, 0, 0, 0.45);
}

.ws_apps_dashboard_search_clear {
    border: none;
    background: rgba(0, 0, 0, 0.06);
    color: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    width: 22px;
    height: 22px;
    padding: 0;
    cursor: pointer;
    font-size: 16px;
    line-height: 1;
}

.ws_apps_dashboard_search_empty {
    padding: 16px 12px;
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
    font-size: 14px;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.ws_apps_dashboard_search_wrapper + .ws_apps_dashboard_search_empty {
    margin-top: 0;
}
