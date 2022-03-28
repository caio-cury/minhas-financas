import globalStyles from '../../global.module.css';
import styles from './styles.module.css';
import addIcon from '../../assets/add-icon.svg';
import removeIcon from '../../assets/remove-icon.svg';

export default function FilterBtn({ title, selected, handleSelectedChip }) {

    return (
        <span
            onClick={() => handleSelectedChip(title)}
            className={`${styles.filter_btn} ${globalStyles.containers} ${selected ? styles.selected_chip : ''}`
            }>
            {title}
            <img src={selected ? removeIcon : addIcon} alt="" />
        </span>
    );
}