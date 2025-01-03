import type { Config } from '@docusaurus/types';
import * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
const { themes } = require('prism-react-renderer');
import path from 'path';
import matter from 'gray-matter';
import mdiPlugin from './src/plugins/remark-mdi/plugin';
import kbdPlugin from './src/plugins/remark-kbd/plugin';
import flexCardsPlugin from './src/plugins/remark-flex-cards/plugin';
import imagePlugin from './src/plugins/remark-images/plugin';
import deflistPlugin from './src/plugins/remark-deflist/plugin';
import strongPlugin from './src/plugins/remark-strong/plugin';
import detailsPlugin from './src/plugins/remark-details/plugin';
import mediaPlugin from './src/plugins/remark-media/plugin';
import linkAnnotationPlugin from './src/plugins/remark-link-annotation/plugin';
import { promises as fs } from 'fs';
import { mdiSourceCommit } from '@mdi/js';
const BUILD_LOCATION = __dirname;

const GIT_COMMIT_SHA = process.env.DRONE_COMMIT_SHA || Math.random().toString(36).substring(7);


function getLocale() {
  return (process.env.DOCUSAURUS_CURRENT_LOCALE && process.env.DOCUSAURUS_CURRENT_LOCALE !== 'undefined')
      ? process.env.DOCUSAURUS_CURRENT_LOCALE
      : 'de';
}

const LOCALE = getLocale();

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
        directiveNames: ['details', 'solution'],
        classNames: {
          details: 'details',
          solution: 'solution'
        },
        defaultLabel: {
          solution: 'Lösung'
        }
      }
    ]
  ],
  remarkPlugins: [
    [strongPlugin, { className: 'boxed' }],
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
    [
      linkAnnotationPlugin,
      {
        prefix: '👉',
        postfix: null
      }
    ]
  ],
  rehypePlugins: [
    rehypeKatex
  ]
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
    locales: ['de', 'fr'],
    localeConfigs: {
      de: {
        htmlLang: 'en-CH',
      },
      fr: {
        htmlLang: 'fr-CH',
      },
    },
  },
  future: {
    experimental_faster: true,
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
    },
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);
      /**
       * don't edit blogs frontmatter
       */
      if (params.filePath.startsWith(`${BUILD_LOCATION}/blog/`)) {
        return result;
      }
      if (path.basename(params.filePath).startsWith('_')) {
        return result;
      }
      if (process.env.NODE_ENV !== 'production') {
        let needsRewrite = false;
        if (Object.keys(result.frontMatter).length === 0) {
          result.frontMatter.description = 'Kurzbeschreibung für Suchmaschinen';
          result.frontMatter.sidebar_label = 'Seitenname';
          result.frontMatter.sidebar_position = 10;
          result.frontMatter.tags = [];
          result.frontMatter.sidebar_custom_props = {
            icon: 'mdi-file-document-outline'
          }
          result.frontMatter.draft = true;
          needsRewrite = true;
        }
        if (needsRewrite) {
          await fs.writeFile(
            params.filePath,
            matter.stringify(params.fileContent, result.frontMatter),
            { encoding: 'utf-8' }
          )
        }
      }
      return result;
    }
  },
  themeConfig: {
    mermaid: {
      theme: { light: 'default', dark: 'dark' },
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
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        }
      ],
    },
    footer: {
      copyright: `<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de">
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <div>
                    Alle Inhalte (falls nicht anders angegeben) lizenziert unter
                  </div>
                  <img style="height: 2em" src="${LOCALE === 'de' ? '' : `/${LOCALE}`}/img/by-nc-sa.eu.svg" alt="CC-BY-NC-SA">
                </div>
              </a>
              <div>
                <small>
                  <i>Inhalt</i> <a class="badge badge--secondary" target="_blank" href="https://www.gbsl.ch/gbsl/schule/lehrpersonen/#:~:text=kae">kae</a> - <i>Website</i> <a class="badge badge--secondary" target="_blank" href="https://www.gbsl.ch/gbsl/schule/lehrpersonen/#:~:text=hfr">hfr</a><br />
                </small>
              </div>
              <a 
                class="badge badge--primary"
                style="margin-top: 0.5rem; display: inline-flex; align-items: flex-start; gap: 0.25rem;"
                href="https://github.com/GBSL-Informatik/ict-website/commit/${GIT_COMMIT_SHA}"
              >
                  <svg viewBox="0 0 24 24" role="presentation" style="width: 0.9rem; height: 0.9rem; transform: rotate(90deg); transform-origin: center center;"><path d="${mdiSourceCommit}" style="fill: currentcolor;"></path></svg>
                  <span>${GIT_COMMIT_SHA.substring(0, 7)}</span>
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
      content: 'Einführungsphase',
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
    {
      src: 'https://umami.gbsl.website/tell-me.js',
      ['data-website-id']: 'b712f437-c0b3-41f0-ba9b-c1e5ec681751',
      ['data-domains']: 'ict.gbsl.website',
      async: true,
      defer: true
    }
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
    () => {
      return {
        name: 'alias-configuration',
        configureWebpack(config, isServer, utils, content) {
          return {
            resolve: {
              alias: {
                '@tdev-components': path.resolve(__dirname, './src/components'),
                '@tdev': path.resolve(__dirname, './src')
              }
            }
          }
        }
      }
    },
  ]
};

export default config;
