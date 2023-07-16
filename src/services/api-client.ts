import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'138883bd86f541c097c3bbcb51a7f383'
    }
})