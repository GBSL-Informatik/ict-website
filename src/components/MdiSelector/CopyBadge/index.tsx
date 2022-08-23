import clsx from 'clsx';
import * as React from 'react';
import styles from './styles.module.scss';



interface Props {
    value: string;
    label?: string;
}
type CopyState = 'none' | 'spin' | 'copied' | 'error';
const CopyIcon: {[key in CopyState]: string} = {
    none: 'mdi-clipboard-text',
    copied: 'mdi-clipboard-check',
    error: 'clipboard-remove',
    spin: 'mdi-loading'
}
const CopyColor: {[key in CopyState]: string} = {
    none: 'var(--ifm-color-primary)',
    error: 'var(--ifm-color-danger)',
    copied: 'var(--ifm-color-success)',
    spin: undefined
}


const CopyBadge = (props: Props) => {
    const [copyState, setCopyState] = React.useState<CopyState>('none');

    React.useEffect(() => {
        if (['none', 'spin'].includes(copyState)) {
            return;
        }
        const timeoutId = setTimeout(() => setCopyState('none'), 2000);
        return () => clearTimeout(timeoutId);
    }, [copyState]);

    return (
        <span 
            className={clsx(styles.transformed, styles.copyBadge, 'copy-badge', 'badge', 'badge--secondary')}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCopyState('spin');
                navigator.clipboard.writeText(props.value).then(() => {
                    setCopyState('copied');
                }).catch(() => {
                    setCopyState('error');
                })
            }}
            title={`Copy ${props.value}`}
        >
            {props.label || props.value}
            <span className={clsx(styles.copyIcon)}>
                <i className={clsx('mdi', CopyIcon[copyState], copyState === 'spin' && 'mdi-spin')} style={{color: CopyColor[copyState]}}/>
            </span>
        </span>
    );
}

export default CopyBadge;