import React from 'react';
import styles from "./styles.module.css"
import {PROFILE_COLOR_MAPPER, PROFILE_NAME_MAPPER, type ProfileStatuses} from "../../../../models/profile.ts";

interface IProps {
    status: ProfileStatuses;
}

const AccountStatus:React.FC<IProps> = ({status}) => {
    return (
        <div className={styles.statusWrapper} style={{backgroundColor: PROFILE_COLOR_MAPPER[status]}}>
            <p>{status === "unverified" && "!"}</p>
            <p>{PROFILE_NAME_MAPPER[status]}</p>
        </div>
    );
};

export default AccountStatus;