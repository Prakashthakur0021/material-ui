import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "60vh",
    width: "100%",
    padding: "30px 0",
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    "@media only screen and (max-height: 700px) ": {},
  },
  circle: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: theme.palette.background.default,
  },
  text: {
    marginTop: "20px",
  },
  Itemcontainer: {
    margin: "20px",
  },
  up: {
    paddingBottom: "60px",
  },
}));

export const ThreeDots = ({ classes }) => {
  const lessThanXs = useMediaQuery("(min-width:800px)");
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      flexWrap="wrap"
      width={lessThanXs ? "80%" : "300px"}
    >
      <Box
        display="flex"
        flexDirection="column"
        className={classes.Itemcontainer}
        alignItems="center"
      >
        <Box className={classes.circle} />
        <Typography variant="h5" className={classes.text} color="secondary">
          Benefits
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        className={classes.Itemcontainer}
        alignItems="center"
      >
        <Box className={classes.circle} />
        <Typography variant="h5" className={classes.text} color="secondary">
          Mentoring
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        className={classes.Itemcontainer}
      >
        <Box className={classes.circle} />
        <Typography variant="h5" className={classes.text} color="secondary">
          PCL
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        className={classes.Itemcontainer}
      >
        <Box className={classes.circle} />
        <Typography variant="h5" className={classes.text} color="secondary">
          Skills
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        className={classes.Itemcontainer}
      >
        <Box className={classes.circle} />
        <Typography variant="h5" className={classes.text} color="secondary">
          LoR
        </Typography>
      </Box>
    </Box>
  );
};

const Benifit = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      component="section"
      display="flex"
      flexDirection="column"
      id="about"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Typography variant="h3" color="secondary">
        Benefits
      </Typography>
      <ThreeDots classes={classes} className={classes.up} />
    </Box>
  );
};

export default Benifit;
