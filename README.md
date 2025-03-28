# ICT-Website

[![Build Status](https://drone.gbsl.website/api/badges/GBSL-Informatik/ict-website/status.svg)](https://drone.gbsl.website/GBSL-Informatik/ict-website)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Whenever you push to github, drone-ci will build and deploy the app.

### Update Command

```bash
yarn upgrade @docusaurus/core@latest @docusaurus/faster@latest @docusaurus/plugin-pwa@latest @docusaurus/preset-classic@latest @docusaurus/theme-mermaid@latest @docusaurus/module-type-aliases@latest @docusaurus/tsconfig@latest @docusaurus/types@latest 
```