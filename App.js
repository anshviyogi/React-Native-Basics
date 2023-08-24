import { ScrollView, Text, View } from "react-native";
import TextInputs from "./Learning/TextInput";
import ListViews from "./Learning/ListViews";
import PlatformSpecific from "./Learning/PlatformSpecificCode";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Routing/Home";
import Details from "./Routing/Details";

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerTitle: "",
            headerStatusBarHeight: 0,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: true,
            headerTitle: "",
            headerStatusBarHeight: 35,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
