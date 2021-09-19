import { Grid, Paper, TextField, Typography } from "@material-ui/core";

import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import * as React from "react";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  roots: {
    height: 550,
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: 30,
    },
  },
});

function UserForm() {
  const classes = useStyles();

  return (
    <Box
      style={{ margin: "-55px 0 0 -70px" }}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 500,
          // height: 700,
        },
      }}
    >
      <Paper elevation={3}>
        <Grid container direction="column">
          <Grid item className="registerHeader">
            <Box
              sx={{
                // width: 300,
                height: 70,
                bgcolor: "#002267",
                borderRadius: "5px 5px 0 0",

                // "&:hover": {
                //   backgroundColor: "primary.main",
                //   opacity: [0.9, 0.8, 0.7],
                // },
              }}
            >
              <Typography
                style={{
                  textAlign: "center",
                  padding: "23px",
                  color: "#fff",
                }}
              >
                REGISTER NOW
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            container
            spacing={1}
            className="registerBody"
            style={{ padding: 16 }}
          >
            <Grid item>
              <TextField
                // id="outlined-basic"
                label="ENTER REGISTERED MOBILE"
                variant="outlined"
                // className={classes.textField}
                style={{ width: 470 }}
                className={classes.textField}
              />
            </Grid>
            <Grid item>
              <TextField
                // id="outlined-basic"
                label="ENTER REGISTERED MOBILE"
                variant="outlined"
                // className={classes.textField}
                style={{ width: 470 }}
                className={classes.textField}
              />
            </Grid>
            <Grid item>
              <TextField
                // id="outlined-basic"
                label="ENTER REGISTERED MOBILE"
                variant="outlined"
                // className={classes.textField}
                style={{ width: 470 }}
                className={classes.textField}
              />
            </Grid>
            <Grid item>
              <TextField
                // id="outlined-basic"
                label="ENTER REGISTERED MOBILE"
                variant="outlined"
                // className={classes.textField}
                style={{ width: 470 }}
                className={classes.textField}
              />
            </Grid>
            <Grid item>
              <TextField
                // id="outlined-basic"
                label="ENTER REGISTERED MOBILE"
                variant="outlined"
                // className={classes.textField}
                style={{ width: 470 }}
                className={classes.textField}
              />
            </Grid>
            <Grid item>
              <TextField
                // id="outlined-basic"
                label="ENTER REGISTERED MOBILE"
                variant="outlined"
                // className={classes.textField}
                style={{ width: 470 }}
                className={classes.textField}
              />
            </Grid>
            <Grid item container spacing={1}>
              <Grid item>
                <TextField
                  // id="outlined-basic"
                  label="DISTRICT"
                  variant="outlined"
                  // className={classes.textField}
                  //   style={{ width: 470 }}
                  className={classes.textField}
                />
              </Grid>
              <Grid item>
                <TextField
                  // id="outlined-basic"
                  label=" ENTER PIN CODE"
                  variant="outlined"
                  // className={classes.textField}
                  //   style={{ width: 470 }}
                  className={classes.textField}
                />
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                // id="outlined-basic"
                label="ENTER REGISTERED MOBILE"
                variant="outlined"
                // className={classes.textField}
                style={{ width: 470 }}
                className={classes.textField}
              />
            </Grid>
          </Grid>
          <Grid
            item
            className="registerFooter"
            style={{ alignSelf: "center", paddingBottom: 20 }}
          >
            <Button variant="contained" size="large">
              register now
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default UserForm;
