const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-page-js": hot(preferDefault(require("/Users/davidluhr/Projects/personal/david-luhr-portfolio/src/templates/post-page.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/davidluhr/Projects/personal/david-luhr-portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/davidluhr/Projects/personal/david-luhr-portfolio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/davidluhr/Projects/personal/david-luhr-portfolio/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/davidluhr/Projects/personal/david-luhr-portfolio/src/pages/index.js")))
}

