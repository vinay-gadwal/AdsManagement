import React, { Component } from 'react'
import { View, Image,Text } from 'react-native'
import Project1 from './Seller'

// const images = () => (
//    <Image
//       source = {{ uri: 
//          'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
//       style = {{ width: 200, height: 200 }}
//    />
// )
export default class images extends Component
{
sizeImage(){ 
    if(GLOBAL.value=="S" || "s"){
      return <Image style={{width: 50, height: 50}} source={{uri:GLOBAL.imageSource}}></Image>
    }else if(GLOBAL.value=="M" || "m"){
      return <Image style={{width: 100, height: 100}} source={{uri:GLOBAL.imageSource}}></Image>
    }else if(GLOBAL.value=="L" || "l"){
      return <Image  style={{width: 250, height: 250}} source={{uri:GLOBAL.imageSource}}></Image>
    }else if(GLOBAL.value=="XL" || "xl" || "Xl" || "xL"){
              return <Image style={{width: 500, height: 500}} source={{uri:GLOBAL.imageSource}}></Image>    
          }else{
            return <Text>No Selected Image</Text>
          }
        }
  
render(){   
    return (
        <View style={{ flexDirection: 'row'}}>
        {(GLOBAL.imageSource!=null)?<Text placeholder = "Select users age">{this.sizeImage()}</Text>:<Text>First Choose image </Text>}
        </View>
    )
}
}