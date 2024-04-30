import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DrawerItems from './DrawerItems';
import HomeScreen from '../../screen/HomeScreen';
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
          // backgroundColor: '#739AFF',
          backgroundColor: 'tomato',
          elevation: 50,
          borderBottomWidth: 1,
          borderTopWidth: 0,
          borderBottomColor: '#e9ecef',
        }
      }}
    >

      <Drawer.Screen
        name="Home"
        component={HomeScreen}
       
      />

      {/* <Drawer.Screen
        name="ProductScreen"
        component={ProductScreen}
      // options={{ headerShown: false }}
      /> */}

    </Drawer.Navigator>

  )

}

export default DrawerNavigator

const styles = StyleSheet.create({


})