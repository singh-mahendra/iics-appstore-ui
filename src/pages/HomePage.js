import axios from "axios";
import React, { useEffect, useState } from "react";
import { home_icon } from "@informatica/archipelago-icons";
import { Shell, Button, CardLayout, Toolbar, Find, useFindState } from "@informatica/droplets-core";
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
  const findProps = useFindState();

  const handleChange = (userValue) => {
    if (!userValue) {
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
    <Shell.Page breadcrumbs={[(<div className="home-header"><h3>Home</h3><Toolbar>
      {/* <input type="text" placeholder="search" onChange={handleChange} /> */}
      <Find onSearch={handleChange} placeholder="Find" {...findProps} />
    </Toolbar></div>)]}
                        icon={<img src={home_icon} aria-label={`image for home`} alt="Icon"></img>}>

      
      {data ? (
        <div>
          <div className="product-list">
          <CardLayout cardWidth={300}>
            {data.map((product) => (
              <Product productDetails={product} />
            ))}
             </CardLayout>
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </Shell.Page>
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