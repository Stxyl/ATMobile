import React, { useState } from 'react';
import { Button, StyleSheet, View, NativeModules, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';
import * as NFC from 'react-native-nfc';

// Open a database connection
const db = SQLite.openDatabase('db/cardinfo.db');

const ATCard = (props) => {
    // Declare a new state variable called "data" and initialize it to an empty string
    const [data, setData] = useState('');
    const startScan = () => {
        // Check if the NFC object is available
        if (NativeModules.NFC) {
            // Add a listener to detect NFC tags
            NativeModules.NFC.addListener((payload) => {
                // Check if the detected NFC tag is a MIFARE DESFire Ev1 card
                if (payload.type === 'MifareDesfire') {
                    // Read the data from the card
                    const data = NFC.parseMifareDesfire(payload.data);

                    // Create the 'cards' table if it does not exist
                    db.transaction((tx) => {
                        tx.executeSql(
                            'CREATE TABLE IF NOT EXISTS cards (card_data TEXT)',
                            [],
                            null,
                            (error) => console.error(error)
                        );
                    });

                    // Insert the data into the database
                    db.transaction((tx) => {
                        tx.executeSql(
                            'INSERT INTO cards (card_data) VALUES (?)',
                            [data],
                            null,
                            (error) => console.error(error)
                        );
                    });


                    // Update the data variable with the data from the card
                    setData(data);
                    console.log(data);
                }
            });
        }
    }
    // The ATCard component code goes here

    return (
        <View style={styles.container}>
            <Button
                onPress={startScan}
                title="Scan"
            />
            <Text style={styles.cardtext}>{data}</Text>
        </View>
    );
}

// Add this line to export the ATCard component
export default ATCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f5f0',
        Width: '50%',
        Height: '25%'
    },
    cardtext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginTop: 20,
    }
});
