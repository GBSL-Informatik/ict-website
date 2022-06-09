module.exports = {
  sidebar: [
    '',
    {
      title: 'OneDrive',
      path: '/microsoft365/onedrive/',
      sidebarDepth: 1,
      children: [
        '/microsoft365/onedrive/sync/',
        '/microsoft365/onedrive/teilen/'
      ]
    },
    {
      title: 'Teams',
      path: '/microsoft365/teams/',
      sidebarDepth: 2,
      children: [
        '/microsoft365/teams/layout/',
        '/microsoft365/teams/aufgaben-s/',
        '/microsoft365/teams/aufgaben-l/',
        '/microsoft365/teams/gruppenraeume/',
        '/microsoft365/teams/externe/',
        '/microsoft365/teams/dateien-hochladen/',
        '/microsoft365/teams/ton-video-teilen/',
        '/microsoft365/teams/ton-einstellen/'
      ]
    },
   '/microsoft365/bitlocker/'
  ]
}
