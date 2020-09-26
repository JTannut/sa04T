import React from 'react';
import { View ,StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function devby() {    
    return (
        <View>
            <Text style={styles.cover} >JOB</Text>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    textmain: {
        color: 'white',
        fontSize: 60,
    },
    textcode: {
        color: 'white',
        fontSize: 20,
        
    },
    backdrop: {
        alignItems: 'center',

        width: '100%',
        height: '100%'
    },
    cover: {
        backgroundColor: 'white',
        width: 'auto',
        height: 'auto',
        opacity: 1,
        alignItems: 'center',
        color: 'black',
        fontSize: 60,
    },
});