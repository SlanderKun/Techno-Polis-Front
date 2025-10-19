import React, {type ReactNode} from 'react';
// import ListCardElement from "../../../../shared/UI/ListCardElement/ListCardElement.tsx";
import {Button} from "@mui/material";
import styles from "./styles.module.css"

interface IProps {
    title: string,
    children?: ReactNode,
    catalogButton?: boolean,
}

const ProfileSection:React.FC<IProps> = ({title, children, catalogButton}) => {
    return (
        <section>
            <h2>{title}</h2>
            <div className={styles.listWrapper}>
                {children}
            </div>
            {
                catalogButton && <Button>Показать ещё</Button>
            }
        </section>

    );
};

export default ProfileSection;