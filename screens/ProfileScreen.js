import  React, {Component} from 'react';
import { Button, View, Text } from 'react-native';

class ProfileScreen extends React.Component {
  render()
  {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
<<<<<<< Updated upstream
      <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => this.props.navigation.popToTop()}
      />
=======
       {isLoading ? <ActivityIndicator size="large"/> : (
         
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (

              <Card>
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider />

                <Text>
                  <Text style={styles.textSize}>User Id: {item.userId}{"\n"}</Text>
                  
                  <Text style={styles.textSize}>Id: {item.id}{"\n"}</Text>

                  <Text style={styles.textSize}>Title: {item.body}{"\n"}</Text>
                  {"\n"}
                </Text>

                <Button
                  onPress={() => {
                    this.props.navigation.navigate("ProfileScreen1", {
                      itemId: item.id,
                    });
                  }}
                  style={styles.buttonStyle}
                  title="VIEW DETAILS"
                />
              </Card>
              
            )}
          />
        )}

>>>>>>> Stashed changes
    </View>
  );
  }
}
<<<<<<< Updated upstream
export default ProfileScreen;
=======

const styles = StyleSheet.create({
  textSize: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor:'green'
  },
});
>>>>>>> Stashed changes
