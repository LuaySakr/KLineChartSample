import axios from 'axios';

export default  async function test() {
    
    return axios.get('http://localhost:3000/test');
         
    }
