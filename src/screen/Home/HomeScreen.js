import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {

  return (

    <View style={{ flex: 1, }}>

      {/* learn today start*/}
      <View style={{ flex: 0.1, backgroundColor: "#00A9B8" }}>
        <View style={styles.learnTodayContainer}>

          <View style={styles.todayAndmyCourse}>
            <Text style={{ color: "black" }}>Learned today</Text>

            <TouchableOpacity>
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


    </View>

  );
}

export default HomeScreen


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
    height: 100,
    width: "95%",
    backgroundColor: "#ade8f4",
    flex: 0.2,
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
    width: "30%",
    justifyContent: "space-between",
    marginRight: "2%",
    borderRadius: 10,
    elevation:10
    // borderWidth: 1,
  },

  IconText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 12,
    // backgroundColor:"green"
  },

  // issue
  DynamicNumber:{
    fontSize:20,
    color:"black",
    marginBottom:15,
    padding:10,
    // fontWeight:400
  }
   // curd part end 
})








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