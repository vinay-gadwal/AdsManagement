import React,{Component} from 'react';
import { Text, View ,YellowBox} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import SettingsScreen from './Bidder'
import HomeScreen from './Seller'
import MyChat from './chat'
import Project from './search'
console.disableYellowBox = true;
class App extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
      );
    }
  }
export default createBottomTabNavigator({
  Seller: HomeScreen,
  Bidder: Project,
  chat:MyChat
},
  {
    textStyle: { 
        fontSize: 40,
    },
    tabBarOptions: {
        style: {
            backgroundColor: 'white',
            padding: 8,
            tabBarTextFontSize: 50           
        },
         indicatorStyle: {
            borderBottomColor: '#ffffff',
            borderBottomWidth: 3,
            tabBarTextFontSize: 50        },
        tabStyle: {
            borderRightColor: '#ffffff',
            borderRightWidth: 1,
            tabBarTextFontSize: 50        }
    }
   
        
});