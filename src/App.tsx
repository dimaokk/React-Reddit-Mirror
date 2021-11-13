import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import "./main.global.css";
import Header from "./shared/Header/Header";
import Content from "./shared/Content/Content";
import { Layout } from "./shared/Layout/Layout";
import CardsList from "./shared/CardsList/CardsList";

function App() {

    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
            </Content>
        </Layout>    
    );
}

export default hot(() => <App />);
