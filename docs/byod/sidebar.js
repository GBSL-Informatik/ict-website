module.exports = {
  sidebar: [
    '',
    {
      title: 'Konto',
      path: '/byod/konto/'
    },
    {
      title: 'Android',
      path: '/byod/android/',
      sidebarDepth: 2,
      children: [
        '/byod/android/wlan/',
        '/byod/android/e-mail/',
        '/byod/android/qrscanner/',
        '/byod/android/intern/',
        '/byod/android/teams/',
        '/byod/android/onedrive/'
      ]
    },
    {
      title: 'iOS / iPadOS',
      path: '/byod/ios/',
      sidebarDepth: 2,
      children: [
        '/byod/ios/wlan/',
        '/byod/ios/e-mail/',
        '/byod/ios/qrscanner/',
        '/byod/ios/intern/',
        '/byod/ios/teams/',
        '/byod/ios/365/',
        '/byod/ios/onedrive/'
      ]
    },
    {
      title: 'Windows',
      path: '/byod/windows/',
      sidebarDepth: 2,
      children: [
        '/byod/windows/wlan/',
        '/byod/windows/teams/',
        '/byod/windows/365/',
        '/byod/windows/e-mail/',
        '/byod/windows/onedrive/',
        '/byod/windows/drucker/',
        '/byod/windows/pdf/',
        '/byod/windows/firefox/',
        '/byod/windows/updates/'
      ]
    },
    {
      title: 'macOS',
      path: '/byod/macos/',
      sidebarDepth: 2,
      children: [
        '/byod/macos/wlan/',
        '/byod/macos/teams/',
        '/byod/macos/e-mail/',
        '/byod/macos/365/',
        '/byod/macos/onedrive/',
        '/byod/macos/drucker/',
        '/byod/macos/updates/'
      ]
    },
    {
      title: 'Linux',
      path: '/byod/linux/',
      sidebarDepth: 2,
      children: [
        '/byod/linux/repo/',
        '/byod/linux/drucker/',
        '/byod/linux/wlan/',
        '/byod/linux/teams/',
        '/byod/linux/onedrive/'
      ]
    },
    {
      title: 'E-Mail',
      path: '/byod/mail/',
      sidebarDepth: 2,
      children: [
        '/byod/mail/e-mail-vergleich/',
        '/byod/mail/e-mail-einstellungen/',
        '/byod/mail/outlook-web/',
        '/byod/mail/thunderbird/'
      ]
    }
  ]
}
