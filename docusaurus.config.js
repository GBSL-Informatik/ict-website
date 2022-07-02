// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const katex = require('rehype-katex');
const remarkMath = require('remark-math');
const remarkMdi = require('./src/plugins/remark-mdi');
const remarkUnderline = require('./src/plugins/remark-underline');
const remarkKbd = require('./src/plugins/remark-kbd');
const remarkDeflist = require('./src/plugins/remark-deflist');
const remarkImg2Fig = require('./src/plugins/remark-img2fig');
const remarkFlex = require('./src/plugins/remark-flex');
const remarkDetails = require('./src/plugins/remark-details');

const isDev = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

const MD_PLUGINS = {
  beforeDefaultRemarkPlugins: [
    remarkFlex,
    remarkDetails,
    remarkImg2Fig,
    remarkKbd,
    remarkUnderline
  ],
  remarkPlugins: [
    remarkDeflist,
    remarkMdi(isProduction),
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
          admonitions: {
            customTypes: {              
              aufgabe: {
                ifmClass: "info",
                keyword: "info",
                emoji: "🖋",
                svg: '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>'
              }
            }
          }
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
      },
      zoom: {
        selector: '.markdown figure.zoom > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {}
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
    require.resolve('docusaurus-plugin-image-zoom')
  ]
};

module.exports = config;
