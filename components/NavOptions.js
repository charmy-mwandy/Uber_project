// import React from 'react';
// import { FlatList,  TouchableOpacity,  View , Image , Text } from 'react-native';
// import tw from 'tailwind-react-native-classnames';
// import { Icon } from "react-native-elements"

// const data = [
//     {
//         id: "123",
//         title:"Get a ride",
//         image: "https://links.papareact.com/3pn",
//         screen: "MapScreen",
//     },
//     {
//         id: "456",
//         title:"Order Food",
//         image: "https://links.papareact.com/28w",
//         screen: "FoodScreen",
//     }
// ];

// export default class NavOptions extends React.Component {
//     const navigation = useNavigation();
//   render() {
//     return (
//      <FlatList
//         data={data}
//         keyExtractor={(item) => item.id} 
//         renderItem={({ item}) => (
//             <TouchableOpacity 
//             onPress={() => navigation.navigate(item.screen)}
//             style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
//                 <View>
//                     <Image
//                         style={{width: 120 , height:120 , resizeMode: "contain"}}
//                         source={{ uri: item.image}} 
//                     />
//                     <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
//                     <Icon 
//                     style={tw`bg-black p-2 rounded-full w-10 mt-4`}
//                     name='arrowright' color="white" type='antdesign' />
//                 </View>
//             </TouchableOpacity>

//         )} 
//       />
//     );
//   }
// }


import React from 'react';
import { FlatList, TouchableOpacity, View, Image, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { Icon } from "react-native-elements"

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "FoodScreen",
    }
];

const NavOptions = () => {
    const navigation = useNavigation(); // Use useNavigation hook here
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 mt-20`}>
                    <View>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: "contain",}}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                            style={tw`bg-black p-2 rounded-full w-10 mt-4`}
                            name='arrowright' color="white" type='antdesign' />
                    </View>
                </TouchableOpacity>

            )}
        />
    );
};

export default NavOptions;

