import axios from 'axios';
import {CONFIG} from './config';
export class WhetherAPI {


    static  getCurrentWeatherData =  async (cityName)=>{
         let url=
            CONFIG.WHETHER_API.replace('~',cityName);
        return await axios.get(url+CONFIG.WHETHER_API_KEY);
    }


}
