
import React from 'react'

import { ConfigProvider } from 'antd'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import EditorPage from "./EditorPage"

function App() {
    return (
        <ConfigProvider>
            <Router>
                <Switch>
                    <Route path="/" component={EditorPage} />
                </Switch>
            </Router>
        </ConfigProvider >
    )
}

export default App;
