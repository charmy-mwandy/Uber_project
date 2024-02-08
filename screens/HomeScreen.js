import React from "react";
import { StyleSheet , View , Text,  Image ,  SafeAreaView } from "react-native";
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/navOptions";

const HomeScreen = () => {
    return (
        <SafeAreaView style={[tw`bg-white  h-full ` ,styles.container ] }>
            <View style={tw`p-5`}>
            <Image 
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                }}
                source={{  
                    uri: "https://links.papareact.com/gzs",
                }}
             />
              <NavOptions />
            </View>
           
           
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    }
})