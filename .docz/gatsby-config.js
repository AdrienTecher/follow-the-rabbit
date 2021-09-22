const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'My Doc',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'My Doc',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit',
          templates:
            'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit\\.docz',
          cache:
            'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit\\.docz\\.cache',
          app:
            'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit\\.docz\\app',
          appPackageJson:
            'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit\\package.json',
          appTsConfig:
            'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit\\tsconfig.json',
          gatsbyConfig:
            'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit\\gatsby-node.js',
          gatsbySSR:
            'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit\\.docz\\app\\index.html',
          db:
            'C:\\Users\\adrie\\Documents\\prog\\follow-the-rabbit\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
