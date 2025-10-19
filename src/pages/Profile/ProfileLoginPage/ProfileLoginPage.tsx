import React from 'react';
import {observer} from "mobx-react-lite";
import styles from "../../../shared/UI/SwitchButton/styles.module.css";
import AuthForm from "../../../components/profile/profile-login/AuthForm/AuthForm.tsx";


const ProfileLoginPage:React.FC = () => {
    return (
        <main className={styles.pageWrap}>
            <section className={styles.pageContainer}>
                <h2 className={styles.sectionHeader}>Форма авторизации</h2>
                <AuthForm/>

            </section>
        </main>
    );
};

export default observer(ProfileLoginPage);