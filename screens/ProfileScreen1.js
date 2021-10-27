import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Button,StyleSheet, View, Text} from 'react-native';
import axios from 'axios';
import { Card } from "react-native-elements";

export default class ProfileScreen1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async getdata() {
    let itemId = this.props.route.params.itemId;
    console.log(`https://jsonplaceholder.typicode.com/posts/${itemId}`);
    // try {
    //   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`);
    //   const json = await response.json();
    //   console.log("Data from 2nd Server: " + json);
    //   this.setState({ data: response });
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   this.setState({ isLoading: false });
    // }

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${itemId}`) ///passing id's as destructed value in URL/// 
      .then(response => {
        // handle success
        // console.log(response);
        this.setState({data: response.data});
        console.log(this.state.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // always executed
    this.setState({isLoading: false});

    // //    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res=>{
    // //        console.log(res);
    // //        this.setState({data: res.data});
    // //    })
    // //    .catch(function (error) {
    // //          console.error(error);

    // //       });
    // //    this.setState({ isLoading: false });
    //   }, []); ///For function
  }

  componentDidMount() {
    //   let itemId = this.props.route.params.itemId;

    this.getdata();
  }

  render() {
    const {data, isLoading} = this.state;
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen 1</Text>
        

        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Card>
                <Card.Title>{data.title}</Card.Title>
                <Card.Divider />

                <Text>
                  <Text style={styles.textSize}>User Id: {data.userId}{"\n"}</Text>
                  
                  <Text style={styles.textSize}>Id: {data.id}{"\n"}</Text>

                  <Text style={styles.textSize}>Title: {data.title}{"\n"}</Text>

                  <Text style={styles.textSize}>Body: {data.body}{"\n"}</Text>
                  
                  {"\n"}
                </Text>
              </Card>
        )}

        {/* <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => this.props.navigation.popToTop()}
      /> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  textSize: {
    fontSize: 15,
    fontWeight: 'bold',
  }
});