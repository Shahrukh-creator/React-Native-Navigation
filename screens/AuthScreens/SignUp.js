import React, {Component} from 'react';
import {
  Alert,
  Button,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';


export default class SignUp extends React.Component {

constructor()
  {
   super();
    this.state = {
      email: '',
      password: '',
      firstname:'',
      lastname:''
    };
  }
  

  handleSubmitPress(){


    if (!this.state.email || !this.state.password || !this.state.firstname || !this.state.lastname) {

        alert('Details are Incomplete');
    } else
    {
         this.setState({email: '', password: '',firstname:'',
      lastname:''});
      this.props.navigation.navigate('SignIn');
    }
  };

render()
{
  return (
    //// SafeAreaView is used for fitting on iOS Devices ////
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/img2.png')} />
      <TextInput
        value={this.state.firstname}
        onChangeText={(text) => this.setState({firstname:text})}
        placeholder={'Firstname'}
        style={styles.input}
      />
      <TextInput
        value={this.state.lastname}
        onChangeText={(text) => this.setState({lastname:text})}
        placeholder={'Lastname'}
        style={styles.input}
      />
      <TextInput
        value={this.state.email}
        onChangeText={(text) => this.setState({email:text})}
        placeholder={'Email'}
        style={styles.input}
      />
      <TextInput
        value={this.state.password}
        onChangeText={(text) => this.setState({password:text})}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={this.handleSubmitPress.bind(this)}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text
        style={styles.registerTextStyle}
        onPress={() => this.props.navigation.navigate('SignIn')}>
        Already Registered ?
      </Text>
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 3,
    borderColor: 'black',
    marginBottom: 30,
  },
  logo: {
    width: '50%',
    height: '30%',
  },
  registerTextStyle: {
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
