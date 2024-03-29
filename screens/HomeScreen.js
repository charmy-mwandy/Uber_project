import React from "react";
import { StyleSheet , View , Text,  Image ,  SafeAreaView } from "react-native";
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/navOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Google_Maps_APIKey } from "@env"
import { useDispatch } from "react-redux";
import { setDestination,setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView styles={[tw`bg-white  h-full ` ,styles.container ] }>
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
             <GooglePlacesAutocomplete 
                placeholder="Where From?"
                styles={{
                    container:{
                        flex: 1,
                    },
                    textInput: {
                        fontSize: 18,
                        color: 'black',
                    },
                }}
                onPress={(data , details = null) => {
                    dispatch(setOrigin({
                        location: details.geometry.location,
                        description: data.description
                    }))
                    dispatch(setDestination(null))
                }}
                fetchDetails = {true}
                returnKeyType ={"search"}
                enablePoweredByContainer={false}
                minLength={2}
                query={{
                    key: Google_Maps_APIKey,
                    language: 'en',
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
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