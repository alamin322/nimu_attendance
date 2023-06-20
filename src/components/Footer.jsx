import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
   const navigation = useNavigation();
   return (
      <View style={styles.container}>

         <View style={styles.footer}>
            <TouchableOpacity style={styles.footerItem}>
               <Image
                  source={require('../assets/bottomIcon/compass.png')}
                  style={styles.icon}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem}>
               <Image
                  source={require('../assets/bottomIcon/fingerprint.jpg')}
                  style={styles.icon}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem}>
               <Image
                  source={require('../assets/bottomIcon/folder.png')}
                  style={styles.icon}
               />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('settings')}>

               <Image
                  source={require('../assets/bottomIcon/setting.png')}
                  style={styles.icon}
               />
            </TouchableOpacity>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },

   footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      backgroundColor: '#fff',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 50,
      borderRadius: 5,
      borderTopWidth: 2,
      borderTopColor: "gray",
   },
   footerItem: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   icon: {
      height: 25,
      width: 25,
   },
});

export default Footer;
