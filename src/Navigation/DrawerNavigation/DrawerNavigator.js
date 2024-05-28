import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DrawerItems from './DrawerItems';
import HomeScreen from '../../screen/Home/HomeScreen';
import ProductScreen from '../../screen/ProductScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (

    <Drawer.Navigator
      drawerContent={props =>
        <DrawerItems {...props} />
      }
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#ffffff',
        headerStyle: {
        backgroundColor: '#00A9B8',
        elevation: 50,
        borderTopWidth: 0,
        borderBottomColor: '#e9ecef',
        height: 80, 

          // backgroundColor: '#739AFF',
          //this is the problem for gap 
          // borderBottomWidth: 1,

        }
      }}
    >
 
       
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
      // options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
 
}

export default DrawerNavigator;

const styles = StyleSheet.create({

});