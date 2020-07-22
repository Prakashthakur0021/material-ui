import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: "17px",
    fontWeight: "bold",
  },
  inputBorder: {},
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h4"
            color="primary"
            align="center"
          >
            ALWAYS HERE TO HELP YOU
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            color="primary"
            align="center"
          >
            Feel free to contact us
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container direction="column" spacing={2}>
              <Grid item container alignItems="center">
                <Grid item xs={3}>
                  <Typography variant="h6" className={classes.label}>
                    Name :
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    className={classes.inputBorder}
                    variant="outlined"
                    required
                    type="text"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid item container alignItems="center">
                <Grid item xs={3}>
                  <Typography variant="h6" className={classes.label}>
                    Number :
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    className={classes.input}
                    required
                    variant="outlined"
                    type="number"
                    size="small"
                    min="100000000"
                    max="11000000000"
                  />
                </Grid>
              </Grid>
              <Grid item container alignItems="center">
                <Grid item xs={3}>
                  <Typography variant="h6" className={classes.label}>
                    Email :
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    className={classes.input}
                    fullWidth
                    required
                    variant="outlined"
                    type="email"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid item container alignItems="center">
                <Grid item xs={3}>
                  <Typography variant="h6" className={classes.label}>
                    Message :
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    className={classes.input}
                    fullWidth
                    required
                    variant="outlined"
                    type="text"
                    size="small"
                    rows="4"
                    multiline
                  />
                </Grid>
              </Grid>
              <Grid item container justify="center">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<SendIcon fontSize="small" />}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
