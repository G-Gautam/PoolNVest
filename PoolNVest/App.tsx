import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import * as EmailValidator from 'email-validator';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ColorPropType
} from 'react-native';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      validateEmail: false,
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  }

  render() {
    return (
      <LinearGradient
        colors={['#FFFFFF', '#173753']}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../PoolNVest/assets/logo.png')} />
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/officel/40/000000/email.png' }} />
            <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}></TextInput>
          </View>

          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
            <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({ password })} />
          </View>
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>

          <TouchableHighlight style={[styles.buttonContainer, styles.registerButton]} onPress={() => this.onClickListener('register')}>
            <Text style={styles.loginText}>Register</Text>
          </TouchableHighlight>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#054A91'
  },
  logo: {
    top: -80
  },
  inputContainer: {
    top: -30,
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    top: -30,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#299490",
  },
  registerButton: {
    backgroundColor: "#1f496e"
  },
  loginText: {
    color: 'white',
  }
});