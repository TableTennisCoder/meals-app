import { useLayoutEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import Subtitle from "../components/Subtitle";
import {
  MealAffordability,
  MealComplexity,
  MealDuration,
} from "../components/MealInfo";
import IconButton from "../components/IconButton";

function pressSaveHandler() {
  console.log("Tapped!!!!");
}

function MealDetails({ route, navigation }) {
  const [meal, setMeal] = useState();

  // replace the default header caption
  useLayoutEffect(() => {
    const mealItem = route.params.mealItem;
    setMeal(mealItem);
    navigation.setOptions({ title: "" });
  }, [route, navigation]);

  // place a Icon Button on the top right side of the header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="favorite"
            color="white"
            onPress={pressSaveHandler}
          />
        );
      },
    });
  }, [navigation, pressSaveHandler]);

  if (!meal) return;

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <View style={styles.rootContainer}>
        <View style={styles.mealInfo}>
          <MealDuration duration={meal.duration} style={{ color: "white" }} />
          <MealComplexity
            complexity={meal.complexity}
            style={{ color: "white" }}
          />
          <MealAffordability
            affordability={meal.affordability}
            style={{ color: "white" }}
          />
        </View>
        <Subtitle>Ingredients</Subtitle>
        {meal.ingredients.map((ingredient, index) => (
          <View key={index} style={styles.ingredients}>
            <Text style={styles.ingredientsText}>{ingredient}</Text>
          </View>
        ))}
        <Subtitle style={{ marginTop: 20 }}>Steps</Subtitle>
        {meal.steps.map((step, index) => (
          <View key={index} style={styles.ingredients}>
            <Text style={styles.ingredientsText}>{step}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  rootContainer: {
    paddingHorizontal: 42,
  },
  title: {
    textAlign: "center",
    color: "white",
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 24,
  },
  mealInfo: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 10,
  },
  ingredients: {
    backgroundColor: "#CFC4C3",
    marginVertical: 5,
    borderRadius: 8,
    padding: 8,
  },
  ingredientsText: {
    color: "#372824",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MealDetails;
