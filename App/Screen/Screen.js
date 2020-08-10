import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";


class Screen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <view style={{flex:1, background:'white'}}>
                <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity 
                    onPress={this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 name="bars" size={24} color="#161924"/>
                    </TouchableOpacity>
                    <view>
                        <text>
                            {this.props.name} Screen
                        </text>
                    </view>
                </SafeAreaView>
            </view>
        )
    }
}
export default Screen;