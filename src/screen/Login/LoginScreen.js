import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import base64 from 'base-64';

import { AuthContext } from '../../Context/AuthContext';
import { Base_Url } from '../../../variable';

const LoginScreen = () => {

  const [showPassword, setShowPassword] = useState(false);

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const [username, setUserName] = useState('');
  const [userPassword, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoader, setIsLoader] = useState(false); // State for managing loading indicator

  // const handleLogin = async () => {
  //   if (!username || !userPassword) {
  //     // setError('Please fill in both username and password fields');
  //     ToastAndroid.show('User ID and Password Required', ToastAndroid.SHORT);
  //     return;
  //   }
  //   setIsLoader(true); // Start loading

  //   // setIsLoading(true)

  //   const requestData = {
  //     UserName: username,
  //     Password: userPassword,
  //   };

  //   // const authHeader = 'Basic ' + base64.encode(USERNAME + ':' + PASSWORD);

  //   const response = await fetch(`${Base_Url}/Api/Home/LoginApi`,{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // Authorization: authHeader,
  //     },
  //     body: JSON.stringify(requestData),
  //   });

  //   const result = await response.json();

  //   setIsLoader(false); // Stop loading

  //   console.log('this is login details', JSON.stringify(result, null, 2));
  //   if (result.status.isSuccess === true) {
  //     await AsyncStorage.setItem('userData', JSON.stringify(result));
  //     setIsLoggedIn(prevUserDetails => ({
  //       ...prevUserDetails,
  //       login: true,
  //       userDetails: result,
  //     }));

  //     // navigation.navigate('HomeScreen');
  //     ToastAndroid.show(
  //       result.status.isSuccess === true && 'Login Successfully',
  //       ToastAndroid.SHORT,
  //     );
  //   } else {
  //     const errorMessage = 'Please insert correct user name and password';
  //     setError(errorMessage);
  //   }
  // };

  const handleLogin = async () => {

    if (!username || !userPassword) {
      ToastAndroid.show('User ID and Password Required', ToastAndroid.SHORT);
      return;
    }
    setIsLoader(true);

    const requestData = {
      userName: username,
      password: userPassword,
    };

    try {
      const response = await fetch(`${Base_Url}/api/Home/Login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();

      setIsLoader(false);

      console.log('this is login details', result);

      if (result.status.isSuccess === true) {
        await AsyncStorage.setItem('userData', JSON.stringify(result));
        setIsLoggedIn(prevUserDetails => ({
          ...prevUserDetails,
          login: true,
          userDetails: result,
        }));
        ToastAndroid.show('Login Successfully', ToastAndroid.SHORT);
      } else {
        const errorMessage = 'Please insert correct user name and password';
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Login API error:', error);
      setIsLoader(false);
      setError('An error occurred while logging in');
    }
  };


  return (

    
    <ScrollView style={styles.MainContainter} keyboardShouldPersistTaps="always">
      
      
      <StatusBar
        backgroundColor="#cefbff" // f8f9fa  Set the background color of the status bar
        barStyle="dark-content" // Set the style of the status bar text (light or dark)
      />

      <View style={{ marginVertical: 20 }}>
        {/* header text part */}
        <View style={styles.TextPart}>
          <Text
            style={{
              fontWeight: 'bold',
              fontFamily: 'Roboto-bold',
              fontSize: 25,
              color: 'black',
            }}>
            {' '}
            Welcome to {''}
            <Text style={{ fontWeight: 'bold' }}>
              <Text style={styles.We}>We</Text>
              <Text style={styles.Learn}>Learn</Text>
            </Text>
          </Text>
          <Text style={{ marginTop: 35, color: 'black', fontSize: 15 }}>
            Login to access your account
          </Text>
        </View>

        {/* forms input view */}

        <View style={{ marginTop: 40, padding: 20 }}>
          {/* user name */}
          <Text style={styles.label}>User Name</Text>
          <Animatable.View
            animation="fadeInLeft"
            duration={1000}
            style={styles.inputContainer}>
            <View style={styles.inputIcon}>
              <Icon name="user" size={20} color="#0B87AC" />
            </View>
            <TextInput
              value={username}
              onChangeText={text => setUserName(text)}
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#adb5bd"
            />
          </Animatable.View>

          {/* password */}
          <Text style={styles.label}>Password</Text>
          <Animatable.View
            animation="fadeInLeft"
            duration={1000}
            style={styles.inputContainer}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.inputIcon}>
                <Icon name="lock" size={20} color="#0B87AC" />
              </View>
              <TextInput
                onChangeText={text => setPassword(text)}
                value={userPassword}
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#adb5bd"
                secureTextEntry={!showPassword}
              />
            </View>

            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye' : 'eye-slash'}
                size={20}
                color="#495867"
              />
            </TouchableOpacity>
          </Animatable.View>

          {/* <View>
              <Text style={{color: '#777B7A', textAlign: 'right'}}>
                Forgot Password?
              </Text>
            </View> */}
          {error && <Text style={styles.warning}>{error}</Text>}
          {/* button */}
          <Animatable.View animation="fadeInUp" duration={1000}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
              disabled={isLoader}>
              {isLoader && (
                <ActivityIndicator
                  size="small"
                  color="#ffffff"
                  style={styles.loadingIndicator}
                />
              )}
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
        <Animatable.View
          style={styles.TermCondition}
          animation="fadeInUp"
          duration={1000}>
          <Text style={{ fontSize: 14, color: '#777777', textAlign: 'center' }}>
            By signing in with an account, you agree to WeLearn’s{' '}
          </Text>

          <Text style={{ fontSize: 14, color: '#777777', textAlign: 'center' }}>
            <Text
              style={{
                textDecorationLine: 'underline',
                fontWeight: 'bold',
                color: '#000000',
              }}>
              Terms of Service {''}
            </Text>
            and {''}
            <Text
              style={{
                textDecorationLine: 'underline',
                fontWeight: 'bold',
                color: '#000000',
              }}>
              Privacy Policy.
            </Text>
          </Text>
        </Animatable.View>
      </View>


    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  MainContainter: {
    flex: 1,
    backgroundColor: '#cefbff',
    // backgroundColor: '#ffffff',
  },

  TextPart: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
    // backgroundColor:"red",
    fontSize: 25, // Change "ontSize" to "fontSize"
    color: 'black',
    fontWeight: 'bold',
  },

  We: {
    fontSize: 25,
    color: '#001EBC',
    fontWeight: 'bold',
  },
  Learn: {
    fontSize: 25,
    color: '#D15800',
    fontWeight: 'bold',
  },

  // ------

  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomView: {
    flex: 1.5,
    backgroundColor: 'white',
    bottom: 50,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
    maxWidth: 400, // Limit the input container width for responsiveness
    // borderWidth: 1,
    // borderColor: '#0B87AC',

    // elevation: 2,
  },
  inputIcon: {
    margin: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },

  label: {
    // color: '#3B3C3E',
    color: '#777777',
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 10,
  },

  loginButton: {
    backgroundColor: '#00A9B8',
    borderRadius: 10,
    paddingVertical: 10,
    // paddingHorizontal: 15, #2358E1 219ebc color: '#777777'
    width: '100%',
    maxWidth: 400, // Limit the button width for responsiveness
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,

    // elevation: 2,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    // fontWeight: "500",
    textAlign: 'center',
  },
  warning: {
    color: 'red',
    marginTop: 10,
  },

  // ------

  TermCondition: {
    // alignSelf: 'center',
    //  backgroundColor:"red"
    padding: 20,
  },
  iconContainer: {
    position: 'absolute',
    // top: 25,
    right: 20,
  },
});



