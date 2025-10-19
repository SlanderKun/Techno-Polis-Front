import React from 'react';
import styles from "./styles.module.css"
import {observer} from "mobx-react-lite";

const CustomFooter:React.FC = () => {
    return (
        <footer>
            <div className={styles.column}>
                <div className={styles.contributor}>
                    <div className={styles.contributorName}>
                        TeamLeader - Руслан
                    </div>
                    <a href={"https://t.me/SlanderKun"} className={styles.contributorLink}>
                        @SlanderKun
                    </a>
                </div>
            </div>
            <div className={styles.separator}/>
            <div className={styles.column}>
                <div className={styles.contributorName}>
                    <div className={styles.contributorName}>
                        Frontender - Виктория
                    </div>
                    <a href={"https://t.me/merqwi"} className={styles.contributorLink}>
                        @merqwi
                    </a>
                </div>
                <div className={styles.contributorName}>
                    <div className={styles.contributorName}>
                        Backender - Арсений
                    </div>
                    <a className={styles.contributorLink}>
                        @she1kopr9d
                    </a>
                </div>
            </div>
            <div className={styles.separator}/>
            <div className={styles.column}>
                <div className={styles.contributorName}>
                    <div className={styles.contributorName}>
                        Devops - Денис
                    </div>
                    <a className={styles.contributorLink}>
                        @she1kopr9d
                    </a>
                </div>
            </div>
            <div className={styles.separator}/>
            <div className={styles.column}>
                <div className={styles.contributorName}>
                    <div className={styles.contributorName}>
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