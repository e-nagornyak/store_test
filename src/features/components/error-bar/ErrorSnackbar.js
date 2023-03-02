import {memo} from "react";
import {setAppError} from "../../../app/reducer/actions";
import {useDispatch, useSelector} from "react-redux";
import {Alert, Snackbar} from "@mui/material";

export const ErrorSnackbar = memo(() => {
    const error = useSelector(state => state.app.error)
    const dispatch = useDispatch()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return
        dispatch(setAppError(null))
    }

    return (
        <div>
            <Snackbar open={error !== null} autoHideDuration={3000} onClose={handleClose}>
                <Alert variant="filled" severity="error" onClose={handleClose}>
                    {error}
                </Alert>
            </Snackbar>
        </div>
    )
})
