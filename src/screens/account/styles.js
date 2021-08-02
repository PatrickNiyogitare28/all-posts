import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
      padding: 20,
      paddingHorizontal:40, 
      height: '100%',
      backgroundColor:'white'
  },
  image: {
      width: '100%',
      height: '50%',
      borderRadius:10
  },
  name: {
      fontSize: 22,
      fontFamily:'poppins-bold',
      paddingTop: 40,
      color: '#424242'
  },
  highlight: {
      fontFamily: 'poppins-regular',
      fontSize: 15,
      marginTop: 10,
      color: '#919191'
  },
  profileWrapper: {
      borderBottomWidth: 1,
      borderBottomColor:'#91919165',
      height:'59%'
  },
  section: {
      flexDirection:'row',
      marginTop: 30
  },
  sectionLabel: {
      marginLeft: 10,
      fontFamily: 'poppins-bold',
      fontSize: 18,
      marginTop: 10,
      color: '#363636'
  },
  sectionImage: {
      width: 40,
      height: 40
  },
  itemsContainer: {
      height: '32%',
      marginTop: 5,
      borderBottomWidth: 1,
      borderBottomColor:'#5A5A5A65',
      
  },
  item:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      height: 50
  },
  itemLabel:{
      fontSize: 15,
      color: '#36363663',
      fontFamily:'poppins-bold'
  },
  itemImage: {
      width: 20,
      height: 30
  },
  notification: {
      flexDirection:'row',
      justifyContent:'space-between',
      paddingTop: 20,
  },
  notificationLabel: {
      color: 'grey',
      fontFamily:'poppins-regular',
      fontSize: 18
  }
})

export {styles};