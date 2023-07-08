import React, {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import Toaster from "react-hot-toast";
const root = ReactDOM.createRoot(document.getElementById('root'));
const App = lazy(()=>import("./App"))
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Suspense fallback='loading...'>
                <App />
                <Toaster
                    toastOptions={{
                        style:{background:"283046", color:"white"}
                    }}
                />
            </Suspense>
        </Provider>
    </BrowserRouter>
);

