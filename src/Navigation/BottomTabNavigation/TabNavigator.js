import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/Home/HomeScreen';
import { Image } from 'react-native-animatable';
import CourseScreen from '../../screen/course/CourseScreen';
import Quiz from '../../screen/quiz/Quiz';


    const Tab = createBottomTabNavigator();

        const TabNavigator = () => {

            return (

            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >

                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        headerTitle: 'Home',
                        //  tabBarLabel: t('navigation.Home'),
                    }}
                />

                <Tab.Screen
                    name="Course"
                    component={CourseScreen}
                    options={{
                        headerShown: false,
                        headerTitle: 'Home',
                        //  tabBarLabel: t('navigation.Home'),
                    }}
                />

                <Tab.Screen
                    name="Quiz"
                    component={Quiz}
                    options={{
                        headerShown: false,
                        headerTitle: 'Home',
                        //  tabBarLabel: t('navigation.Home'),

                    }}

                />
            </Tab.Navigator>


            );

        };

    export default TabNavigator ;

    const styles = StyleSheet.create({

    });