import {
  CardMedia,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import Image from "../Assets/images/pngwing.com (1).png";
import ImageTwo from "../Assets/images/pngwing.com (2).png";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import UserForm from "./UserForm";

const fontFam = "sans-serif";

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

const Necttos = () => {
  const classes = useStyles();
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  const [open, setOpen] = React.useState(false);
  const [register, setRegister] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <div className="popup@@@@@@@@">
        <Dialog open={open} onClose={handleClose} className="popup@@@@@@@@">
          <DialogTitle style={{ backgroundColor: "#002267", color: "#fff" }}>
            Download Necttos Desktop App
          </DialogTitle>
          <DialogContent style={{ padding: 52 }}>
            {/* <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText> */}
            <Grid container xs={12} >
              <Grid iterm xs={6} style={{ alignSelf: "center", marginTop: 10 }}>
                Select Your Platform
              </Grid>
              <Grid iterm xs={6}>
                <TextField
                  // id="outlined-basic"
                  label="SELECT"
                  variant="outlined"
                  className={classes.textField}
                  // style={{ width: 255 }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Download</Button>
          </DialogActions>
        </Dialog>
      </div>

      <Grid container className={classes.roots}>
        <Grid
          item
          direction="column"
          style={{ padding: 30 }}
          xs={6}
          container
          // spacing={1}
        >
          <Grid item direction="column" className="header">
            <Grid item>
              <Typography
                // variant="subtitle1"
                // align="left"
                // color="inherit"
                style={{
                  //   position: "absolute",
                  left: "80px",
                  right: "86.34%",
                  top: "9.07%",
                  bottom: "87.5%",
                  color: "#002267",
                  fontFamily: fontFam,
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: 26,
                  //   lineHeight: "37px",
                }}
              >
                Welcome to
              </Typography>
            </Grid>
            <Grid item spacing={5}>
              <Typography
                // variant="subtitle1"
                // align="left"
                // color="inherit"
                style={{
                  //   position: "absolute",
                  left: "3.95%",
                  right: "61.42%",
                  top: 500,
                  bottom: 100,
                  color: "#002267",
                  fontFamily: fontFam,
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "100px",
                  lineHeight: "79px",
                }}
              >
                NECTTOS
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                align="left"
                color="inherit"
                style={{
                  //   position: "absolute",
                  left: 190,
                  right: "62.07%",
                  top: 150,
                  bottom: "70.09%",
                  color: "#002267",
                  fontFamily: fontFam,
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: 31,
                  lineHeight: "54px",
                  marginLeft: "148px",
                }}
              >
                VIRTUAL PLATFORM
              </Typography>
            </Grid>
            <Grid itemspacing={6}>
              <Typography
                variant="subtitle1"
                align="left"
                color="inherit"
                style={{
                  //   position: "absolute",
                  left: 190,
                  right: "62.07%",
                  top: 150,
                  bottom: "70.09%",
                  color: "#FF7E3D",
                  fontFamily: fontFam,
                  fontStyle: "normal",
                  fontWeight: 300,
                  fontSize: 31,
                  letterSpacing: 2,
                  //   lineHeight: "54px",
                  //   marginLeft: "148px",
                }}
              >
                "WE ARE AROUND WITH YOU"
              </Typography>
            </Grid>
          </Grid>
          <Grid item className="body" style={{ marginTop: 30 }}>
            <CardMedia
              component="img"
              height="300"
              width="100px"
              image={Image}
              alt="Paella dish"
              style={{ width: 600 }}
            />
          </Grid>
          <Grid item className="footer" style={{ marginTop: 30 }}>
            <Typography
              style={{
                color: "#002267",
                fontFamily: fontFam,
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: 15,
                letterSpacing: -1,
                // lineHeight: "23px",
              }}
            >
              NECTTOS IS A VIRTUAL PLATFORM AFFORDABLE FOR ANY PERSON OR ANY
              INSTITUTES.
            </Typography>
          </Grid>
          {register === false && (
            <Grid
              item
              className="footer"
              style={{ marginTop: 15, alignSelf: "center" }}
            >
              <ColorButton
                style={{ height: 54, borderRadius: 30 }}
                variant="contained"
                onClick={() => setRegister(true)}
              >
                <Grid container spacing={2}>
                  <Grid item style={{ placeSelf: "center" }}>
                    Sign in now
                  </Grid>
                  <Grid item style={{ padding: "6px", paddingTop: "11px" }}>
                    <ArrowForwardIcon />
                  </Grid>
                </Grid>
              </ColorButton>
            </Grid>
          )}
        </Grid>

        <Grid container item xs={6}>
          <Grid item container direction="column">
            <Grid
              item
              container
              direction="row"
              spacing={2}
              className="secondBoxHeader"
            >
              <Box style={{ marginLeft: "auto", padding: 15, marginTop: 10 }}>
                <Grid container direction="row" spacing={2}>
                  <Grid item>
                    <Typography
                      style={{
                        color: "#002267",
                        fontFamily: fontFam,
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: 17,
                      }}
                    >
                      CONTACT
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      onClick={handleClickOpen}
                      style={{
                        color: "#002267",
                        fontFamily: fontFam,
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: 17,
                        cursor: "pointer",
                      }}
                    >
                      DOWNLOAD
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {register && (
              <Grid
                item
                container
                direction="row"
                spacing={2}
                className="secondBoxBody"
                style={{ marginTop: 10 }}
              >
                <Grid item>
                  <TextField
                    // id="outlined-basic"
                    label="ENTER REGISTERED MOBILE"
                    variant="outlined"
                    className={classes.textField}
                    style={{ width: 255 }}
                  />
                </Grid>
                <Grid item>
                  <ColorButton
                    style={{ height: 54, borderRadius: 30 }}
                    variant="contained"
                  >
                    <Grid container spacing={2}>
                      <Grid item style={{ placeSelf: "center" }}>
                        Send OTP{" "}
                      </Grid>
                      <Grid item style={{ padding: "6px", paddingTop: "11px" }}>
                        <ArrowForwardIcon />
                      </Grid>
                    </Grid>
                  </ColorButton>
                </Grid>
              </Grid>
            )}

            <Grid item container direction="column" className="secondBoxFooter">
              <Box
                className={classes.box}
                style={{
                  background:
                    "linear-gradient(50.92deg, #FF7E3D 13.21%, #002267 101.95%)",
                  marginTop: 50,
                  width: "550px",
                  height: "550px",
                  borderRadius: "580px 0 0px 1px",
                  marginLeft: "auto",
                  boxShadow:
                    "0 0 0 10px hsl(0,0%,100%), 0 0 0 11px hsl(0, 0%, 60%)",
                }}
              >
                <Grid item>
                  {register ? (
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                          m: 1,
                          width: 328,
                          height: 328,
                        },
                      }}
                    >
                      <Paper
                        elevation={3}
                        style={{
                          borderRadius: "50%",
                          // boxShadow:
                          //   "0 0 0 10px hsl(0,0%,100%), 0 0 0 11px hsl(0, 0%, 60%)",
                          boxShadow:
                            "rgb(243 243 243) 0px 0px 0px 10px, rgb(199 199 199) 0px 0px 0px 11px",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="300"
                          width="100px"
                          image={ImageTwo}
                          alt="Paella dish"
                          style={{ width: "300px", padding: "13px" }}
                        />
                      </Paper>
                    </Box>
                  ) : (
                    <UserForm />
                  )}
                </Grid>
                {register && (
                  <Grid
                    item
                    container
                    direction="column"
                    spacing={2}
                    style={{ textAlign: "center", marginTop: 70 }}
                  >
                    <Grid item>
                      <Typography style={{ color: "#fff" }}>
                        REGISTER YOUR INSTITUTIONS NOW
                      </Typography>
                    </Grid>
                    <Grid item>
                      <ColorButton
                        size="large"
                        variant="contained"
                        onClick={() => setRegister(false)}
                      >
                        REGISTER NOW
                      </ColorButton>
                    </Grid>
                  </Grid>
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Necttos;
