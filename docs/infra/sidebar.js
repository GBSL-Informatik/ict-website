module.exports = {
  sidebar: [
    '',
    '/infra/konto/',
    {
      title: 'E-Mail',
      path: '/infra/email/',
      sidebarDepth: 2,
      children: [
        '/infra/email/signatur.html',
        '/infra/email/empfaenger.html',
        '/infra/email/netiquette.html',
        '/infra/email/dateien-versenden.html'
      ]
    },
    {
      title: 'Mediothek',
      path: '/infra/mediothek/ethek/',
      sidebarDepth: 2,
      children: [
        '/infra/mediothek/ethek/'
      ]
    },
    {
      title: 'Geräte',
      path: '/infra/geraete/',
      sidebarDepth: 2,
      children: [
        {
          title: 'Drucken',
          path: '/infra/geraete/drucker/',
          sidebarDepth: 2,
          children: [
            '/infra/geraete/drucker/druck_lul/',
            '/infra/geraete/drucker/druck_sus/'
          ]
        },
        '/infra/geraete/stehpult/',
        {
          title: 'Visualizer',
          path: '/infra/geraete/visualizer/',
          sidebarDepth: 2,
          children: [
            '/infra/geraete/visualizer/elmointeractive/',
            '/infra/geraete/visualizer/elmol12f/',
            '/infra/geraete/visualizer/elmol12id/',
            '/infra/geraete/visualizer/elmomo1/'
          ]
        },
        '/infra/geraete/beamer/',
        {
          title: 'Konferenzgeräte',
          path: '/infra/geraete/konf/',
          sidebarDepth: 2,
          children: [
            '/infra/geraete/konf/jabra/',
            '/infra/geraete/konf/logitech/',
            '/infra/geraete/konf/owl/'
          ]
        }
      ]
    },
    '/infra/austritt/'
  ]
}
