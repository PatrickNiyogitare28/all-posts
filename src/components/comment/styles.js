import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    name: {
        fontSize:'poppins-regular',
        color: '#424242',
        fontSize: 15
    },
    body: {
        fontSize:'poppins-regular',
        color: '#7E7E7E',
        fontSize: 13,
        marginTop: 10
    }
})

export {styles}