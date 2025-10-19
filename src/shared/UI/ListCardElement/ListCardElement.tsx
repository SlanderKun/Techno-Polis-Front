import React from 'react';
import styles from "./styles.module.css"
import {observer} from "mobx-react-lite";
import {Avatar, Card} from "@mui/material";

interface IProps {

}

const ListCardElement:React.FC<IProps> = ({}) => {
    return (
        <Card>
            <Avatar className={styles.avatar}/>
        </Card>
    );
};

export default observer(ListCardElement);