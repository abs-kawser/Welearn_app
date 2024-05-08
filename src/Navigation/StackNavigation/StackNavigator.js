import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from '../../screen/ProductScreen';
import LoginScreen from '../../screen/LoginScreen';
import Course from '../../screen/course/CourseScreen';
import Quiz from '../../screen/quiz/Quiz';
import Profile from '../../screen/profile/Profile';
import Settings from '../../screen/settings/Settings';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import DrawerNavigator from '../DrawerNavigation/DrawerNavigator';
import CourseScreen from '../../screen/course/CourseScreen';
import AssignedCourse from '../../screen/course/AssignedCourse';
import ChangePass from '../../screen/ChangePass';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
     
    const navigation = useNavigation();

    return (

        <Stack.Navigator>

            <Stack.Screen
                name="HomeScreen"
                component={DrawerNavigator}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Course"
                component={CourseScreen}
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

            <Stack.Screen
                name="Assigned"
                component={AssignedCourse}
                options={{ headerShown: false }}
            />

            <Stack.Screen

              name="Password"
              component={ChangePass}
              options={{ headerShown: false }}

            />

        </Stack.Navigator>

    );
}

export default StackNavigator;

const styles = StyleSheet.create({


})