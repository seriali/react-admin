import React, {Component} from 'react';

import { Button } from "antd";

const testHOC = (WrappedComponent) => {
    return class HOCComponent extends Component{
        render() {
            return(
                <div>
                    <WrappedComponent />
                    <div>这是高阶组件的写法</div>
                </div>
            )
        }
    }
};
@testHOC
class App extends Component {
    render() {
        return (
            <div>
                <Button type="primary">App</Button>
            </div>
        );
    }
}

export default App;
