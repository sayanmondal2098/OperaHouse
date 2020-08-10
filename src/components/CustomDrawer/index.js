import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

function CustomDrawer({ ...props }) {
    return (
        <View style={style.container}>
            <View style={style.userArea}>
                <Image
                source={require('../../../Assects/images/user1.png')}
                style={style.user}
                />
                <Text style={style.name}>Anonymous User</Text>
            </View>
            <DrawerNavigatorItems {...props} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
    },
    userArea:{
        marginTop: 50,
        marginLeft:10,
        marginBottom: 10
    },
    user:{
        margin: 20,
        width: 40,
        height: 40,
        alignContent: "center",
        alignItems: "center"
    },
    name:{
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default CustomDrawer;