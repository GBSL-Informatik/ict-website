import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import rawIcons from './mdi-icons.json';

export default function MdiSelector(): JSX.Element {
  const [copyState, setCopyState] = React.useState('');
  const [icons, setIcons] = React.useState([]);
  const [filter, setFilter] = React.useState('');
  const [perfectMatch, setPerfectMatch] = React.useState(true);

  React.useEffect(() => {
    if (['none', 'spin'].includes(copyState)) {
      return;
    }
    const timeoutId = setTimeout(() => setCopyState('none'), 2000);
    return () => clearTimeout(timeoutId);
  }, [copyState]);

  React.useEffect(() => {
    if (filter.trim() === '') {
      setIcons(rawIcons);
      return;
    }
    const trm = filter.trim().toLowerCase().replace(/-/g, '');
    const icos = rawIcons.filter((ico) => {
      return (
        ico.name.replace(/-/g, '').includes(trm) ||
        (!perfectMatch && ico.tags.join(' ').toLowerCase().includes(trm))
      );
    });
    console.log(icos.length);
    setIcons(icos);
  }, [filter, perfectMatch]);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <input
          id="perfectMatch"
          type="checkbox"
          checked={perfectMatch}
          onChange={(e) => setPerfectMatch(!perfectMatch)}
        />
        <label htmlFor="perfectMatch">Tags durchsuchen?</label>
        <span style={{ flexGrow: 1 }}></span>
        <span className="badge badge--primary">{icons.length}</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5em' }}>
        {icons.slice(0, 301).map((ico, idx) => {
          const copied = copyState === ico.name || copyState === `${ico.name}-error`;
          return (
            <div
              key={idx}
              onClick={() => {
                setCopyState('spin');
                navigator.clipboard
                  .writeText(`:mdi-${ico.name}:`)
                  .then(() => {
                    setCopyState(ico.name);
                  })
                  .catch(() => {
                    setCopyState(`${ico.name}`);
                  });
              }}
              className={clsx(styles.icon)}
            >
              {copied && copyState === ico.name && (
                <div
                  style={{ fontSize: '5rem', color: '#00a400' }}
                  className={'mdi-checkbox-marked-circle mdi'}
                ></div>
              )}
              {copied && copyState === `${ico.name}-error` && (
                <div style={{ fontSize: '5rem', color: '#fa383e' }} className={'mdi-close-circle mdi'}></div>
              )}
              {!copied && <div style={{ fontSize: '5rem' }} className={`mdi-${ico.name} mdi`}></div>}
              {ico.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
