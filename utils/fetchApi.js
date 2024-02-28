import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key':
                '7eaf0892f4mshaf34b79da42df01p1199a2jsn950c912abaf9',
        },
    });

    return data;
};
