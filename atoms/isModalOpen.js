import React from 'react'
import { atom } from "recoil";


export const modalStatus = atom({
    key: "modalOpen", // unique ID (with respect to other atoms/selectors)
    default: { id: 1, name: 'Health', unavailable: false }, // default value (aka initial value)
});

