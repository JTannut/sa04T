import React from 'react';
import { View, Text, Image, StyleSheet,Alert,Button } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.center}>
            <Text style={styles.medium}>TXNNXT Weather </Text>
            <Text style={styles.big}>{props.main}</Text>
            <Text style={styles.medium}>{props.description}</Text>
            <View style={{ marginTop: 20 }}>
                <Image source={require('./cloudy.png')}>
                </Image>
                <Text>
                    <Text style={styles.big}>{props.temp}  </Text>
                    <Text style={styles.medium}>°C</Text>
                   
                </Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    big: {
        marginTop: 20,
        fontSize: 30,
        color: 'white',
    },
    backdrop: {
       // alignItems: 'center',

        width: '50%',
        height: '50%'
    },
    medium: {
        marginTop: 20,
        fontSize: 15,
        color: 'white',
    }
    
});