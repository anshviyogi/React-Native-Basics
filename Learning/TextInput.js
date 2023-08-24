import { useState } from "react";
import { Text, TextInput, View } from "react-native";

function TextInputs() {
  const [input, setInput] = useState(null);
  return (
    <View>
      <TextInput
        placeholder="Text here"
        value={input}
        // this
        onChange={(e) => {
          setInput(e.nativeEvent.text);
        }}
        // or this
        onChangeText={(newText) => setInput(newText)}
        style={{
          borderColor: "black",
          height: 50,
          borderWidth: 1,
          margin: 10,
          borderRadius: 50,
        }}
      />

      <Text>Your input is: {input}</Text>
    </View>
  );
}

export default TextInputs;
