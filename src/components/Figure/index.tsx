import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';


interface Props {
  children?: React.ReactNode;
}

export default function Figure(props: Props): JSX.Element {
  return (
    <figure className={clsx(styles.figure, 'figure')}>
      {props.children}
    </figure>
  );
}
