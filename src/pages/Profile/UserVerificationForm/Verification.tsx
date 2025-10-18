import React, { useState } from "react";
import styles from "./Verify.module.css";
import { Mui } from './MuiForms/MuiTextField';
import { Checkbox, FormControlLabel, Button } from "@mui/material";
import { styled } from "@mui/material/styles";


interface CustomCheckboxProps {
  id: string;
  label: string;
  required?: boolean;
}

//красни чекбокс
const RedCheckbox = styled(Checkbox)({
  color: "#d31a2b",
  "&.Mui-checked": {
    color: "#d31a2b",
  },
});

// CustomCheckbox 
const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ id, label, required = false }) => {
  return (
    <FormControlLabel
      control={<RedCheckbox id={id} required={required} />}
      label={<span dangerouslySetInnerHTML={{ __html: label }} />}
    />
  );
};

// 
export const Verification: React.FC = () => {
  const [active, setActive] = useState<boolean>(true);

  return (
    <div className={styles.verify}>
      <div className={styles.verificationContainer}>
        <div className={styles.title}><p>Верификация</p></div>

        <div className={styles.roleSwitch}>
          <button
            className={active ? styles.active : ""}
            onClick={() => setActive(true)}
          >
            <p>Вы HR</p>
          </button>
          <button
            className={!active ? styles.active : ""}
            onClick={() => setActive(false)}
          >
            <p>Вы Университет</p>
          </button>
        </div>

        {active && (
          <div className={styles.hrFormSection}>
            <div className={styles.flexGroup}>
              <div className={styles.inputGroup}><Mui name="Имя" /></div>
              <div className={styles.inputGroup}><Mui name="Наименование компании" /></div>
              <div className={styles.inputGroup}><Mui name="ИНН" /></div>
            </div>
            <div className={styles.flexGroup}>
              <div className={styles.inputGroup}><Mui name="Имя" /></div>
              <div className={styles.inputGroup}><Mui name="Наименование компании" /></div>
              <div className={styles.inputGroup}><Mui name="ИНН" /></div>
            </div>
          </div>
        )}

        {!active && (
          <div className={styles.universityFormSection}>
            <div className={styles.flexGroup}>
              <div className={styles.inputGroup}><Mui name="Юр лицо" /></div>
              <div className={styles.inputGroup}><Mui name="Наименование компании" /></div>
              <div className={styles.inputGroup}><Mui name="ДЕНЬги" /></div>
            </div>
            <div className={styles.flexGroup}>
              <div className={styles.inputGroup}><Mui name="АОЫОАДФДЫао" /></div>
              <div className={styles.inputGroup}><Mui name="Эщкере" /></div>
              <div className={styles.inputGroup}><Mui name="ИНН" /></div>
            </div>
          </div>
        )}

         {/* Чекбоксы  */}
        <div style={{ marginTop: "20px" }}>
          <CustomCheckbox
            id="confidence"
            required
            label='Я ознакомлен с <a href="#">правилами конфиденциальности</a>'
          />
          <CustomCheckbox
            id="personaldata"
            required
            label='Я даю разрешение на обработку моих <a href="#">персональных данных</a>'
          />
        </div>

        <Button type="submit" variant="contained" sx={{ backgroundColor: "#d31a2b", marginTop: 2}}> Отправить на верификацию </Button>

        <div className={styles.bottomMenu}>
          <div className={styles.bottomButton}><p>История верификаций</p></div>
          <div className={styles.bottomButton}>
            <p>Уведомления</p>
            <div className={styles.notificationDot}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
