import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, Text, Alert, ImageBackground } from "react-native";
import {PlayAudio} from "./src/components/PlayAudio";


const image = { uri: "https://firebasestorage.googleapis.com/v0/b/duan1-3cc8b.appspot.com/o/thaychan.png?alt=media&token=0db40e9b-5c15-43bc-a612-feafa6eade64"};
var diem = 0;
export default class App extends Component {

  // handleAppStateChange = () => {
  //   if (this.state.appState.match(/inactive|background/) ) {
  //     this.setState({ playing: false });
  //   }
  // }

  constructor() {
    super();
    this.state = {
      // This is a default value...
      numberHolder: 1,
      numberHolder2: 1,
      numberHolder3: 2,
      numberHolder4: 1,
      bonus: 0
    }
  }
  generateRandomNumber = () => {
    if(this.state.numberHolder4 == this.state.numberHolder3){
      diem++;
      this.setState({bonus:diem});
      Alert.alert( "Thông báo",
      "Bạn làm đúng rồi! Giỏi quá.",
      [
        { text: "Tiếp tục", onPress: () => console.log("OK Pressed") }
      ]
    );

    }else{
      diem = 0;
      this.setState({bonus:diem});
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
      diem = 0;
      this.setState({bonus:diem});
      Alert.alert( "Thông báo",
      "Tiếc quá! Bạn làm sai rồi.",
      [
        { text: "Tiếp tục", onPress: () => console.log("OK Pressed") }
      ]
    );
    }else{
      diem++;
      this.setState({bonus:diem});
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
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <PlayAudio style={styles.buttonSetting}/>
          <Text style={styles.bonusText}>Điểm: {this.state.bonus}</Text>
          <Text style={styles.headerText}>{this.state.numberHolder} + {this.state.numberHolder2} = {this.state.numberHolder3} </Text>
          <Button styles={styles.button} title="Đúng" onPress={this.generateRandomNumber} />
          <Button title="Sai" onPress={this.generateRandomNumber2} />
          {/* <Button onPress = {this.handleAppStateChange} title="Stop"/> */}
        </ImageBackground>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  bonusText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 290,
    marginBottom: 200
  },
  headerText: {
    fontSize: 60,
    textAlign: "center",
    marginBottom: 400,
    fontWeight: "bold",
    color: "#FFFFFF",
  },  
  button:{
    margin: 100
  }, 
  image: {
    flex: 1,
    justifyContent: "center",
  }, 
  buttonSetting:{
  }

});