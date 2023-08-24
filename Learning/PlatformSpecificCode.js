import { View, Text, Platform, StyleSheet } from "react-native";
function PlatformSpecific() {
  // platform gives you all the necessary information about the device on which your application is running

  return (
    <View style={styles.mainDiv}>
      <Text>hi</Text>
      <View style={styles.anotherDiv}>
        <Text>HERE IS ANOTHER VIEW COMPONENT</Text>
      </View>
    </View>
  );
}

// use can be of something like this
const styles = StyleSheet.create({
  mainDiv: {
    backgroundColor: Platform.OS === "android" ? "blue" : "white",
  },
  anotherDiv: {
    ...Platform.select({
      ios: {
        backgroundColor: "red",
      },
      android: {
        backgroundColor: "green",
      },
      default: {
        backgroundColor: "white",
      },
    }),
  },
});

export default PlatformSpecific;
