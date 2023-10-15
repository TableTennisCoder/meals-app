import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children, style }) {
  return (
    <View style={[styles.subtitle, style]}>
      <Text style={styles.subtitleText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleText: {
    color: "#CFC4C3",
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center",
  },
  subtitle: {
    borderBottomColor: "#CFC4C3",
    borderBottomWidth: 2.5,
    marginVertical: 10,
    paddingBottom: 5
  },
});

export default Subtitle;
