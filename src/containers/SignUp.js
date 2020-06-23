import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signupRequest } from '../actions/AuthenticationAction';
import { Copyright } from '../components/Copyright';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const auth = useSelector((state) => state.auth);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();

    useEffect(() => {
        const token = localStorage.getItem('access');
        if (token) {
            const tokenExpiration = jwtDecode(token).exp;
            const dateNow = new Date();

            if (tokenExpiration > dateNow.getTime() / 1000) {
                history.push('/dashboard');
            }
        }
    }, [auth, history]);

    const submitRequest = (event) => {
        event.preventDefault();
        dispatch(
            signupRequest({
                username: username,
                email: email,
                password: password,
            })
        );
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form
                    className={classes.form}
                    onSubmit={(event) => {
                        submitRequest(event);
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="username"
                                name="username"
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="User Name"
                                onChange={(e) => setUsername(e.target.value)}
                                error={!!username && !isUsernameValid(username)}
                                helperText={usernameHelperText(username)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                error={!!email && !isEmailValid(email)}
                                helperText={emailHelperText(email)}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                error={!!password && !isPasswordValid(password)}
                                helperText={passwordHelperText(password)}
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="allowExtraEmails"
                                        color="primary"
                                    />
                                }
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={
                            !isUsernameValid(username) ||
                            !isEmailValid(email) ||
                            !isPasswordValid(password)
                        }
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
};

const isUsernameValid = (username) => {
    return username.length > 6;
};

const isEmailValid = (email) => {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
};

const isPasswordValid = (username) => {
    return username.length > 6;
};

const usernameHelperText = (username) => {
    return !!username && !isUsernameValid(username) ? 'invalid username' : '';
};
const emailHelperText = (email) => {
    return !!email && !isEmailValid(email) ? 'invalid email' : '';
};

const passwordHelperText = (password) => {
    return !!password && !isPasswordValid(password) ? 'invalid password' : '';
};
