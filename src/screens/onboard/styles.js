import {StyleSheet} from 'react-native';

 const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        height: '100%',
        backgroundColor: 'white'
    },
    container: {
        height: '65%'
    },
    titleWrapper: {
        height: '50%'
    },
    titleStyle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraphStyle: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
    },
    textHeaderContainer: {
    },
    textHeader: {
        color: 'grey',
        fontSize: 20,
        fontFamily: 'poppins-regular'
    },
    slider: {
        paddingVertical: 10,
        height: 100,

    },
    introHighligh: {
        fontSize: 40,
        color: 'black',
        fontFamily: 'poppins-bold',
    },
    paginationContainer: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10
    },
    paginationItem: {
        width: 25,
        height: 5,
        backgroundColor: '#cccbca',
        borderRadius: 10
    },
    activePaginationItem: {
        width: 25,
        height: 5,
        backgroundColor: 'black',
        borderRadius: 10
    },
    authBtnWrapper: {
        width: '80%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 50
    },
    contactsWrapper: {
        width: '90%',
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    contactLabel: {
        fontSize:18,
        fontFamily:'poppins-regular',
        color:  '#6D6D6D'
    }
});

const registerBtnStyles = StyleSheet.create({
    btnContainer: {
        width: '45%',
        backgroundColor: '#55b6cf',
        borderRadius: 230,
        padding: 15,
        textAlign:'center',
    },
    btnLabel: {
        color: 'white',
        fontSize: 18,
        textAlign:'center',
        fontFamily:'poppins-regular'
    }
})


const loginBtnStyles = StyleSheet.create({
    btnContainer: {
        width: '45%',
        borderRadius: 30,
        padding: 15,
        borderWidth: 1,
        borderColor: 'black',

    },
    btnLabel: {
      color: 'black',
      fontSize: 18,
      textAlign:'center',
      fontFamily:'poppins-regular'

    }
})

export {styles, registerBtnStyles, loginBtnStyles};