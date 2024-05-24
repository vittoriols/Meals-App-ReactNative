import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../../data/dummy-data";
import MealDetails from "../../.expo/components/MealDetails";
import Subtitle from "../../.expo/components/MealDetail/Subtitle";
import List from "../../.expo/components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../../.expo/components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "./redux/favorites";
// import { FavoritesContext } from "./context/favorites-context";

function MealDetailScreen({ route, navigation }) {

    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    
    // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite){
            // favoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite({id: mealId}));
        } else {
            // favoriteMealsCtx.addFavorite(mealId);
            dispatch(addFavorite({id: mealId}));
        }
    }
    
    useLayoutEffect( () => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} 
                color="grey" 
                onPress={changeFavoriteStatusHandler}></IconButton>
            }
        });
    },[navigation,changeFavoriteStatusHandler]);
    
    return <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}
        ></Image>
        <Text style={styles.title} >{selectedMeal.title}</Text>
        <MealDetails
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}>
        </MealDetails>

        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients}></List>
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps}></List>
            </View>
        </View>
  
    </ScrollView>
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350,
        justifyContent: 'center',
        padding: 8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    listContainer: {
        width: '80%',

    },
    listOuterContainer: {
        alignItems: 'center'
    },
    rootContainer:{
        marginBottom: 32
    }

});