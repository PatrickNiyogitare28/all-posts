// Create Redux action types
export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'
export const ASK_TRANSFER = 'ASK_TRANSFER'

let data = [
  {
      id: '1',
      school_name: 'Rwanda Coding Academy',
      district: 'Nyabihu',
      trade: 'Software Engineering',
      qualification: '0A',
      position: 'Instructor',
      transfer_asked: false,
      specialization: 'ICT Fluent',
      reason: 'Dead',
      module: 'Datastructures',
      description: 'Lorem epsume epsumo to lore and lore to carcano epsam'
    },
  {
      id: '2',
      school_name: 'Nyabihu TVET',
      district: 'Nyabihu',
      trade: 'Wilding',
      qualification: '0A',
      position: 'Instructor',
      transfer_asked: false,
      specialization: 'Wilding Fluent',
      reason: 'Sick',
      module: 'Wilding, Electricity',
      description: 'Lorem epsume epsumo to lore and lore to carcano epsam'
  },
  {
      id: '3',
      school_name: 'Kicukiro TVET',
      district: 'Kicukiro',
      trade: 'ICT',
      qualification: '0A',
      position: 'Instructor',
      transfer_asked: false,
      specialization: 'ICT Fluent',
      reason: 'Married',
      module: 'ICT',
      description: 'Lorem epsume epsumo to lore and lore to carcano epsam'
  },
  {
      id: '4',
      school_name: 'Kavumu TVET',
      district: 'Nyanza',
      trade: 'Driving',
      qualification: '0A',
      position: 'Teacher',
      transfer_asked: false,
      specialization: 'Driving Fluent',
      reason: 'New module',
      module: 'Driving',
      description: 'Lorem epsume epsumo to lore and lore to carcano epsam'
  },
]

// Create Redux action creators that return an action
export const getPosts = () => ({
    type: GET_POSTS,
  })
  
  export const getPostsSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts,
  })
  
  export const getPostsFailure = () => ({
    type: GET_POSTS_FAILURE,
  })
  export const askTransferSuccessful = (posts) => ({
    type: ASK_TRANSFER,
    payload: posts
  })

  // Combine them all in an asynchronous thunk
export function fetchPosts() {
    return async (dispatch) => {
      dispatch(getPosts())
  
      try {
        dispatch(getPostsSuccess(data))
      } catch (error) {
        dispatch(getPostsFailure())
      }
    }
}

export function askTransfer(payload){
      return async(dispatch) => {
        const {id, description} = payload;
        for(let i=0; i<data.length; i++){
          if(data[i].id === id){
               data[i].description = description;
               data[i].transfer_asked = true;
            dispatch(askTransferSuccessful(data))
            return;
          }
        }
      }
}