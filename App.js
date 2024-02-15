import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from './app/components/MyComponent';

/*
Bundling props to a component as an object
https://chat.openai.com/share/2d2291a1-184a-4842-811d-23b035d03a7d
*/

export default function App() {

  // when I pass in ...myProps to MyCOmponent what I am doing is using
  // the spread operator to take apart this variable and send in each 
  // key value pair as if I was listing them as indiv props

  // then inside MyComponent I just need to destructure the props
  const myProps ={
    title: 'M448 Mobile Apps',
    subTitle: 'Extra React Native Tips',
        
    myComponentStyles: {
      fontColor: 'darkblue',
      containerBackground: 'lightgrey',
    }
  }

  const styleProps ={
    myComponentStyles: {
      fontColor: 'red', 
      containerBackground: 'yellow',
    }
  }

  return (
    <View style={styles.container}>
      <MyComponent  {...myProps} />
      <MyComponent title="M359 AP Java" subTitle="Best AP course!" {...styleProps} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
