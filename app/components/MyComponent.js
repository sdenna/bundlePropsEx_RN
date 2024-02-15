import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//style={{color: fontColor, fontSize: fontSizeTitle, fontWeight: 'bold'}}

/*
 When you destructure props in a functional component parameter list, you don't need to include curly braces around props.  That is why there are no { } 
 around props
*/
export default function MyComponent (props) {
  // the names used here need to match the names used in myProps that
  // I passed in my App.js

  const {title, subTitle, myComponentStyles} = props;
  console.log(title + " " + subTitle + " " + myComponentStyles.fontColor )

  return (
    <View style={styles.container}>
        <View>
          <Text >{title}</Text>
          <Text >{subTitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
       // color: fontColor,
        //fontSize: fontSizeTitle,
        fontWeight: 'bold',
    },
    subTitle: {
       // color: fontColor,
       // fontSize: fontSizeSubtitle,
    }, 
    container: {
      //  backgroundColor: backgroundColor,
        height: 150,
        width: '90%',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderWidth: 1,
        borderColor: 'darkgrey',
        height: 75,
        width: '90%',
    },
})