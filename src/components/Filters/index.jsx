import styles from './styles.module.css';
import globalStyles from '../../global.module.css';
import FilterBtn from '../FilterBtn';

export default function Filters() {
    return (
        <div className={`${styles.filters} ${globalStyles.containers}`}>
            <div className={styles.titles_container}>
                <h2>Dia da semana</h2>
                <h2>Categoria</h2>
                <h2>Valor</h2>
            </div>
            <div className={styles.filters_container}>
                <div className={styles.week_day}>
                    <FilterBtn>Segunda</FilterBtn>
                    <FilterBtn>Terça</FilterBtn>
                    <FilterBtn>Quarta</FilterBtn>
                    <FilterBtn>Quinta</FilterBtn>
                    <FilterBtn>Sexta</FilterBtn>
                    <FilterBtn>Sábado</FilterBtn>
                    <FilterBtn>Domingo</FilterBtn>
                </div>
                <div className={styles.category}>
                    <FilterBtn>Contas</FilterBtn>
                    <FilterBtn>Lazer</FilterBtn>
                    <FilterBtn>Compras</FilterBtn>
                    <FilterBtn>Alimentação</FilterBtn>
                    <FilterBtn>Depoósito</FilterBtn>
                    <FilterBtn>TED</FilterBtn>
                    <FilterBtn>Pix</FilterBtn>
                </div>
                <div className={styles.value}>
                    <label htmlFor="min">Min</label>
                    <input id='min' type="text" />
                    <label htmlFor="max">Max</label>
                    <input id='max' type="text" />
                </div>
                <div className={styles.btns}>
                    <div className={styles.btns_container}>
                        <button className={styles.clean_filters}>Limpar Filtros</button>
                        <button className={styles.apply_filters}>Aplicar Filtros</button>
                    </div>
                </div>

            </div>
        </div>
    );
}