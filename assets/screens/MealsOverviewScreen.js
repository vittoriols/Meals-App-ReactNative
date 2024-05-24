import { useEffect, useLayoutEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../../data/dummy-data";
import { useRoute } from '@react-navigation/native';
import MealItem from "../../.expo/components/MealsList/MealItem";
import MealsList from "../../.expo/components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
    // const route = useRoute();
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);

    // function renderMealItem(itemData) {
    //     const item = itemData.item;
    //     const mealItemProps = {
    //         id: item.id,
    //         title: itemData.item.title,
    //         imageUrl: itemData.item.imageUrl,
    //         affordability: itemData.item.affordability,
    //         complexity: itemData.item.complexity,
    //         duration: itemData.item.duration,
    //     };

    //     // return (<MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl}></MealItem>);
    //     return (<MealItem {...mealItemProps}></MealItem>); // rimpiazzo il comando di prima con questo standard javascript
    //     // con questo comando riesco a distribuire le proprietà che ho appena definito sopra in questo oggetto MealItem
    // }

    // return (<View style={styles.container}>
    //     <FlatList data={displayedMeals}
    //         keyExtractor={(item) => item.id}
    //         renderItem={renderMealItem}></FlatList>
    // </View>
    // );

    return <MealsList items={displayedMeals}></MealsList>;
}

export default MealsOverviewScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16
//     }
// })