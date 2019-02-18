import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Counter from "./src/components/counter";
import ToolBar from "./src/components/toolBar";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { life1: 20, life2: 20 };
  }

  addToLifeTotal = (player, life) => {
    const lifeTotal = this.state["life" + player] + life;
    this.setState({ ["life" + player]: lifeTotal });
  };

  render() {
    return (
      <View style={styles.container}>
        <Counter
          addToLifeTotal={this.addToLifeTotal}
          life={this.state.life2}
          rotate={true}
          player={2}
        />
        <ToolBar />
        <Counter
          addToLifeTotal={this.addToLifeTotal}
          life={this.state.life1}
          player={1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
