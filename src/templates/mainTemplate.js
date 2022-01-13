import React,{useEffect, useState} from 'react';
import { Layout } from 'antd';
import { Route, Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";
import SiteHeader from './siteHeader';
import SiteFooter from './siteFooter';


const { Footer, Content } = Layout;




const MainTemplate = (props) => {

    const { exact, component, path } = props;
    console.log(props)
    return (
        <Layout >
            <SiteHeader />
            <Layout className="main-layout">
                <Content>
                    <Route exact={exact} component={component} path={path} />
                </Content>
            </Layout>
            {/* <SiteFooter /> */}
        </Layout>
    );
}


export default MainTemplate;