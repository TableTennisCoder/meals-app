import {View, Pressable, Text, StyleSheet} from "react-native";

function CategoryTile({title, color, onPress}) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) =>
          pressed ? [styles.pressedStyle, styles.button] : styles.button
        }
        onPress={onPress}
      >
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: {width: 0.5, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  button: {
    flex: 1,
  },
  pressedStyle: {
    opacity: 0.8,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#191819",
  },
});

export default CategoryTile;
