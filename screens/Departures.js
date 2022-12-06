import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, View} from 'react-native';

export default function Departures() {
    return (
        <KeyboardAvoidingView
        style={styles.Main}
        behavior="padding"
        >
            <StatusBar barStyle={'dark-content'} />

            <Text style={styles.title}>Live Departures</Text>

            <View style={styles.inputcontainer}>
                <TextInput
                    placeholder="Search"
                    style={styles.search}
                />
            </View>

            <View>
                <Text style={styles.DepartureStop}>Departures from [Example Stop]</Text>
            </View>

            <View style={[styles.stops, styles.bus]}>
                <Ionicons style={[styles.busicon,]} name='bus' />
                <Text style={styles.textstops}>Bus 75 - 9:41am (Early)</Text>
            </View>

            <View style={[styles.stops, styles.busTMK]}>
                <Ionicons style={styles.busicon} name='bus' />
                <Text style={styles.textstops}>Bus TMK - 10:00am</Text>
            </View>

            <View style={[styles.stops, styles.train]}>
                <Ionicons style={styles.trainicon} name='train' />
                <Text style={styles.textstops}>Train Easten Britomart - 10:15am</Text>
            </View>

            <View style={[styles.stops, styles.trainred]}>
                <Ionicons style={styles.trainicon} name='train' />
                <Text style={styles.textstops}>Train EST - 10:50am</Text>
            </View>

            <View style={[styles.stops, styles.bus]}>
                <Ionicons style={styles.busicon} name='bus' />
                <Text style={styles.textstops}>Bus 738 - 10:25am)</Text>
            </View>

            <View style={[styles.stops, styles.bus]}>
                <Ionicons style={styles.busicon} name='bus' />
                <Text style={styles.textstops}>Bus 72M - 10:30am</Text>
            </View>

        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    Main: {
        backgroundColor: '#f4f5f0',
        top: '8%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        alignItems: 'left',
        justifyContent: 'left',
        left: '4%'
    },
    inputcontainer: {
        width: '88%',
        margin: 10,
        left: '1.5%'
    },
    search: {
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 6,
        backgroundColor: 'white',
    },
    DepartureStop: {
        fontWeight: "bold",
        marginLeft: '4%',
        fontSize: 16,
        paddingVertical: 10
    },
    stops: {
        backgroundColor: 'white',
        paddingVertical: '7%',
        borderRadius: 15,
        margin: 5,
        shadowOpacity: 0.2,
        alignItems: "center",
        alignContent: "space-between",
    },
    textstops: {
        fontSize: 16,
        marginLeft: 7,
        fontWeight: "bold",
        flexDirection: "column",
    },
    bus: {
        borderColor: '#0037d0',
        borderStyle: "solid",
        borderWidth: 3,
        flexDirection: "row",
    },
    busTMK: {
        borderColor: 'dodgerblue',
        borderStyle: "solid",
        borderWidth: 3,
        flexDirection: "row",
    },
    train: {
        borderColor: '#ffe03e',
        borderStyle: "solid",
        borderWidth: 3,
        flexDirection: "row",
    },
    trainred: {
        borderColor: 'red',
        borderStyle: "solid",
        borderWidth: 3,
        flexDirection: "row",
    },
    busicon: {
        marginLeft: 10,
        fontSize: 25,
    },
    trainicon: {
        marginLeft: 10,
        fontSize: 25,
    }
});