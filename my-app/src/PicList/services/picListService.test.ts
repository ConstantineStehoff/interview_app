import axios from 'axios';

import PicListService from './picListService';
import { URL } from './../../common/constants'; 


const picListService = new PicListService();

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getData', () => {
    it('gets data from the API successfully', async () => {
        const data = {
            data: [
                {
                "albumId": 1,
                "id": 1,
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "https://via.placeholder.com/600/92c952",
                "thumbnailUrl": "https://via.placeholder.com/150/92c952"
                }
            ]
        }
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data))

        await expect(picListService.getData(URL)).resolves.toEqual(data.data);
    })

    it('gets erroneously data from an API', async () => {
        const errorMessage = 'Network Error';
     
        mockedAxios.get.mockImplementationOnce(() =>
          Promise.reject(new Error(errorMessage)),
        );
        await expect(picListService.getData(URL)).rejects.toThrow(errorMessage);
      });
})