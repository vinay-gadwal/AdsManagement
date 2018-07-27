import React,{Component} from 'react'
import { TouchableOpacity, AsyncStorage,StyleSheet, View,Image, Text ,TextInput,Alert,Button} from 'react-native'
import HomeScreen from './Seller'
import { StackNavigator } from 'react-navigation';
import images from './Image'
export default class SettingsScreen1 extends Component{
  constructor(){
    super();
    this.state={
      text:null,imageSource:"",heading:"",subHeading:"",location:"",users:"",amount:"",checked:"",
      checked1:"",checked2:"",checked3:"",below1:"",average1:"",high1:"",getValue:''
    }
  }
  
  FunctionToOpenSecondActivity = () =>
 {
    this.props.navigation.navigate('Seven');
    
 }
  
  // async getValueLocally(){
  // await AsyncStorage.getItem('location').then((value) => this.setState({ location : value }))
  // await AsyncStorage.getItem('users').then((value) => this.setState({ users : value }))
  // await AsyncStorage.getItem('amount').then((value) => this.setState({ amount : value }))
  // await AsyncStorage.getItem('heading').then((value) => this.setState({ heading : value }))
  // await AsyncStorage.getItem('subHeading').then((value) => this.setState({ subHeading : value }))
  // await AsyncStorage.getItem('checked').then((value) => this.setState({ checked : value }))
  // await AsyncStorage.getItem('checked1').then((value) => this.setState({ checked1 : value }))
  // await AsyncStorage.getItem('checked2').then((value) => this.setState({ checked2 : value }))
  // await AsyncStorage.getItem('checked3').then((value) => this.setState({ checked3 : value }))
  // await AsyncStorage.getItem('below1').then((value) => this.setState({ below1 : value }))
  // await AsyncStorage.getItem('average1').then((value) => this.setState({ average1 : value }))
  // await AsyncStorage.getItem('high1').then((value) => this.setState({ high1 : value }))
  // await AsyncStorage.getItem('users').then((value) => this.setState({ users : value }))
  // await AsyncStorage.getItem('imageSource').then((value) => this.setState({ imageSource : value }))
    
  // }
  
  size_Image(){
    
    if(this.state.checked==null){
      if(this.state.checked1==null){
        if(this.state.checked2==null){
          if(this.state.checked3!=null){
              return <Text>{this.state.checked3}</Text>
          }else{
            return <Text>No Size Fixed</Text>
          }
        }else{
          return <Text>{this.state.checked2}</Text>
        }
      }else{
        return <Text>{this.state.checked1}</Text>
      }
    }
    else{
      return <Text>{this.state.checked}</Text>
    }
  }

  sizeImage(){
    if(GLOBAL.value=="S"){
      if(GLOBAL.value=="M"){
        if(GLOBAL.value=="L"){
          if(GLOBAL.value!="XL"){
            return <Text>{GLOBAL.value}</Text>
          }else{
            return <Text>No Size selected</Text>
          }
        }else{
          return <Text>{GLOBAL.value}</Text>
        }
      }else{
        return <Text>{GLOBAL.value}</Text>
      }
    }else{
      return <Text>{GLOBAL.value}</Text>
    }
    
  }
  
  user_Age(){
    
    if(GLOBAL.below1==null){
      if(GLOBAL.average1==null){
        if(GLOBAL.high1!=null){
          return <Text>{GLOBAL.high1}</Text>
        }else{
          return <Text>Choose user age</Text>
        }
      }else{
       return <Text>{GLOBAL.average1}</Text>
      }
    }else{
      return <Text>{GLOBAL.below1}</Text>
    }
  }
  

  
  render(){
   return (
     <View style = {styles.container}>
        
    <View>
    
  </View >
      <View style={{ flex:0.2}}>
      <TouchableOpacity >
        <TextInput
            color={ 'blue' } 
          //  onChangeText={this.getValueLocally()}
            //title={ 'Search' }  
            />
            </TouchableOpacity>
      </View>
      <View style={{alignItems:'flex-start', justifyContent:'flex-start',flexDirection: 'row'}}>
      <Text style={{fontSize:20,color: '#BA55D3'}}>Size                    </Text>
      <TextInput style = {styles.input}>{this.sizeImage()}</TextInput>
      </View>
      <View style={{ flexDirection: 'row'}}>
      <Text style={{alignItems: 'flex-end',fontSize:20,color: '#BA55D3'}}>Heading           </Text>
      <TextInput style = {styles.input}>{GLOBAL.heading}</TextInput>
      </View>
      <View style={{ flexDirection: 'row'}}>
      <Text style={{fontSize:20,color: '#BA55D3'}}>SubHeading    </Text>
      <TextInput style = {styles.input}>{GLOBAL.subHeading}</TextInput>
      </View>
      <View style={{ flexDirection: 'row'}}>
      <Text style={{fontSize:20,color: '#BA55D3'}}>Amount             </Text>
      <TextInput style = {styles.input}>{GLOBAL.amount}</TextInput>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize:20,color: '#BA55D3'}}>Location           </Text>
      <TextInput style = {styles.input}>{GLOBAL.locationS}</TextInput>
      </View>
      <View style={{ flexDirection: 'row'}}>
      <Text style={{fontSize:20,color: '#BA55D3'}}>Age                    </Text>
      <TextInput style = {styles.input}>{this.user_Age()}</TextInput>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize:20,color: '#BA55D3'}}>Volume             </Text>
      <TextInput style = {styles.input}>{GLOBAL.users}</TextInput>
      </View>
      <View style={{fontSize:20,color: '#BA55D3'}}>
            
              <Button onPress={this.FunctionToOpenSecondActivity} title="click here to see image"/>
              </View>
      </View>
   )
}
}
// export default SettingsScreen = StackNavigator(
//   {
//    First: { screen: SettingsScreen1 },
   
//    Second: { screen: images }
//   },
//   {
//     initialRouteName: 'First',
//     /* The header config from HomeScreen is now here */
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#6A5ACD',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   });

const styles = StyleSheet.create ({
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
      
   }
})