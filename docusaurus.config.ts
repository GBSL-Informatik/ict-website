// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import type { Config } from '@docusaurus/types';
import * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
const { themes } = require('prism-react-renderer');

import mdiPlugin from './src/plugins/remark-mdi/plugin';
import kbdPlugin from './src/plugins/remark-kbd/plugin';
import defPlugin from './src/plugins/remark-defbox/plugin';
import flexCardsPlugin from './src/plugins/remark-flex-cards/plugin';
import imagePlugin from './src/plugins/remark-images/plugin';
import deflistPlugin from './src/plugins/remark-deflist/plugin';
import strongPlugin from './src/plugins/remark-strong/plugin';
import detailsPlugin from './src/plugins/remark-details/plugin';
import mediaPlugin from './src/plugins/remark-media/plugin';
import remarkInlineModifier from './src/plugins/remark-inline-modifier/plugin';
import { mdiSourceCommit } from '@mdi/js';

import {ensureFrontMatter} from './bin/ensure-fm';

const GIT_COMMIT_SHA = process.env.DRONE_COMMIT_SHA || Math.random().toString(36).substring(7);

const lightCodeTheme = themes.vsLight;
const darkCodeTheme = themes.vsDark;

const isDev = process.env.NODE_ENV === 'development';


const REMARK_PLUGINS = {
  beforeDefaultRemarkPlugins: [
      flexCardsPlugin,
      [
          imagePlugin,
          { tagNames: { sourceRef: 'SourceRef', figure: 'Figure' } }
      ],
      [
        detailsPlugin,
        {
          keywords: ['details', 'solution'],
          classNames: {
            details: 'details',
            solution: 'solution'
          },
          defaultLabel: {
            solution: 'Lösung'
          }
        }
      ],
      defPlugin
  ],
  remarkPlugins: [
      [strongPlugin, { className: 'boxed'}],
      [
          deflistPlugin,
          {
              tagNames: {
                  dl: 'Dl',
              },
          }
      ],
      [
          mdiPlugin,
          {
              colorMapping: {
                  green: 'var(--ifm-color-success)',
                  red: 'var(--ifm-color-danger)',
                  orange: 'var(--ifm-color-warning)',
                  yellow: '#edcb5a',
                  blue: '#3578e5',
                  cyan: '#01f0bc'
              },
              defaultSize: '1.25em'
          }
      ],
      kbdPlugin,
      remarkMath,
      mediaPlugin,
      remarkInlineModifier
  ],
  rehypePlugins: [
      rehypeKatex
  ]
}

const scripts: typeof config.scripts = []

if (process.env.UMAMI_SRC && process.env.UMAMI_ID) {
    scripts.push(
        {
            src: process.env.UMAMI_SRC,
            ['data-website-id']: process.env.UMAMI_ID,
            ['data-domains']: (process.env.DOMAIN || 'http://localhost:3000').split('/').filter(w => !!w)[1],
            async: true,
            defer: true
        }
    )
}


const config: Config = {
  title: 'ICT am Gymnasium Biel-Seeland',
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
      {
        docs: {
          routeBasePath: '/',
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          sidebarPath: 'sidebars.ts',
          editUrl: 'https://github.com/gbsl-informatik/ict-website/edit/main/',
          admonitions: {
              keywords: ['aufgabe', 'finding'],
              extendDefaults: true,
          },
          beforeDefaultRemarkPlugins: REMARK_PLUGINS.beforeDefaultRemarkPlugins,
          remarkPlugins: REMARK_PLUGINS.remarkPlugins,
          rehypePlugins: REMARK_PLUGINS.rehypePlugins,
        },
        blog: false,
        pages: {
          admonitions: {
              keywords: ['aufgabe', 'finding'],
              extendDefaults: true,
          },
          beforeDefaultRemarkPlugins: REMARK_PLUGINS.beforeDefaultRemarkPlugins,
          remarkPlugins: REMARK_PLUGINS.remarkPlugins,
          rehypePlugins: REMARK_PLUGINS.rehypePlugins,      
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
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    mermaid: true,
    mdx1Compat: {
        admonitions: false,
        comments: false,
        headingIds: false
    }
  },
  themeConfig: {
      mermaid: {
        theme: {light: 'default', dark: 'dark'},
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        }
      },
      navbar: {
        title: 'ICT Gymnasium Biel-Seeland',
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
      >
        Alle Inhalte (falls nicht anders angegeben) lizenziert unter
        <br />
        <img src="/img/by-nc-sa.eu.svg" alt="CC-BY-NC-SA"> 
        <br />
        Creative Commons Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 4.0 International Lizenz.
      </a>
      <br />
      <small>
        <i>Inhalt</i> <a class="badge badge--secondary" target="_blank" href="https://www.gbsl.ch/gbsl/schule/lehrpersonen/#:~:text=kae">kae</a> - <i>Website</i> <a class="badge badge--secondary" target="_blank" href="https://www.gbsl.ch/gbsl/schule/lehrpersonen/#:~:text=hfr">hfr</a><br />
      </small>
      <a 
        class="badge badge--primary"
        href="https://github.com/GBSL-Informatik/ict-website/commit/${GIT_COMMIT_SHA}"
      >
          <svg viewBox="0 0 24 24" role="presentation" style="width: 0.9rem; height: 0.9rem; transform: translateY(15%) rotate(90deg); transform-origin: center center;"><path d="${mdiSourceCommit}" style="fill: currentcolor;"></path></svg> ${GIT_COMMIT_SHA.substring(0, 7)}
      </a>`
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
        backgroundColor: '#248eca',
        textColor: '#fff',
        content: '🚧 Seite im Aufbau... 🚧',
        isCloseable: true
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
  } satisfies Preset.ThemeConfig,
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
    'docusaurus-theme-frontmatter',
    '@docusaurus/theme-mermaid'
  ],
  scripts: [
    // Object format.
    ...scripts
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
                        if (process.env.NODE_ENV === 'development') {
                            if (compiler.modifiedFiles) {
                                compiler.modifiedFiles.forEach((f) => {
                                    if ((f.endsWith('.md') || f.endsWith('.mdx')) && !cache[f] && !f.includes('/versioned_docs/')) {
                                        if (ensureFrontMatter(f)) {
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

export default config;