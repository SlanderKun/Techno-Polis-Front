import { useState } from "react";
import {
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface MuiProps {
  name: string;
}

export const Mui = ({ name }: MuiProps) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const validate = (val: string) => val.trim() !== "";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    setIsValid(validate(val));
  };

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField
            fullWidth  
            label={name}
            value={value}
            onChange={handleChange}
            error={isValid === false}
            InputProps={{
                startAdornment:
                isValid === false ? (
                    <InputAdornment position="start">
                    <ErrorOutlineIcon
                        sx={{
                        color: "rgba(211, 26, 43, 1)",
                        fontSize: 22,
                        transition: "transform 0.3s ease",
                        }}
                    />
                    </InputAdornment>
                ) : null,
            }}
            sx={{
                "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                backgroundColor:
                    isValid === null ? "#f0f0f0" : isValid ? "#d4edda" : "rgba(255, 193, 193, 1)",
                transition: "all 0.3s ease",
                "& fieldset": {
                    borderColor: isValid === null ? "#ccc" : isValid ? "green" : "red",
                    transition: "all 0.3s ease",
                },
                "&.Mui-focused fieldset": {
                    borderColor: isValid === null ? "#999" : isValid ? "green" : "red",
                },
                },
            }}
            />

      </Stack>
    </Stack>
  );
};
