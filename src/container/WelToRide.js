import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { horizontalScale, verticalScale } from '../helper/ Metrics';
import { postUserInfo } from '../redux/action/userReg.action';
import { useDispatch } from 'react-redux';
// import DatePicker from 'react-native-datepicker'

export default function WelToEasyRide({ navigation }) {
    const [date, setDate] = useState(new Date())
    const [tDate, setTDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(true)
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const dispatch = useDispatch()


    const addData = () => {
        let data = {
            firstName: firstName,
            lastName: lastName,
            email:email,
            dob: date,
        }
        dispatch(postUserInfo(data))
    }
    return (

        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.h2}>Welcome To Easy Ride!</Text>
                <Text style={styles.h3}>Let's Get acquainted</Text>
            </View>
            <View>
                <TextInput placeholder='First_Name' style={styles.box} value={firstName} onChangeText={setFirstName} placeholderTextColor="#898989" />
                <TextInput placeholder="Last_Name" style={styles.box} value={lastName} onChangeText={setLastName} placeholderTextColor="#898989" />
                <TextInput placeholder="E-Mail" keyboardType='email-address' style={styles.box} value={email} onChangeText={setEmail} placeholderTextColor="#898989" />
                <TouchableOpacity onPress={() => setOpen(true)}>
                    <Text style={[styles.box]}>{show ? <Text style={styles.text}> DOB </Text> : <Text style={styles.boxtext1}>{date.toDateString()}</Text>}</Text>
                </TouchableOpacity>

                <DatePicker
                    mode="date"
                    modal
                    open={open}
                    date={date}
                    maximumDate={tDate}

                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        setShow(false)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }} />
            </View>

            <View style={styles.buttonSection}>
                <TouchableOpacity style={styles.button} onPress={() => { addData(); navigation.navigate('Dashbord'); }}>
                    <Text style={styles.btnText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        padding: 20,

    },

    h2: {
        // textAlign:'center',
        // fontWeight: 'bold',
        fontSize: 25,
        marginTop: 50,
        fontFamily: 'Poppins-SemiBold',
        color: '#0D0F17',

    },

    h3: {
        marginTop: 6,
        fontFamily: 'Poppins',
        fontSize: 17,
        color: '#898989',
        marginBottom: 20
    },

    box: {
        borderWidth: 1,
        fontSize: 20,
        borderRadius: 10,
        borderColor: '#898989',
        marginTop: 20,
        padding: 10,
        color: 'black',
    },

    btnText: {
        color: '#FFFFFF',
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold'
    },

    buttonSection: {
        flex: 1,
        justifyContent: 'flex-end',
        // alignContent:'center',
        alignItems: 'center',
        // color: 'black',
        marginBottom: verticalScale(10),
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#194AF9',
        // marginHorizontal: 25,
        // marginTop:'40%',
        // paddingHorizontal: 25,
        // paddingVertical: 15,
        borderRadius: 90,
        // marginHorizontal: 15,
        height: verticalScale(60),
        width: horizontalScale(310),
    },
    boxtext: {
        borderWidth: 1,
        fontSize: 20,
        borderRadius: 10,
        borderColor: '#B6B6B6',
        marginTop: 20,
        padding: 10,
        color: '#898989',
    },
    boxtext1: {
        color: 'black',
    },
    text: {
        color: '#898989'
    },
    // textnamee: {
    //     color: '#868686',
    //     fontSize: 16,
    //     paddingHorizontal: horizontalScale(20),
    //     paddingVertical: verticalScale(14),
    //     borderColor: '#898989',
    //     borderRadius: 10,
    //     borderWidth: 1,
    //     marginHorizontal: horizontalScale(20),
    //     marginVertical: verticalScale(12),
    // },

})