import React,{Component} from 'react'
import { TouchableOpacity, AsyncStorage,StyleSheet, View, Text ,TextInput,Alert,Button} from 'react-native'
import HomeScreen from './Seller'
export default class SettingsScreen extends Component{
  constructor(){
    super();
    this.state={
      text:"",imageSource:"",heading:"",subHeading:"",location:"",users:"",amount:"",checked:"",
      checked1:"",checked2:"",checked3:"",below1:"",average1:"",high1:""
    }
  }
  search_Data(text){
      if(text==GLOBAL.locationS){
        const amount =  AsyncStorage.getItem('amount');
        const heading =  AsyncStorage.getItem('heading');
        const subHeading =  AsyncStorage.getItem('subHeading');
        const location =  AsyncStorage.getItem('location');
        const users =  AsyncStorage.getItem('users');
        const imageSource =  AsyncStorage.getItem('imageSource');
        const checked =  AsyncStorage.getItem('checked');
        const checked1 =  AsyncStorage.getItem('checked1');
        const checked2 =  AsyncStorage.getItem('checked2');
        const checked3 =  AsyncStorage.getItem('checked3');
        const below1 =  AsyncStorage.getItem('below1');
        const average1 =  AsyncStorage.getItem('average1');
        const high1 =  AsyncStorage.getItem('high1');
        this.setState({amount: amount});
        this.setState({heading: heading});
        this.setState({subHeading: subHeading});
        this.setState({location: location});
        this.setState({users: users});
        this.setState({imageSource: imageSource});
        this.setState({checked: checked});
        this.setState({checked1: checked1});
        this.setState({checked2: checked2});
        this.setState({checked3: checked3});
        this.setState({below1: below1});
        this.setState({average1: average1});
        this.setState({high1: high1});
        Alert.alert( `${this.state.checked} ${this.state.below1} ${this.state.average1} ${this.state.high1} ${this.state.checked1} ${this.state.checked2} ${this.state.checked3} ${this.state.heading}  ${this.state.subHeading}  ${this.state.location} ${this.state.users} ${this.state.amount} `) 
      }
    
    else{ 
      debugger
      return(
        Alert.alert(this.state.text)
      )
    }
    }
  render(){
   return (
     <View style = {styles.container}>
    <View >
    <TextInput style = {styles.input}
      placeholder="Enter location"
      onChangeText={(text) => this.search_Data(text)}
    />
    {/* <Text style={{padding: 10, fontSize: 42}}>
      {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
    </Text> */}
  </View>
      <View >
      {/* <Button style={styles.text}
            color={ 'blue' } 
        
           // onPress={this.onSubmit.bind(this)}
            onPress={this.search_Data()}
            title={ 'Submit' }  
            />  */}
      </View>
      </View>
   )
}
}

const styles = StyleSheet.create ({
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
  container: {
    alignItems: 'center',
    flex:.9,
    alignItems:'center',
    justifyContent:'center'
 },
 container1: {
  alignItems: 'center',
  
  alignItems:'center',
  justifyContent:'center'
},
   text: {
      borderWidth: 1,
      padding: 15,
      borderColor: 'black',
      backgroundColor: 'red',
      borderWidth:5
   }
})