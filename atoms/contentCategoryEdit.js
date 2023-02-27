import React from 'react'
import { atom } from "recoil";


export const contentCatEdit = atom({
    key: "contentCategory", // unique ID (with respect to other atoms/selectors)
    default: { id: 9, name: "Choose Category", unavailable: false }, // default value (aka initial value)
});

