import * as React from 'react';
import { ReactComponent as HelpLogo } from "../../assets/navbar_one_logos/Help.svg";
import { ReactComponent as SignInLogo } from "../../assets/navbar_one_logos/SignIn.svg";
import { ReactComponent as SwiggySmallLogo } from "../../assets/navbar_one_logos/SwiggySmallLogo.svg";
import { AppBar, Box, Toolbar, Container, List, ListItem, ListItemText, ListItemButton, Drawer, Divider, } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import swiggyLogo from "../../assets/swiggy-logo.svg"
import navbarStyles from './NavbarFive.Styles';

interface Props {
    window?: () => Window;
}

interface IState {
    mobileOpen: boolean,
}

const NavbarFive: React.FC<Props> = (props: Props) => {
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const [mobileOpen, setMobileOpen] = React.useState<IState["mobileOpen"]>(false);


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const stopPropagation = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const renderUnorderedList = () => {
        return (
            <List sx={navbarStyles.unorderdList}>
                <ListItem disablePadding sx={navbarStyles.listItem}>
                    <ListItemButton component="a" href="#simple-list" sx={navbarStyles.ListItemButton}>
                        <HelpLogo className='iconStyle' />
                        <ListItemText primary="Help" sx={{ ...navbarStyles.ListItemText, "& span": { ...navbarStyles.fontSize } }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={navbarStyles.listItem}>
                    <ListItemButton component="a" href="#simple-list" sx={navbarStyles.ListItemButton}>
                        <SignInLogo className='iconStyle' />
                        <ListItemText primary="Sign In" sx={{ ...navbarStyles.ListItemText, "& span": { ...navbarStyles.fontSize } }} />
                    </ListItemButton>
                </ListItem>
            </List>
        );
    }

    const drawer = (
        <Box onClick={stopPropagation}  sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={navbarStyles.swiggyLogoTypography} >
                <SwiggySmallLogo className="swiggySmallLogo" />
            </Typography>
            <Divider />
            {renderUnorderedList()}
        </Box>
    );

    return (
        <AppBar position="fixed" sx={navbarStyles.appBar}>
            <Container disableGutters sx={navbarStyles.container}>
                <Toolbar disableGutters sx={navbarStyles.toolbar}>
                    <Box sx={navbarStyles.leftContainer}>
                        <Box component={'img'} alt="swiggylogo" src={swiggyLogo} sx={navbarStyles.logo} />
                        <Typography sx={navbarStyles.helpText}>SECURE CHECKOUT</Typography>
                    </Box>
                    <Box sx={navbarStyles.rightContainer}>
                        {renderUnorderedList()}
                    </Box>
                    <IconButton
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={navbarStyles.hamburgerIcon}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={navbarStyles.drawer}
                    >
                        {drawer}
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavbarFive;
