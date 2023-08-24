import { FlatList, ScrollView, SectionList, Text, View } from "react-native";

function ListViews() {
  const items = [
    { title: "A", data: ["Ansh", "Vansh", "Anshika"] },
    { title: "B", data: ["Babik", "Bibek", "Babu"] },
  ];
  return (
    <ScrollView>
      <Text style={{ fontSize: 25 }}>Flat Lists Example</Text>

      {/* FLAT LISTS */}
      <FlatList
        data={items}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />

      <Text style={{ fontSize: 25, marginTop: 20 }}>Section Lists Example</Text>

      {/* Section Lists */}
      <SectionList
        sections={items}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
        renderSectionHeader={({ section }) => {
          return <Text style={{ fontWeight: 500 }}>{section.title}</Text>;
        }}
      />
    </ScrollView>
  );
}

export default ListViews;
