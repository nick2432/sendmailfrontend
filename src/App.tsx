/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Sendmail from './Screens/Sendemail'
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
function App() {
  return (
   <SafeAreaView style={styles.container}>
       <Sendmail/>
   </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{ 
    flex:1,
    justifyContent:'center',
    padding:25,
    height:'100%',
    width:"100%",
  }
})
export default App;
