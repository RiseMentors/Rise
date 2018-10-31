import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, AsyncStorage, FlatList } from 'react-native';
import { Message } from '../../src/components/view';
import config from '../../src/config'
import {StackNavigation} from 'react-navigation'

export default class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showActivityIndicator: true,
      messages :  [],
      isPassing : "hello"
      }
  }

  componentDidMount(){
    //const { navigate } = this.props.navigation;
    // query
    const query = `?toUser=${"101"}`
    console.log(query)
   // fetch(config.baseUrl+ 'api/message')
    fetch(`${config.baseUrl}api/message${query}`, {
      method: "GET",
      headers: {
        Accept: 'application/json',
        'Content-type' : "application/json"
      }
    })
    .then(response => {
      console.log(response)
      return response.json();
    })
    .then(responseJson => {
      this.setState({messages: responseJson.data, showActivityIndicator: false})
    })
    .catch(err => {
      console.log(err.message)
      this.setState({showActivityIndicator: false})
    })
  }


  render() {
    const messages = [{"toUser":"Ryan2","fromUser":"Dan","message":"Varun is really nice.","dateTime":"2018-10-29T03:19:50.594Z"},
    {"toUser":"Ryan3","fromUser":"Tone","message":"I think we'll get an A","dateTime":"2018-10-29T03:19:50.594Z"},
    {"toUser":"Ryan4","fromUser":"Rita","message":"I'm a big fan of the Milwaukee Bucks","dateTime":"2018-10-29T03:19:50.594Z"},
    {"toUser":"Ryan5","fromUser":"Kevin","message":"That's pretty cooool","dateTime":"2018-10-29T03:19:50.594Z"}]
    // const { messages } = this.state;

    // const { navigate } = this.props.navigation;

 
    const lastIndex = messages.length - 1;
    console.log(lastIndex)
    return (
      <View style = {styles.container}>
        {(this.state.showActivityIndicator)? 
        <ActivityIndicator animating size="large"/> :null
        }
        <FlatList data= {messages}
        keyExtractor = {item => item.id}
        renderItem = {({item})=><Message {...item} navigation={this.props.navigation} />}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    width: 100 + '%',
    height: 100 + '%',
    display: 'flex',
    backgroundColor: "rgb(243, 243, 243)",
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  }
}