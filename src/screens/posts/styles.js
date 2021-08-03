import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
      paddingTop: 30,
      paddingLeft: 30,
      paddingRight: 30,
      height: '100%',
      backgroundColor: 'white'
  },
  title: {
    paddingTop: 10
  },
  titleText: {
      fontSize: 30,
      fontFamily: 'poppins-bold'
  },
  cardWrapper: {
    height: '90%',
   
  },
  floatingButtonWrapper: {
    borderTopColor:'#f0f2f2',
    borderTopWidth:1,
      paddingVertical: 10,
      marginTop: 20,
      height: '10%',
      alignItems:'center'
    //   justifyContent:'space-around'
  }
})

export {styles};