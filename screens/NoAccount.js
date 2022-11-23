import {useNavigation} from "@react-navigation/native";
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    StatusBar, SafeAreaView
} from "react-native";
import { SvgUri } from 'react-native-svg';

//SVG import
import Personcropcirclebadgexmark from '../assets/Images/personcropcirclebadgexmark';
import Antennaradiowavesleftandrightslash from '../assets/Images/antennaradiowavesleftandrightslash';
import Sliderhorizontal3 from '../assets/Images/sliderhorizontal3';
import Lockopen from '../assets/Images/lockopen';

function NoAccount(props) {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} />

            <View>
                <Personcropcirclebadgexmark width={100} height={100} />
            </View>

            <View style={styles.Headers}>
                <Text style={styles.HeaderText}>Continue with No Account?</Text>
            </View>

            <View style={[styles.Headers, styles.Header1]}>
                <Text>These features wont be available to you</Text>
            </View>

            <View style={[styles.Headers, styles.Header2, styles.para]}>
                <Text style={styles.textHeaders}>App Customisation</Text>
                <Text style={styles.textsub}>You won't be able to personalize the app for example, Live Activities, ATHop Wallet, Live Geolocation, etc</Text>
            </View>

            <View>
                <Sliderhorizontal3
                    width={75}
                    height={75}
                    marginTop={-90}
                    marginLeft={240}
                />
            </View>

            <View style={[styles.Headers, styles.Header3, styles.para]}>
                <Text style={styles.textHeaders}>Offline Mode</Text>
                <Text style={styles.textsub}>You won't be able to use the app in offline mode</Text>
            </View>

            <View>
                <Antennaradiowavesleftandrightslash
                    width={75}
                    height={75}
                    marginTop={-65}
                    marginLeft={240}
                />
            </View>

            <View style={[styles.Headers, styles.Header4, styles.para]}>
                <Text style={styles.textHeaders}>Automatic Login</Text>
                <Text style={styles.textsub}>The app will prompt you to login/signup the next time you properly close and relaunch the app</Text>
            </View>

            <View>
                <Lockopen
                    width={75}
                    height={75}
                    marginTop={Platform.OS === 'ios' ? -76 : -93}
                    marginLeft={240}
                />
            </View>

            <TouchableOpacity
                style={styles.buttonLeft}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Back to Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonRight}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>

            <View>
                <Text style={styles.footer}>Some Features wont be available on this Current Build</Text>
            </View>

        </SafeAreaView>
    );
}

export default NoAccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    Headers: {
        marginTop: 20,
    },
    HeaderText: {
        fontSize: 27,
        fontWeight: '700',
        fontFamily: 'Helvetica',
    },
    para: {
      marginLeft: '6%',
    },
    textHeaders: {
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'Helvetica',
        alignSelf: 'flex-start',
    },
    textsub: {
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Helvetica',
        alignSelf: 'flex-start',
        flexWrap: 'wrap',
        marginRight: '45%',
    },
    Header1: {
        marginTop: 5,
        color: 'grey',
        fontFamily: 'Helvetica',
    },
    Header2: {
        marginTop: 20,
    },
    Header3: {
        marginTop: 20,
        right: Platform.OS === 'ios' ? '0%' : '3%',
    },
    Header4: {
        marginTop: 20,
        right: Platform.OS === 'ios' ? '0%' : '0%',
    },
    buttonLeft: {
        backgroundColor: 'dodgerblue',
        width: '45%',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        right: '25%',
        top: '5%',
    },
    buttonRight: {
        backgroundColor: 'red',
        width: '45%',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        left: '25%',
        bottom: '0.825%',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    footer: {
        color : 'grey',
        fontFamily: 'Helvetica',
        fontSize: 12,
        fontWeight: '400',
        marginTop: '2%',
    }
})