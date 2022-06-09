module.exports = {
  sidebar: [
    '/anderesoftware/',
    {
      title: 'Dateien',
      path: '/anderesoftware/dateien/',
      sidebarDepth: 2,
      children: [
        '/anderesoftware/dateien/dateitypen/',
        '/anderesoftware/dateien/macos/',
        '/anderesoftware/dateien/windows/'
      ]
    },
    {
      title: 'Browser',
      path: '/anderesoftware/browser/',
      sidebarDepth: 2,
      children: [
        '/anderesoftware/browser/auto_uebers/'
      ]
    },
    {
      title: 'Video & Audio',
      path: '/anderesoftware/video-audio/',
      sidebarDepth: 2,
      children: [
        {
          title: 'Audio-CDs',
          path: '/anderesoftware/video-audio/audio-CD/',
          sidebarDepth: 2,
          children: [
            '/anderesoftware/video-audio/audio-CD/macOS/',
            '/anderesoftware/video-audio/audio-CD/windows/'
          ]
        },
        '/anderesoftware/video-audio/dvd/',
        '/anderesoftware/video-audio/stream/',
        '/anderesoftware/video-audio/video-mediathek/',
        '/anderesoftware/video-audio/youtube/'
      ]
    },
    {
      title: 'PDF',
      path: '/anderesoftware/PDF/',
      sidebarDepth: 2,
      children: [
        '/anderesoftware/PDF/drawboard/',
        '/anderesoftware/PDF/PDF24/'
      ]
    },
    '/anderesoftware/OCR/',
    {
      title: 'isTest2',
      path: '/anderesoftware/istest2/',
      sidebarDepth: 2,
      children: [
        '/anderesoftware/istest2/anmelden/',
        '/anderesoftware/istest2/verwenden/',
        '/anderesoftware/istest2/seb/'
      ]
    },
    '/anderesoftware/affinity/'
  ]
}
