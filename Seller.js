
import React,{Component} from 'react';
import { Text, View ,Button,TouchableOpacity,TextInput,StyleSheet,Image,Alert,AsyncStorage} from 'react-native';
import CheckBox from 'react-native-checkbox';

import {showImagePicker} from 'react-native-image-picker'

export default class HomeScreen extends React.Component {
    constructor(){
        super();
    }
    state={
        imageSource:null,heading:null,subHeading:null,location:null,users:null,myKey:null,amount:null,checked:false,
        checked1:false,checked2:false,checked3:false,below1:false,average1:false,high1:false
    };
    remove(){

        let key=['checked','average1','below1','high1','checked1','checked2','checked3','heading','subHeading','location','users','amount','imageSource'];
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
        if(this.state.checked==true){
           await AsyncStorage.setItem('checked',"S")
          //  this.setState({checked1: false ,checked2: false,checked3: false});
        }
        else if(this.state.checked1==true){
           await AsyncStorage.setItem('checked1',"M")
           // this.setState({checked: false ,checked2: false,checked3: false});
        }
        else if(this.state.checked2==true){
           await AsyncStorage.setItem('checked2',"L")
           // this.setState({checked1: false ,checked: false,checked3: false});
        }
        else if(this.state.checked3==true){
           await AsyncStorage.setItem('checked3',"XL")
           // this.setState({checked1: false ,checked2: false,checked3: false});
        }
    }
    sizeImage(){
    
        if(this.state.checked==false){
          if(this.state.checked1==false){
            if(this.state.checked2==false){
              if(this.state.checked3!=false){
                  return     //<Image style={{width: 400, height: 400}} source={{uri:this.state.imageSource}}></Image>
                  <ImageBackground source={this.state.imageSource} style={{width: '100%', height: '100%'}}>
                  <Text>Inside</Text>
                </ImageBackground>
              }
            }else{
              return       <Image style={{width: 300, height: 300}} source={{uri:this.state.imageSource}}></Image>
    
            }
          }else{
            return       <Image style={{width: 200, height: 200}} source={{uri:this.state.imageSource}}></Image>
    
          }
        }
        else{
          return       <Image style={{width: 100, height: 100}} source={{uri:this.state.imageSource}}></Image>
    
        }
      }
    async saveKey(amount) {
        // try{
        //     AsyncStorage.multiSet([['heading',heading], ['subHeading',subHeading], ['location',location], ['users',users],['amount',amount]],(error)=>{
        //         Alert.alert( `${this.state.heading}  ${this.state.subHeading}  ${this.state.location} ${this.state.users} ${this.state.amount} `) 
        //     })
        
        try {
          await AsyncStorage.setItem('amount', amount);
        //   await AsyncStorage.setItem('heading', heading);
        //   await AsyncStorage.setItem('subHeading', subHeading);
        //   await AsyncStorage.setItem('location', location);
        //   await AsyncStorage.setItem('users', users);
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
          const checked = await AsyncStorage.getItem('checked');
          const checked1 = await AsyncStorage.getItem('checked1');
          const checked2 = await AsyncStorage.getItem('checked2');
          const checked3 = await AsyncStorage.getItem('checked3');
          const below1 = await AsyncStorage.getItem('below1');
          const average1 = await AsyncStorage.getItem('average1');
          const high1 = await AsyncStorage.getItem('high1');
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
     //  Alert.alert( `${this.state.checked} ${this.state.below1} ${this.state.average1} ${this.state.high1} ${this.state.checked1} ${this.state.checked2} ${this.state.checked3} ${this.state.heading}  ${this.state.subHeading}  ${this.state.location} ${this.state.users} ${this.state.amount} `) 
       GLOBAL.locationS=this.state.location;
       GLOBAL.heading=this.state.heading;
       GLOBAL.subHeading=this.state.subHeading;
       GLOBAL.users=this.state.users;
       GLOBAL.amount=this.state.amount;
       GLOBAL.checked=this.state.checked;
       GLOBAL.checked1=this.state.checked1;
       GLOBAL.checked2=this.state.checked2;
       GLOBAL.checked3=this.state.checked3;
       GLOBAL.below1=this.state.below1;
       GLOBAL.average1=this.state.average1;
       GLOBAL.high1=this.state.high1;
        } catch (error) {
          console.log("Error retrieving data" + error);
        }
        if(GLOBAL.locationS==null){
          Alert.alert("please enter data")
        }else{
          Alert.alert("Data Entered Successfully")
        }
      }
    onSubmit(){
       const {heading,subHeading,amount,location,users} = this.state;
       Alert.alert( `${heading}  ${subHeading} ${amount}  ${location} ${users}`) 
    }

