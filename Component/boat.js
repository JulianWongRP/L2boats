import react from 'react';
import {Text, View, Image, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";


const boat = ({name, description, picture, icon_name}) => {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: "whitesmoke",
            marginBottom: 20,
            flexDirection: "column",
            borderWidth: 1,
            borderColor: "grey",
            justifyContent: "space-around",
            flex: 1

        },

        name: {
            fontSize: 30,
            fontWeight: "bold",
            margin: 10
        }

    })

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={icon_name} size={20} color="grey" />
                <Text style={styles.name}>{name}</Text>
            </View>
            <Text style={{margin: 20}}>{description}</Text>
            <Image source={picture} style={{width:400, height:400, marginBottom:20, alignSelf: 'center'}} />
        </View>
    );
};

export default boat;

