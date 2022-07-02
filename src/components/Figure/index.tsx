import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { defaultUnit } from '../helpers/units';


interface Props {
  children?: React.ReactNode;
  options?: React.CSSProperties;
  zoom?: boolean;
}

const IMG_STYLE_PROPS = [
  'maxWidth',
  'maxHeight',
  'height',
  'width'
]

export default function Figure(props: Props): JSX.Element {
  const ref = React.useRef<HTMLElement>(null);
  const opts = props.options;
  if (opts) {
    if ('size' in opts) {
      opts.maxWidth = `min(90vw, ${defaultUnit(opts['size'])})`;
      opts.maxHeight = defaultUnit(opts['size']);
      delete opts['size'];
    }
    if (opts.height) {
      opts.maxWidth = '90vw';
      opts.height = defaultUnit(opts.height);
      delete opts.height;
    }
    if (opts.width) {
      opts.maxWidth = `min(90vw, ${defaultUnit(opts.width)})`;
      opts.width = defaultUnit(opts.width);
      delete opts.width;
    }
  }
  React.useEffect(() => {
      if (!ref.current) {
          return;
      }
      const img = ref.current.firstChild as HTMLImageElement;
      if (img && opts) {
        IMG_STYLE_PROPS.forEach((key) => {
          if (key in opts) {
            img.style[key] = opts[key];
          }
        })
      }
    }, [ref])
  return (
    <figure className={clsx(styles.figure, 'figure', props.zoom &&  'zoom')} style={opts} ref={ref}>
      {props.children}
    </figure>
  );
}
