
import React,{Component} from 'react';
import { Text, View ,Button,TouchableOpacity,TextInput,StyleSheet,Image,Alert,AsyncStorage} from 'react-native';
import CheckBox from 'react-native-checkbox';
import { StackNavigator } from 'react-navigation';
import {showImagePicker} from 'react-native-image-picker'
import images from './Image'
import RadioButton from 'radio-button-react-native';


export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
          imageSource:null,heading:null,subHeading:null,location:null,users:null,myKey:null,amount:null,checked:false,
          checked1:false,checked2:false,checked3:false,below1:false,average1:false,high1:false,value:"S"
            };
    }
    handleOnPress(value){
                this.setState({value:value})
          }
    static navigationOptions =
          {
                title: 'Seller',
                header:true
              // headerTintColor: 'black',
              // headerBackgroundColor: '#0087B7',
              //     style: {
              //       backgroundColor: '#0087B7'
              //     },
              //     titleStyle: {
              //       color: '#FFFFFF'
              //     }
              
          };
    FunctionToOpenSecondActivity = () =>
        {
              this.props.navigation.navigate('Seven');
         }
    remove(){ 
              let key=['average1','below1','high1','value','heading','subHeading','location','users','amount','imageSource'];
              AsyncStorage.multiRemove(key,(error)=>{

        })
    }
    user_age(){   
            if(this.state.below1===true){
                AsyncStorage.setItem('below1',"18-30")
            }
            else if(this.state.average1==true){
                AsyncStorage.setItem('average1',"30-45")
            }
            else if(this.state.high1==true){
                AsyncStorage.setItem('high1',"45+")
            }       
            }
   async check_Box(){
        if(this.state.value=="S"){
           await AsyncStorage.setItem('value',"S")
        }
        else if(this.state.value=="M"){
           await AsyncStorage.setItem('value',"M")
        }
        else if(this.state.value=="L"){
           await AsyncStorage.setItem('value',"L")
        }
        else if(this.state.value=="XL" || "Xl" || "xL" || "xl"){
           await AsyncStorage.setItem('value',"XL")
        }
    }
    async saveKey(amount) {
        try {
          await AsyncStorage.setItem('amount', amount);
        } 
        catch (error) {
          console.log("Error saving data" + error);
        }
      }
      async saveKey1(location) {
        try {
            await AsyncStorage.setItem('location', location);}
            catch (error) {
                console.log("Error saving data" + error);
              }
            }
      async saveKey2(heading) {
                try {
                    await AsyncStorage.setItem('heading', heading);}
                    catch (error) {
                        console.log("Error saving data" + error);
                      }
                    }
      async saveKey3(subHeading) {
                        try {
                            await AsyncStorage.setItem('subHeading', subHeading);}
                            catch (error) {
                                console.log("Error saving data" + error);
                              }
                            }
      async saveKey4(users) {
                                try {
                                    await AsyncStorage.setItem('users', users);}
                                    catch (error) {
                                        console.log("Error saving data" + error);
                                      }
                                    }
      async saveKey5(imageSource) {
                                        try {
                                            await AsyncStorage.setItem('imageSource', imageSource);}
                                            catch (error) {
                                                console.log("Error saving data" + error);
                                              }
                                            }
      async getKey() {
        try {
          const amount = await AsyncStorage.getItem('amount');
          const heading = await AsyncStorage.getItem('heading');
          const subHeading = await AsyncStorage.getItem('subHeading');
          const location = await AsyncStorage.getItem('location');
          const users = await AsyncStorage.getItem('users');
          const imageSource = await AsyncStorage.getItem('imageSource');
          const below1 = await AsyncStorage.getItem('below1');
          const average1 = await AsyncStorage.getItem('average1');
          const high1 = await AsyncStorage.getItem('high1');
          const value = await AsyncStorage.getItem('value')
          this.setState({amount: amount});
          this.setState({value: value});
          this.setState({heading: heading});
          this.setState({subHeading: subHeading});
          this.setState({location: location});
          this.setState({users: users});
          this.setState({imageSource: imageSource});
          this.setState({below1: below1});
          this.setState({average1: average1});
          this.setState({high1: high1});
     //  Alert.alert( `${this.state.checked} ${this.state.below1} ${this.state.average1} ${this.state.high1} ${this.state.checked1} ${this.state.checked2} ${this.state.checked3} ${this.state.heading}  ${this.state.subHeading}  ${this.state.location} ${this.state.users} ${this.state.amount} `) 
          GLOBAL.locationS=this.state.location;
          GLOBAL.heading=this.state.heading;
          GLOBAL.subHeading=this.state.subHeading;
          GLOBAL.users=this.state.users;
          GLOBAL.amount=this.state.amount;
          GLOBAL.value=this.state.value;
          GLOBAL.below1=this.state.below1;
          GLOBAL.average1=this.state.average1;
          GLOBAL.high1=this.state.high1;
          GLOBAL.imageSource=this.state.imageSource
        } catch (error) {
          console.log("Error retrieving data" + error);
        }
        if(GLOBAL.locationS==null){
          Alert.alert("please enter data")
        }else{
          Alert.alert("Data Entered Successfully")
        }
      }
      selectPhotoTapped(){const options={
        
        };
        showImagePicker(options,(response)=>{
            console.log('Response=',response);
            if(response.didCancel){
                console.log("User Cancelled photo picker");
            }
            else if(response.error){
                console.log('ImagepickerError',response.error);
            }
            else if (response.customButton) {
                console.log('user press custom button',response.customButton);
            }
            else{
                let source = response.uri
                this.setState({
                    imageSource:source
                })
            }
        })
    }
    size_Image()
    {
              if(this.state.value==null){
                      return <Text>No Size Fixed</Text>
                    }
              else{
                return <Text>{this.state.value}</Text>
              }
    }
    user_Age(){
        // if(this.state.text!=null){
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
    addressPicker(){
    // RNGooglePlacePicker.show((response) => {
    //     if (response.didCancel) {
    //       console.log('User cancelled GooglePlacePicker');
    //     }
    //     else if (response.error) {
    //       console.log('GooglePlacePicker Error: ', response.error);
    //     }
    //     else {
    //       this.setState({
    //         location: response
    //       });
    //     }
    // })
    }
    render() {
        return (
          <View style={styles.container}>
            <View style={{ flex: 0.1,justifyContent: 'space-between',flexDirection: 'row',marginLeft:10}}>  
                  <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>       
                    <View style={styles.ImageContainer}>            
                        {this.state.imageSource===null ? <Button style={{fontSize:20}} onPress={this.selectPhotoTapped.bind(this)} title="Select Image                     "/>                                                        :
                          <Image onPress={this.saveKey5(this.state.imageSource)} source={this.state.imageSource} />}          
                    </View>
                  </TouchableOpacity>
            </View>
            <View style={{ flex: 0.2,flexDirection: 'row',justifyContent: 'space-between'}}>
                     <Button onPress={this.FunctionToOpenSecondActivity} title="click here to see image"/>
            </View>
            <View style={{ flex: 0.2,flexDirection: 'row'}}>
               <Text style={{fontSize:20,color:"#BA55D3"}}>  Image Size       </Text>
               <TouchableOpacity onPress={this.check_Box()} style={{ flex: 0.1,flexDirection: 'row',justifyContent: 'space-between'}}>
               <RadioButton value='black' color='black' label='S' currentValue={this.state.value} value={"S"} onPress={this.handleOnPress.bind(this)}>
                 <Text> S      </Text>
                 </RadioButton>
               
               <RadioButton label='M' currentValue={this.state.value} value={"M"} onPress={this.handleOnPress.bind(this)}>
                 <Text> M      </Text>
                 </RadioButton>
                      
                 <RadioButton label='L' currentValue={this.state.value} value={"L"} onPress={this.handleOnPress.bind(this)}>
                 <Text> L      </Text>
                 </RadioButton>
                 
                 <RadioButton label='XL' currentValue={this.state.value} value={"XL"} onPress={this.handleOnPress.bind(this)}>
                 <Text> XL</Text>
                 </RadioButton>
                 </TouchableOpacity>
        </View>
            {/* <View style={{ flex: 0,flexDirection: 'row'}}>
                  <Text style={{fontSize:20}}>ImageSize      </Text> 
                  <TouchableOpacity onPress={this.check_Box()} style={{ flex: 0.1,flexDirection: 'row'}}>
                      <CheckBox label='S'   checked={this.state.checked}
                              onChange={() => this.setState({ checked: !this.state.checked })} />
                      <CheckBox label='M' title='Click Here' checked1={this.state.checked1}
                              onChange={() => this.setState({ checked1: !this.state.checked1 })} />
                      <CheckBox label='L' title='Click Here' checked2={this.state.checked2}
                              onChange={() => this.setState({ checked2: !this.state.checked2 })} />
                      <CheckBox label='XL' title='Click Here' checked3={this.state.checked3}
                              onChange={() => this.setState({ checked3: !this.state.checked3 })} />
                  </TouchableOpacity>
              </View> */}
              <View style={{flex: 0,alignItems:'flex-start', justifyContent:'flex-start',flexDirection: 'row'}}>
                  <Text style={{fontSize:20,color:"#BA55D3"}}>  Size                          </Text>
                  <Text style = {{textAlign: 'center',marginBottom: 7,height: 40,width:175,borderWidth: 1,borderColor: '#BA55D3',borderRadius: 6 ,}} 
                    autoCapitalize = "none">{this.size_Image()}</Text>
              </View>
              <View style={{ flex: 0.2,flexDirection: 'row'}}>
                  <Text style={{fontSize:20,color:"#BA55D3"}} >  Heading                 </Text>
                      <TextInput style = {styles.input} onChangeText={(heading) => this.saveKey2(heading)}
                        underlineColorAndroid = "transparent"
                        placeholder = "Heading"
                          width="50%"
                        autoCapitalize = "none"/>
              </View>
              <View style={{ flex: 0.2,flexDirection: 'row'}}>
                  <Text style={{fontSize:20,color:"#BA55D3"}} >  SubHeading         </Text>
                  <TextInput style = {styles.input} onChangeText={(subHeading) => this.saveKey3(subHeading)}
                    underlineColorAndroid = "transparent"
                    placeholder = "Sub Heading"
                      width="50%"
                    autoCapitalize = "none"/>
              </View>
              <View style={{ flex: 0.2,flexDirection: 'row'}}>
                  <Text style={{fontSize:20,color:"#BA55D3"}}>  Amount                  </Text>
                     <TextInput style = {styles.input} onChangeText={(amount) => this.saveKey(amount)}
                    underlineColorAndroid = "transparent"
                    placeholder = "Amount"
                      width="50%"
                    autoCapitalize = "none"/>
              </View>
              <View style={{ flex: 0.2,flexDirection: 'row'}}>
                  <TouchableOpacity onPress={this.addressPicker()}>
                  <Text style={{fontSize:20,color:"#BA55D3"}} >  Location                 </Text>
                  </TouchableOpacity>
                     <TextInput style = {styles.input} onChangeText={(location) => this.saveKey1(location)}
                    underlineColorAndroid = "transparent"
                    placeholder = "Location"
                      width="50%"
                    autoCapitalize = "none"/>
              </View>
              <View style={{ flex: 0.2,flexDirection: 'row',justifyContent: 'space-between',flexDirection: 'row'}}>
                  <Text style={{fontSize:20,color:"#BA55D3"}}>  User Age  </Text> 
                  <TouchableOpacity onPress={this.user_age()} style={{flexDirection: 'row'}}>
                      <CheckBox label='18-30' below1={this.state.below1} style={{color:"#7B68EE"}}
                          onChange={() => this.setState({ below1: !this.state.below1 })} />
                      <CheckBox label='30-45' average1={this.state.average1}
                          onChange={() => this.setState({ average1: !this.state.average1 })} />
                      <CheckBox label='45+' high1={this.state.high1}
                            onChange={() => this.setState({ high1: !this.state.high })} />
                  </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row'}}>
                  <Text style={{fontSize:20,color:"#BA55D3"}}>  Age                           </Text>
                     <Text style = {{textAlign: 'center',marginBottom: 7,height: 40,width:175,borderWidth: 1,borderColor: '#BA55D3',borderRadius: 6 ,}} 
                    autoCapitalize = "none">{this.user_Age()}</Text>
              </View>
              <View style={{ flex: 0.2,flexDirection: 'row'}}>
                  <Text style={{fontSize:20,color:"#BA55D3"}} >  Users                      </Text>
                     <TextInput style = {styles.input} onChangeText={(users) => this.saveKey4(users)}
                    underlineColorAndroid = "transparent"
                    placeholder = "No of Users"
                      width="50%"
                    autoCapitalize = "none"/>
              </View>
              <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'flex-end',marginLeft:10,marginRight:20}}>
                  <Button color={ '#800080' } disabled={ this.state.buttonDisabled } 
                      onPress={this.getKey.bind(this)}
                      title={ 'Submit' }  /> 
                  <Button style={{alignItems: 'flex-end'}} color={ '#800080' } disabled={ this.state.buttonDisabled } 
                      onPress={this.remove.bind(this)}
                      title={ 'Remove' }  /> 
              </View>
          </View>
    );
  }
}
// export default Project1 = StackNavigator(
//               {
//                 First: { screen: HomeScreen },
//                 Second: { screen: images },
//               },
//               {
//                 initialRouteName: 'First',
//                 /* The header config from HomeScreen is now here */
//                 navigationOptions: {
//                   headerStyle: {
//                     backgroundColor: '#800080',
//                   },
//                   headerTintColor: '#fff',
//                   headerTitleStyle: {
//                     fontWeight: 'bold',
//                   },
//                 },
//               }
//             );

const styles = StyleSheet.create({
    container: {
                paddingTop: 23,
                flex:1,
                justifyContent:'space-around',
                marginLeft:0,
                marginRight:0,
                backgroundColor:"#F0F8FF"
                },
    input: {
                textAlign: 'center',
                marginBottom: 7,         
                height: 40,
                width:100,        
                borderWidth: 1,
                borderColor: '#BA55D3',
                marginLeft:5,
                marginRight:5,
                borderRadius: 6 ,
            },
    submitButton: {
                backgroundColor: '#7a42f4',
                padding: 10,
                margin: 15,
                height: 40,
                  },
    submitButtonText:{
                color: 'white'
                      },
    containers:{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#FFF8E1'
                },
    ImageContainer:{
                borderRadius:10,
                width:250,
                height:250,
                borderColor:'#9B9B9B',
                alignItems:'center'
                    }
 })



