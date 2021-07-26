import React from 'react';
import { BASEURL } from "../config";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useRef } from 'react';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Project Metis
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

export default function SignUp() {
  const classes = useStyles();
  const productNameRef = useRef('')
  const productUrlRef = useRef('')
  const introRef = useRef('')
  const imageRef = useRef('')

  const sendValue = async () => {
    let args = {
      name: productNameRef.current.value,
      introduction: introRef.current.value,
      product_url: productUrlRef.current.value,
      main_photo: imageRef.current.value,
    }
    const res = await axios.post(`${BASEURL}/product`, args);
    console.log('post product', res);
    return console.log(BASEURL, args) 
  } 

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentTurnedInIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registry your product
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <TextField
                inputRef={productNameRef}
                autoComplete="fname"
                name="productName"
                variant="outlined"
                required
                fullWidth
                id="producttName"
                label="Product Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                inputRef={productUrlRef}
                variant="outlined"
                required
                fullWidth
                id="productUrl"
                label="The url of your product"
                name="productUrl"
                autoComplete="url"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={introRef}
                variant="outlined"
                required
                fullWidth
                id="introduction"
                label="Introduction of your product"
                name="introduction"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={imageRef}
                variant="outlined"
                required
                fullWidth
                name="productImage"
                label="your product image urls"
                type="url"
                id="productImage"
                autoComplete="url"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick = {sendValue}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
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
}