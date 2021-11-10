import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import "./main.global.css";
import Header from "./shared/Header/Header";
import Content from "./shared/Content/Content";
import { Layout } from "./shared/Layout/Layout";
import CardsList from "./shared/CardsList/CardsList";

import MyHooks from "./hook";
import { getValue } from "./utils/react/pickFromSynthetickEvent";
import MyList from "./shared/GenericList/GenericList";
import { assignId, generateId } from "./utils/ts/generateRandomIndex";
import { merge } from "./utils/ts/merge";

const LIST = [{ value: "some" }, { value: "other" }].map(generateId);

function App() {
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                <MyList
                    
                    list={LIST.map(merge({onClick: ()=> {console.log('click')}}))}
                />
            </Content>
        </Layout>
    );
}

export default hot(() => <App />);
