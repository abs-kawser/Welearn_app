import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from '../DrawerNavigation/DrawerNavigator';
import ProductScreen from '../../screen/ProductScreen';
import LoginScreen from '../../screen/LoginScreen';
import Course from '../../screen/course/Course';
import Quiz from '../../screen/quiz/Quiz';
import Profile from '../../screen/profile/Profile';
import Settings from '../../screen/settings/Settings';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    return (

        <Stack.Navigator>

            <Stack.Screen
                name="HomeScreen"
                component={DrawerNavigator}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Course"
                component={Course}
                options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{ headerShown: false }}

            />

              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
              />

             
               <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
              />
 


            <Stack.Screen
                name="Product"
                component={ProductScreen}
                options={{ headerShown: true }}
            />

            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>

    );
}

export default StackNavigator;

const styles = StyleSheet.create({


})