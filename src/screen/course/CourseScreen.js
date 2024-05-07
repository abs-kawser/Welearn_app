import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';




const CourseScreen = () => {
  const navigation = useNavigation();

  return (

    <View style={styles.mainContainer}>

      {/* Custom header start */}
      <View style={styles.customHeader}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{
              paddingVertical: 25,
              paddingHorizontal: 20,
            }}>
            <Icon name="bars" size={18} style={{ color: "white" }} />
          </TouchableOpacity>
        </View>


        <View style={styles.centeredTextContainer}>
          <Text style={{
            color: 'white',
            fontWeight: "bold",
            fontFamily: ' ',
            fontSize: 18,
          }}>My Courses</Text>

        </View>
      </View>
      {/* Custom header end*/}

      {/* buttons part start  */}
      <View style={styles.buttonMainContainer}>

        <TouchableOpacity style={styles.buttonGroup}>
          <Text style={styles.textProperty}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGroup}>

          <Image source={require("../../asset/greenC.png")} style={{ height: 12, width: 12, }} />
          <Text style={[styles.textProperty, { marginHorizontal: 10 }]}>Assigned</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGroup}>
          <Image source={require("../../asset/greenC.png")} style={{ height: 12, width: 12, }} />
          <Text style={[styles.textProperty, { marginHorizontal: 10 }]}>Completed</Text>
        </TouchableOpacity>

      </View>
      {/* buttons part end*/}


      {/* All course list*/}
      <View style={styles.courseListMainContainer}>

        <View style={{
          flexDirection: "row", display: "flex", alignItems: "center", flex: 1,padding:10}}>
          <Image source={require("../../asset/monfast.png")} style={{ height: 100, width: "40%", }} />
          {/* <Text>Monfast</Text> */}
        </View>

             

      </View>


    </View>
  )
}

export default CourseScreen;

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: "#EBFBFD"
  },


  customHeader: {
    flexDirection: "row",
    backgroundColor: "#00A9B8",
    borderRadius: 15,

  },
  centeredTextContainer: {
    flex: 0.8, // Make this view take up all remaining space
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically within this view
  },
  // 
  buttonMainContainer: {
    // backgroundColor: "red",
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  buttonGroup: {
    flexDirection: "row",
    height: 50,
    width: "33%",
    // borderWidth: 1,
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    elevation: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  textProperty: {
    textAlign: 'center',
    // marginVertical:16,
    fontWeight: "bold",
    fontFamily: 'Roboto-bold',
    color: "black",
  },

  courseListMainContainer: {
    flex: 0.2,
    backgroundColor: "red"
  }


})