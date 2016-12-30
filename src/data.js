export default {
    "frameworks": [
        {
            "name": "Bootstrap 3",
            "slug": "bootstrap",
            "description": "The most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web",
            "url": "http://getbootstrap.com",
            "documentation": "http://getbootstrap.com/getting-started/",
            "github": "https://github.com/twbs/bootstrap",
            "icons" : {
                "name" : "Glyphicons",
                "url" : "http://getbootstrap.com/components/#glyphicons-glyphs"
            },
            "css": "LESS",
            "js": "http://getbootstrap.com/javascript/",
            "stats": {
                "stars": "104K+",
                "forks": "47K+"
            }
        },
        {
            "name": "Semantic UI",
            "slug": "semantic-ui",
            "description": "Semantic is a UI component framework based around useful principles from natural language",
            "url": "http://semantic-ui.com/",
            "documentation": "http://semantic-ui.com/introduction/getting-started.html",
            "github": "https://github.com/Semantic-Org/Semantic-UI",
            "icons" : {
                "name" : "Font Awesome",
                "url" : "http://fontawesome.io/"
            },
            "css": "LESS",
            "js": "http://semantic-ui.com/behaviors/api.html",
            "stats": {
                "stars": "30K+",
                "forks": "3.4K+"
            }
        },
        {
            "name": "UIKit",
            "slug": "uikit",
            "description": "A lightweight and modular front-end framework for developing fast and powerful web interfaces",
            "url": "https://getuikit.com/",
            "documentation": "https://getuikit.com/docs/documentation_get-started.html",
            "github": "https://github.com/uikit/uikit",
            "icons" : {
                "name" : "Font Awesome",
                "url" : "http://fontawesome.io/"
            },
            "css": "LESS",
            "js": "https://getuikit.com/docs/documentation_javascript.html",
            "stats": {
                "stars": "8K+",
                "forks": "1.5K+"
            }
        },
        {
            "name": "Foundation 6",
            "slug": "foundation",
            "install": "foundation-sites",
            "description": "The most advanced responsive front-end framework in the world",
            "url": "http://foundation.zurb.com/",
            "documentation": "http://foundation.zurb.com/sites/docs/",
            "github": "https://github.com/zurb/foundation-sites",
            "icons" : {
                "name" : "Foundation Icons",
                "url" : "http://foundation.zurb.com/icon-fonts.html"
            },
            "css": "SASS",
            "js": "https://foundation.zurb.com/sites/docs/javascript.html",
            "stats": {
                "stars": "24K+",
                "forks": "5K+"
            }
        },
        {
            "name": "Bulma",
            "slug": "bulma",
            "description": "A modern CSS framework based on Flexbox",
            "url": "http://bulma.io/",
            "documentation": "http://bulma.io/documentation/overview/start/",
            "github": "https://github.com/jgthms/bulma",
            "icons" : {
                "name" : "Font Awesome (Optional)",
                "url" : "http://fontawesome.io/"
            },
            "css": "SASS",
            "js": false,
            "stats": {
                "stars": "10K+",
                "forks": "500+"
            }
        }
    ],
    "components": [
        {
            "name": "Alert",
            "supports": {
                "bootstrap": "http://getbootstrap.com/components/#alerts",
                "uikit": "https://getuikit.com/docs/alert.html",
                "semantic-ui": "http://semantic-ui.com/collections/message.html",
                "foundation" : "http://foundation.zurb.com/sites/docs/callout.html",
                "bulma": "http://bulma.io/documentation/elements/notification/"
            }
        },
        {
            "name": "Badge",
            "supports": {
                "bootstrap": "http://getbootstrap.com/components/#badges",
                "semantic-ui": "http://semantic-ui.com/elements/label.html#circular",
                "uikit": "https://getuikit.com/docs/badge.html",
                "foundation": "http://foundation.zurb.com/sites/docs/badge.html",
                "bulma": "http://bulma.io/documentation/elements/tag/"
            }
        },
        {
            "name": "Button",
            "supports": {
                "bootstrap": "http://getbootstrap.com/css/#buttons",
                "semantic-ui": "http://semantic-ui.com/elements/button.html",
                "uikit": "https://getuikit.com/docs/button.html",
                "foundation": "http://foundation.zurb.com/sites/docs/button.html",
                "bulma": "http://bulma.io/documentation/elements/button/"
            }
        },
        {
            "name": "Button Groups",
            "supports": {
                "bootstrap": "http://getbootstrap.com/components/#btn-groups",
                "semantic-ui": "http://semantic-ui.com/elements/button.html#buttons",
                "uikit": "https://getuikit.com/docs/button.html#button-group",
                "foundation": "http://foundation.zurb.com/sites/docs/button-group.html",
                "bulma": "http://bulma.io/documentation/elements/button/"
            }
        },
        {
            "name": "Breadcrumbs",
            "supports": {
                "bootstrap": "http://getbootstrap.com/components/#breadcrumbs",
                "semantic-ui": "http://semantic-ui.com/collections/breadcrumb.html",
                "foundation": "http://foundation.zurb.com/sites/docs/breadcrumbs.html",
                "uikit": "https://getuikit.com/docs/breadcrumb.html"
            }
        },
        {
            "name": "Card",
            "supports": {
                "semantic-ui": "http://semantic-ui.com/views/card.html",
                "bulma": "http://bulma.io/documentation/components/card/"
            }
        },
        {
            "name": "Dropdown",
            "supports": {
                "bootstrap": "http://getbootstrap.com/javascript/#dropdowns",
                "semantic-ui": "http://semantic-ui.com/modules/dropdown.html",
                "uikit": "https://getuikit.com/docs/dropdown.html",
                "foundation": "http://foundation.zurb.com/sites/docs/dropdown-menu.html"
            }
        },
        {
            "name": "Flex Grid",
            "supports": {
                "semantic-ui": "http://semantic-ui.com/collections/grid.html",
                "uikit": "https://getuikit.com/docs/flex.html",
                "foundation": "https://foundation.zurb.com/sites/docs/flex-grid.html",
                "bulma": "http://bulma.io/documentation/grid/columns/"
            }
        },
        {
            "name": "Grid",
            "supports": {
                "bootstrap": "http://getbootstrap.com/css/#grid",
                "semantic-ui": "http://semantic-ui.com/collections/grid.html",
                "uikit": "https://getuikit.com/docs/grid.html",
                "foundation": "https://foundation.zurb.com/sites/docs/grid.html",
                "bulma": "http://bulma.io/documentation/grid/columns/"
            }
        },
        {
            "name": "Form",
            "supports": {
                "bootstrap": "http://getbootstrap.com/css/#forms",
                "semantic-ui": "http://semantic-ui.com/collections/form.html",
                "uikit": "https://getuikit.com/docs/form.html",
                "foundation": "https://foundation.zurb.com/sites/docs/forms.html",
                "bulma": "http://bulma.io/documentation/elements/form/"
            }
        },
        {
            "name": "Icons",
            "supports": {
                "bootstrap": "http://getbootstrap.com/components/#glyphicons-glyphs",
                "semantic-ui": "http://semantic-ui.com/elements/icon.html",
                "uikit": "https://getuikit.com/docs/icon.html",
                "bulma": "http://bulma.io/documentation/elements/icon/"
            }
        },
        {
            "name": "Label",
            "supports": {
                "bootstrap": "http://getbootstrap.com/components/#labels",
                "semantic-ui": "http://semantic-ui.com/elements/label.html",
                "uikit": "https://getuikit.com/docs/badge.html",
                "foundation": "http://foundation.zurb.com/sites/docs/label.html",
                "bulma": "http://bulma.io/documentation/elements/tag/"
            }
        },
        {
            "name": "List",
            "supports": {
                "bootstrap": "http://getbootstrap.com/components/#list-group",
                "semantic-ui": "http://semantic-ui.com/elements/list.html",
                "uikit": "https://getuikit.com/docs/list.html"
            }
        },
        {
            "name": "Media Object",
            "supports": {
                "bootstrap": "http://getbootstrap.com/components/#media",
                "foundation": "http://foundation.zurb.com/sites/docs/media-object.html",
                "bulma": "http://bulma.io/documentation/components/media-object/"
            }
        },
        {
            "name": "Modal",
            "supports": {
                "bootstrap": "http://getbootstrap.com/javascript/#modals",
                "semantic-ui": "http://semantic-ui.com/modules/modal.html",
                "uikit": "https://getuikit.com/docs/modal.html",
                "foundation": "http://foundation.zurb.com/sites/docs/reveal.html",
                "bulma": "http://bulma.io/documentation/components/modal/"
            }
        },
        {
            "name": "Navbar / Navigation",
            "supports": {
                "bootstrap": "http://getbootstrap.com/components/#navbar",
                "semantic-ui": "http://semantic-ui.com/collections/menu.html",
                "uikit": "https://getuikit.com/docs/navbar.html",
                "bulma": "http://bulma.io/documentation/components/nav/"
            }
        },
        {
            "name": "Panel",
            "supports": {
                "bootstrap": "http://getbootstrap.com/components/#panels",
                "uikit": "https://getuikit.com/docs/panel.html",
                "bulma": "http://bulma.io/documentation/components/panel/"
            }
        },
        {
            "name": "Pagination",
            "supports": {
                "bootstrap": "http://getbootstrap.com/components/#pagination",
                "semantic-ui": "http://semantic-ui.com/collections/menu.html#pagination",
                "uikit": "https://getuikit.com/docs/pagination.html",
                "foundation": "http://foundation.zurb.com/sites/docs/pagination.html",
                "bulma": "http://bulma.io/documentation/components/pagination/"
            }
        },
        {
            "name": "Progress",
            "supports": {
                "bootstrap": "http://getbootstrap.com/components/#progress",
                "semantic-ui": "http://semantic-ui.com/modules/progress.html",
                "uikit": "https://getuikit.com/docs/progress.html",
                "foundation": "http://foundation.zurb.com/sites/docs/progress-bar.html",
                "bulma": "http://bulma.io/documentation/elements/progress/"
            }
        },
        {
            "name": "Table",
            "supports": {
                "bootstrap": "http://getbootstrap.com/css/#tables",
                "semantic-ui": "http://semantic-ui.com/collections/table.html",
                "uikit": "https://getuikit.com/docs/table.html",
                "foundation": "http://foundation.zurb.com/sites/docs/table.html",
                "bulma": "http://bulma.io/documentation/elements/table/"
            }
        },
        {
            "name": "Tabs",
            "supports": {
                "bootstrap": "http://getbootstrap.com/javascript/#tabs",
                "semantic-ui": "http://semantic-ui.com/modules/tab.html",
                "uikit": "https://getuikit.com/docs/tab.html",
                "bulma": "http://bulma.io/documentation/components/tabs/"
            }
        },
        {
            "name": "Thumbnail",
            "supports": {
                "bootstrap": "http://getbootstrap.com/components/#thumbnails",
                "semantic-ui": "http://semantic-ui.com/elements/image.html",
                "uikit": "https://getuikit.com/docs/thumbnail.html",
                "foundation": "https://foundation.zurb.com/sites/docs/thumbnail.html",
                "bulma": "http://bulma.io/documentation/elements/image/"
            }
        },
        {
            "name": "Tooltip",
            "supports": {
                "bootstrap": "http://getbootstrap.com/javascript/#tooltips",
                "semantic-ui": "http://semantic-ui.com/modules/popup.html#tooltip",
                "foundation": "http://foundation.zurb.com/sites/docs/tooltip.html",
                "uikit": "https://getuikit.com/docs/tooltip.html"
            }
        }
    ]
}