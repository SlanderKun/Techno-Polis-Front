import React from 'react';
import {observer} from "mobx-react-lite";
// import AccountStatus from "../AccountStatus/AccountStatus.tsx";
import styles from "./styles.module.css"
import {Avatar} from "@mui/material";

const AccountDisplay:React.FC = () => {
    return (
        <section className={styles.section}>
            <h1 className={styles.header}>Личный кабинет</h1>

            <div className={styles.accountContent}>
                {/*<AccountStatus status={"unverified"}/>*/}
                <div className={styles.accountWrapper}>
                    <div className={styles.imageContainerWrapper}>
                        <Avatar sx={{ width: 320, height: 320}}/>
                        <p className={styles.changeButton}>Изменить</p>
                    </div>
                    <div className={styles.description}>
                        <h3>Имя Фамилия</h3>
                        <h3>Данные компании:</h3>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default observer(AccountDisplay);