import axios from "axios"

const BASEURL = 'https://api.globalgiving.org/api/public/services/search/project/';
const APIKEY = '&apikey=REACT_APP_OPEN_GLOBALGIVING_KEY';

export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};