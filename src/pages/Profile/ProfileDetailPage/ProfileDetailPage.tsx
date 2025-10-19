import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import styles from "./styles.module.css"
import AccountDisplay from "../../../components/profile/profile-detail/AccountDisplay/AccountDisplay.tsx";
// import {store} from "../../../main.tsx";
import ProfileSection from "../../../components/profile/profile-detail/ProfileSection/ProfileSection.tsx";
// import ListCardElement from "../../../shared/UI/ListCardElement/ListCardElement.tsx";

const ProfileDetailPage:React.FC = () => {
    useEffect(() => {

    },[])
    return (
        <main className={styles.main}>
            <AccountDisplay/>
            <ProfileSection title={"Актуальные стажировки"}>
                {
                    // store.AuthStore.profile?.elements &&
                    // store.AuthStore.profile?.elements.length > 0 &&
                    // store.AuthStore.profile?.elements.map((el) =>
                    //     (<ListCardElement>
                    //
                    //     </ListCardElement>)
                }
            </ProfileSection>
        </main>
    );
};

export default observer(ProfileDetailPage);