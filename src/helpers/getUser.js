const getUserData = async (id) => {
    try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        )
        const data = await response.json()
        for(let i=0; i < data.length; i++){
          if(data[i].id === id){
            return data[i];
          }
        }
      } catch (error) {
         return false;
      }
}

export {getUserData};