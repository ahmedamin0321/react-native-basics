import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPress}>
        <View style={styles.listItem}>
            <Image resizeMode="contain" style={styles.placeImage} source={props.place.image}/>
            <Text>{props.place.name}</Text>
        </View>
    </TouchableOpacity>
);

const styles = {
    listItem: {
        width: '100%',
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage: {
        marginRight: 8,
        width: 30,
        height: 30
    }
};
export default listItem;