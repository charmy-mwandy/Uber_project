import React from 'react';
import { FlatList,  TouchableOpacity,  View } from 'react-native';

const data = [
    {
        id: "123",
        title:"Get a ride.",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title:"Order Food",
        image: "https://links.papareact.com/28w",
        screen: "FoodScreen"
    }
];

export default class NavOptions extends React.Component {
  render() {
    return (
     <FlatList
        data={data}
        keyExtractor={(item) => item.id} 
        renderItem={({ item}) => (
            <TouchableOpacity>
                <View>
                    <Image
                        style={{width: 120 , height:120 , resizeMode: "contain"}}
                        source={{ uri: item.image}} />
                </View>
            </TouchableOpacity>

        )} 
      />
    );
  }
}



