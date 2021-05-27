import { Route, Switch } from "react-router";
import Contact from "./Contact";
import Products from "./Products";
import Request from "./Request";

export default function Body() {
    return (
        <div className="body">
            <Switch>
                <Route path="/request" component={Request}/>
                <Route path="/products" component={Products}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </div>
    );
}