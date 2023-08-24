import { Button, Text, View } from "react-native";

function Details({ navigation }) {
  return (
    <View>
      <Text>Details Page</Text>
      <Button
        title="Go back"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
}

export default Details;
