import React from 'react';
import styles from "./styles.module.css"
import {observer} from "mobx-react-lite";
import {Card} from "@mui/material";

interface IProps {
    fullSize: boolean
}

const ListCardElement:React.FC<IProps> = ({fullSize}) => {
    return (
        <Card className={fullSize ? styles.fullSize : styles.shortSize}></Card>
    );
};

export default observer(ListCardElement);