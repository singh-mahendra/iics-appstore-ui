import * as React from "react";
import { home_icon } from "@informatica/archipelago-icons";
import { Button, Panel, Toolbar, IconButton, Tabs, Card, HeaderLevelProvider } from "@informatica/droplets-core";
import axios from "axios";
import './ProductPage.css';
import ReactStars from "react-rating-stars-component";


const ProductPage = (props) => {
    const [selectedTab, setSelectedTab] = React.useState("overview");
    const [productData, setProductData] = React.useState({});
    React.useEffect(async () => {
        const res = await axios.get("http://localhost:3001/products/dde19380-4b0a-48b2-a8f9-beccb61c5673");
        setProductData(res.data);
    }, []);
    const styles = {
        row: {
            display: "flex",
            marginBottom: "5px",
        },
        p: {
            margin: 0,
        },
        p_first_child: {
            flexBasis: "20%",
            margin: 0,
        },
    };
    
    const tabData = {
        "overview":() => (<div className="overview-container">
            <div className="product-overview">
            <div className="product-img-container">
                <img className="product-logo" src={productData.icon} width="100"></img>
                <div className="prod-info">
                    <h1>{productData.name}</h1>
                    <h4>Latest Version: {productData.version}</h4>
                    <a href={productData.publisher.website}> By: {productData.publisher.name}</a>
                </div>
            </div>
            <h2>{productData.shortDescription}</h2>
            <p>{productData.longDescription}</p>


        </div>
        <Card>
            <HeaderLevelProvider level={3}>
                <Card.Header id="title" title="Highlights" />
            </HeaderLevelProvider>
            <Card.Body>
                <div style={styles.row}>
                    <p style={styles.p_first_child}>Owner:</p>
                    <p style={styles.p}>Administrator</p>
                </div>
                <div style={styles.row}>
                    <p style={styles.p_first_child}>Last Updated</p>
                    <p style={styles.p}>{new Date().toString()}</p>
                </div>
                <div style={styles.row}>
                    <p style={styles.p_first_child}>Input Sources</p>
                    <p style={styles.p}>5</p>
                </div>
            </Card.Body>
        </Card></div>),
        "pricing": () => (<div
            dangerouslySetInnerHTML={{
              __html: productData.pricing
            }}></div>),
        "usage": () => (<div
            dangerouslySetInnerHTML={{
              __html: productData.usage_info
            }}></div>),
        "support": () => (<div className="support-container">
                <div>
                <div>   
                    <h5>Services:</h5> 
                    <ul>
                        {productData.iics_services.map((service) => 
                            <li>{service}</li>
                        )}
                    </ul>

                </div>
                <div>   
                    <h5>Services Providers: </h5> 
                    <ul>
                        {productData.service_provider.map((service) => 
                            <li>{service}</li>
                        )}
                    </ul>

                </div>
                
                </div>
                <div
                dangerouslySetInnerHTML={{
                __html: productData.support_info
                }}></div></div>),
        "reviews": () => (<div>
            <ReactStars
            count={5}
            size={24}
            isHalf={true}
            value={productData.avgRating}
            edit={false}
            activeColor="#ffd700"
          />{productData.reviewCount} Ratings
        </div>)
    }

    return (
        <Panel
        title={<Toolbar>
            <Tabs>
                <Tabs.Tab onClick={() => setSelectedTab("overview")}>Overview</Tabs.Tab>
                <Tabs.Tab onClick={() => setSelectedTab("pricing")} >Pricing</Tabs.Tab>
                <Tabs.Tab onClick={() => setSelectedTab("usage")}>Usage</Tabs.Tab>
                <Tabs.Tab onClick={() => setSelectedTab("support")}>Support</Tabs.Tab>
                <Tabs.Tab onClick={() => setSelectedTab("reviews")}>Reviews</Tabs.Tab>
            </Tabs>
        </Toolbar>}
        >
        <div>
            {tabData[selectedTab]()}
        </div>
    </Panel>
    );
};


 
export default (props) => {
    return {
        id: "productPage",
        meta: {
            nav: {
                label: "Home",
                icon: <img src={home_icon} alt="" />
            }
        },
        path: "/product",
        privilege: "*",
        licenseId: "*",
        component: ProductPage,
        preserveState: "children",
        position: 2,
    };
};