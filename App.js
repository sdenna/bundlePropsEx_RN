import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from './app/components/MyComponent';

/*
Bundling props to a component as an object
https://chat.openai.com/share/2d2291a1-184a-4842-811d-23b035d03a7d
*/

export default function App() {

  const myProps ={
    title: 'M448 Mobile Apps',
    subTitle: 'Extra React Native Tips',
    
    myComponentStyles: {
      fontColor: 'darkblue',
      textBackgroundColor: 'lightblue',
      containerBackground: 'lightgrey',
    }
  }

  return (
    <View style={styles.container}>
      <MyComponent  {...myProps} />
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
