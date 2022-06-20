import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { MDBPopover, MDBPopoverBody, MDBBtn, MDBInput } from "mdbreact";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import firebase from "../../../firebase";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const drawerWidth = 220;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonIconClosed: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "rotate(0deg)",
  },
  menuButtonIconOpen: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "rotate(180deg)",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing.unit,
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  grow: {
    flexGrow: 1,
  },
});

class MiniDrawer extends React.Component {
  state = {
    open: false,
    anchorEl: null,
    data: [],
    input: "",
  };

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  componentDidMount = () => {
    firebase
      .firestore()
      .collection("rooms")
      .onSnapshot((snapshot) => {
        let data = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name,
          };
        });
        this.setState({
          ...this.state,
          data,
        });
      });
  };

  addChannel = () => {
    // const channelName =  prompt('Inter channel name');
    if (this.state.input) {
      firebase.firestore().collection("rooms").add({
        name: this.state.input,
      });
    }
    this.setState({ input: "" });
  };

  selectChannel = (id, title) => {
    if (id) {
      this.props.history.push(`/rooms/${id}`);
    } else {
      this.props.history.push(title);
    }
  };

  signout = async () => {
    await firebase
      .auth()
      .signOut()
      .then(function () {
        window.location.replace("/");
      })
      .catch(function (error) {
        window.location.replace("/");
      });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar}
          fooJon={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classes.menuButton}
            >
              <MenuIcon
                classes={{
                  root: this.state.open
                    ? classes.menuButtonIconOpen
                    : classes.menuButtonIconClosed,
                }}
              />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              noWrap
            >
              Geme Discussion Area
            </Typography>
            <MDBPopover placement="left" popover clickable id="popper3">
              <MDBBtn color="cyan">Add Channel</MDBBtn>
              <div className="p-5">
                {/* <MDBPopoverHeader>Add new channel</MDBPopoverHeader> */}
                <MDBPopoverBody>
                  <MDBInput
                    label="Enter channel name"
                    value={this.state.input}
                    onChange={(e) => this.setState({ input: e.target.value })}
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <div className="text-center">
                    <MDBBtn color="cyan" onClick={() => this.addChannel()}>
                      Create
                    </MDBBtn>
                  </div>
                </MDBPopoverBody>
              </div>
            </MDBPopover>
            <Link to="/meme" target_blank>
              <MDBBtn color="cyan">Generate Meme</MDBBtn>
            </Link>
            {/* <MDBBtn color="cyan">Generate Meme</MDBBtn> */}
            <div>
              <IconButton
                aria-owns={open ? "menu-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={() => this.signout()}>Log Out</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar} />

          {this.state.data.map((da, i) => (
            <List key={i + 1}>
              <ListItem
                button
                onClick={() => this.selectChannel(da.id, da.name)}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>{" "}
                {da.name}
              </ListItem>
            </List>
          ))}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div>
            {/* <p>This is body section</p> */}
            {/* <Chat/> */}
          </div>
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(MiniDrawer));
