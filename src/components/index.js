import React from 'react';
import { View,Text,StyleSheet,checkBox } from 'react-native';
import {SIZES,FONTS, COLORS} from '../constants';

const styles = StyleSheet.create({

    view:{
        width: '100%',
        paddingVertical:5,
        paddingHorizontal: SIZES.padding,
        borderRadius:SIZES.borderRadius,
        elevation:12,
        shadowColor:COLORS.secondary,
        shadowOffset: {width:2,height:12},
        shadowRadius:12,
        flexDirection:'row',
        alignItems:'center'
    }
    
})

export default function Homepage(){
    return <View style={styles.view}>
               <checkBox style={styles.checkbox}/>
               <Text style={styles.text}></Text>
    </View>
}