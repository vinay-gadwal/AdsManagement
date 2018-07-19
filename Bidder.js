import React,{Component} from 'react'
import { TouchableOpacity, AsyncStorage,StyleSheet, View,Im, Text ,TextInput,Alert,Button} from 'react-native'
import HomeScreen from './Seller'
export default class SettingsScreen extends Component{
  constructor(){
    super();
    this.state={
      text:null,imageSource:"",heading:"",subHeading:"",location:"",users:"",amount:"",checked:"",
      checked1:"",checked2:"",checked3:"",below1:"",average1:"",high1:"",getValue:''
    }
  }
  
  getValueLocally(){
    AsyncStorage.getItem('location').then((value) => this.setState({ location : value }))
    AsyncStorage.getItem('users').then((value) => this.setState({ users : value }))

    if(this.state.text===this.state.location || this.state.text===this.state.users)
    {
      AsyncStorage.getItem('amount').then((value) => this.setState({ amount : value }))
      AsyncStorage.getItem('heading').then((value) => this.setState({ heading : value }))
      AsyncStorage.getItem('subHeading').then((value) => this.setState({ subHeading : value }))
      AsyncStorage.getItem('checked').then((value) => this.setState({ checked : value }))
      AsyncStorage.getItem('checked1').then((value) => this.setState({ checked1 : value }))
      AsyncStorage.getItem('checked2').then((value) => this.setState({ checked2 : value }))
      AsyncStorage.getItem('checked3').then((value) => this.setState({ checked3 : value }))
      AsyncStorage.getItem('below1').then((value) => this.setState({ below1 : value }))
      AsyncStorage.getItem('average1').then((value) => this.setState({ average1 : value }))
      AsyncStorage.getItem('high1').then((value) => this.setState({ high1 : value }))
      AsyncStorage.getItem('users').then((value) => this.setState({ users : value }))
      AsyncStorage.getItem('imageSource').then((value) => this.setState({ imageSource : value }))
    }else{
      AsyncStorage.getItem('amount').then((value) => this.setState({ amount : value }))
      AsyncStorage.getItem('heading').then((value) => this.setState({ heading : value }))
      AsyncStorage.getItem('subHeading').then((value) => this.setState({ subHeading : value }))
      AsyncStorage.getItem('checked').then((value) => this.setState({ checked : value }))
      AsyncStorage.getItem('checked1').then((value) => this.setState({ checked1 : value }))
      AsyncStorage.getItem('checked2').then((value) => this.setState({ checked2 : value }))
      AsyncStorage.getItem('checked3').then((value) => this.setState({ checked3 : value }))
      AsyncStorage.getItem('below1').then((value) => this.setState({ below1 : value }))
      AsyncStorage.getItem('average1').then((value) => this.setState({ average1 : value }))
      AsyncStorage.getItem('high1').then((value) => this.setState({ high1 : value }))
      AsyncStorage.getItem('users').then((value) => this.setState({ users : value }))
      AsyncStorage.getItem('imageSource').then((value) => this.setState({ imageSource : value }))
    }
  }
  
  size_Image(){
    if(this.state.text!=null){
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
  }
  user_Age(){
    if(this.state.text!=null){
    if(this.state.below1==null){
      if(this.state.average1==null){
        if(this.state.high1!=null){
          return <Text>{this.state.high1}</Text>
        }else{
          return <Text>Choose user age</Text>
        }
      }else{
       return <Text>{this.state.average1}</Text>
      }
    }else{
      return <Text>{this.state.below1}</Text>
    }
  }
  }

  
  render(){
   return (
     <View style = {styles.container}>
          <Text style={{flex:0.3,color:'#9C27B0',fontSize:25,fontFamily: 'Cochin',fontWeight: 'bold'}}>Bidder</Text>

    <View style={{flex:0.2}}>
    <TextInput style = {styles.input}
      placeholder="Search by location OR Users"
      onChangeText={(text) => this.setState({text})}
    />
  </View >
      <View style={{ flex:0.2}}>
      <Button 
            color={ 'blue' } 
          // onPress={this.onSubmit.bind(this)}
           onPress={this.getValueLocally()}
            title={ 'Search' }  
            /> 
      </View>
      <View style={{alignItems:'flex-start', justifyContent:'flex-start',flexDirection: 'row'}}>
      <Text style={{fontSize:20}}>Size                    </Text>
      <TextInput style = {styles.input}>{this.size_Image()}</TextInput>
      </View>
      <View style={{ flexDirection: 'row'}}>
      <Text style={{alignItems: 'flex-end',fontSize:20}}>Heading           </Text>
      <TextInput style = {styles.input}>{this.state.heading}</TextInput>
      </View>
      <View style={{ flexDirection: 'row'}}>
      <Text style={{fontSize:20}}>SubHeading    </Text>
      <TextInput style = {styles.input}>{this.state.subHeading}</TextInput>
      </View>
      <View style={{ flexDirection: 'row'}}>
      <Text style={{fontSize:20}}>Amount             </Text>
      <TextInput style = {styles.input}>{this.state.amount}</TextInput>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize:20}}>Location           </Text>
      <TextInput style = {styles.input}>{this.state.location}</TextInput>
      </View>
      <View style={{ flexDirection: 'row'}}>
      <Text style={{fontSize:20}}>Age                    </Text>
      <TextInput style = {styles.input}>{this.user_Age()}</TextInput>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize:20}}>Volume             </Text>
      <TextInput style = {styles.input}>{this.state.users}</TextInput>
      </View>
      {/* <Image source = {require('imageSource')} /> */}
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
      
   }
})