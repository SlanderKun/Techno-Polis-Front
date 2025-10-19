import React from 'react';
import {observer} from "mobx-react-lite";

import NavBar from "../NavBar/NavBar.tsx";
import CustomFooter from "../CustomFooter/CustomFooter.tsx";

interface LayoutProps{
    Component: React.FC
}

const PageLayout:React.FC<LayoutProps> = ({Component}) => {

    // useEffect(() => {
    //     (async function(){
    //         useEffect(() => {
    //             (async function(){
    //                 // if (!store){
    //                 //     await store.CoffeeMachinesStore.getBrandsList()
    //                 // }
    //             })()
    //         }, []);
    //     })()
    // }, []);

    return (
        <div>
            <NavBar/>
            <Component/>
            <CustomFooter/>
        </div>
    );
};

export default observer(PageLayout);