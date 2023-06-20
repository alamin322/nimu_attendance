import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/AntDesign';




function Card({data}) {
    return (

        <View style={{ margin: 10, top: 20 }}>

                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#9698A1', marginLeft: 15 }}>{data.title1}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, backgroundColor: '#fff', padding: 15, borderRadius: 10, borderWidth: 1, borderColor: '#9698A1' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#9698A1' }}>{data.title2}</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>{data.title4}</Text>
                            <Text style={{ fontSize: 14, color: data.textColor2, fontSize: 18, }}>{data.title5}</Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'flex-end' }}>

                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: data.textColor, backgroundColor: data.bgColor, padding: 6, borderRadius: 8, }}>{data.title3}</Text>

                        {/* <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#CC9D26', backgroundColor: '#FFEFC5', padding: 6, borderRadius: 8, }}>{data.title3}</Text> */}

                        <TouchableOpacity>
                            <View style={{
                                flexDirection: 'row',
                                // borderWidth: 1,
                                // borderColor: 'gray',
                                // padding: 5,
                                // borderRadius: 25,
                                // backgroundColor: '#F3F3F3',
                                // marginTop:15
                            }}>
                                <Icon name="right" size={20} style={{ marginTop: 20 }} />

                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

        </View>

    );
}




export default Card;