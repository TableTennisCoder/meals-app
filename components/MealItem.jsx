import {View, Text, Image, Pressable, StyleSheet} from "react-native";
import {MealAffordability, MealComplexity, MealDuration} from "./MealInfo";
import {useNavigation} from "@react-navigation/native";

function MealItem({mealItem}) {
  const navigation = useNavigation();

  // navigates to the specific meal details page
  function navigateToMealHandler() {
    navigation.navigate("MeailDetails", {
      mealItem: mealItem,
    });
  }

  return (
    <Pressable onPress={navigateToMealHandler}>
      <View style={styles.container}>
        <Image source={{uri: mealItem.imageUrl}} style={styles.image} />
        <Text style={styles.mealTitle}>{mealItem.title}</Text>
        <View style={styles.mealInfo}>
          <MealDuration duration={mealItem.duration} />
          <MealComplexity complexity={mealItem.complexity} />
          <MealAffordability affordability={mealItem.affordability} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  image: {
    flex: 1,
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  mealTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  mealInfo: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 10,
  },
});

export default MealItem;
