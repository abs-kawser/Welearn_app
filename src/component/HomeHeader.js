
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeHeader = ({ title }) => {

  const navigation = useNavigation();

  return (

    <View style={styles.customHeader}>
      <View>
        <TouchableOpacity
          style={{
            paddingVertical: 25,
            paddingHorizontal: 20,
          }}
          onPress={() => navigation.openDrawer()}>
          {/* <Icon name="arrow-left" size={18} style={{ color: "white" }} /> */}
          <Image
            source={require(".././asset/homeScreen/bars.png")}
            style={styles.image}
          />
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

export default HomeHeader


const styles = StyleSheet.create({
  customHeader: {
    flexDirection: "row",
    backgroundColor: "#00A9B8",
    // borderRadius: 15,
  },
  centeredTextContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
    color: "white"
  },
});


// those are on test and it's work
//case test :5

//


      "ItemId"
      "OrderQuantity"
      "UnitOfMeasureId"
      "UnitAmount"
      "UnitDiscountAmount"
      "AdditionalDiscountPercentage"
      "AdditionalDiscountAmount"
      "TotalAmount"
      "SalesUnitOfMeasureId"
      "SpecialDiscountPerUnit"            
      "VatPerUnit"              
      "TaxPerUnit"           
      "ActualPerUnitPrice"            
      "IsSpecification"              
