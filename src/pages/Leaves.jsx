import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MyIcon from 'react-native-vector-icons/AntDesign';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import LeaveTo from '../components/LeaveTo';
import CustomButton from '../components/AppButton';

const NewLeave = () => {
    const navigation = useNavigation();
    // ========================= For "From" =========================
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Select a date');
    const [time_text, setTimeText] = useState('');


    const onChange_for_from = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        console.log("Current date: ", currentDate);
        // setShow(Platform.OS === 'android');
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let hours = tempDate.getHours();
        let minutes = tempDate.getMinutes();
        let amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        let fDate = `${tempDate.getDate()} ${monthNames[tempDate.getMonth()]} ${tempDate.getFullYear()}`;
        let fTime = `${hours}:${minutes} ${amPm}`;

        setTimeText(fTime);

        setText(fDate + ', ' + fTime);

        setShow(false);
    };

    const showMode_for_from = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const handle_from = () => {
        showMode_for_from('date')
    };

    // ========================= For "To" =========================
    const [date2, setDate2] = useState(new Date());
    const [mode2, setMode2] = useState('date');
    const [show2, setShow2] = useState(false);
    const [text2, setText2] = useState("Select a date..");
    const [time_text2, setTimeText2] = useState('');

    // const onChange_for_to = (event, selectedDate) => {
    //     const currentDate2 = selectedDate || date2;
    //     console.log("Current date from To: ", currentDate2);
    //     setShow2(Platform.OS === 'android');
    //     setDate2(currentDate2);

    //     let tempDate = new Date(currentDate2);
    //     let hours = tempDate.getHours();
    //     let minutes = tempDate.getMinutes();
    //     let amPm = hours >= 12 ? 'PM' : 'AM';
    //     hours = hours % 12;
    //     hours = hours ? hours : 12;
    //     minutes = minutes < 10 ? '0' + minutes : minutes;
    //     let monthNames = [
    //         'January', 'February', 'March', 'April', 'May', 'June',
    //         'July', 'August', 'September', 'October', 'November', 'December'
    //     ];
    //     let fDate = `${tempDate.getDate()} ${monthNames[tempDate.getMonth()]} ${tempDate.getFullYear()}`;
    //     let fTime = `${hours}:${minutes} ${amPm}`;

    //     setTimeText2(fTime);

    //     setText2(fDate + ', ' + fTime);

    //     setShow2(false);
    // };

    const onChange_for_to = (event, selectedDate2) => {
        const currentDate2 = selectedDate2 || date2;
        console.log("Current date from To: ", currentDate2);
        setShow2(false);
        setDate2(currentDate2);

        let tempDate2 = new Date(currentDate2);
        let hours = tempDate2.getHours();
        let minutes = tempDate2.getMinutes();
        let amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        let fDate = `${tempDate2.getDate()} ${monthNames[tempDate2.getMonth()]} ${tempDate2.getFullYear()}`;
        let fTime = `${hours}:${minutes} ${amPm}`;

        setTimeText2(fTime);
        setText2(fDate + ', ' + fTime);
    };


    const showMode_for_to = (currentMode) => {
        setShow2(true);
        setMode2(currentMode);
    }

    const handle_to = () => {
        showMode_for_to('date')
    };

    // ========================= Calculate total days ========================
    const [numOfDay, setNumOfDay] = useState('');
    const fromDate = new Date(date);
    const toDate = new Date(date2);

    const timeDifference = toDate.getTime() - fromDate.getTime();
    const totalDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    let allDays = `Apply for ${totalDays} Days Leave`;

    useEffect(() => {
        setNumOfDay(allDays);
    }, [date, date2]);
    console.log('Total days:', allDays);


    return (
        <ScrollView>
            <View style={{}} >
                <TouchableOpacity style={{}} onPress={() => navigation.navigate("Home")}>
                    <View style={{ flexDirection: 'row', marginLeft: 12 }}>
                        <MyIcon name="left" size={20} style={{ marginTop: 20, backgroundColor: '#fff', padding: 10, borderRadius: 10 }} />

                    </View>
                </TouchableOpacity>

                <View style={{ marginTop: 15, marginLeft: 10 }}>
                    <Text style={{ fontWeight: "bold", color: 'black', fontSize: 40 }}>
                        New Leave
                    </Text>
                </View>




                <View style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    top: 10,
                    borderRadius: 13
                }}>
                    {/* ========================= Type Start ============================ */}
                    <View style={{ margin: 1 }}>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            margin: 8,
                            backgroundColor: '#fff',
                            padding: 15,
                            borderRadius: 10,
                            borderBottomWidth: 1,
                            borderColor: '#9698A1'
                        }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <View style={{ marginLeft: -10 }}>
                                    <Icon
                                        raised
                                        name='edit'
                                        type='font-awesome'
                                        color='#f50'
                                        onPress={() => console.log('hello')} />
                                </View>

                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#9698A1' }}>Type</Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Casual</Text>
                                </View>
                            </View>



                        </View>

                    </View>
                    {/* ========================= Type End ============================ */}

                    {/* ========================= Cause Start ============================ */}

                    <View style={{ margin: 1 }}>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            margin: 10,
                            backgroundColor: '#fff',
                            padding: 15,
                            borderRadius: 10,
                            borderBottomWidth: 1,
                            borderColor: '#9698A1'
                        }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <View style={{ marginLeft: -10 }}>
                                    <Icon
                                        raised
                                        name='edit'
                                        type='font-awesome'
                                        color='#f50'
                                        onPress={() => console.log('hello')} />
                                </View>

                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#9698A1' }}>Cause</Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Trip to Cannes</Text>
                                </View>
                            </View>



                        </View>

                    </View>
                    {/* ========================= Cause End ============================ */}

                    {/* ========================= From start ============================ */}
                    <View style={{ margin: 1 }}>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            margin: 10,
                            backgroundColor: '#fff',
                            padding: 15,
                            borderRadius: 10,
                            borderBottomWidth: 1,
                            borderColor: '#9698A1'
                        }}>

                            <TouchableOpacity onPress={() => handle_from()}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                    <View style={{ marginLeft: -10 }}>
                                        <Icon
                                            raised
                                            name='edit'
                                            type='font-awesome'
                                            color='#f50'
                                        // onPress={() => console.log("click")}
                                        />
                                    </View>


                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#9698A1' }}>From</Text>
                                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>{text}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>



                        </View>

                    </View>
                    {/* ========================= From end ============================ */}

                    {/* ========================= To start ============================ */}

                    <View style={{ margin: 1 }}>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            margin: 10,
                            backgroundColor: '#fff',
                            padding: 15,
                            borderRadius: 10,
                            borderBottomWidth: 1,
                            borderColor: '#9698A1'
                        }}>

                            <TouchableOpacity onPress={() => handle_to()}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                    <View style={{ marginLeft: -10 }}>
                                        <Icon
                                            raised
                                            name='edit'
                                            type='font-awesome'
                                            color='#f50'
                                        // onPress={() => console.log("click")}
                                        />
                                    </View>


                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#9698A1' }}>To</Text>
                                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>{text2}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>



                        </View>

                    </View>

                    {/* ========================= To end ============================ */}


                </View>


                {show && (
                    <DateTimePicker
                        testID='dateTimePicker'
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display='default'
                        onChange={onChange_for_from}
                    />
                )}

                {show2 && (
                    <DateTimePicker
                        testID='dateTimePicker2'
                        value={date2}
                        mode={mode2}
                        is24Hour={true}
                        display='default'
                        onChange={onChange_for_to}
                    />
                )}

                <View style={{ margin: 20 }}>
                    {/* <Button title={numOfDay}
                        onPress={() => Alert.alert('Simple Button pressed')}
                        color="#5F66E1" /> */}

                    <CustomButton
                    title={numOfDay}
                    onPress={console.log("Leave button pressed")}
                    color="#5F66E1"/>

                </View>

            </View>
        </ScrollView>
    );
};



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 16,
//     },
//     row: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 16,
//     },
//     label: {
//         fontSize: 16,
//         marginRight: 8,
//     },
// });

export default NewLeave;