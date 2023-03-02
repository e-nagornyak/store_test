import React, {useState} from 'react';
import {IconButton, InputAdornment, TextField} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

export const PasswordInput = ({register, error}) => {
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword(show => !show)
    const handleMouseDownPassword = (event) => event.preventDefault()

    return <TextField
        {...register('password')}
        label={"Password"}
        fullWidth
        color="secondary"
        type={showPassword ? 'text' : 'password'}
        error={!!error}
        helperText={error?.message}
        id="outlined-error-helper-text"
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}>
                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
                </InputAdornment>
            )
        }}
    />
};

