import Axios from 'axios';

const baseApi = Axios.create({
    baseURL: 'https://api.covid19api.com',
})

export const Api = {
    getCountries: () => baseApi({
            method: 'GET',
            url: '/countries'
        }),
    getDataByCountry: (slug) => baseApi({
        method: 'GET',
        url: `/country/${slug}`
    })
}