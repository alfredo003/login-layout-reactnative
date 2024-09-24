import { View,Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../../constants/color";
import { Image } from "react-native";
import Button from "../../components/Button";
const Welcome = () => {
    return (
         <LinearGradient
         style={{
            flex:1
         }}
         colors={[COLORS.secondary,COLORS.primary]}
         >
            <View style={{flex:1}}>
                <View>
                    <Image source={require("../../assets/icon.png")}
                    style={{
                        height:100,
                        width:100,
                        borderRadius:20,
                        position:"absolute",
                        top:10,
                        transform:[
                            {translateX:20},
                            {translateY:50},
                            {rotate:"-15deg"}
                        ]
                    }}
                    />
                    <Image source={require("../../assets/icon.png")}
                    style={{
                        height:100,
                        width:100,
                        borderRadius:20,
                        position:"absolute",
                        top:-30,
                        left:100,
                        transform:[
                            {translateX:50},
                            {translateY:50},
                            {rotate:"-5deg"}
                        ]
                    }}
                    />
                    <Image source={require("../../assets/icon.png")}
                    style={{
                        height:100,
                        width:100,
                        borderRadius:20,
                        position:"absolute",
                        top:130,
                        left:-50,
                        transform:[
                            {translateX:50},
                            {translateY:50},
                            {rotate:"15deg"}
                        ]
                    }}
                    />
                     <Image source={require("../../assets/icon.png")}
                    style={{
                        height:100,
                        width:100,
                        borderRadius:20,
                        position:"absolute",
                        top:110,
                        left:100,
                        transform:[
                            {translateX:50},
                            {translateY:50},
                            {rotate:"15deg"}
                        ]
                    }007260}
                    />

<View style={{
    paddingHorizontal:22,
    position:"absolute",
    top:400,
    width:"100%"
}}> 
    <Text style={{
        fontSize:50,
        fontWeight:800,
        color:COLORS.white
    }}>Vamos Comecar</Text>
       <Text style={{
        fontSize:46,
        fontWeight:800,
        color:COLORS.white
    }}>Comecar</Text>

<View style={{marginVertical:22}}>
    <Text style={{
        fontSize:16,
        color:COLORS.white,
        marginVertical:4
    }}>Connect with each other with chatting</Text>
    <Text style={{
        fontSize:16,
        color:COLORS.white
    }}> Calling , Enjoy Safe and private texting</Text>
</View>

<Button title="Join Now"
 style={{
    marginTop:22,
    with:"100%"
 }}
/>
            </View>

            </View>

        </View>
         </LinearGradient>
    )
}

export default Welcome;