import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MealsOverviewScreen from './screens/MealsOverviewScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#372824'}
        }}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{
            title: "All Categories"
          }}/>
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
          <Stack.Screen name="MeailDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25
  },
});
