import { Pressable, StyleSheet } from "react-native/";
import { MaterialIcons } from "@expo/vector-icons";

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressedIcon}>
      <MaterialIcons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
    pressedIcon: {
        opacity: 0.5
        
    }
})

export default IconButton;
