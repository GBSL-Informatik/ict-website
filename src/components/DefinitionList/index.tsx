import React, { type ReactNode } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface Props {
    children: ReactNode;
    className?: string;
    gridTemplateColumns?: string;
    small?: boolean;
}

const DefinitionList = (props: Props) => {
    return (
        <dl
            className={clsx(
                styles.definitionList,
                props.className,
                props.gridTemplateColumns && styles.ignoreMediaQueries,
                props.small && styles.small
            )}
            style={{ gridTemplateColumns: props.gridTemplateColumns }}
        >
            {props.children}
        </dl>
    );
};

export default DefinitionList;
