import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/10'

axios.get(url).then(res =>{

const resData = res.data

console.log(resData)
} ).catch(errors => console.log(errors.response.status))