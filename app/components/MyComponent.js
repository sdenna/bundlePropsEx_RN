import { StyleSheet, Text, View } from 'react-native'

/*
 When you destructure props in a functional component parameter list, you don't need to include curly braces around props.  That is why there are no { } 
 around props
*/
export default function MyComponent (props) {

  // the names used here need to match the names used in myProps that
  // I passed in my App.js

  const {title, subTitle, myComponentStyles} = props;
  
  // to access myComponentStyles I need to access it via the in line styles.  
  // The styles object cannot access the values
  return (
    <View style={[styles.container, {backgroundColor: myComponentStyles.containerBackground, borderColor: myComponentStyles.fontColor}]}>
        <View style={styles.textContainer}>
          <Text style={[styles.title, {color: myComponentStyles.fontColor}]}>{title}</Text>
          <Text style={[styles.subTitle, {color: myComponentStyles.fontColor}]}>{subTitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 16,
    }, 
    container: {
        width: '90%',
        justifyContent: 'center',
        padding: 10,
        height: 75,
        borderWidth: 1,
        borderRadius: 5,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',  
    },
})