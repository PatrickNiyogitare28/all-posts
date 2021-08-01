import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: '#EEEEEE46',
        borderRadius:5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    micWrapper: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: 50,
        height: 50,
        alignItems: 'center',
        paddingTop: 10
    },
    mic: {
        width: 25,
        height: 30,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems:'center',
        width: '80%'
    },
    input: {
        fontSize: 18,
        fontFamily:'poppins-regular',
        width: '90%',
        marginLeft: 5,
    }

})

export {styles}