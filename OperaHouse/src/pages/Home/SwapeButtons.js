import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';


import StarRateIcon from "@material-ui/icons/StarRate";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hexToRgb } from '@material-ui/core';
// import {  } from 're';

// import "./SwapButtons.css";
// import "./";




class SwapeButtons extends React.Component {
    render() {
        return (

            <SafeAreaView>
                <View >
                    <View style={style.SwapButtons_repeat}><FontAwesome5 name="reply" size={38} /></View>
                    <View style={style.SwapButtons_left}><FontAwesome5 name="times-circle" size={38} /></View>
                    <View style={style.SwapButtons_start}><FontAwesome5 name="star" size={38} /></View>
                    <View style={style.SwapButtons_right}><FontAwesome5 name="heart" size={38} /></View>
                    <View style={style.SwapButtons_lightning}><FontAwesome5 name="bolt" size={38} /></View>
                </View>
            </SafeAreaView>

        )
    }
}


const style = StyleSheet.create({
    SwapButtons: {
        position: "absolute",
        bottom: 10,
        width: 100,
        display: "flex",
        justifyContent: "space-evenly"
    },

    SwapeButtons: {
        backgroundColor: "white",
    },
    SwapButtons_repeat: {
        backgroundColor: "yellow",
        padding: 3
    },
    SwapButtons_left: {
        backgroundColor: 'rgb(236, 94, 111)',//(hexToRgb('#ec5e6f')),
        padding: 3
    },
    SwapButtons_start: {
        backgroundColor: 'rgb(98, 180, 249)',
        padding: 3
    },
    SwapButtons_right: {
        backgroundColor: 'rgb(120, 226, 179)',
        padding: 3
    },
    SwapButtons_lightning: {
        backgroundColor: 'rgb(145, 93, 209)',
        padding: 3
    }

})


export default SwapeButtons;