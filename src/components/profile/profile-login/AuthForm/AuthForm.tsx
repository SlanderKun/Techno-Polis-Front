import React, {useState} from 'react';
import styles from "./styles.module.css"
import {Controller, type SubmitHandler, useForm, useFormState} from "react-hook-form";
import {Button, FormControl, InputAdornment, TextField} from "@mui/material";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import {observer} from "mobx-react-lite";
import {store} from "../../../../main.tsx";
import SwitchButton from "../../../../shared/UI/SwitchButton/SwitchButton.tsx";

interface IFilters {
    name: string,
    lastName: string,
    email: string,
    password: string,
}

const AuthForm:React.FC = () => {
    const [isRegister, setIsRegister] = useState(false)

    const { handleSubmit, control} = useForm<IFilters>({
        defaultValues: {
            name: "",
            lastName: "",
            email: "",
            password: "",
        }
    })
    const {errors} = useFormState({
        control
    })
    const onSubmit: SubmitHandler<IFilters> = async(data) => {
        const formatedData = {
            email: data.email,
            password: data.password,
        }
        try {
            if (isRegister){
                // await store.AuthStore.registerProfile(formatedData)
            } else {
                await store.AuthStore.login(formatedData)
            }
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <form className={styles.formWrap} onSubmit={handleSubmit(onSubmit)}>
            <SwitchButton value={isRegister} onClick={() => setIsRegister((prev) => (!prev))}/>
            <div className={styles.inputs}>
                {
                    isRegister &&
                    <>
                        <Controller
                            control={control}
                            name="name"
                            rules={{required: isRegister ? "Обязательное поле" : false}}
                            render={({field}) => (
                                <FormControl>
                                    <TextField
                                        className={styles.input}
                                        sx={{
                                            borderRadius: "20px",
                                            width: "546px",
                                        }}
                                        slotProps={{
                                            input: !!errors.name?.message ? {
                                                startAdornment: <InputAdornment position="start"><ErrorOutlineOutlinedIcon color="error"/></InputAdornment>,
                                            } : undefined,
                                        }}
                                        onChange={(e) => field.onChange(e)}
                                        value={field.value}
                                        error={!!errors.name?.message}
                                        helperText={errors?.name?.message}
                                        variant="outlined"
                                        placeholder={'Имя'}
                                    />
                                </FormControl>
                            )}
                        />
                        <Controller
                            control={control}
                            name="lastName"
                            rules={{required: isRegister ? "Обязательное поле" : false}}
                            render={({field}) => (
                                <FormControl>
                                    <TextField
                                        className={styles.input}
                                        sx={{
                                            borderRadius: "20px"
                                        }}
                                        slotProps={{
                                            input: !!errors.lastName?.message ? {
                                                startAdornment: <InputAdornment position="start"><ErrorOutlineOutlinedIcon color="error"/></InputAdornment>,
                                            } : undefined,
                                        }}
                                        onChange={(e) => field.onChange(e)}
                                        value={field.value}
                                        error={!!errors.lastName?.message}
                                        helperText={errors?.lastName?.message}
                                        variant="outlined"
                                        placeholder={'Фамилия'}
                                    />
                                </FormControl>

                            )}
                        />
                    </>
                }
                <Controller
                    control={control}
                    name="email"
                    rules={{required: "Обязательное поле"}}
                    render={({field}) => (
                        <FormControl>
                            <TextField
                                className={styles.input}
                                sx={{
                                    borderRadius: "20px"
                                }}
                                slotProps={{
                                    input: !!errors.email?.message ? {
                                        startAdornment: <InputAdornment position="start"><ErrorOutlineOutlinedIcon color="error"/></InputAdornment>,
                                    } : undefined,
                                }}
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                error={!!errors.email?.message}
                                helperText={errors?.email?.message}
                                variant="outlined"
                                placeholder={'Почта'}
                            />
                        </FormControl>
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    rules={{required: "Обязательное поле"}}
                    render={({field}) => (
                        <FormControl>
                            <TextField
                                className={styles.input}
                                sx={{
                                    borderRadius: "20px"
                                }}
                                slotProps={{
                                    input: !!errors.password?.message ? {
                                        startAdornment: <InputAdornment position="start"><ErrorOutlineOutlinedIcon color="error"/></InputAdornment>,
                                    } : undefined,
                                }}
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                error={!!errors.password?.message}
                                helperText={errors?.password?.message}
                                variant="outlined"
                                placeholder={'Пароль'}
                            />
                        </FormControl>
                    )}
                />
            </div>
            <Button
                type={'submit'}
                sx={{
                    width: 546,
                    height: 71,
                    color: "#FFFFFF",
                    backgroundColor: "#D31A2B",
                    borderRadius: "20px",
                }}
            >
                {
                    isRegister ? "Зарегистироваться" : "Отправить"
                }
            </Button>
        </form>
    );
};

export default observer(AuthForm);