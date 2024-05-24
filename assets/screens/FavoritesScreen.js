import { useContext } from "react";
import MealsList from "../../.expo/components/MealsList/MealsList";
import { FavoritesContext } from '../screens/context/favorites-context'
import { MEALS } from "../../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen() {
    // const favoriteMealsCtx = useContext(FavoritesContext);
const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

    // const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));
    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));
    return <MealsList items={favoriteMeals}></MealsList>;

}

export default FavoritesScreen;