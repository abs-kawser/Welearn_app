
// import * as React from 'react';
// import { Button, View ,Text} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// // import { View, Text } from 'react-native'
// // import React from 'react'

// const App = () => {


// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }


//   return (

//     // <View>
//     //   <Text>App yuuf uihdf uefh iuhfuidhf </Text>
//     // </View>

//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App ;


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNav from './src/Navigation/StackNavigation/AppNav'
import { PaperProvider } from 'react-native-paper';

const App = () => {

  return (

    <>
       <PaperProvider>
       <AppNav/>
       </PaperProvider>
      
    </>

  );
}

export default App

const styles = StyleSheet.create({

})