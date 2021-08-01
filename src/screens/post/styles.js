import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor:'white',
        height: '100%'
    },
    blogWrapper:{
        height: '90%',
    },
    imageWrapper: {
        
    },
  image: {
      width: '100%',
      height: 230,
      borderRadius: 10
  },
  bookmark: {
      backgroundColor:'#E4E3E3',
      width: 50,
      height: 50,
      borderRadius: 50,
      textAlign:'center',
      padding: 10,
      marginLeft: '80%',
      marginTop: -30
  },
  title:{
      fontFamily:'poppins-bold',
      fontSize: 30,
      color: '#4f4f4f',
      marginTop: 2
  },
  text: {
      fontSize: 16,
      fontFamily:'poppins-regular',
      color: '#9c9c9c'
  },
  subscription:{
     backgroundColor: '#DFDFDF60',
     padding: 10,
     paddingHorizontal:20,
     borderRadius: 50,
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center'
  },
  subscriptionWrapper:{

  }

  
})

export {styles};