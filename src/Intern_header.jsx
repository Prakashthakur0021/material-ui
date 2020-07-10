import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    fontFamily: "Dancing Script",
    color: "#2D88E2",
    margin: "32px",
    textAlign: "center",
  },
  desc: {
    fontFamily: "Brawler",
    color: "#2D88E2",
    fontSize: "1.3rem",
    textAlign: "center",
    lineHeight: "1.3em",
  },
});

const Inter_header = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid container sm={2}></Grid>
        <Grid container sm={8} direction="column" alignItems="center">
          <Grid item>
            <Typography className={classes.header} variant="h2" gutterBottom>
              Web Development Intership
            </Typography>
          </Grid>
          <Grid container>
            <Typography
              className={classes.desc}
              variant="subtitle1"
              align="justify"
              gutterBottom
            >
              So you know web development is your thing, but you want to learn
              and practice it on a big project. Say Cheese Technologies provides
              the suitable platform where students can enhance their skills by
              working on Industry Level Projects and hence gaining Real Time
              Experience !
            </Typography>
          </Grid>
        </Grid>
        <Grid container sm={2}></Grid>
      </Grid>
    </div>
  );
};
export default Inter_header;
