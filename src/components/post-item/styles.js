import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
       flexDirection:'row',
       justifyContent:'space-between',
       marginTop: 30
    },
    imageWrapper: {
      width: '45%',
      height: 135
    },
    image: {
        width: '100%',
        borderRadius: 15,
        height: '100%'
    },
    descriptionWrapper: {
      width: '50%',
      justifyContent:'space-between',
      height: 120
    },
    date: {
        width: 60,
        backgroundColor: 'white',
        borderRadius: 20,
        height: 28,
        padding: 4,
        marginTop: -120,
        marginLeft: 10,
        textAlign:'center'
    },
    dateText: {
        color: '#535353',
        fontFamily:'poppins-regular',
        textAlign:'center'
    }

})

export {styles};