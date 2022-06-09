---
home: true
slug: /
heroImage: /assets/hero.png
heroText: ICT am Gymnasium Kirchenfeld
tagline: Anleitungen, Tipps und Tricks
features:
- title: Geräte einrichten
  icon: mdi-cog
  actionLink: /byod/
- title: Microsoft 365
  icon: mdi-microsoft-windows
  actionLink: /microsoft365/
- title: Andere Software & Medien
  icon: mdi-cellphone-link
  actionLink: /anderesoftware/
- title: Schulinfrastruktur
  icon: mdi-home-circle
  actionLink: /infra/
- title: Sicherheit und Datenschutz
  icon: mdi-security
  actionLink: /sicherheit/
- title: Internet verwenden
  icon: mdi-earth
  actionLink: /internet/
- title: Textverarbeitung
  icon: mdi-text-box-outline
  actionLink: /textverarbeitung/
- title: Präsentation
  icon: mdi-presentation
  actionLink: /praesentation/
- title: Tabellenkalkulation
  icon: mdi-table-large
  actionLink: /tabellenkalkulation/
---

import useFrontMatter from '@theme/useFrontMatter';

export const Highlight = () => {
  const all = useFrontMatter();
  console.log(all);
  return (
  <pre>
    <code>
      {JSON.stringify(all, undefined, 2)}
    </code>
  </pre>
  )
}

<Highlight />

:mdi-check-outline: :mdi-play-circle:

[[>]] [[:mdi-play-circle:]]