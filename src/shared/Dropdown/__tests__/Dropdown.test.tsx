import Dropdown from "../Dropdown";
import React from "react";
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe("Dropdown", () => {
    test("shood render", () => {
        const wrapper = shallow(
            <Dropdown children={<div />} button={<button />} />
        );
        expect(wrapper).toBeDefined();
        expect(wrapper.find("button")).toBeDefined();
    });
    test('snap', () => {
        const wrapper = shallow(
            <Dropdown children={<div />} button={<button />} />
        );
        expect(wrapper).toMatchSnapshot()
    })
});

Enzyme.configure({ adapter: new Adapter() });
