import { ScrollView, Text, View } from "react-native";
import TextInputs from "./Learning/TextInput";
import ListViews from "./Learning/ListViews";
import PlatformSpecific from "./Learning/PlatformSpecificCode";

function App() {
  return (
    <ScrollView>
      <View>
        <Text style={{ fontSize: 24, textAlign: "center" }}>
          Un-comment the components from App.js file to check
        </Text>
      </View>
      {/* <TextInputs /> */}
      {/* <ListViews /> */}

      {/* IMPORTANT -- PLATFORM SPECIFIC CODE */}
      {/* <PlatformSpecific /> */}
    </ScrollView>
  );
}

export default App;
