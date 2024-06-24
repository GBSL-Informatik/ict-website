import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type { WrapperProps } from '@docusaurus/types';
import useFrontMatter from "@theme/useFrontMatter";
import styles from "./style.module.scss";
import clsx from "clsx";
import Icon from '@mdi/react';
import { mdiEmailFast, mdiOpenInNew } from '@mdi/js';
import useRouteContext from '@docusaurus/useRouteContext';
import { useHistory } from '@docusaurus/router';

type Props = WrapperProps<typeof FooterType>;
const COMMIT_SHA_2022_06_09 = "4641afa364f1aa924c4c21daa7264784f722033f";

export default function FooterWrapper(props: Props): JSX.Element {
  const { location } = useHistory();
  const [feedbackBody, setFeedbackBody] = React.useState<string>('');
  let sidebar_custom_props: { source?: string, path?: string } = {};
  try {
    sidebar_custom_props = useFrontMatter()?.sidebar_custom_props ?? {};
  } catch (e) {
    sidebar_custom_props = {};
  }
  React.useEffect(() => {
    setFeedbackBody(
      `Guten Tag

Link: ${window.location.href} \n
Rückmeldung (mit "x" die Kategorie markieren, bspw. [x] Fehler)
[ ] Fehler
[ ] Vorschlag
[ ] Anregung
[ ] Sonstiges

Beobachtetes Verhalten der Seite (Beschreibung, Screenshots, etc.):


Erwartetes Verhalten der Seite (Beschreibung, Screenshots, etc.):



Freundliche Grüsse

`
    )
  }, [location.hash, location.pathname, location.search]);

  const url = `https://gitlab.gymkirchenfeld.ch/teach/ict.mygymer.ch/-/blob/${COMMIT_SHA_2022_06_09}${sidebar_custom_props.path}`;


  return (
    <div className={styles.footer}>
      <div className={styles.badges}>

        {sidebar_custom_props.source === "gym-kirchenfeld" && (
          <div className={styles.sources}>
            <a className={clsx(styles.copyright, "badge", "badge--primary")} href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.de" target="_blank">
              CC 4.0
            </a>
            <a
              className={clsx(styles.source, "badge", "badge--primary")}
              target="_blank"
              href={url}
              title="Quelle"
            >
              ict.mygymer.ch <Icon path={mdiOpenInNew} size={0.3} className={styles.mdi} />
            </a>
            <i className={clsx(styles.edited, "badge", "badge--primary")}>
              Bearbeitet
            </i>
          </div>
        )}
        <div className={styles.spacer}></div>
        <a
          title="Feedback: Fehler, Vorschläge oder Anregungen mitteilen"
          className={clsx(styles.edited, "badge", "badge--success")}
          href={
            `mailto:ICT%20Feedback<ict.gbsl@bernedu.ch>?subject=${encodeURIComponent('Feedback ict.gbsl.website')}&body=${encodeURIComponent(feedbackBody)}`
          }
        >
          Rückmeldung <Icon path={mdiEmailFast} size={0.3} className={styles.mdi} style={{ marginLeft: '8px', marginRight: '4px', transform: 'scale(2.5)' }} />
        </a>
      </div>
      <Footer {...props} />
    </div>
  );
}
