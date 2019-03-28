module.exports = [{
      plugin: require('/Users/davidluhr/Projects/personal/david-luhr-portfolio/node_modules/gatsby-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":604,"linkImagesToOriginal":false,"withWebp":true}}]},
    },{
      plugin: require('/Users/davidluhr/Projects/personal/david-luhr-portfolio/node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-91925416-1","head":false,"anonymize":true,"respectDNT":true},
    },{
      plugin: require('/Users/davidluhr/Projects/personal/david-luhr-portfolio/node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/davidluhr/Projects/personal/david-luhr-portfolio/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
