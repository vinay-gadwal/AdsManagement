import React from "react";
    import { GiftedChat } from "react-native-gifted-chat";
    import { AppRegistry, StyleSheet, Alert,Text, View, Button,TextInput,TouchableOpacity ,ListView,AsyncStorage} from 'react-native';

    export default class MyChat extends React.Component {
      state = {
        messages: []
      };

      componentDidMount() {
        this.setState({
          messages: [
            {
              _id: 1,
              text: "start chat",
              createdAt: new Date(),
              user: {
                _id: 1,
                name: "React Native",
                avatar: "https://placeimg.com/140/140/any"
              }
            }
          ]
        });
      }

      render() {
        return(
        <View style={styles.MainContainer}>
         <GiftedChat messages={this.state.messages} />
        </View>
        )
      }
    }
    const styles = StyleSheet.create(
      {
       MainContainer:
       {
          justifyContent: 'center',
          flex:1,
         // margin: 10,
          backgroundColor:"#F0F8FF"
        
       },
      })