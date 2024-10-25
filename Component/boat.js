import react from 'react';
import {Text, View, Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

const boat = ({name, description, picture, icon_name}) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={icon_name} size={20} color="grey" />
                <Text>{name}</Text>
            </View>
            <Text>{description}</Text>
            <Image source={picture} style={{width:400, height:500, marginBottom:100}}/>
        </View>
    );
};

export default boat;

