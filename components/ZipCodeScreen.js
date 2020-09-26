import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, Alert,Button,TouchableHighlight,ImageBackground, StyleSheet,Image } from 'react-native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Nakhon sri thammarat', code: '80000' },
    { place: 'Krathu Phuket', code: '83110' },
    { place: 'Phatthalung', code: '93000' },
    { place: 'Pattane', code: '94000' },
    { place: 'Bankok', code: '10130' },

]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
    <View>
        <Text style={styles.cover} >{place}</Text>
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
            <TouchableHighlight onPress={() => navigation.navigate('DEVby')}>
            <View>
        
            <Text style={styles.cover2} >dev by TXNNXT</Text>
            
        
            </View>
            </TouchableHighlight>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
                
            />
            <StatusBar style="auto" />

        <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('development by TXNNXT')}
        />
        
        

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
    cover: {
        backgroundColor: 'white',
        width: 'auto',
        height: 'auto',
        opacity: 1,
        alignItems: 'center',
        color: 'black',
        fontSize: 60,
    },
    cover2: {
        backgroundColor: 'white',
        width: 'auto',
        height: 'auto',
        opacity: 0.3,
        alignItems: 'center',
        color: 'black',
        fontSize: 20,
    },
});