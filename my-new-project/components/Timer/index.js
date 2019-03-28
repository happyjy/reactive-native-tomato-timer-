import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { white } from "ansi-colors";

class Timer extends Component {
  render(){
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}> 25:00 </Text>
        </View>
        <View style={styles.lower}>
          <Text> Buttons here </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#bc0b24'
  },
  upper: {
    flex: 2,
    justifyContent: "center",
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: 'white',
    fontSize: 120,
    fontWeight: "100"
  }
});

export default Timer;