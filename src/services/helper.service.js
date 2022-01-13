import axios from "axios";

import { notification } from 'antd';
import http from './httpServices';

const API_URL = process.env.REACT_APP_LOCAL_HOST;

const fetchData = async () => {

    return await http.get(API_URL + '/lookup/getprojectinvestmentmodel',
        {
            // headers: authHeader(),

        })
}

export {
    fetchData,
    
}