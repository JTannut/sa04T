import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, TouchableHighlight,ImageBackground, StyleSheet } from 'react-native';
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },


]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
    <View>
        <Text style={styles.textmain} >{place}</Text>
        <Text style={styles.textcode} >{code}</Text>
    </View>
</TouchableHighlight>

)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source={require('./bghome.jpg')} style={styles.backdrop}>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
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
});