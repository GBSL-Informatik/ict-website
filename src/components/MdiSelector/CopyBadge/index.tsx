import clsx from 'clsx';
import * as React from 'react';
import styles from './styles.module.scss';
import Icon from '@mdi/react';
import { mdiClipboardCheck, mdiClipboardRemove, mdiClipboardText, mdiClockCheck, mdiLoading } from '@mdi/js';



interface Props {
    value: string;
    label?: string;
}
type CopyState = 'none' | 'spin' | 'copied' | 'error';
const CopyIcon: {[key in CopyState]: string} = {
    none: mdiClipboardText,
    copied: mdiClipboardCheck,
    error: mdiClipboardRemove,
    spin: mdiLoading
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
                <Icon path={CopyIcon[copyState]} size={0.5} spin={copyState === 'spin'} color={CopyColor[copyState]}/>
            </span>
        </span>
    );
}

export default CopyBadge;