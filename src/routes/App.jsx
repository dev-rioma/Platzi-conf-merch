import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../containers/Home";
import Checkout from "../containers/Checkout";
import Success from "../containers/Success";
import Payment from "../containers/Payment";
import NotFound from "../containers/NotFound";
import Information from "../containers/Information";
import Layout from '../components/Layout';


function App() {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="checkout/information" element={<Information />}/>
                    <Route path="checkout/payment" element={<Payment />}/>
                    <Route path="checkout/success" element={<Success />}/>
                    <Route path="*" element={<NotFound />}/>
                </Route>
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;
