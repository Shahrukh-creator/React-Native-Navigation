import  React, {Component} from 'react';
import { Button, View, Text } from 'react-native';

class ProfileScreen extends React.Component {
  render()
  {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => this.props.navigation.popToTop()}
      />
    </View>
  );
  }
}
export default ProfileScreen;