import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import "./main.global.css";
import Header from "./shared/Header/Header";
import Content from "./shared/Content/Content";
import { Layout } from "./shared/Layout/Layout";
import CardsList from "./shared/CardsList/CardsList";

import MyHooks from "./hook";
import {getValue} from './utils/react/pickFromSynthetickEvent'

function App() {
    const [isVisible, setIsVisible] = useState(false)
    const [title, setTitle] = useState('')

    return (
        <Layout>
            <Header /> 
            <Content>
                <CardsList />
                <button onClick={()=> setIsVisible(!isVisible)}>Click Me pleas</button>
                <input type="text" onChange={getValue(setTitle)} />
                {isVisible && <MyHooks title={title} id='11' />}
            </Content>
        </Layout>
    );
}

export default hot(App);
