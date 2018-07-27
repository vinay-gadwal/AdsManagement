import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, Alert,Text, View, Button,TextInput,TouchableOpacity ,ListView,AsyncStorage} from 'react-native';
import images from './Image'
import { StackNavigator } from 'react-navigation';
import SettingsScreen from './Bidder'
 
export default class MainActivity extends Component {
    constructor(){
        super();
        this.state={
            location:'',text:''
        }
    }
 
static navigationOptions =
 {
    title: 'Bidder',
    
 };
 TextCheck(){
     if(this.state.text.toLowerCase()==GLOBAL.locationS || this.state.text.toUpperCase()==GLOBAL.locationS){
     return <Text style={{flex:0.3,color:'black',fontSize:25,fontFamily: 'Cochin',fontWeight: 'bold'}}>{GLOBAL.locationS}</Text>
 }}
 FunctionToOpenSecondActivity = () =>
 {

    this.props.navigation.navigate('Sixth');
    
 }
 getValueLocally=()=>{
     
    AsyncStorage.getItem('location').then((value) => this.setState({ location : value }))
 }

 render()
 {
    return(
       <View style = { styles.MainContainer }>
 
         <View style={{marginBottom: 20}}>
            <TextInput style = {styles.input}
        placeholder="Search by location OR Users"
        onChangeText={(text) => this.setState({text})}/>
        <Button 
            color={ '#800080' } 
          // onPress={this.onSubmit.bind(this)}
           onPress={this.getValueLocally}
            title={ 'Search' }  
            /> 
        </View>
            <TouchableOpacity onPress={this.FunctionToOpenSecondActivity} >
           
            <Text style = {styles.input}>{this.TextCheck()}</Text>
               
            </TouchableOpacity>
       </View>
    );
 }
}
// export default Project = StackNavigator(
// {
//  First: { screen: MainActivity },
 
//  Second: { screen: SettingsScreen },
//  Third:{screen:images}
// },
// {
//     initialRouteName: 'First',
//     /* The header config from HomeScreen is now here */
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#800080',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   });
 
const styles = StyleSheet.create(
{
 MainContainer:
 {
    justifyContent: 'center',
    flex:1,
   // margin: 10,
    backgroundColor:"#F0F8FF",
    alignItems:"center"
  
 },
 input: {
    textAlign: 'center',

    marginBottom: 7,
     
    height: 40,
    width:200,
     
    borderWidth: 1,
    // Set border Hex Color Code Here.
     borderColor: '#BA55D3',
     
     // Set border Radius.
     borderRadius: 6 ,
     //marginLeft:75
},
input1: {
    textAlign: 'center',

    marginBottom: 7,
     
    height: 40,
    width:200,
     
    borderWidth: 1,
    // Set border Hex Color Code Here.
     borderColor: '#D50000',
     color:'#808000',fontSize:25,fontFamily: 'Cochin',fontWeight: 'bold',
     // Set border Radius.
     borderRadius: 6 ,
     //marginLeft:75
},
 
 TextStyle:
 {
    fontSize: 23,
    textAlign: 'center',
    color: '#000',
 },
 
});
