import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItem, } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const DrawerItems = props => {

    const navigation = useNavigation();

    return (

        <View style={{ flex: 1, backgroundColor: '#E0FCFF' }}>
        <DrawerContentScrollView {...props}>

            <View style={styles.drawerContent}>
                {/* drawer image */}
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={styles.imageContainer}>
                            <View style={styles.profileImg}>
                                <Image
                                    source={require('../../asset/user_1.png')}
                                    style={{ width: 70, height: 70, }}
                                />
                                {/* <Profile width={70} height={70} /> */}
                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}>
                            <View style={[styles.caption, { flexWrap: 'wrap', alignSelf: "center" }]}>
                                <Text style={{ color: "black", fontSize: 18, fontWeight: 500 }}>Abs kawser</Text>
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
                        // icon={({ color, size }) => <Icon name="home" size={24} color={"black"} />}

                        icon={() => (
                            <Image
                                source={require('../../asset/home.png')}
                                style={{ width: 26, height: 24, }}
                            />
                        )}

                    />
                    <DrawerItem
                        label="Course"
                        labelStyle={{ color: '#343a40', fontSize: 15 }}
                        onPress={() => {
                            props.navigation.navigate('Course')
                        }}

                        //   icon={({ color, size }) => <Icon name="book" size={24} color={"black"} />}

                        icon={() => (
                            <Image
                                source={require('../../asset/homework.png')}
                                style={{ width: 26, height: 24, }}
                            />
                        )}
                    />

                    <DrawerItem
                        label="Quiz"
                        labelStyle={{ color: '#343a40', fontSize: 15 }}
                        onPress={() => {
                            props.navigation.navigate('Quiz')
                        }}

                        icon={() => (
                            <Image
                                source={require('../../asset/quiz.png')}
                                style={{ width: 30, height: 24, }}
                            />
                        )}

                    />
                    <DrawerItem
                        label="Profile"
                        labelStyle={{ color: '#343a40', fontSize: 15 }}
                        onPress={() => {
                            props.navigation.navigate('Profile')
                        }}

                        icon={() => (
                            <Image
                                source={require('../../asset/profile.png')}
                                style={{ width: 28, height: 24, }}
                            />
                        )}

                    />

                    <DrawerItem
                        label="Settings"
                        labelStyle={{ color: '#343a40', fontSize: 15 }}
                        onPress={() => {
                            props.navigation.navigate('Settings')
                        }}

                        icon={() => (
                            <Image
                                source={require('../../asset/setting.png')}
                                style={{ width: 28, height: 24, }}
                            />
                        )}

                    />

                    

                        <DrawerItem
                        label="Password"
                        labelStyle={{ color: '#343a40', fontSize: 15 }}
                        onPress={() => {
                            props.navigation.navigate('Settings')
                        }}

                        icon={() => (
                            <Image
                                source={require('../../asset/password.png')}
                                style={{ width: 26, height: 26, }}
                            />
                        )}

                        />

                        {/* <DrawerItem
                        label="Login"
                        labelStyle={{ color: '#343a40', fontSize: 15 }}
                        onPress={() => {
                            props.navigation.navigate('Login');
                        }}
                    /> */}


                </View>

                
            </View>
        </DrawerContentScrollView>
        </View>
    );
}

export default DrawerItems;

const styles = StyleSheet.create({

    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        marginTop: -4,
        backgroundColor: "#E0FCFF"
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

        // borderWidth: 2,
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









// options={{
//     drawerIcon: ({ focused, size }) => (
//       <Image
//         style={{ height: 30, width: 30, resizeMode: "contain" }}
//         source={require("../../../src/asset/homework.png")}
//       />
//     ),
//   }}



{/* <DrawerItem
label="Product"
labelStyle={{ color: '#343a40', fontSize: 15 }}
onPress={() => {
    props.navigation.navigate('Product');
}}
/> */}