import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';
import useFrontMatter from "@theme/useFrontMatter";
import styles from "./style.module.scss";
import clsx from "clsx";
import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';

type Props = WrapperProps<typeof FooterType>;
const COMMIT_SHA_2022_06_09 = "4641afa364f1aa924c4c21daa7264784f722033f";

export default function FooterWrapper(props: Props): JSX.Element {
  let sidebar_custom_props: {source?: string, path?: string} = {};
  try {
    sidebar_custom_props = useFrontMatter()?.sidebar_custom_props ?? {};
  } catch (e) {
    sidebar_custom_props = {};
  }
  const url = `https://gitlab.gymkirchenfeld.ch/teach/ict.mygymer.ch/-/blob/${COMMIT_SHA_2022_06_09}${sidebar_custom_props.path}`;
  return (
    <div className={styles.footer}>
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
      <Footer {...props} />
    </div>
  );
}
