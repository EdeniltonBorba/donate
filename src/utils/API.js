import axios from "axios"

const BASEURL = '';
const APIKEY = '';

export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};