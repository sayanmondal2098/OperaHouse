import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import SwapeButtons from "./SwapeButtons";
// import TinderCards from "./TinderCards";
import Test from "./Test";

export default class Home extends React.Component {
    render() {
        return (
            <SafeAreaProvider>
                <View>
                    <SafeAreaView>
                        {/* <TinderCards /> */}
                        <SwapeButtons />
                        <Text>
                            Hello Home
                        </Text>
                        <Test />
                    </SafeAreaView>
                </View>
            </SafeAreaProvider>
        );
    }
}