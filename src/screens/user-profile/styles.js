import {StyleSheet} from 'react-native';

const styles  = StyleSheet.create({
   container: {
       height:'100%'
   },
   image: {
    width: '100%',
    height: '100%',
  },
  header: {
      padding: 20,
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop: 5
  },
  profileImageContainer:{
    //   backgroundColor:'red',
      justifyContent:'space-around',
      alignItems:'center'
  },
  avatar:{
      borderRadius: 20,
      marginTop: 100,
      width: 180,
      height: 180
  },
  title: {
      fontSize: 25,
      fontFamily:'poppins-bold',
      paddingTop: 20,
      color: '#353535'
  },
  email:{
    fontSize: 18,
    fontFamily:'poppins-regular',
    color: '#686868'
  },
  bio:{
    padding: 20,
    textAlign:'center',
    fontSize: 15,
    fontFamily:'poppins-regular',
    color: '#686868'
  },
  status: {
     padding: 20,
     flexDirection:'row',
     justifyContent:'space-between'
  },
  posts: {
      width: '30%',
      borderRightColor: '#8F8F8F',
      borderRightWidth: 3,
      textAlign:'center',
      alignItems:'center'
  },
  followers: {
      width: '30%',
      borderRightColor: '#8F8F8F',
      borderRightWidth: 3,
      textAlign:'center',
      alignItems:'center'
  },
  following: {
    width: '30%',
    textAlign:'center',
    alignItems:'center'
  },
  label:{
      fontSize: 18,
      fontFamily:'poppins-bold'
  },
  labelType:{
    fontFamily:'poppins-regular',
    fontSize: 15,
    color: '#8F8F8F'
  },

  btnWrapper: {
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-between',
    padding: 30
},
navigationTab: {
    height:'8%',
    flexDirection:'row', 
    justifyContent:'space-between', 
    padding: 20, 
    paddingHorizontal:30, 
    backgroundColor: '#f0f0f0'
},
navItem: {
    width: 35, 
    height: 35
}
  
})

const registerBtnStyles = StyleSheet.create({
    btnContainer: {
        width: '45%',
        backgroundColor: '#55b6cf',
        borderRadius: 10,
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
        borderRadius: 10,
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
export {styles, registerBtnStyles, loginBtnStyles}