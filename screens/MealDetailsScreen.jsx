import {useLayoutEffect, useState} from "react";
import {Text} from "react-native";

function MealDetails({route, navigation}) {
  const [meal, setMeal] = useState();

  useLayoutEffect(() => {
    const mealItem = route.params.mealItem;
    setMeal(mealItem);
    navigation.setOptions({title: ""});
  }, [route, navigation]);

  return <Text>{meal && meal.title}</Text>;
}

export default MealDetails;
