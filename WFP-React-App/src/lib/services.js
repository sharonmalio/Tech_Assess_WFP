import axios from "axios"

const request = axios.create({
    baseURL: 'https://lifehealthyexpectancy.herokuapp.com',
    transformResponse: [
        function(data) {
          return JSON.parse(data);
        }
      ]
})

const ApiService = {
    fetchData: (requestParams) => {
       const data = request.get('/life-expectancy-data', {
           params: requestParams
       }).then(response => response.data)

       return data 
    }
}

export default ApiService