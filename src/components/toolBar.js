import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "react-native-button";

export default class ToolBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>-</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#ffa88c"
  }
});
