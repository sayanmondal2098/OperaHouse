import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, background: 'white' }}>
                <SafeAreaView>
                    <Text>
                        Hello Home Screen
                    </Text>
                </SafeAreaView>
            </View>
        )
    }
}

export default HomeScreen;