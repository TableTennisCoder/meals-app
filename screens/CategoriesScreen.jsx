import {FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryTile from "../components/CategoryTile";

function CategoriesScreen({navigation}) {

  // renders the items (meal categories) for the FlatList
  function renderCatgories(itemData) {

     // handles the navigation when pressing one of the meal categories
    function pressNavigationHandler() {
        navigation.navigate("MealsOverview", {
            categoryID: itemData.item.id,
        });
    }
    
    return (
      <CategoryTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressNavigationHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(category) => category.id}
      renderItem={renderCatgories}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
