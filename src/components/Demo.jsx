import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const AttendanceManagement = () => {
    const [name, setName] = useState('');
    const [attendanceList, setAttendanceList] = useState([]);

    const handleAddAttendance = () => {
        if (name.trim() !== '') {
            setAttendanceList(prevList => [...prevList, name]);
            setName('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Attendance Management</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter name"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <Button title="Add" onPress={handleAddAttendance} />
            </View>
            <Text style={styles.subHeading}>Attendance List:</Text>
            <FlatList
                data={attendanceList}
                renderItem={({ item }) => <Text style={styles.attendanceItem}>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.attendanceList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: 10,
        padding: 10,
    },
    subHeading: {
        fontSize: 18,
        marginBottom: 10,
    },
    attendanceList: {
        flexGrow: 1,
    },
    attendanceItem: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default AttendanceManagement;
