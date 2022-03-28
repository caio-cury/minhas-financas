import styles from './styles.module.css';
import globalStyles from '../../global.module.css';
import FilterBtn from '../FilterBtn';
import { useState, useContext } from 'react';
import { TransactionsListContext } from '../../contexts/transactionsList';

const defaultWeekDays = [
    { title: 'Domingo', selected: false },
    { title: 'Segunda', selected: false },
    { title: 'Terça', selected: false },
    { title: 'Quarta', selected: false },
    { title: 'Quinta', selected: false },
    { title: 'Sexta', selected: false },
    { title: 'Sábado', selected: false }
];

export default function Filters() {
    const [weekDays, setWeekDays] = useState(defaultWeekDays);
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');
    const { transactionsList, setTransactionsList, getTransactionsList } = useContext(TransactionsListContext);

    function handleSelectedWeekDays(weekDay) {
        const localWeekDays = [...weekDays];
        const day = localWeekDays.find(day => day.title === weekDay);
        day.selected = !day.selected;
        setWeekDays(localWeekDays);
    }

    async function clearAllFilters() {
        const localWeekDays = [...weekDays];
        localWeekDays.forEach(day => day.selected = false);
        setMinValue('');
        setMaxValue('');
        setWeekDays(localWeekDays);
        await getTransactionsList();
    }

    function handleApplyFilters() {
        const localTransactionsList = [...transactionsList];
        if (minValue) {
            const filtered = localTransactionsList.filter(transaction => Number(transaction.value) >= minValue);
            setTransactionsList(filtered);
        }
        if (maxValue) {
            const filtered = localTransactionsList.filter(transaction => Number(transaction.value) <= maxValue);
            setTransactionsList(filtered);
        }
    }

    return (
        <div className={`${styles.filters} ${globalStyles.containers}`}>
            <div className={styles.titles_container}>
                <h2>Dia da semana</h2>
                <h2>Categoria</h2>
                <h2>Valor</h2>
            </div>
            <div className={styles.filters_container}>
                <div className={styles.week_day}>
                    {weekDays.map(weekDay => <FilterBtn
                        key={weekDay.title}
                        title={weekDay.title}
                        selected={weekDay.selected}
                        handleSelectedChip={handleSelectedWeekDays}
                    />)}
                </div>
                <div className={styles.category}>

                </div>
                <div className={styles.value}>
                    <label htmlFor="min">Min</label>
                    <input
                        id='min'
                        type="number"
                        onChange={event => setMinValue(event.target.value)}
                        value={minValue}
                    />
                    <label htmlFor="max">Max</label>
                    <input
                        id='max'
                        type="number"
                        onChange={event => setMaxValue(event.target.value)}
                        value={maxValue}
                    />
                </div>
                <div className={styles.btns}>
                    <div className={styles.btns_container}>
                        <button
                            onClick={clearAllFilters}
                            className={styles.clean_filters}
                        >Limpar Filtros</button>
                        <button
                            onClick={handleApplyFilters}
                            className={styles.apply_filters}
                        >Aplicar Filtros</button>
                    </div>
                </div>

            </div>
        </div>
    );
}