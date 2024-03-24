import styles from './meals-grid.module.css';
import MealItem from './meals-items';

export default function MealsGrid({meals}) {
    return <ul className={styles.meals}>
        {meals.map((meal)=>{
            return <li key={meal.id}>
                <MealItem {...meal}/>
            </li>
        })}
    </ul>
}