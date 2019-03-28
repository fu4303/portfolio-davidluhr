// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-page-js": () => import("/Users/davidluhr/Projects/personal/david-luhr-portfolio/src/templates/post-page.js" /* webpackChunkName: "component---src-templates-post-page-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/davidluhr/Projects/personal/david-luhr-portfolio/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/davidluhr/Projects/personal/david-luhr-portfolio/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/Users/davidluhr/Projects/personal/david-luhr-portfolio/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("/Users/davidluhr/Projects/personal/david-luhr-portfolio/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/davidluhr/Projects/personal/david-luhr-portfolio/.cache/data.json")

