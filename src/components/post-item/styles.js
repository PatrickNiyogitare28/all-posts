import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
       flexDirection:'row',
       justifyContent:'space-between',
       paddingTop:15,
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
    }

})

export {styles};