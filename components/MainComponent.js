import React, { Component } from 'react';
import { Keyboard, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions/weather';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      city: "",
      text: ""
     };
    this.handleSubmitEditing = this.handleSubmitEditing.bind(this);
    this.renderWeather = this.renderWeather.bind(this);
  }


   handleSubmitEditing() {
    Keyboard.dismiss();
    this.props.fetchWeather(this.state.text);
    this.setState({text: ""})
  }
  renderWeather() {
    let weather = this.props.weather.weather;
    var a;
    if (weather === undefined) {
      return <Text style={styles.text}>Enter city</Text>
    } else if(weather === "city not found") {
      return <Text style={styles.text}>{weather}</Text>
    } else if(weather) {
      return (
        <View>
        <Text style={styles.text}>Temperature - {Math.round(weather.main.temp) + String.fromCharCode(176)}</Text>
        <Text style={styles.text}>City - {weather.name}</Text>
        {weather.weather.map(el => <Text style={styles.text} key={1}>Description - {el.description}</Text>)}
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        underlineColorAndroid="transparent"
      />
       <Button
        onPress={() => this.handleSubmitEditing()}
        title="Search Weather"
        color="#4179d3"
      />
      {this.renderWeather()}
      </View>
    );
  }
}
function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps, actions)(MainComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe8d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200, 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginBottom: 7,
    padding: 10,
    backgroundColor: '#f1f1f1',
    color: '#424242',
  },
  text: {
    color: "#bac6d8",
    fontSize: 15
  }
});