    selectPhotoTapped(){
        const options={
            quality:1.0,
            maxWidth:500,maxHeight:500,
            storageOption:{
                skipBackup:true
            }
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
        
        if(this.state.checked==null){
          if(this.state.checked1==null){
            if(this.state.checked2==null){
              if(this.state.checked3!=null){
                  return       <Image style={{width: 400, height: 400}} source={{uri:this.state.imageSource}}></Image>
    
              }else{
                return       <Image style={{width: 400, height: 400}} source={{uri:this.state.imageSource}}></Image>
    
              }
            }else{
              return       <Image  style={{width: 400, height: 400}} source={{uri:this.state.imageSource}}></Image>
    
            }
          }else{
            return       <Image style={{width: 400, height: 400}} source={{uri:this.state.imageSource}}></Image>
    
          }
        }
        else{
          return       <Image style={{width: 400, height: 400}} source={{uri:this.state.imageSource}}></Image>
    
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
    //RNGooglePlacePicker.show((response) => {
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
    <Text style={{fontSize:25,color:'#9C27B0',fontFamily: 'Cochin',fontWeight: 'bold',alignItems:'center',justifyContent:'center'}}>                      Seller</Text>
    <View>
        <Image onPress={this.sizeImage()}/>
            </View>
        <View style={{ flex: 0.1,justifyContent: 'space-between',flexDirection: 'row',marginLeft:10}}>  
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={styles.ImageContainer}>
                {this.state.imageSource===null ? <Text style={{fontSize:20}}>Select                       </Text>:<Image onPress={this.saveKey5(this.state.imageSource)} source={this.state.imageSource} />}
            </View>

            </TouchableOpacity>
        </View>
        <View style={{ flex: 0,flexDirection: 'row'}}>
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
        </View>
        <View style={{flex: 0,alignItems:'flex-start', justifyContent:'flex-start',flexDirection: 'row'}}>
      <Text style={{fontSize:20}}>Size                         </Text>
      <Text width="70%" height="50%" style = {styles.input}>{this.size_Image()}</Text>
      </View>
        <View style={{ flex: 0.2,flexDirection: 'row'}}>
        <Text style={{fontSize:20}} >Heading                 </Text>
            <TextInput style = {styles.input} onChangeText={(heading) => this.saveKey2(heading)}
               underlineColorAndroid = "transparent"
               placeholder = "Heading"
                width="50%"
               autoCapitalize = "none"/>
        </View>
        <View style={{ flex: 0.2,flexDirection: 'row'}}>
        <Text style={{fontSize:20}} >SubHeading         </Text>
            <TextInput style = {styles.input} onChangeText={(subHeading) => this.saveKey3(subHeading)}
               underlineColorAndroid = "transparent"
               placeholder = "Sub Heading"
                width="50%"
               autoCapitalize = "none"/>
        </View>
        <View style={{ flex: 0.2,flexDirection: 'row'}}>
            <Text style={{fontSize:20}}>Amount                  </Text>
            <TextInput style = {styles.input} onChangeText={(amount) => this.saveKey(amount)}
               underlineColorAndroid = "transparent"
               placeholder = "Amount"
               width="50%" height="50%"
               autoCapitalize = "none"/>
        </View>
        <View style={{ flex: 0.2,flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.addressPicker()}>
            <Text style={{fontSize:20}} >Location                 </Text>
            </TouchableOpacity>
            <TextInput style = {styles.input} onChangeText={(location) => this.saveKey1(location)}
               underlineColorAndroid = "transparent"
               placeholder = "Location"
               width="50%" height="50%"
               autoCapitalize = "none"/>
        </View>
        <View style={{flex: 0, flexDirection: 'row'}}>
            <Text style={{fontSize:20}}>User Age  </Text> 
            <TouchableOpacity onPress={this.user_age()} style={{flexDirection: 'row'}}>
            <CheckBox label='18-30' below1={this.state.below1}
          onChange={() => this.setState({ below1: !this.state.below1 })} />
             <CheckBox label='30-45' average1={this.state.average1}
          onChange={() => this.setState({ average1: !this.state.average1 })} />
            <CheckBox label='45+' high1={this.state.high1}
          onChange={() => this.setState({ high1: !this.state.high })} />
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row'}}>
      <Text style={{fontSize:20}}>Age                          </Text>
      <Text placeholder = "Select users age" width="50%" height="50%" style = {styles.input}>{this.user_Age()}</Text>
      </View>
        <View style={{ flex: 0.2,flexDirection: 'row'}}>
            <Text style={{fontSize:20}}>Volume                   </Text>
            <TextInput style = {styles.input} onChangeText={(users) => this.saveKey4(users)}
               underlineColorAndroid = "transparent"
               placeholder = "Numbers of users"
                 width="50%" height="50%"
               autoCapitalize = "none"/>
        </View>
        <View style={{flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end', backgroundColor: 'grey',marginLeft:10,marginRight:20}}>
        <Button 
            color={ 'blue' } 
            disabled={ this.state.buttonDisabled } 
           // onPress={this.onSubmit.bind(this)}
            onPress={this.getKey.bind(this)}
            title={ 'Submit' }  
            /> 
             <Button style={{alignItems: 'flex-end'}}
            color={ 'blue' } 
            disabled={ this.state.buttonDisabled } 
           // onPress={this.onSubmit.bind(this)}
            onPress={this.remove.bind(this)}
            title={ 'Remove' }  
            /> 
            </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
       paddingTop: 23,
       flex:1,
       justifyContent:'space-around',
       marginLeft:10,
       marginRight:10
    },
    input: {
        textAlign: 'center',
 
        marginBottom: 7,
         
        height: 40,
        width:100,
         
        borderWidth: 1,
        // Set border Hex Color Code Here.
         borderColor: '#D50000',
         
         // Set border Radius.
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



