import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "react-native-button";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => this.props.addToLifeTotal(this.props.player, this.props.rotate ? 1 : -1)}
            style={styles.button}
            containerStyle={styles.buttonContainer}
          >
            {this.props.rotate ? "+" : "-"}
          </Button>
        </View>

        <View style={styles.counterWrapper}>
          <View style={styles.counterContainer}>
            <Text
              style={
                this.props.rotate
                  ? [styles.counter, styles.upsideDown]
                  : [styles.counter]
              }
            >
              {this.props.life}
            </Text>
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => this.props.addToLifeTotal(this.props.player, this.props.rotate ? -1 : 1)}
            style={styles.button}
            containerStyle={styles.buttonContainer}
          >
            {this.props.rotate ? "-" : "+"}            
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  button: {
    fontSize: 40,
    color: "white",
    width: 20
  },
  buttonContainer: {
    height: 70,
    width: 70,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#13c3ff",
    overflow: "hidden"
  },
  buttonWrapper: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center"
  },
  counter: {
    fontSize: 80,
    width: 140,
    textAlign: "center"
  },
  counterWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  counterContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 40
  },
  upsideDown: {
    transform: [{ rotate: "180deg" }]
  }
});
