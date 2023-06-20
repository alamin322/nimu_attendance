import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MyIcon from 'react-native-vector-icons/AntDesign';
import { Icon } from '@rneui/themed';

const LeaveTo = () => {
    // ========================= For "To" =========================
    const [date2, setDate2] = useState(new Date());
    const [mode2, setMode2] = useState('date');
    const [show2, setShow2] = useState(false);
    const [text2, setText2] = useState("Empty");
    const [time_text2, setTimeText2] = useState('');


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



    return (

        <View>
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
                        {
                        show2 && (
                            <DateTimePicker
                                testID='dateTimePicker2'
                                value={date2}
                                mode={mode2}
                                is24Hour={true}
                                display='default'
                                onChange={onChange_for_to}
                            />
                        )
                    }
        </View>

    );
};


export default LeaveTo;