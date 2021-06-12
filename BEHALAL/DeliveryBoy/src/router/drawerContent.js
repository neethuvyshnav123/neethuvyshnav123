import React from 'react';
import {ScrollView, Text,View,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { DrawerItem,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
export default function CustomDrawerContent(props) {
    return (
     <View style={styles.container}>
     
        <View style= {styles.headerView}>
        <View style= {styles.imageContainer}>

          </View>
          <Text>Name</Text>
        </View>
        <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      </DrawerContentScrollView>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerView: {
        width: '100%',
        height: '25%',
        backgroundColor: '#133551',
        alignItems: 'center',
        justifyContent: 'center',   
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#fff',
        borderColor: '#57DCE7',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagePicker: {
        backgroundColor: '#fff',
        width: 35,
        borderRadius: 50,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -30,
        borderColor: '#57DCE7',
        borderWidth: 2
    },
    txtName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    txtBase: {
        color: '#fff',
        fontSize: 16
    },
    menuText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },
    menuBase: {
        width: '90%',
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 20
    },
    menuContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})