import * as React from 'react';
import { Text, View, Image, StyleSheet, Button, Alert, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import Card from '../components/Card';
import Footer from '../components/Footer';


function CustomButton({ title, onPress, dotColor }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={[styles.dot, { backgroundColor: dotColor }]} />
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

function Home({navigation }) {
    const all_data = {
        title1: "December 2022",
        title2: "Half Day Application",
        title3: "Awaiting",
        title4: "Wed, 16 Dec",
        title5: "Casual",
        textColor: "#CC9D26",
        textColor2: "#FFC227",
        bgColor: "#FFEFC5"
    };

    const all_data2 = {
        title1: "November 2022",
        title2: "Full Day Application",
        title3: "Approved",
        title4: "Mon, 28 Nov",
        title5: "Sick",
        textColor: "#439C58",
        textColor2: "#757DF6",
        bgColor: "#B5F5D1"
    };

    const all_data3 = {
        title1: "January 2023",
        title2: "3 Days Application",
        title3: "Declined",
        title4: "Tue, 16 May",
        title5: "Casual",
        textColor: "#FF7F7F",
        textColor2: "#FFC227",
        bgColor: "#FFEFEE"
    };

    const all_data4 = {
        title1: "January 2023",
        title2: "Full Days Application",
        title3: "Approved",
        title4: "Wed, 02 Nov",
        title5: "Sick",
        textColor: "#439C58",
        textColor2: "#757DF6",
        bgColor: "#B5F5D1"
    };



    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    {/* ====================== Icon start ====================== */}
                    <View style={styles.iconcontainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('NewLeave')}>
                            <Image source={require("../assets/icons/add.png")} style={styles.addicon} />
                        </TouchableOpacity>

                        <TouchableOpacity >
                        <Image source={require("../assets/icons/notification.webp")} style={styles.notificationicon} />
                        </TouchableOpacity>

                    </View>
                    {/* ====================== Icon End ====================== */}

                    <View>
                        <Text style={styles.title}>Leaves</Text>
                    </View>

                    {/* ====================== Button start ====================== */}
                    <View style={styles.buttonContainer}>
                        <CustomButton
                            title="All"
                            onPress={() => Alert.alert('Simple Button pressed')}
                            dotColor="red"
                        />

                        <CustomButton
                            title="Casual"
                            onPress={() => Alert.alert('Simple Button pressed')}
                            dotColor="blue"
                        />

                        <CustomButton
                            title="Sick"
                            onPress={() => Alert.alert('Simple Button pressed')}
                            dotColor="green"
                        />

                    </View>
                    {/* ====================== Button End ======================= */}



                    {/* ====================== Card start ====================== */}

                    <Card data={all_data} />

                    <Card data={all_data2} />

                    <Card data={all_data3} />

                    <Card data={all_data4} />


                    {/* ====================== Card End ====================== */}

                </View>
            </ScrollView>

            <Footer />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        // backgroundColor: 'red'
    },
    iconcontainer: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        marginTop: 15,
        // backgroundColor: 'green',
        height: 50
    },
    addicon: {
        width: 30,
        height: 30,
        marginRight: 20,
    },

    notificationicon: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    title: {
        fontSize: 40,
        fontFamily: 'sansorif',
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'black'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        marginTop: 20,
        // backgroundColor: 'gray',
        // padding: 10
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#F3F3F3',
        backgroundColor: '#F3F9F9',
        paddingHorizontal: 38,
        paddingVertical: 12,
        // margin: 2,
        borderRadius: 4,
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 4,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },

    // buttonWrapper: {
    //     flex: 1,
    // },
});

export default Home;