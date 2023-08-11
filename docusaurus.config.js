// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const remarkMdi = require('remark-mdi');
const remarkDeflist = require('remark-deflist-simple');
const remarkKbd = require('remark-kbd-simple');
const katex = require('rehype-katex');
const remarkMath = require('remark-math');
const remarkUnderline = require('remark-underline');
const remarkImg2Fig = require('./src/plugins/remark-img2fig');
const remarkFlex = require('./src/plugins/remark-flex');
const remarkDetails = require('remark-details-simple');
const EnsureFM = require('./bin/ensure-fm');

const isDev = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';


const admonitionConfig = {
  tag: ':::',
  keywords: ['note', 'tip', 'info', 'caution', 'danger', 'important', 'success', 'secondary', 'aufgabe', 'def', 'warning', 'warn', 'finding'],
};

const MD_PLUGINS = {
  beforeDefaultRemarkPlugins: [
    remarkFlex,
    remarkImg2Fig,
    remarkKbd,
    [remarkUnderline, { marker: '__', classNames: ['underline'], tagType: 'strong'}]
  ],
  remarkPlugins: [
    remarkDeflist,
    [remarkDetails, {marker: ':::', tags: ['details', 'lösung'], classNameMap: {['lösung']: 'solution', details: undefined }}],
    remarkMdi,
    remarkMath
  ],
  rehypePlugins: [
    katex
  ]
};

const GIT_COMMIT_SHA = process.env.DRONE_COMMIT_SHA || Math.random().toString(36).substring(7);

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
  customFields: { 
    GIT_COMMIT_SHA: GIT_COMMIT_SHA,
  },

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
          admonitions: admonitionConfig,
        },
        blog: false,
        pages: {
          admonitions: admonitionConfig,
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
          autoCollapseCategories: true
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
        copyright: `<a 
          class="footer__link-item" 
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de" 
          target="_blank"
        >
          <img src="/img/by-nc-sa.eu.svg" alt="CC-BY-NC-SA">
          <br/>
          Alle Inhalte (falls nicht anders angegeben) lizenziert unter 
          <br/>
          Creative Commons Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 4.0 International Lizenz.
        </a>
        <br />
        <a 
          class="badge badge--primary" 
          href="https://github.com/GBSL-Informatik/ict-website/commit/${GIT_COMMIT_SHA}"
        >
          <i class="mdi mdi-source-commit mdi-rotate-90"></i> ${GIT_COMMIT_SHA.substring(0, 7)}
        </a>`,
      },
      algolia: {
        appId: process.env.ALGOLIA_APP_ID || "no-id",
        apiKey: process.env.ALGOLIA_API_KEY || "no-key",
        indexName: process.env.ALGOLIA_INDEX_NAME || "no-index",
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
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
      ['data-website-id']: process.env.UMAMI_ID,
      ['data-domains']: process.env.UMAMI_DOMAIN,
      async: true,
      defer: true
    },
  ],
  plugins: [
    'docusaurus-plugin-sass',
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
    function (context, options) {
      return {
        name: 'on-compile',
        configureWebpack(config, isServer, utils) {
          return {
            plugins: [
              {
                apply: (compiler) => {
                  const cache = {};
                  compiler.hooks.watchRun.tap("Frontmatter-Plugin", () => {
                    if (isDev) {
                      if (compiler.modifiedFiles) {
                        compiler.modifiedFiles.forEach((f) => {
                          if ((f.endsWith('.md') || f.endsWith('.mdx')) && !cache[f] && !f.includes('/versioned_docs/')) {
                            if (EnsureFM(f)) {
                              console.log('Added Frontmatter to', f);
                            }
                            cache[f] = true;
                          }
                        });
                      }
                      if (compiler.removedFiles) {
                        compiler.removedFiles.forEach((f) => {
                          if (f.endsWith('.md') || f.endsWith('.mdx')) {
                            delete cache[f]
                          }
                        })
                      }
                    }
                  });
                },
              },
            ]
          }
        }
      }
    },
    require.resolve('docusaurus-plugin-image-zoom')
  ]
};

module.exports = config;
