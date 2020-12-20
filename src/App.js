import './App.css';
import React from "react";

import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProductList from "./components/ProductList";
import Detail from "./components/Detail";
import ReviewPage from "./components/ReviewPage";


function App() {
    const [detail, setDetail] = React.useState(null);
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => <ProductList setDetail={setDetail}/>}/>
                    <Route path="/detail" render={() => <Detail detail={detail} setDetail={setDetail}/>}/>
                    <Route path="/review" render={() => <ReviewPage detail={detail}/>}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
