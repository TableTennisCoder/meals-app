import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export function MealDuration({ duration, style }) {
  return (
    <View style={styles.infoContainer}>
      <FontAwesome5 name="clock" size={20} color="black" style={style} />
      <Text style={style}>{duration}m</Text>
    </View>
  );
}

export function MealAffordability({ affordability, style }) {
  return (
    <View style={styles.infoContainer}>
      <FontAwesome5 name="euro-sign" size={20} color="black" style={style} />
      <Text style={style}>{affordability}</Text>
    </View>
  );
}

export function MealComplexity({ complexity, style }) {
  return (
    <View style={styles.infoContainer}>
      <FontAwesome5 name="fire" size={20} color="black" style={style} />
      <Text style={style}>{complexity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
});

// affordable | pricey | luxurious  name="euro-sign"
// simple | challenging | hard =>   name="fire"
// 10 | 60 | 240 =>                 name="clock"
