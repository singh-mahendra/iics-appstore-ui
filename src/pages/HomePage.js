import axios from "axios";
import React, { useEffect, useState } from "react";
import { home_icon } from "@informatica/archipelago-icons";
import { Button } from "@informatica/droplets-core";
import './Home.css';
import Product from "./Product";
import {getAllProducts} from './services/ProductService'

function HomePageComponent(props) {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);

 
  useEffect(async()=>{
      const res = await getAllProducts();
      const apps = res.data;
      setData(apps)
      setOriginalData(apps)
  },[])

  const handleChange = (e) => {
    let userValue = e.target.value;
    if (!e.target.value) {
      setData([...originalData]);
    } else {
      let filteredData = [];
      data.map((item) => {
        let str = item.appName;
        if (str.toLowerCase().indexOf(userValue) !== -1) {
          filteredData.push(item);
        }
      });
      setData([...filteredData]);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="navbar">
          <div className="menu">
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
            </ul>
          </div>
          <div className="searchbar">
            <input type="text" placeholder="search" onChange={handleChange} />
          </div>
        </div>
      </div>
      {data ? (
        <div>
          <div className="product-list">
            {data.map((product) => (
              <Product productDetails={product} />
            ))}
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}
 
export const HomePage = {
        id: "homePage",
        meta: {
            nav: {
                label: "Home",
                icon: <img src={home_icon} alt="" />
            }
        },
        path: "/home",
        component: HomePageComponent
    }