import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default class Contact extends React.Component {
    render() {
        return (
            <SafeAreaProvider>
                <View>
                    <SafeAreaView>
                        <Text>Contact Meeee</Text>
                    </SafeAreaView>
                </View>
            </SafeAreaProvider>
        );
    }
}