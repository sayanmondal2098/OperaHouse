import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
// import SwapeButtons from "./SwapeButtons";
// import TinderCards from "./TinderCards";

export default class Test extends React.Component {
    render() {
        return (
            <SafeAreaProvider>
                <View>
                    <SafeAreaView>
                        {/* <TinderCards /> */}
                        {/* <SwapeButtons /> */}
                        <Text>
                            Hello Test
                        </Text>
                    </SafeAreaView>
                </View>
            </SafeAreaProvider>
        );
    }
}