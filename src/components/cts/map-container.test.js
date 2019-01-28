import {mount} from "enzyme/build";
import {MemoryRouter} from "react-router";
import App from "../app";
import React from "react";
import GoogleApiWrapper from "./map-container";

beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
        var p = new Promise((resolve, reject) => {
            resolve({
                ok: true,
                status: 200,
                json: function() {
                    return [];
                }
            });
        });

        return p;
    });
});

test('Map component renders', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/cts']}>
            <App />
        </MemoryRouter>
    );
    expect(wrapper.find(GoogleApiWrapper)).toHaveLength(1);
});
