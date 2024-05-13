/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { type ReactNode } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';
import Icon from '@mdi/react';
import { mdiAppleSafari, mdiClipboardCheck, mdiClipboardTextOff, mdiFirefox, mdiGoogleChrome, mdiLoading, mdiMicrosoftEdge } from '@mdi/js';

type Browser = 'edge' | 'chrome' | 'firefox' | 'safari'
interface Props {
  children: ReactNode;
  minHeight: number;
  url: string;
  browser?: Browser;
  copy?: boolean;
}

const ICONS: { [key in Browser]: string } = {
  chrome: mdiGoogleChrome,
  edge: mdiMicrosoftEdge,
  firefox: mdiFirefox,
  safari: mdiAppleSafari
}

const COLOR: { [key in Browser]: string } = {
  chrome: '#3578e5',
  edge: '#01f0bc',
  firefox: 'var(--ifm-color-warning)',
  safari: '#3578e5'
}
type CopyState = 'spin' | 'copied' | 'error';

const CopyIcon: { [key in CopyState]: string } = {
  copied: mdiClipboardCheck,
  error: mdiClipboardTextOff,
  spin: mdiLoading
}

const CopyColor: { [key in CopyState]: string } = {
  copied: 'var(--ifm-color-success)',
  error: 'var(--ifm-color-danger)',
  spin: 'black'
}

export default function BrowserWindow({
  children,
  minHeight,
  copy,
  url = 'http://localhost:3000',
  browser
}: Props): JSX.Element {
  const [copyState, setCopyState] = React.useState<CopyState | 'none'>('none');

  React.useEffect(() => {
    if (['none', 'spin', 'ready'].includes(copyState)) {
      return;
    }
    const timeoutId = setTimeout(() => setCopyState('none'), 2000);
    return () => clearTimeout(timeoutId);
  }, [copyState]);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!copy) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    setCopyState('spin');
    try {
      navigator.clipboard.writeText(url).then(() => {
        setCopyState('copied');
      })
        .catch((err) => {
          setCopyState('error');
          console.warn(err);
        });
    } catch (err) {
      console.warn(err);
      setCopyState('error');
    }
  }
  return (
    <div className={styles.browserWindow} style={{ minHeight }}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{ background: '#f25f58' }} />
          <span className={styles.dot} style={{ background: '#fbbe3c' }} />
          <span className={styles.dot} style={{ background: '#58cb42' }} />
        </div>
        <div className={clsx(styles.browserWindowAddressBar, 'text--truncate')}>
          {browser && (
            <span className={styles.browserType}>
              <Icon path={ICONS[browser]} color={COLOR[browser]} size={0.4} className={clsx(styles.icon)} />
            </span>
          )}
          <a href={url} target="_blank" onClick={onClick}>{url}</a>
          {copyState !== 'none' && (
            <>
              <div className={styles.spacer} />
              <Icon path={CopyIcon[copyState]} color={CopyColor[copyState]} size={0.8} className={clsx(styles.copyState)} />
            </>
          )}
        </div>
        <div className={styles.browserWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
      </div>

      <div className={styles.browserWindowBody}>{children}</div>
    </div>
  );
}