import './App.css'
import {observer} from "mobx-react-lite";
import type {FC} from "react";
import {Route, Routes} from "react-router-dom";
import PageLayout from "./shared/UI/PageLayout/PageLayout.tsx";

const App:FC = ()=>  {

    return (
        <div>
            <Routes>
                <Route path={"*"} element={<PageLayout>

                </PageLayout>}/>
                <Route path='profile/'></Route>
            </Routes>
        </div>
    )
}

export default observer(App)
