import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Flag from 'react-native-flags';
import { horizontalScale, verticalScale } from '../helper/ Metrics';
import { useDispatch } from 'react-redux';
import { ConfirmPhoneAuth } from '../redux/action/auth.action';
// import  Icon  from '@iconify/react';

export default function PhoneNumber({navigation}) {
    const dispatch = useDispatch()
    const [phone,setPhone]=useState('')
    const handlePhone = () =>{
        dispatch(ConfirmPhoneAuth(phone))
    }
    // <Text>{navigation}</Text>
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.title}>Join Us Via Phone Number</Text>
            </View>
            <View style={styles.information}>
                <View style={styles.icon}>
                    <Flag code="IN" size={32} style={styles.flag} />
                    {/* <Icon name="twemoji:flag-india" size={22}/> */}
                    <Icon style={styles.createdown} name="caret-down" size={22} />
                    <Text style={styles.number}>+91</Text>
                    <TextInput style={styles.input} maxLength={10} keyboardType='numeric' placeholder="Enter Your Phone Number" onChangeText={setPhone} placeholderTextColor="#989898">
                    </TextInput>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.button} onPress={() => {handlePhone();navigation.navigate('Otp1');}}>
                        {/* <Text>onPress={() => navigation.navigate('Otp1')}</Text> */}
                        <Text style={styles.btntxt}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.Termcondition}> 
                <Text style={styles.condition}>By tapping "Next" you agree to Terms and Conditions and Privacy Policy</Text> 
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        flex: 1,
        backgroundColor: 'white',
        padding: '3%',
    },
    heading: {
        flex: 1,
        // backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        paddingBottom: '15%'
    },
    title: {
        fontSize: 22,
        color: '#000',
        fontWeight: '600',
    },
    information: {
        flex: 5,
        // backgroundColor: 'lightpink',
        width: '100%',
        height: '100%',
        rowGap: 40
    },
    icon: {
        width: '100%',
        flexDirection: 'row',
        columnGap: 5,
        textAlign: 'center',
        justifyContent: 'center',
        justifyContent: 'space-evenly',
    },
    createdown: {
        marginTop: '4%',
        color: 'black',
    },
    flag:{
        marginTop:'3%',
    },
    number: {
        marginTop: '5%',
        color: '#000',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#B6B6B6',
        color: 'black',
        width: '60%',
        // marginTop:'-1%',
        paddingBottom:2,
    },
    btn: {
        // justifyContent: 'flex-end',
        // width: '100%',
        flex: 3,
        alignItems: 'center',
        paddingTop: '4%',
        // backgroundColor: 'lightblue',
    },
    button: {
        backgroundColor: '#194AF9',
        // width: '80%',
        // height: '14%',
        width:horizontalScale(290),
        height:verticalScale(55),
        // paddingTop: '2.8%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btntxt: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 19
    },
    Termcondition: {
        // backgroundColor: 'lightpink',
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    condition: {
        width: '100%',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '400',
        paddingBottom: '6%',
        color: '#898989',
    },


})