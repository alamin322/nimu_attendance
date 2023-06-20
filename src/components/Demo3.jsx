import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateCalculator = () => {
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [showFrom, setShowFrom] = useState(false);
    const [showTo, setShowTo] = useState(false);

    const onFromButtonPress = () => {
        setShowFrom(true);
    };

    const onToButtonPress = () => {
        setShowTo(true);
    };

    const onFromDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || fromDate;
        setShowFrom(false);
        setFromDate(currentDate);
    };

    const onToDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || toDate;
        setShowTo(false);
        setToDate(currentDate);
    };

    const calculateDays = () => {
        if (fromDate && toDate) {
            const oneDay = 24 * 60 * 60 * 1000;
            const diffDays = Math.round(Math.abs((toDate - fromDate) / oneDay));
            return diffDays;
        }
        return 0;
    };

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={onFromButtonPress}>
                <Text style={styles.buttonText}>From: {fromDate ? fromDate.toDateString() : 'Select Date'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={onToButtonPress}>
                <Text style={styles.buttonText}>To: {toDate ? toDate.toDateString() : 'Select Date'}</Text>
            </TouchableOpacity>
            
            <Text style={styles.totalDaysText}>Total Days: {calculateDays()}</Text>

            {showFrom && (
                <Modal transparent animationType="slide">
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <DateTimePicker value={fromDate || new Date()} mode="date" onChange={onFromDateChange} />
                        </View>
                    </View>
                </Modal>
            )}

            {showTo && (
                <Modal transparent animationType="slide">
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <DateTimePicker value={toDate || new Date()} mode="date" onChange={onToDateChange} />
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#eaeaea',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
    },
    totalDaysText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '80%',
    },
});

export default DateCalculator;
