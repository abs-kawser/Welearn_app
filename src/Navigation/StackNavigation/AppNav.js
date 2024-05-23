import { StyleSheet, Text, View } from 'react-native'
import React, {useContext, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './StackNavigator'
import { AuthContext } from '../../Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../../screen/Login/LoginScreen';




const AppNav = () => {


  const {isLoggedIn, setIsLoggedIn, isLoading, setIsLoading} =useContext(AuthContext);
  
   

  useEffect(()=>{

    const getUserData = async () => {
      try {
        setIsLoading(true);
        const userData = await AsyncStorage.getItem('userData');

        if (userData !== null) {
          setIsLoggedIn(prevUserDetails => ({
            ...prevUserDetails,
            login: true,
            userDetails: JSON.parse(userData),
          }));
        }

        // setIsLoading(false);
        // Simulate loading for 2 seconds
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  },[])

  return (

    <NavigationContainer>

  {isLoggedIn.login !== false && isLoggedIn.userDetails !== null ? (
        <StackNavigator />
      ) : (
        <LoginScreen/>
      )} 
      {/* <StackNavigator /> */}
    </NavigationContainer>

  );

};

export default AppNav;
const styles = StyleSheet.create({
});


