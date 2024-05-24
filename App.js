import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './assets/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './assets/screens/MealsOverviewScreen';
import MealDetailScreen from './assets/screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './assets/screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './assets/screens/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './assets/screens/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return <Drawer.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fad48d'
      },
      headerTintColor: 'black',
      sceneContainerStyle: { backgroundColor: '#fbe4b8' },
      drawerContentStyle: { backgroundColor: '#fad48d' }
    }}>
    <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
      title: 'All Categories',
      drawerIcon: ({ color, size }) => (
        <Ionicons
          name="list"
          color={"black"}
          size={size}></Ionicons>
      ),
    }}>
    </Drawer.Screen>
    <Drawer.Screen name='Favorites'
      component={FavoritesScreen}
      options={{
        title: 'Favorites',
        drawerIcon: ({ color, size }) => (
          <Ionicons name="star" color={color} size={size}></Ionicons>
        ),
      }}>
    </Drawer.Screen>

  </Drawer.Navigator>;
}
export default function App() {
  return (
    <>
      <StatusBar style='dark'> </StatusBar>
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator

            screenOptions={
              {
                title: 'All Categories',
                headerStyle: {
                  backgroundColor: '#fad48d'
                },
                headerTintColor: 'black',
                contentStyle: { backgroundColor: '#fbe4b8' }
              }
            }>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            >
            </Stack.Screen>
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}></Stack.Screen>
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{
                title: 'Meal Details'
              }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
