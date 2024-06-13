import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";

const LoginScreen = () => {

    const [showPassword, setShowPassword] = useState(false);


    return (


    <ScrollView style={styles.MainContainter}>
        <View style={{ marginVertical: 100 }}>
            <View style={styles.TextPart}>
                <Text style={{ fontWeight: "bold", fontFamily: 'Roboto-bold', fontSize: 25, color: "black", }}> Welcome to {''}
                    <Text>
                        <Text style={styles.We}>We</Text>
                        <Text style={styles.Learn}>Learn</Text>
                    </Text>
                </Text>
                <Text style={{ marginTop: 35, color: "black", fontSize: 15 }} >Login to access your account</Text>
            </View>

            {/*   */}
            <View style={styles.LoginField}>

                <TextInput
                    style={styles.input}
                    placeholder="User name"
                />

                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        keyboardType="numeric"
                        secureTextEntry={!showPassword}

                    />
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Icon
                            name={showPassword ? "eye" : "eye-slash"}
                            size={20}
                            color="#495867"
                        />
                    </TouchableOpacity>
                </View>

                <Text style={{ alignSelf: "flex-end", marginRight: 15 }}>Forget password</Text>
                <TouchableOpacity
                    style={styles.loginInput}
                >
                    <Text style={{ color: "white", fontSize: 15 }}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.TermCondition}>
                <Text style={{ fontSize: 16 }}>By signing in with an account, you agree to </Text>
                <Text style={{ marginLeft: 10, marginTop: 10 }}>WeLearn’s Terms of Service and Privacy Policy.</Text>
            </View>
        </View>
    </ScrollView>


    );

};

export default LoginScreen;


const styles = StyleSheet.create({

    MainContainter: {
        flex: 1,
        backgroundColor: '#2358E13D'
    },
    TextPart: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 50,
        // backgroundColor:"red",

    },
    We: {
        fontWeight: "bold",
        fontFamily: 'Roboto-bold',
        ontSize: 25,
        color: "blue"
    },
    Learn: {
        fontWeight: "bold",
        fontFamily: 'Roboto-bold',
        fontSize: 25,
        color: "brown"
    },
    LoginField: {
        justifyContent: "center",
        margin: 30,
        // backgroundColor:"red"
    },

    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#edf2f4"

    },

    loginInput: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#edf2f4",
        justifyContent: 'center', // Center text vertically
        alignItems: 'center', // Center text horizontally
        backgroundColor: "#00A9B8",
        marginTop: 50
    },
    TermCondition: {
        alignSelf: "center",
        //  backgroundColor:"red"
    },
    iconContainer: {
        position: "absolute",
        top: 25,
        right: 30,
    },

});


