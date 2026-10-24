{
    'name': 'Apps Dashboard Search',
    'version': '18.0.1.0.0',
    'category': 'Tools',
    'summary': 'Live search bar for the Odoo apps dashboard',
    'license': 'LGPL-3',
    'author': 'Your Company',
    'website': 'https://www.example.com',
    'depends': ['web'],
    'data': [],
    'assets': {
        'web.assets_backend': [
            'ws_apps_dashboard_search/static/src/js/apps_dashboard_search.js',
            'ws_apps_dashboard_search/static/src/xml/apps_dashboard_search.xml',
            'ws_apps_dashboard_search/static/src/scss/apps_dashboard_search.scss',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
}
