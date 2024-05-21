import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from './../../component/CustomHeader';




const CourseScreen = () => {

  const navigation = useNavigation();

  return (

    <View style={styles.mainContainer}>

        {/* Custom header start */}
        {/* <View style={styles.customHeader}>
    <View>
      <TouchableOpacity
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
  </View> */}

      <>
        <CustomHeader title="Courses" />
      </>

      {/* buttons part start  */}
      <View style={styles.buttonMainContainer}>
        <TouchableOpacity style={styles.buttonGroup}>
          <Text style={styles.textProperty}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGroup} onPress={() => navigation.navigate('Assigned')}>
          <Image source={require("../../asset/greenC.png")} style={{ height: 12, width: 12, }} />
          <Text style={[styles.textProperty, { marginHorizontal: 10 }]}>Assigned </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGroup}>
          <Image source={require("../../asset/greenC.png")} style={{ height: 12, width: 12, }} />
          <Text style={[styles.textProperty, { marginHorizontal: 10 }]}>Completed</Text>
        </TouchableOpacity>
      </View>
      {/* buttons part end*/}
      {/*All course list*/}

      <ScrollView >

        <View style={styles.courseListMainContainer}>

          <View style={styles.child1}>
            <Image
              source={require("../../asset/monfast_1.png")}
              style={{ width: 110, height: 100, marginVertical: 17, marginHorizontal: 5, }}
            />
          </View>

          <View style={styles.child2}>

            <View style={{}}>
              <Text style={{ color: "black", fontWeight: "bold", fontSize: 15, marginLeft: 10 }}>Monfast</Text>
            </View>

            {/* min/less/quiz */}
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View style={{ flexDirection: "row", }}>
                <Image source={require("../../asset/clock.png")} style={{ height: 15, width: 15, alignSelf: "center" }} />
                <Text style={{ marginLeft: 5, color: "black", fontSize: 11 }}>6h 14min</Text>
              </View>

              <View style={{ flexDirection: "row", }}>
                <Image source={require("../../asset/quiz.png")} style={{ height: 15, width: 15, alignSelf: "center" }} />
                <Text style={{ marginLeft: 5, color: "black", fontSize: 11 }}>24 Lessons</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Image source={require("../../asset/lightbulb.png")} style={{ height: 15, width: 15, alignSelf: "center" }} />
                <Text style={{ marginLeft: 5, color: "black", fontSize: 11 }}>2 Quiz</Text>
              </View>
            </View>

          </View>

          <View style={styles.child3}>
            <TouchableOpacity style=
              {{
                height: 40, backgroundColor: "#48cae4", width: "55%", borderRadius: 5, justifyContent: 'center',
                marginLeft: 19

              }}>
              <Text style={{ color: "black", fontWeight: "bold", textAlign: "center", fontFamily: 'Roboto-bold', }}>on going</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.courseListMainContainer}>

          <View style={styles.child1}>
            <Image
              source={require("../../asset/monfast_1.png")}
              style={{ width: 110, height: 100, marginVertical: 17, marginHorizontal: 5, }}
            />
          </View>

          <View style={styles.child2}>

            <View style={{}}>
              <Text style={{ color: "black", fontWeight: "bold", fontSize: 15, marginLeft: 10 }}>Monfast</Text>
            </View>

            {/* min/less/quiz */}
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View style={{ flexDirection: "row", }}>
                <Image source={require("../../asset/clock.png")} style={{ height: 15, width: 15, alignSelf: "center" }} />
                <Text style={{ marginLeft: 5, color: "black", fontSize: 11 }}>6h 14min</Text>
              </View>

              <View style={{ flexDirection: "row", }}>
                <Image source={require("../../asset/quiz.png")} style={{ height: 15, width: 15, alignSelf: "center" }} />
                <Text style={{ marginLeft: 5, color: "black", fontSize: 11 }}>24 Lessons</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Image source={require("../../asset/lightbulb.png")} style={{ height: 15, width: 15, alignSelf: "center" }} />
                <Text style={{ marginLeft: 5, color: "black", fontSize: 11 }}>2 Quiz</Text>
              </View>
            </View>

          </View>

          <View style={styles.child3}>
            <TouchableOpacity style=
              {{
                height: 40, backgroundColor: "#48cae4", width: "55%", borderRadius: 5, justifyContent: 'center',
                marginLeft: 19

              }}>
              <Text style={{ color: "black", fontWeight: "bold", textAlign: "center", fontFamily: 'Roboto-bold', }}>on going</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.courseListMainContainer}>

          <View style={styles.child1}>
            <Image
              source={require("../../asset/Enterogermina_1.png")}
              style={{ width: 110, height: 95, marginVertical: 17, marginHorizontal: 5, }}
            />
          </View>

          <View style={styles.child2}>

            <View style={{}}>
              <Text style={{ color: "black", fontWeight: "bold", fontSize: 15, marginLeft: 10 }}>Monfast</Text>
            </View>

            {/* min/less/quiz */}
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View style={{ flexDirection: "row", }}>
                <Image source={require("../../asset/clock.png")} style={{ height: 15, width: 15, alignSelf: "center" }} />
                <Text style={{ marginLeft: 5, color: "black", fontSize: 11 }}>6h 14min</Text>
              </View>

              <View style={{ flexDirection: "row", }}>
                <Image source={require("../../asset/quiz.png")} style={{ height: 15, width: 15, alignSelf: "center" }} />
                <Text style={{ marginLeft: 5, color: "black", fontSize: 11 }}>24 Lessons</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Image source={require("../../asset/lightbulb.png")} style={{ height: 15, width: 15, alignSelf: "center" }} />
                <Text style={{ marginLeft: 5, color: "black", fontSize: 11 }}>2 Quiz</Text>
              </View>
            </View>

          </View>

          <View style={styles.child3}>
            <TouchableOpacity style=
              {{
                height: 40, backgroundColor: "#00A9B8", width: "55%", borderRadius: 5, justifyContent: 'center',
                marginLeft: 19

              }}>
              <Text style={{ color: "#FFFFFF", fontWeight: "bold", textAlign: "center", fontFamily: 'Roboto-bold', }}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.courseListMainContainer}>

          <View style={styles.child1}>
            <Image
              source={require("../../asset/VTAPA.png")}
              style={{ width: 110, height: 95, marginVertical: 17, marginHorizontal: 5, }}
            />
          </View>

          <View style={styles.child2}>

            <View style={{}}>
              <Text style={{ color: "black", fontWeight: "bold", fontSize: 15, marginLeft: 10 }}>Monfast</Text>
            </View>

            {/* min/less/quiz */}
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View style={{ flexDirection: "row", }}>
                <Image source={require("../../asset/clock.png")} style={{ height: 15, width: 15, alignSelf: "center" }} />
                <Text style={{ marginLeft: 5, color: "black", fontSize: 11 }}>6h 14min</Text>
              </View>

              <View style={{ flexDirection: "row", }}>
                <Image source={require("../../asset/quiz.png")} style={{ height: 15, width: 15, alignSelf: "center" }} />
                <Text style={{ marginLeft: 5, color: "black", fontSize: 11 }}>24 Lessons</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Image source={require("../../asset/lightbulb.png")} style={{ height: 15, width: 15, alignSelf: "center" }} />
                <Text style={{ marginLeft: 5, color: "black", fontSize: 11 }}>2 Quiz</Text>
              </View>
            </View>

          </View>

          <View style={styles.child3}>
            <TouchableOpacity style=
              {{
                height: 40, backgroundColor: "#00A9B8", width: "55%", borderRadius: 5, justifyContent: 'center',
                marginLeft: 19

              }}>
              <Text style={{ color: "#FFFFFF", fontWeight: "bold", textAlign: "center", fontFamily: 'Roboto-bold', }}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>

    
  );
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

  // course list part start 
  courseListMainContainer: {
    flex: 1,
    // backgroundColor: "red",
    backgroundColor: "#f0efeb",
    flexDirection: "row",
    borderRadius: 10,
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    elevation: 5
  },
  child1: {
    // flex: 0.3,
    width: "30%",
    // backgroundColor:"black"
  },
  child2: {
    // flex: 0.4,
    width: "40%",
    flexDirection: "column",
    justifyContent: "space-around",

    // marginLeft:10,
    // borderWidth:1,
    // backgroundColor: "#ffb703"
  },
  child3: {
    // flex: 0.3,
    width: "30%",
    justifyContent: 'center',
    alignItems: "center",
    // backgroundColor:"black",
  },


});