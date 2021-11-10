import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import "./main.global.css";
import Header from "./shared/Header/Header";
import Content from "./shared/Content/Content";
import { Layout } from "./shared/Layout/Layout";
import CardsList from "./shared/CardsList/CardsList";

import MyHooks from "./hook";
import { getValue } from "./utils/react/pickFromSynthetickEvent";
import { GenericList } from "./shared/GenericList/GenericList";
import {
    assignId,
    generateId,
    generateRandomString,
} from "./utils/ts/generateRandomIndex";
import { merge } from "./utils/ts/merge";

import Dropdown from "./shared/Dropdown/Dropdown";

const LIST = [{ text: "some" }, { text: "other" }, { text: "dsad" }].map(
    generateId
);

function App() {
    const [list, setList] = useState(LIST);
    const handleItemClick = (id: string) => {
        setList(list.filter((item) => item.id != id));
    };
    const handleAdd = () => {
        setList(list.concat(generateId({ text: generateRandomString() })));
    };

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
