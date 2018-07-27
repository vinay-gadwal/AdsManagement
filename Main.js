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
  Chat:MyChat,
},
  
  {

    tabBarOptions:{
      pressColor: "black",
          indicatorStyle: {
            opacity: 0
          },
          allowFontScaling: true,
        
          upperCaseLabel: false,
          showLabel: true,
          activeTintColor: "#fff",
          labelStyle: {
            fontSize: 20,
            textAlign: "center"
          },
          showIcon: true,
        style: {
            backgroundColor: '#800080',
            padding: 0,
            tabBarButtonColor: "#fff",
            navBarTextFontSize: 100,
            forceTitlesDisplay: true,
            tabFontFamily: "Avenir-Medium",
    textAlign: 'center',
    //margin: 1
        },
         indicatorStyle: {
           // borderBottomColor: '#FFA500',
//borderBottomWidth: 2,
            tabBarTextFontSize: 500       },
        tabStyle: {
            borderRightColor: '#fff',
          // borderRightWidth: .5,
           // borderTopWidth: 1,
           // backgroundColor: "#800080",
            tabBarButtonColor: "#fff",
            navBarTextFontSize: 34,
           // forceTitlesDisplay: true,
            tabFontFamily: "Avenir-Medium"
                  },
            
        }

        // tabBarOptions: {
        //   pressColor: "blue",
        //   indicatorStyle: {
        //     opacity: 1
        //   },
        //   allowFontScaling: true,
        
        //   upperCaseLabel: false,
        //   showLabel: true,
        //   activeTintColor: "blue",
        //   labelStyle: {
        //     fontSize: 20,
        //     textAlign: "center"
        //   },
        //   showIcon: true,
        //   style: {
        //     borderTopWidth: 1,
        //     backgroundColor: "#87CEFA",
        //     tabBarButtonColor: "#000",
        //     navBarTextFontSize: 34,
        //     forceTitlesDisplay: true,
        //     tabFontFamily: "Avenir-Medium"
            
        //   }
        
   
        
});