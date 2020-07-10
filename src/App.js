import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textStyle: {
    fontStyle: "oblique",
    fontSize: "30px",
  },
  buttonStyle: {
    marginTop: "30px",
    border: "  2px  solid blue",
    fontSize: "20px",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div style={{ textAlign: "center" }}>
      <Typography className={classes.textStyle} color="primary" variant="h1">
        Hello there
      </Typography>
      <Button
        className={classes.buttonStyle}
        color="secondary"
        fullWidth
        variant="outlined"
      >
        This is Button
      </Button>
    </div>
  );
};

export default App;
