import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    latestTab: {
        height: 20,
        justifyContent: 'space-between',
        alignItems:'center'
    }, 
    latestTabLabel:{
        fontSize: 17,
        fontFamily:'poppins-regular',
        color: '#757575'
    },
    tabLabel: {
      fontSize: 17,
      fontFamily:'poppins-regular',
      color: '#b8b8b8'
    },
    latestTabBorder: {
        width: 40,
        height: 5,
        borderRadius: 10,
        backgroundColor: '#39d3db',
        marginTop: 2
    }
})

export {styles}