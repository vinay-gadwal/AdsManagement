import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, Alert,Text, View, Button,TextInput,TouchableOpacity ,ListView,AsyncStorage} from 'react-native';
 
import { StackNavigator } from 'react-navigation';
import SettingsScreen from './Bidder'
 
class MainActivity extends Component {
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
 
 FunctionToOpenSecondActivity = () =>
 {
    this.props.navigation.navigate('Second');
    
 }
 getValueLocally=()=>{
    AsyncStorage.getItem('location').then((value) => this.setState({ location : value }))
 }

 render()
 {
    return(
       <View style = { styles.MainContainer }>
 
         <View style={{marginBottom: 20}}>
          <Text style={{flex:0.3,color:'#9C27B0',fontSize:25,fontFamily: 'Cochin',fontWeight: 'bold'}}>Bidder</Text>
        <TextInput style = {styles.input}
        placeholder="Search by location OR Users"
        onChangeText={(text) => this.setState({text})}/>
        <Button 
            color={ 'blue' } 
          // onPress={this.onSubmit.bind(this)}
           onPress={this.getValueLocally}
            title={ 'Search' }  
            /> 
        </View>
            <TouchableOpacity>
                <Text onPress = { this.FunctionToOpenSecondActivity }>{this.state.location}</Text>
            </TouchableOpacity>
       </View>
    );
 }
}
export default Project = StackNavigator(
{
 First: { screen: MainActivity },
 
 Second: { screen: SettingsScreen }
});
 
const styles = StyleSheet.create(
{
 MainContainer:
 {
    justifyContent: 'center',
    flex:1,
    margin: 10
  
 },
 input: {
    textAlign: 'center',

    marginBottom: 7,
     
    height: 40,
    width:200,
     
    borderWidth: 1,
    // Set border Hex Color Code Here.
     borderColor: '#D50000',
     
     // Set border Radius.
     borderRadius: 6 ,
},
 
 TextStyle:
 {
    fontSize: 23,
    textAlign: 'center',
    color: '#000',
 },
 
});
