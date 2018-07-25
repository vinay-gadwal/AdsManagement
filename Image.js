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
export default class images extends Component{
sizeImage(){ 
    if(GLOBAL.checked=="S" || "s"){
      if(GLOBAL.checked=="M" || "m"){
        if(GLOBAL.checked=="L" || "l"){
          if(GLOBAL.checked!="XL" || "xl" || "Xl" || "xL"){
              return       <Image style = {{marginTop:40, width: 200, height: 100 }} source={{uri:GLOBAL.imageSource}}></Image>    

          }else{
            return      <Text>Select Image Size</Text>

          }
        }else{
          return       <Image  style = {{marginTop:40, width: 300, height: 200 }} source={{uri:GLOBAL.imageSource}}></Image>

        }
      }else{
        return       <Image style = {{marginTop:40, width: 400, height: 300 }} source={{uri:GLOBAL.imageSource}}></Image>

      }ß
    }
    else{
      return       <Image style = {{marginTop:40, width: 500, height: 400 }} source={{uri:GLOBAL.imageSource}}></Image>

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