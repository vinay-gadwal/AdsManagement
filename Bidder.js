import React,{Component} from 'react'
import { TouchableOpacity, AsyncStorage,StyleSheet, View,Image, Text ,TextInput,Alert,Button} from 'react-native'
import HomeScreen from './Seller'
import { StackNavigator } from 'react-navigation';
import images from './Image'
 class SettingsScreen1 extends Component{
  constructor(){
    super();
    this.state={
      text:null,imageSource:"",heading:"",subHeading:"",location:"",users:"",amount:"",checked:"",
      checked1:"",checked2:"",checked3:"",below1:"",average1:"",high1:"",getValue:''
    }
  }
  FunctionToOpenSecondActivity = () =>
 {
    this.props.navigation.navigate('Second');
    
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
    if(GLOBAL.checked==null){
      if(GLOBAL.checked1==null){
        if(GLOBAL.checked2==null){
          if(GLOBAL.checked3!=null){
            return <Text>{GLOBAL.checked3}</Text>
          }else{
            return <Text>No Size selected</Text>
          }
        }else{
          return <Text>{GLOBAL.checked2}</Text>
        }
      }else{
        return <Text>{GLOBAL.checked1}</Text>
      }
    }else{
      return <Text>{GLOBAL.checked}</Text>
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
          <Text style={{color:'#9C27B0',fontSize:25,fontFamily: 'Cochin',fontWeight: 'bold',marginTop:10}}>Bidder</Text>

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
      <Text style={{fontSize:20}}>Size                    </Text>
      <TextInput style = {styles.input}>{this.sizeImage()}</TextInput>
      </View>
      <View style={{ flexDirection: 'row'}}>
      <Text style={{alignItems: 'flex-end',fontSize:20}}>Heading           </Text>
      <TextInput style = {styles.input}>{GLOBAL.heading}</TextInput>
      </View>
      <View style={{ flexDirection: 'row'}}>
      <Text style={{fontSize:20}}>SubHeading    </Text>
      <TextInput style = {styles.input}>{GLOBAL.subHeading}</TextInput>
      </View>
      <View style={{ flexDirection: 'row'}}>
      <Text style={{fontSize:20}}>Amount             </Text>
      <TextInput style = {styles.input}>{GLOBAL.amount}</TextInput>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize:20}}>Location           </Text>
      <TextInput style = {styles.input}>{GLOBAL.locationS}</TextInput>
      </View>
      <View style={{ flexDirection: 'row'}}>
      <Text style={{fontSize:20}}>Age                    </Text>
      <TextInput style = {styles.input}>{this.user_Age()}</TextInput>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize:20}}>Volume             </Text>
      <TextInput style = {styles.input}>{GLOBAL.users}</TextInput>
      </View>
      <View style={{fontSize:20}}>
            
              <Button onPress={this.FunctionToOpenSecondActivity} title="click here to see image"/>
              </View>
      </View>
   )
}
}
export default SettingsScreen = StackNavigator(
  {
   First: { screen: SettingsScreen1 },
   
   Second: { screen: images }
  });

const styles = StyleSheet.create ({
  input: {
    textAlign: 'center',

    marginBottom: 7,
     
    height: 40,
    width:200,
     
    borderWidth: 1,
    // Set border Hex Color Code Here.
     borderColor: '#851D07',
     
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