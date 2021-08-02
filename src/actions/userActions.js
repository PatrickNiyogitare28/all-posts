export const GET_USER = 'GET_USERS'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'

import {getUserData} from '../helpers/getUser';

export const getUser = () => ({ type: GET_USER })
export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  payload: user,
})
export const getUserFailure = () => ({ type: GET_USER_FAILURE })

export function fetchUser(id) {
  return async dispatch => {
    dispatch(getUser())
    const userData = await getUserData(id);
    if(!userData){
      dispatch(getUserFailure);
    }else{
      dispatch(getUserSuccess(userData))
    }
    
  }
}
