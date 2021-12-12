import { Box, Button, TextField } from '@mul/material'

const style = {
    postion: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(75%, 75%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const LoginForm = (props) => {

    return (
        <Box sx={style}>
            <TextField>Email</TextField>
            <TextField>Password</TextField>
            <Button>Log In</Button>
        </Box>
    )
}

export default LoginForm