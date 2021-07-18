import React from 'react';
import {
   StyleSheet,
   Text,
   View,
} from 'react-native';
import * as theme from '../../assets/theme';

const colors = theme.light;
 
const Settings = () => {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
});
 
 export default Settings;
 