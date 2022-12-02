import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Appearance,
    useColorScheme, Image,
} from "react-native";
import { auth } from "../firebase";

//import icon
import icon from '../assets/icon.png';

const LoginScreen = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigation = useNavigation()

    //Firebase Authentications
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home");
            }
        })

        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log('Registered in with:',user.email);
            })
            .catch(error => alert(error.message));
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log('Logged in with:', user.email);
            })
            .catch(error => alert(error.message));
    }

    //User Interface
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <StatusBar barStyle={'dark-content'} />

            <Image source={icon} style={styles.icon} />

            <Text style={styles.greeting}>Welcome to AT Mobile</Text>
            <Text style={styles.greetingsub}>This build is for Development and Close Beta Testing</Text>
            <Text style={styles.greetingsubsub}>Email is not case sensitive</Text>

            <View style={styles.inputContainer}>

                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#000"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#000"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                </View>

            <View style={styles.buttonContainer}>

                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleSignUp}
                >
                    <Text style={styles.prebuttonOutlineText}>Don't have an account? <Text style={styles.buttonOutlineText}>Register</Text></Text>
                </TouchableOpacity>

                <TouchableOpacity
                    //onPress= {handleForgot}
                    style={styles.buttonForgot}
                >
                    <Text style={styles.buttonTextpw}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => navigation.navigate('NoAccount')}
                >
                    <Text style={styles.buttonnoaccount}>Continue without Account</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 100,
        height: 100,
        marginTop: 50,
    },
    greeting: {
        color: 'black',
        fontWeight: '700',
        fontSize: 35,
        marginBottom: 10,
        fontFamily: 'Helvetica',
    },
    greetingsub: {
        color: 'grey',
        fontWeight: '700',
        fontSize: 12,
        marginBottom: 5,
        fontFamily: 'Helvetica',
    },
    greetingsubsub: {
        color: 'grey',
        fontWeight: '700',
        fontSize: 12,
        marginBottom: 5,
        fontFamily: 'Helvetica',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: 'dodgerblue',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: 'dodgerblue',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonTextpw: {
        color: 'red',
        fontWeight: '700',
        fontSize: 16,
    },
    prebuttonOutlineText: {
        fontWeight: '700',
        fontSize: 16,
        marginTop: 7,
        color: 'grey',
    },
    buttonOutlineText: {
        color: 'dodgerblue',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonForgot: {
        color: 'red',
        marginTop: 10,
    },
    buttonnoaccount: {
        color: 'dodgerblue',
        fontWeight: '700',
        fontSize: 16,
        marginTop: 10,
    }
})