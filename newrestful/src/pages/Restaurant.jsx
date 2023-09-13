import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = VITE_BASE_USERNAME;
const PASSWORD = VITE_BASE_PASSWORD;
const config = {
    auth: {
        username: USERNAME,
        password: PASSWORD,
    },
};

const Restaurant = () => {
    const [restaurant ,setRestaurant] = useState([]);
    useEffect(() => {
        const fetchAllRestaurants = async () => {
            try {
                const res = await axios.get(`${URL}/restaurants`, config);
                setRestaurant(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAllRestaurants
    },[])
  return (
    <div>Restaurant</div>
  )
}

export default Restaurant