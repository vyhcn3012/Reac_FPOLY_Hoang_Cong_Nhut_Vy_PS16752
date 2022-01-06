import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, Text, Alert } from "react-native";


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      // This is a default value...
      numberHolder: 1,
      numberHolder2: 1,
      numberHolder3: 2,
      numberHolder4: 1

    }
  }
  generateRandomNumber = () => {
    if(this.state.numberHolder4 == this.state.numberHolder3){
      Alert.alert( "Thông báo",
      "Bạn làm đúng rồi! Giỏi quá.",
      [
        { text: "Tiếp tục", onPress: () => console.log("OK Pressed") }
      ]
    );
    }else{
      Alert.alert( "Thông báo",
      "Tiếc quá! Bạn làm sai rồi.",
      [
        { text: "Tiếp tục", onPress: () => console.log("OK Pressed") }
      ]
    );
    }
    var randomNumber1 = Math.floor(Math.random() * 5) + 1;
    var randomNumber2 = Math.floor(Math.random() * 5) + 1;
    var randomNumber3 = Math.floor(Math.random() * 10) + 1;
    var randomNumberSum = randomNumber1 + randomNumber2;
    setTimeout(() => {
    this.setState({ numberHolder: randomNumber1, numberHolder2 : randomNumber2, numberHolder3:randomNumber3, numberHolder4:randomNumberSum});
  }, 1);
  }

  generateRandomNumber2 = () => {
    if(this.state.numberHolder4 == this.state.numberHolder3){
      Alert.alert( "Thông báo",
      "Tiếc quá! Bạn làm sai rồi.",
      [
        { text: "Tiếp tục", onPress: () => console.log("OK Pressed") }
      ]
    );
    }else{
      Alert.alert( "Thông báo",
      "Bạn làm đúng rồi! Giỏi quá.",
      [
        { text: "Tiếp tục", onPress: () => console.log("OK Pressed") }
      ]
    );
    }
    var randomNumber1 = Math.floor(Math.random() * 5) + 1;
    var randomNumber2 = Math.floor(Math.random() * 5) + 1;
    var randomNumber3 = Math.floor(Math.random() * 10) + 1;
    var randomNumberSum = randomNumber1 + randomNumber2;
    setTimeout(() => {
    this.setState({ numberHolder: randomNumber1, numberHolder2 : randomNumber2, numberHolder3:randomNumber3, numberHolder4:randomNumberSum});
  }, 1);
  }


  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.headerText}>{this.state.numberHolder} + {this.state.numberHolder2} = {this.state.numberHolder3} </Text>

        <Button styles={styles.button} title="Đúng" onPress={this.generateRandomNumber} />
        <Button title="Sai" onPress={this.generateRandomNumber2} />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   backgroundColor: '#FF5E00'
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    marginTop: -30,
    fontWeight: "bold"
  },  
  button:{
    marginTop: 100,
  }
});