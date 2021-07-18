import React from 'react';
import {
   StyleSheet,
   Text,
   View,
} from 'react-native';
import * as theme from '../../assets/theme';

const colors = theme.light;
 
const Saved = () => {
    return (
        <View style={styles.container}>
            <Text>Saved</Text>
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
});
 
 export default Saved;
 