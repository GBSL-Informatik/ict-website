// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const katex = require('rehype-katex');
const remarkMath = require('remark-math');
const remarkMdi = require('./src/plugins/remark-mdi');
const remarkKbd = require('./src/plugins/remark-kbd');
const remarkDeflist = require('./src/plugins/remark-deflist');
const remarkImg2Fig = require('./src/plugins/remark-img2fig');

const isDev = process.env.NODE_ENV === 'development';

const MD_PLUGINS = {
  beforeDefaultRemarkPlugins: [
    remarkImg2Fig,
    remarkKbd
  ],
  remarkPlugins: [
    remarkDeflist,
    remarkMdi,
    remarkMath
  ],
  rehypePlugins: [
    katex
  ]
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ICT am Gymnasium Biel Seeland',
  tagline: 'Anleitungen, Tipps und Tricks',
  url: 'https://ict.gbsl.website',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GBSL-Informatik', // Usually your GitHub org/user name.
  projectName: 'ict-website', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

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
        docs: {
          ...MD_PLUGINS,
          routeBasePath: '/',
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/gbsl-informatik/ict-website/edit/main/',
        },
        blog: false,
        pages: {
          ...MD_PLUGINS
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.scss')
          ]
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false
        }
      },
      navbar: {
        title: 'ICT Gymnasium Biel Seeland',
        logo: {
          alt: 'ICT GBSL',
          src: 'img/logo.svg',
        },
        items: [],
      },
      footer: {
        copyright: `<a class="footer__link-item" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de" target="_blank"><img src="/img/by-nc-sa.eu.svg" alt="CC-BY-NC-SA"><br/> Alle Inhalte (falls nicht anders angegeben) lizenziert unter <br/>Creative Commons Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 4.0 International Lizenz.</a>`,
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
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
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
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: isDev,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(5, 143, 205)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/logo_x512.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/logo_x512.png',
            color: 'rgb(5, 143, 205)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/logo_x512.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ]
};

module.exports = config;
