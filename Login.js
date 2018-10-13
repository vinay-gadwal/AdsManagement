import { StyleSheet, TextInput, View, Alert,Icon,Image, Button, Text} from 'react-native';
import React,{Component} from 'react'
// Importing Stack Navigator library to add multiple activities.
import images from './Image'
import { StackNavigator } from 'react-navigation';
import SettingsScreen from './Bidder'
import Main from './Main'
import HomeScreen from './Seller'
import MainActivity from './search'
// Creating Login Activity.
class LoginActivity extends Component {
 
  // Setting up Login Activity title
  
  static navigationOptions =
 {
    title: 'AdManager',
    
 };
constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserEmail: 'Vinaygadwal',
      UserPassword: '123456',
      email:"",
      pwd:""
 
    }
 
  }
 
UserLoginFunction = () =>{
 
//  const { UserEmail }  = this.state ;
//  const { UserPassword }  = this.state ;
 if(this.state.UserEmail==this.state.email && this.state.UserPassword==this.state.pwd){
     
        this.props.navigation.navigate('Second');
     }else{
         Alert.alert("Id=Vinaygadwal ,pwd=123456");
     }
 
 
// fetch('https://reactnativecode.000webhostapp.com/User_Login.php', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
 
//     email: UserEmail,
 
//     password: UserPassword
 
//   })
 
// }).then((response) => response.json())
//       .then((responseJson) => {
 
//         // If server response message same as Data Matched
//        if(responseJson === 'Data Matched')
//         {
 
//             //Then open Profile activity and send user email to profile activity.
//             this.props.navigation.navigate('Second', { Email: UserEmail });
 
//         }
//         else{
 
//           Alert.alert(responseJson);
//         }
 
//       }).catch((error) => {
//         console.error(error);
//       });
 
 
  }
 
  render() {
    return (
 
<View style={styles.MainContainer}>
<Image style={{marginLeft:20,marginRight:10,marginBottom:30,marginTop:-10}} source={require('./assets/purple_logo.png')} />
 
  
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Email"
 
        //  onChangeText={UserEmail => this.setState({UserEmail})}
        onChangeText={email => this.setState({email})}
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Password"
 
         // onChangeText={UserPassword => this.setState({UserPassword})}
          onChangeText={pwd => this.setState({pwd})}
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
 
          secureTextEntry={true}
        />
 
        <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#BA55D3" />
        <View style={{ flexDirection: 'row',justifyContent: 'space-between'}}>
        <Button title="Forget" onPress={this.UserLoginFunction} color="#BA55D3" />
        <Button title="Registration" onPress={this.UserLoginFunction} color="#BA55D3" />
        </View>
 
</View>
            
    );
  }
}
 
// Creating Profile activity.
 
export default MainProject = StackNavigator(
{
   First: { screen: LoginActivity },
   Second: { screen: Main },
   Third: { screen: HomeScreen },
   Fourth: { screen: MainActivity },             
Fifth: { screen: images },
 Sixth: { screen: SettingsScreen },
 Seven:{screen:images}
 
},{
    initialRouteName: 'First',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#800080',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });
 
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
//margin: 0,
},
 
TextInputStyleClass: {
 
textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#BA55D3',
 
 // Set border Radius.
 borderRadius: 5 ,
 
},
 
 TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center', 
  marginBottom: 15
 }
});