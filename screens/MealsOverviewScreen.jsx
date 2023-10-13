import {FlatList} from "react-native";
import {useLayoutEffect} from "react";
// import {useNavigation} from "@react-navigation/native"; // I can also use the provided objects from the useNavigation() hook, which I currently passing through props !!!
import {MEALS, CATEGORIES} from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({route, navigation}) {
  // const route = useNavigation();
  const catID = route.params.categoryID;

  // get the categoryName and set it as a title for the screen
  const categoryName = CATEGORIES.find(
    (category) => category.id === catID
  ).title;

  // make sure that we don't update the state of our title while the rendering process -> otherwise it causes a warning
  useLayoutEffect(() => {
    navigation.setOptions({title: categoryName});
  }, [navigation, categoryName]);

  // filter my MEALS array and get only those meals which have the catID
  const chosenMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  function renderMealItems(itemData) {
    return <MealItem mealItem={itemData.item} />;
  }

  return (
    <FlatList
      data={chosenMeals}
      keyExtractor={(mealItem) => mealItem.id}
      renderItem={renderMealItems}
    />
  );
}

export default MealsOverviewScreen;
