import globalStyles from '../../global.module.css';
import styles from './styles.module.css';
import addIcon from '../../assets/add-icon.svg';
import removeIcon from '../../assets/remove-icon.svg';
import { useState } from 'react';

export default function FilterBtn(props) {
    const [selected, setSelected] = useState(false);
    return (
        <span
            onClick={() => setSelected(!selected)}
            className={`${styles.filter_btn} ${globalStyles.containers} ${selected ? styles.purple : ''}`
            }>
            {props.children}
            <img src={selected ? removeIcon : addIcon} alt="" />
        </span>
    );
}