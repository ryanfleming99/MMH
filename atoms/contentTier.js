import React from 'react'
import { atom } from "recoil";


export const contentTier = atom({
    key: "contentTier", // unique ID (with respect to other atoms/selectors)
    default: { id: 1, name: 'Bronze', unavailable: false }, // default value (aka initial value)
});

