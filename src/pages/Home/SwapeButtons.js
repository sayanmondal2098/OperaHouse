import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
// import {  } from 're';

// import "./SwapButtons.css";
// import "./";




class SwapeButtons extends React.Component {
    render() {
        return (

            <SafeAreaView>
               <FontAwesome5 name="reply" size={38} />
               <FontAwesome5 name="reply" size={38} />
               <FontAwesome5 name="reply" size={38} />
               <FontAwesome5 name="reply" size={38} />
               <FontAwesome5 name="reply" size={38} />
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
        color: '#ec5e6f',
        padding: 3
    },
    SwapButtons_start: {
        color: '#62b4f9',
        padding: 3
    },
    SwapButtons_right: {
        color: '#78e2b3',
        padding: 3
    },
    SwapButtons_lightning: {
        color: '#915dd1',
        padding: 3
    }

})


export default SwapeButtons;