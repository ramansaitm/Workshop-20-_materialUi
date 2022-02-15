import React ,{useState}from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import { AppBar,Button,IconButton,Menu,MenuItem } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from '@material-ui/core/styles'
import { Link } from "react-router-dom";
import { display } from "@mui/system";
import MoreIcon from '@material-ui/icons/MoreVert'

const useStyles=makeStyles(theme=>({
  sectionDesktop:{
    display:"none",
    [theme.breakpoints.up("md")]:{
      display:"flex",
    },
  },
}));
function NavBar(props) {
  const classes=useStyles();
  const[mobileMenuAnchorEI,setmobileMenuAnchorEI]=useState(null);
  const ismobileMenuOpen=Boolean(mobileMenuAnchorEI);

  const OpenMobilesMenu=(event)=>{
    setmobileMenuAnchorEI(event.currentTarget);

  }
  const CloseMobileMenu=()=>{
      setmobileMenuAnchorEI(null)
  }
  const mobileMenu=(
    <Menu anchorEl={mobileMenuAnchorEI} id="mobile-menu" keepMounted open={ismobileMenuOpen}>
      <MenuItem component={Link} to="/Patients" onClick={CloseMobileMenu} >Patient</MenuItem>
      <MenuItem component={Link} to="/Billing" onClick={CloseMobileMenu}>Billing</MenuItem>
      <MenuItem component={Link} to="/User"onClick={CloseMobileMenu} >User</MenuItem>
      <MenuItem component={Link} to="/Calendar"onClick={CloseMobileMenu} >Calendar</MenuItem>
    </Menu>
  )
  return (
    <>
    <AppBar color="default" position="fixed">
      <Toolbar>
        <List component="nav">
          <ListItem component="div">
            <ListItemText >
              <TypoGraphy
                color="inherit"
                variant="h4"
                style={{ textDecoration: "none" }}
                component={Link}
                to="/Home"
              >
                MaterialUi
              </TypoGraphy>
            </ListItemText>
          <div className={classes.sectionDesktop}>
            <ListItemText inset>
              <TypoGraphy
                style={{ textDecoration: "none" }}
                color="inherit"
                variant="h6"
                component={Link}
                to="/Patients"
              >
                PATIENTS
              </TypoGraphy>
            </ListItemText>

            <ListItemText inset>
              <TypoGraphy
                style={{ textDecoration: "none" }}
                color="inherit"
                variant="h6"
                component={Link}
                to="/Calender"
              >
                CALENDAR
              </TypoGraphy>
            </ListItemText>
            <ListItemText inset>
              <TypoGraphy
                style={{ textDecoration: "none" }}
                color="inherit"
                variant="h6"
                component={Link}
                to="/User"
              >
                USERS
              </TypoGraphy>
            </ListItemText>
            <ListItemText inset>
              <TypoGraphy
                style={{ textDecoration: "none" }}
                color="inherit"
                variant="h6"
                component={Link}
                to="/Billing"
              >
                BILLING
              </TypoGraphy>
            </ListItemText>
            </div>
            <IconButton color="inherit" onClick={OpenMobilesMenu} > 
              <MoreIcon/>
            </IconButton>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>

    {mobileMenu}
    </>
  );
}

export default NavBar;
