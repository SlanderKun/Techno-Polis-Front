import React from 'react';
import styles from "./styles.module.css"

interface IProps {
    value: boolean;
    onClick?: () => void;
}

const SwitchButton:React.FC<IProps> = ({value, onClick}) => {
    return (
        <div onClick={onClick} className={styles.switchWrapper}>
            <div className={`${styles.switchButton} ${!value && styles.activeButton}`}>
                Войти в аккаунт
            </div>
            <div className={`${styles.switchButton} ${value && styles.activeButton}`}>
                Зарегистироваться
            </div>
        </div>
    );
};

export default SwitchButton;