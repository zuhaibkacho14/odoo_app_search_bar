# Odoo App Search Bar

A lightweight Odoo module that adds a live search box inside the dashboard/app menu so users can quickly find apps without scrolling.

## Features

- Live filtering of visible apps
- Search input above the app list
- Clear-button support
- No-result message when there are no matches
- Works with standard app menu items

## Module structure

- `ws_apps_dashboard_search/__init__.py`
- `ws_apps_dashboard_search/__manifest__.py`
- `ws_apps_dashboard_search/static/src/js/apps_dashboard_search.js`
- `ws_apps_dashboard_search/static/src/xml/apps_dashboard_search.xml`
- `ws_apps_dashboard_search/static/src/scss/apps_dashboard_search.scss`

## Installation

1. Copy the `ws_apps_dashboard_search` folder into your Odoo addons path.
2. Restart Odoo.
3. Update the module list.
4. Install `Apps Dashboard Search`.
5. Open the app menu and type in the search field.

## Notes

This is a frontend enhancement for the app menu; exact selectors may vary depending on the Odoo version and customizations in your environment.
