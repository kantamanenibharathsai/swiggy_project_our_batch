import * as React from 'react';
import { ReactComponent as FilterLogo } from "../../assets/navbar_two_logos/Filter.svg";

import { ReactComponent as SwiggySmallLogo } from "../../assets/navbar_one_logos/SwiggySmallLogo.svg";
import { AppBar, Box, Toolbar, Container, Drawer, Divider, FormControl, InputAdornment, TextField, Stack, Chip } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import swiggyLogo from "../../assets/swiggy-logo.svg";
import navbarStyles from './NavbarTwo.Styles';
import { IoIosSearch } from "react-icons/io";
import FilterListIcon from '@mui/icons-material/FilterList';




interface Props {
    window?: () => Window;
}

interface IState {
    enterRestaurantNameOrFoddname: string
}


const NavbarTwo: React.FC<Props> = (props: Props) => {
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [enterRestaurantNameOrFoddname, setEnterRestaurantNameOrFoddname] = React.useState<IState["enterRestaurantNameOrFoddname"]>("");


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnterRestaurantNameOrFoddname(event.target.value);
    };

    const renderSearchContainer = () => {
        return (
            <Box sx={{ p: { xs: "0px 10px", lg: "0px" } }}>
                <FormControl fullWidth variant="outlined">
                    <TextField
                        variant="outlined"
                        sx={navbarStyles.textField}
                        margin="normal"
                        required
                        fullWidth
                        InputProps={{
                            disableUnderline: true,
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IoIosSearch className="searchIcon" />
                                </InputAdornment>
                            ),
                        }}
                        autoFocus
                        placeholder="Search for restaurant and food"
                        onChange={handleChange}
                        value={enterRestaurantNameOrFoddname}

                    />
                </FormControl>
            </Box>
        )
    }

    const renderUnorderedList = () => {
        return (
            <Stack sx={navbarStyles.navbarStack}>
                <Chip label="Filter" component="a" href="#basic-chip" clickable variant="outlined" icon={< FilterListIcon sx={navbarStyles.filterIcon} style={{ marginLeft: "-5px" }} />} sx={{ ...navbarStyles.chipText, width: "70px" }} />
                <Chip
                    label="Sort By"
                    component="a"
                    href="#basic-chip"
                    variant="outlined"
                    clickable
                    sx={navbarStyles.chipText}
                />
                <Chip
                    label="Fast Delivery"
                    component="a"
                    href="#basic-chip"
                    variant="outlined"
                    clickable
                    sx={navbarStyles.chipText}
                />
                <Chip
                    label="New on Swiggy"
                    component="a"
                    href="#basic-chip"
                    variant="outlined"
                    clickable
                    sx={navbarStyles.chipText}
                />
                <Chip
                    label="Ratings 4.0+"
                    component="a"
                    href="#basic-chip"
                    variant="outlined"
                    clickable
                    sx={navbarStyles.chipText}
                />
                <Chip
                    label="Pure Veg"
                    component="a"
                    href="#basic-chip"
                    variant="outlined"
                    clickable
                    sx={navbarStyles.chipText}
                />
                <Chip
                    label="Offers"
                    component="a"
                    href="#basic-chip"
                    variant="outlined"
                    clickable
                    sx={navbarStyles.chipText}
                />
                <Chip
                    label="Rs. 300 - Rs. 600"
                    component="a"
                    href="#basic-chip"
                    variant="outlined"
                    clickable
                    sx={navbarStyles.chipText}
                />
                <Chip
                    label="less than Rs. 300"
                    component="a"
                    href="#basic-chip"
                    variant="outlined"
                    clickable
                    sx={navbarStyles.chipText}
                />
            </Stack>
        )
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>fontSize
            <Typography variant="h6" sx={navbarStyles.swiggyLogoTypography}>
                <SwiggySmallLogo className="swiggySmallLogo" />
            </Typography>
            <Divider />
            {renderSearchContainer()}
            {renderUnorderedList()}
        </Box>
    );

    return (
        <AppBar position="fixed" sx={navbarStyles.appBar}>
            <Container sx={navbarStyles.container} disableGutters>
                <Toolbar disableGutters sx={navbarStyles.toolbar}>
                    <Box sx={navbarStyles.largeLeftContainer}>
                        {renderUnorderedList()}
                    </Box>
                    <Box sx={navbarStyles.smallLeftContainer}>
                        <Box component={'img'} alt="swiggylogo" src={swiggyLogo} sx={navbarStyles.logo} />
                    </Box>
                    <Box sx={navbarStyles.rightContainer}>
                        {renderSearchContainer()}
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
                        sx={{
                            display: { xs: 'block', lg: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { xs: "275px", sm: "400px", md: "500px" } },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavbarTwo;