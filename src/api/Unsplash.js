import Axios from 'axios';

export default Axios.create({
    headers: {
        Authorization: 'Client-ID 22103692ea269d42ca21610ac9fc588321c477b5453f7ba517a8626f8088989a'
    },
    baseURL: "https://api.unsplash.com/"
});