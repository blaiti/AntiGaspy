import React from 'react';
import {
   StyleSheet,
   Text,
   View,
} from 'react-native';
import * as theme from '../../assets/theme';

const colors = theme.light;
 
const Profile = () => {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
});
 
 export default Profile;
 