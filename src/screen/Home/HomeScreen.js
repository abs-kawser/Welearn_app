import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  return (

    <View style={{ flex: 1, }}>
      {/* learn today start*/}
      <View style={{ flex: 0.1, backgroundColor: "#00A9B8" }}>
        <View style={styles.learnTodayContainer}>
          <View style={styles.todayAndmyCourse}>
            <Text style={{ color: "black" }}>Learned today</Text>

            <TouchableOpacity 
            onPress={() => navigation.openDrawer()}>
              <Text style={{ color: "blue" }}>My courses</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.minutesPart}>
            <Text style={{ fontSize: 18, fontWeight: "500", color: "black" }}>46 min</Text>
          </View>

          <View style={styles.Rectangle}>
            <Image source={require("../../asset/Rectangle.png")} />
          </View>
        </View>
      </View>
      {/* learn today end*/}

      {/* three curds  part start*/}
      <View style={styles.curdMain}>

        <TouchableOpacity style={styles.curds}>
          <View style={styles.IconText}>
            <Image source={require("../../asset/clipboard.png")} style={{ height: 30, width: 30, }} />
            <Text style={{ marginTop: 5, color: "black", fontSize: 15 }}>Assigned</Text>
          </View>

          <View >
            <Text style={styles.DynamicNumber}>15</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity style={styles.curds}>
          <View style={styles.IconText}>
            <Image source={require("../../asset/check.png")} style={{ height: 28, width: 28, }} />
            <Text style={{ marginTop: 5, color: "black", fontSize: 15 }}>Completed</Text>
          </View>

          <View >
            <Text style={styles.DynamicNumber}>12</Text>
          </View>
        </TouchableOpacity>



        <TouchableOpacity style={styles.curds}>
          <View style={styles.IconText}>
            <Image source={require("../../asset/ongoing.png")} style={{ height: 28, width: 28, }} />
            <Text style={{ marginTop: 5, color: "black", fontSize: 15 }}>On Going</Text>
          </View>

          <View >
            <Text style={styles.DynamicNumber}>18</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* three curds  part end*/}

      {/* Continune part start*/}
      <View style={styles.continueMainContainer}>
        <View style={styles.continueText}>
          <Text style={{color: "#000000",fontWeight:"bold",fontFamily: 'Roboto-bold',}} >Continue  Watching</Text>
          <TouchableOpacity >
            <Text style={{ color: "#000000" }}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ImageContainer}>
          <Image source={require("../../asset/Image_1.png")} />
          <Image source={require("../../asset/Image_2.png")} />
        </View>
      </View>

      <View style={styles.continueMainContainer}>
        <View style={styles.continueText}>
          <Text style={{ color: "#000000",fontWeight:"bold",fontFamily: 'Roboto-bold',}} >Assigned Courses</Text>
          <TouchableOpacity>
            <Text style={{ color: "#000000" }}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ImageContainer}>
          <Image source={require("../../asset/Image_3.png")} />
          <Image source={require("../../asset/Image_4.png")} />
        </View>
      </View>
    </View>

  );
}

 export default HomeScreen;

 const styles = StyleSheet.create({
  //  learn today start
  learnTodayContainer: {
    height: 115,
    width: "85%",
    backgroundColor: "#FFFFFF",
    marginTop: 18,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 20
  },

  todayAndmyCourse: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    padding: 15
  },

  minutesPart: {
    marginLeft: 20,
  },

  Rectangle: {
    marginTop: 12,
    alignSelf: "center",
  },
  //  learn today part end

  // curd part start
  curdMain: {
    flex: 0.2,
    height: 100,
    width: "95%",
    backgroundColor: "#e9ecef",
    marginTop: 80,
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  curds: {
    height: 100,
    backgroundColor: "#faf9f9",
    width: "29%",
    justifyContent: "space-between",
    marginRight: "2%",
    borderRadius: 10,
    elevation: 10,
    // borderWidth: 1,
  },

  IconText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 12,
    // backgroundColor:"green"
  },

  // issue
  DynamicNumber: {
    fontSize: 20,
    color: "black",
    marginBottom: 15,
    padding: 10,
    // fontWeight:400
  },
  // curd part end 
  continueMainContainer: {
    flex: 0.3,
    backgroundColor: "#e9ecef",
    marginTop: 10,
    borderRadius: 10,
    width: "95%",
    alignSelf: "center",
    
  },

  //  continue part start 
  continueText: {
    flexDirection: "row",
    margin: 8,
    padding: 8,
    justifyContent: "space-between",
    // backgroundColor: "red"
     
  },

  ImageContainer: {
    padding:8,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "green",
  }










 })  







































//git config --global user.email "abskawser77000@gmail.com"
//  git config --global user.name " abs-kawser"

{/* <View style={styles.curds}>
          <View style={styles.IconText}>
            <Image source={require("../../asset/clipboard.png")} style={{ height: 30, width: 30, }} />
            <Text style={{ marginTop: 5, color: "black", fontSize: 15 }}>Completed</Text>
          </View>

          <View >
          <Text style={styles.DynamicNumber}>15</Text>
          </View>
        </View>

        <View style={styles.curds}>
          <View style={styles.IconText}>
            <Image source={require("../../asset/clipboard.png")} style={{ height: 30, width: 30, }} />
            <Text style={{ marginTop: 5, color: "black", fontSize: 15 }}>On Going</Text>
          </View>

          <View >
            <Text style={styles.DynamicNumber}>15</Text>
          </View>
        </View> */}