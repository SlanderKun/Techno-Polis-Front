import React, {type ReactNode} from 'react';
import {observer} from "mobx-react-lite";

interface LayoutProps{
    children?: ReactNode
}

const PageLayout:React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default observer(PageLayout);