import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DrawerContentScrollView, DrawerItem, } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const DrawerItems = props => {

    const navigation = useNavigation();

    return (


<View style={{ flex: 1, backgroundColor: '#2358E13D' }}>
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
            {/* drawer image */}
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.imageContainer}>
                        <View style={styles.profileImg}>
                            {/* <Profile width={70} height={70} /> */}
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                        <View style={[styles.caption, { flexWrap: 'wrap',alignSelf:"center" }]}>
                            <Text >Abs kawser</Text>
                        </View>
                    </View>
                </View>
            </View>



            {/* =====drawer content part  ==== */}
            <View style={styles.drawerSection}>

                <DrawerItem
                    label="Home"
                    labelStyle={{ color: '#343a40', fontSize: 15 }}
                    onPress={() => {
                        props.navigation.navigate('HomeScreen');
                    }}
                />

                <DrawerItem
                    label="Product" 
                    labelStyle={{ color: '#343a40', fontSize: 15 }}
                    onPress={() => {
                        props.navigation.navigate('Product');
                    }}
                />
                  
                  <DrawerItem
                    label="Login" 
                    labelStyle={{ color: '#343a40', fontSize: 15 }}
                    onPress={() => {
                        props.navigation.navigate('Login');
                    }}
                />

            </View>
        </View>
    </DrawerContentScrollView>
</View>


    )
}

export default DrawerItems

const styles = StyleSheet.create({

    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        marginTop: -4,
        backgroundColor:"red"
    },
    imageContainer: {
        alignSelf: 'center',
        marginTop: 25,
        // padding: 3,
    },

    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        // lineHeight: 15,
        textAlign: 'center',
        paddingVertical: 10,
        color: '#168aad',
        marginVertical: 5,
    },
    profileImg: {
        // height: 70,
        // width: 70,
        // resizeMode: 'contain',
        // alignItems: 'center',
        // justifyContent: 'center',
        // display: 'flex',

        borderWidth: 2,
        borderColor: '#6096ba',
        borderRadius: 10,
        overflow: 'hidden',
        // position:"absolute"
    },

    drawerSection: {
        // marginTop: -5,
        marginTop: 40,
    },


})