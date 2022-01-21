import React from "react";
import OtherApp from "../../pages/other-app";
import MobxApp from "../../pages/mobx-app";
import { Route, Routes } from "react-router-dom";
import CSSLayout from "../../pages/css-layout";

export default function MainContent() {
    return (
        <Routes>
            <Route path='/' element={<div />} />
            <Route path='/mobx-app' element={<MobxApp />} />
            <Route path='/other-app' element={<OtherApp />} />
            <Route path='/css-layout' element={<CSSLayout /> } />
        </Routes>
    );
}