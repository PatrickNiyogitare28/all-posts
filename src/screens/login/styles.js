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
    }
});

export default styles;