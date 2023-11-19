import ax from 'axios';

console.log(import.meta.env.VITE_AXIOS_BASE_URL);

const axios = ax.create({
    baseURL: import.meta.env.VITE_AXIOS_BASE_URL
})

export default axios;