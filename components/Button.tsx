import { View,Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import COLORS from "../constants/color";

type Props ={
    title:string,
    color:string,
    filled:string
    style:any,
    onPress:any
}
const Button = (props:Props) => {

    const filledBgColor = props.color || COLORS.primary;
    const outlinedColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor:outlinedColor;
    const textColor = props.filled ? COLORS.white : COLORS.primary;
    return (
        <TouchableOpacity
        style={{
            ...styles.button,
            ...{backgroundColor:bgColor},
            ...props.style
        }}
        onPress={props.onPress}
        >
            <Text style={{fontSize:15,fontWeight:'bold',... {color:textColor}}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        paddingBottom:16,
        paddingVertical:10,
        borderColor:COLORS.primary,
        borderWidth:1, 
        alignItems:'center',
        justifyContent:'center'
    }
});
export default Button;