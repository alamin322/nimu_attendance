import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';

const NewLeave = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState("Empty");

    // const onChange = (event, selectedDate) => {
    //     console.log("this is event: ", event);
    //     const currentDate = selectedDate || date;
    //     setShow(Platform.OS === 'android');
    //     setDate(currentDate);

    //     let tempDate = new Date(currentDate);
    //     let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    //     let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();

    //     setText(fDate + '\n' + fTime);

    //     setShow(true);

    //     console.log(fDate + ' (' + fTime + ') ')

    // }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'android');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let hours = tempDate.getHours();
        let minutes = tempDate.getMinutes();
        let amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();

        let fTime = `${hours}:${minutes} ${amPm}`;

        setText(fDate + '\n' + fTime);

        // setShow(false);
    };

    useEffect(() => {
        if (!show) {
            // Date or time selection is finished, do something here if needed
            // For example, you can call a function to save the selected date and time
            // or perform any other desired action
            console.log('Selected date and time:', text);
        }
    }, [show]);


    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }


    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));

    const handleDateSelect = (date) => {
        setSelectedDate(date.dateString);
    };

    return (
        <View style={styles.container}>

            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{text}</Text>

            <View style={{ margin: 20 }}>
                <Button title={text} onPress={() => showMode('date')} />
            </View>

            <View style={{ margin: 20 }}>
                <Button title='TimePicker' onPress={() => showMode('time')} />
            </View>

            {show && (
                <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={onChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginRight: 8,
    },
});

export default NewLeave;