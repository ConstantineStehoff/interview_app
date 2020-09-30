import axios from 'axios';
import PicModel from '../models/PicModel';

export default class PicListService {
    getData(url:string){
        return axios.get<PicModel[]>(url)
            .then(response => {
                console.log(response.data);
                const result:PicModel[] = response.data;
                return result;
            })
    }
}