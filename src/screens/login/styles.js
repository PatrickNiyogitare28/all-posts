import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white',
        padding: 20
    },
    banner: {
        alignItems: 'center',
        height: '30%',
        justifyContent:'space-around',

    },
    image: {
        width: 90,
        height:90
    },
    highlight: {
        alignItems:'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: "#424242",
        fontFamily:'poppins-bold'
    },
    highlightTextContainer: {
      marginTop: 20
    },
    highlightText: {
        fontWeight: 'normal',
        fontSize: 18,
        color: '#5D577E',
        textAlign:"center",
        fontFamily:'poppins-regular'
    },

    formContainer: {
        marginTop: 80
    },
    input: {
       borderRadius: 5,
       backgroundColor: '#f0f0f0',
       padding: 15,
       fontSize: 20,
       marginVertical: 10

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 4,
        backgroundColor: '#55b6cf',
        marginVertical: 40
      },
      buttonText: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    
});

export {styles};