import React from 'react';
import styles from "./styles.module.css"
import {Divider} from "@mui/material";
import {observer} from "mobx-react-lite";

const CustomFooter:React.FC = () => {
    return (
        <footer>
            <div className={styles.column}>
                <div className={styles.element}>
                    <div className={styles.contributor}>
                        TeamLeader - Руслан
                    </div>
                    <a href={"https://t.me/SlanderKun"} className={styles.contributorLink}>
                        @SlanderKun
                    </a>
                </div>
            </div>
            <Divider orientation="vertical" />
            <div className={styles.column}>
                <div className={styles.element}>
                    <div className={styles.contributor}>
                        Frontender - Виктория
                    </div>
                    <a href={"https://t.me/merqwi"} className={styles.contributorLink}>
                        @merqwi
                    </a>
                </div>
                <div className={styles.element}>
                    <div className={styles.contributor}>
                        Backender - Арсений
                    </div>
                    <a className={styles.contributorLink}>
                        @she1kopr9d
                    </a>
                </div>
            </div>
            <Divider orientation="vertical" />
            <div className={styles.column}>
                <div className={styles.element}>
                    <div className={styles.contributor}>
                        Devops - Денис
                    </div>
                    <a className={styles.contributorLink}>
                        @she1kopr9d
                    </a>
                </div>
            </div>
            <Divider orientation="vertical" />
            <div className={styles.column}>
                <div className={styles.element}>
                    <div className={styles.contributor}>
                        Designer - Эльмира
                    </div>
                    <a className={styles.contributorLink}>
                        @she1kopr9d
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default observer(CustomFooter);