import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './StackNavigator'
import { AuthContext } from '../../Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../../screen/Login/LoginScreen';




const AppNav = () => {


  const { isLoggedIn, setIsLoggedIn, isLoading, setIsLoading } = useContext(AuthContext);
  // const [initialLoginState, setInitialLoginState] = useState(false);
  const [initializing, setInitializing] = useState(true);



  // useEffect(() => {
  //   const getUserData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const userData = await AsyncStorage.getItem('userData');

  //       if (userData !== null) {
  //         setIsLoggedIn(prevUserDetails => ({
  //           ...prevUserDetails,
  //           login: true,
  //           userDetails: JSON.parse(userData),
  //         }));
  //       }

  //       // setIsLoading(false);
  //       // Simulate loading for 2 seconds
  //       // setTimeout(() => {
  //       //   setIsLoading(false);
  //       // }, 2000);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getUserData();
  // }, [])


  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const storedIsLoggedIn = await AsyncStorage.getItem('isLoggedIn');
  //       setInitialLoginState(JSON.parse(storedIsLoggedIn) || false); // Default to false if not found
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   if (!isLoggedIn && !initialLoginState) {
  //     checkLoginStatus();
  //   } else {
  //     setIsLoading(false); // Prevent unnecessary loading on subsequent launches
  //   }
  // }, []);



  useEffect(() => {
    const getUserData = async () => {
      try {
        setIsLoading(true);
        const userData = await AsyncStorage.getItem('userData');
            setIsLoggedIn(prevUserDetails => ({
            ...prevUserDetails,
            login: true,
            userDetails: JSON.parse(userData),
          }));

        // if (userData !== null) {
        //   setIsLoggedIn({
        //     login: true,
        //     userDetails: JSON.parse(userData),
        //   });
        // }
          //       if (userData !== null) {
      
        

      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        setInitializing(false);
      }
    };
    getUserData();
   }, []);

    // Return null while initializing
    if (initializing) {
      return null;
    };

  return (

    <NavigationContainer>
      {isLoggedIn.login !== false && isLoggedIn.userDetails !== null ? (
        <StackNavigator />
      ) : (
        <LoginScreen />
      )}
    </NavigationContainer>

    // <NavigationContainer>
    //   {isLoggedIn || initialLoginState ? (
    //     <StackNavigator />
    //   ) : (
    //     <LoginScreen />
    //   )}
    // </NavigationContainer>

  );

};

export default AppNav;
const styles = StyleSheet.create({
});


