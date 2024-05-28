import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  return (

    <View style={styles.customHeader}>
      <View>
        <TouchableOpacity
          style={{
            paddingVertical: 25,
            paddingHorizontal: 20,
          }} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={18} style={{ color: "white" }} />
        </TouchableOpacity>
      </View>

      <View style={styles.centeredTextContainer}>
        <Text style={{
          color: 'white',
          fontWeight: "bold",
          fontFamily: ' ',
          fontSize: 18,
        }}>{title}</Text>
      </View>
    </View>

  );

};

export default CustomHeader

const styles = StyleSheet.create({
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
})