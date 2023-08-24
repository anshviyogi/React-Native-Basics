import { Button, Text, View } from "react-native";

function Home({ navigation }) {
  return (
    <View>
      <Text>This is the Home Page</Text>

      <Button
        title="Go to details"
        onPress={() => navigation.navigate("Details")}
      ></Button>
    </View>
  );
}

export default Home;
