import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MapView from "react-native-maps"
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectOrigin } from '../slices/navSlice';

const Map = () => {
    const origin = useSelector(selectOrigin)

    return (
        <MapVi
        style={tw`flex-1`}
        mapType='mutedStandard'
           initialRegion={{
                latitude:37.78825,
                longitude:-122.4324,
                latitudeDelta:0.0922,
                longitudeDelta:0.0421,
           }}
        />
        
    )
}

export default Map

const styles = StyleSheet.create({})
