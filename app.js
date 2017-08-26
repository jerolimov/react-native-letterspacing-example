import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },

    textBox: {
        margin: 40,
        borderWidth: 5,
        borderColor: 'blue',
    },
    text0: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontWeight: 'bold',
    },
    text1: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontSize: 36,
        fontWeight: 'bold',
    },
    text2: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontSize: 36,
        fontWeight: 'bold',
        letterSpacing: 40,
    },
    text3: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 10,
    },
    text4: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 10,
    },
    text5: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 10,
    },
    text6: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 10,
    },
    text7: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 10,
    },
    text8: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 8,
    },
    text9: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 6,
    },
    text10: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 4,
    },
    text11: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    text12: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0,
    },
    text13: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: -1,
    },
    text14: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: -2,
    },
    text15: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontSize: 12,
        fontWeight: 'bold',
    },
    text16: {
        color: 'red',
        backgroundColor: 'lightgray',
        fontWeight: 'bold',
    },
});

export default class App extends Component {
    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.textBox}>
                    <Text>
                        <Text style={styles.text0}>{'Hallo Bello..\n'}</Text>
                        <Text style={styles.text1}>{'Hallo Bello.. '}</Text>
                        <Text style={styles.text2}>{'Hallo Bello.. '}</Text>
                        <Text style={styles.text3}>{'Hallo Bello.. '}</Text>
                        <Text style={styles.text4}>{'Hallo Bello.. '}</Text>
                        <Text style={styles.text5}>{'Hallo Bello.. '}</Text>
                        <Text style={styles.text6}>{'Hallo Bello.. '}</Text>
                        <Text style={styles.text7}>{'\nHallo Bello.. '}</Text>
                        <Text style={styles.text8}>{'\nHallo Bello.. '}</Text>
                        <Text style={styles.text9}>{'\nHallo Bello.. '}</Text>
                        <Text style={styles.text10}>{'\nHallo Bello.. '}</Text>
                        <Text style={styles.text11}>{'\nHallo Bello.. '}</Text>
                        <Text style={styles.text12}>{'\nHallo Bello.. '}</Text>
                        <Text style={styles.text13}>{'\nHallo Bello.. '}</Text>
                        <Text style={styles.text14}>{'\nHallo Bello.. '}</Text>
                        <Text style={styles.text15}>{'\nHallo Bello.. '}</Text>
                        <Text style={styles.text16}>{'\nHallo Bello.. '}</Text>
                    </Text>
                </View>
            </ScrollView>
        );
    }
}
