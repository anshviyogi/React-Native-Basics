import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, Image, TextInput, Button } from "react-native";

function getName(name1, name2, name3) {
  return name1 + " " + name2 + " " + name3;
}

function PropsExample({ name }) {
  return (
    <>
      <Text>Hey {name}</Text>
    </>
  );
}

function StateAndProps() {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <View>
      <Text>Hi ANsh</Text>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Image here</Text>

      <TextInput
        placeholder="Text here"
        defaultValue="Hey Ansh"
        style={{
          borderColor: "black",
          height: 40,
          borderWidth: 1,
          marginTop: 50,
        }}
      />

      <Text>New Names are {getName("Ansh", "Vansh", "Nakul")}</Text>

      <PropsExample name={"Ansh"} />

      {/* Using states */}

      {isTrue ? (
        <Button
          onPress={() => {
            setIsTrue(!isTrue);
          }}
          title="Already true"
        ></Button>
      ) : (
        <Button
          onPress={() => {
            setIsTrue(!isTrue);
          }}
          title="Make it true"
        ></Button>
      )}
    </View>
  );
}

export default StateAndProps;
