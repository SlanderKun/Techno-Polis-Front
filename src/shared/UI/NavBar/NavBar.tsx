import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./styles.module.css";
import {store} from "../../../main.tsx";
import {Tooltip} from "@mui/material";

const NavBar:React.FC = () => {
    return (
        <div className={styles.navWrapper}>
            <div className={styles.contributors}>

            </div>
            <div className={styles.navButtons}>
                <NavLink className={styles.navLink} to={"/catalog/"}>
                    каталог
                </NavLink>
                {
                    store.AuthStore.profile?.status === "hr" &&
                    <Tooltip title={
                        <div>
                            <div>fefef</div>
                            <div>fefef</div>
                        </div>
                    } arrow>
                        <NavLink className={styles.navLink} to={"/vacancy/"}>
                            мои вакансии
                        </NavLink>
                    </Tooltip>

                }
                {
                    store.AuthStore.profile?.status === "university" &&
                    <NavLink className={styles.navLink} to={"/internship/"}>
                        мои вакансии
                    </NavLink>
                }
                {
                    store.AuthStore.profile?.status === "admin" &&
                    <>
                        <NavLink className={styles.navLink} to={"/analytics/"}>
                            аналитика
                        </NavLink>
                        <NavLink className={styles.navLink} to={"/moderation/"}>
                            модерация
                        </NavLink>
                    </>
                }
                <NavLink className={styles.navLink} to={"/profile/"}>
                    аккаунт
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;