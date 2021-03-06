import { Box, Button, TextField } from '@mui/material'
import { Typography } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

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
const history = useHistory()
const handleClose = () => history.push()
    return (
        <Box sx={style}>
            <Typography>Greetings Traveler! Have we met?</Typography>
            <Formik initialValues={{
                email: "link@hyrule.com",
                password: "Hyrule1986"
            }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Must be a valid email')
                        .max(255)
                        .required('Email is required'),
                    password: Yup.string().min(8, "Must be at least 8 characters").max(255).required('Password is required')
                })}
                onSubmit={(value, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        console.log('Successfully submitted!')
                        setStatus({ success: true })
                        setSubmitting(false)
                    } catch (err) {
                        console.log(err)
                        setStatus({ success: false })
                        setErrors({ submit: err.message })
                        setSubmitting(false)
                    } finally {
                        handleClose()
                    }
                }}
            >
                {({ errors, values, handleSubmit, handleBlur, handleChange, isSubmitting, touched }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <TextField
                            error={Boolean(touched.email && errors.email)}
                            fullWidth
                            helperText={touched.email && errors.email}
                            label="Email Address"
                            margin="normal"
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="email"
                            variant="outlined"
                            value={values.email}
                        />
                        <TextField
                            error={Boolean(touched.password && errors.password)}
                            fullWidth
                            helperText={touched.password && errors.password}
                            label="Password"
                            margin="normal"
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="password"
                            variant="outlined"
                            value={values.password}
                        />
                        <Button
                            color="primary"
                            disabled={isSubmitting}
                            fullWidth size="large"
                            variant="contained"
                            type="submit"
                        >
                            Log In
                        </Button>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default LoginForm