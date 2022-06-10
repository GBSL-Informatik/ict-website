// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const remarkMdi = require('./src/plugins/remark-mdi');
const remarkKbd = require('./src/plugins/remark-kbd');


const MD_PLUGINS = {
  beforeDefaultRemarkPlugins: [
    remarkKbd
  ],
  remarkPlugins: [
    remarkMdi,
  ]
};

const getDocConfig = (name) => {
  return {
    ...MD_PLUGINS,
    id: name,
    path: `docs/${name}`,
    routeBasePath: name,
    showLastUpdateTime: true,
    sidebarCollapsible: true,
    sidebarPath: require.resolve('./sidebars.js')
  }
}

const getDocPluginConfig = (name) => {
  return [
    '@docusaurus/plugin-content-docs',
    getDocConfig(name)    
  ]
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ICT am Gymnasium Biel Seeland',
  tagline: 'Anleitungen, Tipps und Tricks',
  url: 'https://ict.gbsl.website',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GBSL-Informatik', // Usually your GitHub org/user name.
  projectName: 'ict-website', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        pages: {
          ...MD_PLUGINS
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.scss')
          ]
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ICT Gymnasium Biel Seeland',
        logo: {
          alt: 'ICT GBSL',
          src: 'img/logo.svg',
        },
        items: [],
      },
      footer: {
        copyright: `<a class="footer__link-item" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de"><img src="/img/by-nc-sa.eu.svg" alt="CC-BY-NC-SA"><br/> Alle Inhalte (falls nicht anders angegeben) lizenziert unter <br/>Creative Commons Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 4.0 International Lizenz.</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        backgroundColor: '#fcff00',
        content: '🚧 Seite im Aufbau... 🚧',
        isCloseable: false
      }
    }),
  stylesheets: [
    'https://fonts.googleapis.com/icon?family=Material+Icons'
  ],
  themes: [
    'docusaurus-theme-frontmatter'
  ],
  scripts: [
    // Object format.
    {
      src: 'https://umami.gbsl.website/tell-me.js',
      ['data-website-id']: 'b712f437-c0b3-41f0-ba9b-c1e5ec681751',
      ['data-domains']: 'ict.gbsl.website',
      async: true,
      defer: true
    },
  ],
  plugins: [
    'docusaurus-plugin-sass',
    getDocPluginConfig('anderesoftware'),
    getDocPluginConfig('byod'),
    getDocPluginConfig('dokumentation'),
    getDocPluginConfig('infra'),
    getDocPluginConfig('internet'),
    getDocPluginConfig('microsoft365'),
    getDocPluginConfig('praesentation'),
    getDocPluginConfig('sicherheit'),
    getDocPluginConfig('tabellenkalkulation'),
    getDocPluginConfig('textverarbeitung'),
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 1,


        // whether to index blog pages
        indexBlog: false,

        // whether to index static pages
        // /404.html is never indexed
        indexPages: false,
        // language of your documentation, see next section
        language: "de",
        // setting this to "none" will prevent the default CSS to be included. The default CSS
        // comes from autocomplete-theme-classic, which you can read more about here:
        // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
        style: undefined,

      }
    ]
  ]
};

module.exports = config;
