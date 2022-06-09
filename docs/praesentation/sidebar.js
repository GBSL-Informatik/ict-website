module.exports = {
  sidebar: [
    '',
    'praesentieren/',
    {
      title: 'Allgemein',
      path: '/praesentation/allgemein/',
      sidebarDepth: 1,
      children: [
        '/praesentation/allgemein/erstellen/',
        '/praesentation/allgemein/bilder/',
        '/praesentation/allgemein/zwei-bildschirme/',
        '/praesentation/allgemein/praesentiertipps/'
      ]
    },
    {
      title: 'Powerpoint',
      path: '/praesentation/powerpoint/',
      sidebarDepth: 1,
      children: [
        '/praesentation/powerpoint/folienlayout/',
        '/praesentation/powerpoint/aufzaehlung/',
        '/praesentation/powerpoint/animation/',
        '/praesentation/powerpoint/videos/',
        '/praesentation/powerpoint/master/',
        '/praesentation/powerpoint/referentenansicht/',
        '/praesentation/powerpoint/notizen/',
        '/praesentation/powerpoint/drucken/',
        '/praesentation/powerpoint/slidecast/'
      ]
    },
    {
      title: 'Impress',
      path: '/praesentation/impress/',
      sidebarDepth: 1,
      children: [
        '/praesentation/impress/folienlayout/',
        '/praesentation/impress/aufzaehlung/',
        '/praesentation/impress/animation/',
        '/praesentation/impress/videos/',
        '/praesentation/impress/master/',
        '/praesentation/impress/referentenansicht/',
        '/praesentation/impress/notizen/',
        '/praesentation/impress/drucken/'
      ]
    }
  ]
}
