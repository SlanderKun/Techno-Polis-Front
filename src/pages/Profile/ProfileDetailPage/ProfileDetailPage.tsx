import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import styles from "./styles.module.css"
import AccountDisplay from "../../../components/profile/profile-detail/AccountDisplay/AccountDisplay.tsx";

const ProfileDetailPage:React.FC = () => {
    useEffect(() => {

    },[])
    return (
        <main className={styles.main}>
            <AccountDisplay/>
            {/*{store.ProfileStore.profile.status === "hr" &&*/}

            {/*}*/}
        </main>
    );
};

export default observer(ProfileDetailPage);