import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Auth from './App/Screens/LoginScreen/Auth';
import Splash from './App/Screens/SplashScreen/Splash';
import Home from './App/Screens/HomeScreen/Home';
import LoginPage from './App/Screens/AuthScreens/Login';
import Choose from './App/Screens/HomeScreen/Choose';
import Homegames from './App/Screens/HomeScreen/Homegames';


import Lection1 from './App/Screens/Lections/Lection1';
import Lesson2 from './App/Screens/Lections/Lesson2';
import Lesson3 from './App/Screens/Lections/Lesson3';
import Lesson4 from './App/Screens/Lections/Lesson4';
import Joc1 from './App/Screens/Jocuri/Joc1';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Colors from './App/Utils/Colors';
import Quiz from './App/Screens/Quiz/Quiz';
import Wrong from './App/Screens/Quiz/Wrong';
import Right from './App/Screens/Quiz/Right';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={Auth}  options={{
          headerShown:false,
          backgroundColor:Colors.BEST,
        }}/>
        <Stack.Screen name="LoginPage" component={LoginPage} options={{
          headerShown:false }}/>
        <Stack.Screen name="Splash" component={Splash} options={{
          headerShown:false }}/>
        <Stack.Screen name="Home" component={Home} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Choose" component={Choose} options={{
          headerShown:false
        }}/>
        
        <Stack.Screen name="Lection1" component={Lection1} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Quiz" component={Quiz} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Wtong" component={Wrong} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Right" component={Right} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Lesson2" component={Lesson2} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Lesson3" component={Lesson3} options={{
          headerShown:false
        }}/>

        <Stack.Screen name="Lesson4" component={Lesson4} options={{
          headerShown:false
        }}/>
      
      <Stack.Screen name="Joc1" component={Joc1}  options={{
          headerShown:false,
        }}/>
        <Stack.Screen name="Homegames" component={Homegames}  options={{
          headerShown:false,
        }}/> 
        </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                    
    backgroundColor: '#fff',
    paddingTop:20
  },
});
