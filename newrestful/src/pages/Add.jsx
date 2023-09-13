import React, { useEffect, userState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
  auth: {
    username: USERNAME,
    password: PASSWORD,
  },
};
const Add = () => {
  const [restaurant, setRestaurant] = userState({
    name: "",
    type: "",
    imageurl: ""
  })
  const navigate = useNavigate();
  const [error, setError] = userState(false);
  const {restaurantId} = useParams();
  const handleChange = (e) => {
    setRestaurant((prev) => ({...prev, [e.target.name]:e.target.value}));
  };
  useEffect

  const handleClick = async (e) =>{
    e.preventDefault();
    try{
      await axios.post(`${URL}/restaurants`,restaurant,config);
      navigate("/")
    } catch (error){
      console.log(error);
      setError(true);
    }
  }

  const handleClear = (e) => {
    setRestaurant({
      name:"",
      type:"",
      imageurl:"",
    });
    setError(false);
  }

  return (
    <div className="container">
      <h1>Grab Restaurant</h1>
      <div className="col-6 card lustify-content-center">
        <h5 className="card-header">Add new restaurant </h5>
        <div className="card-body">
          <from>
            <div className="from-group">
              <label htmlFor="name"> Restaurant name</label>
              <input
                type="text"
                className="from-control"
                name="name"
                placeholder="Restaurant name"
                onChange={handleChange}
                value={restaurant.name}
                />
              <input
                type="text"
                className="from-control"
                name="type"
                placeholder="Restaurant type"
                onChange={handleChange}
                value={restaurant.type}
              />
              <input
                type="text"
                className="from-control"
                name="imageurl"
                placeholder="Restaurant image URL"
                onChange={handleChange}
                value={restaurant.imageurl}
              />
            </div>
            <Link to="" className="btn btn-success" onClick={handleClick}> Add</Link>
            <Link to="" className="btn btn-danger" onClick={handleClear}> Clear</Link>
          </from>
        </div>
      </div>
    </div>
  )

};

export default Add