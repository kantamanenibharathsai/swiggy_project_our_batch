import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import NearMeIcon from '@mui/icons-material/NearMe';
import SearchIcon from '@mui/icons-material/Search';
import WestIcon from '@mui/icons-material/West';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as SwiggySmallLogo } from '../../assets/navbar_one_logos/SwiggySmallLogo.svg';
import { ReactComponent as SwiggyThreeLogo } from '../../assets/navbar_three_logos/swiggyLogo.svg';
import navbarStyles from './NavbarThree.Styles';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';


interface Props {
    window?: () => Window;
}

interface IState {
    enterRestaurantNameOrFoddname: string;
    isTexticonClicked: boolean;
    isSearchForRestAndFoodClicked: boolean;
    searchDishOrRestaurantText: string;
    searchAreaStreetName: string;
}

const BasicModal: React.FC<{ isModalOpened: boolean; onClose: () => void }> = ({ isModalOpened, onClose }) => {
    const [searchAreaStreetName, setSearchAreaStreetName] = React.useState<IState["searchAreaStreetName"]>("")

    React.useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const modalContainer = document.getElementById('modal-container');
            if (modalContainer && !modalContainer.contains(event.target as Node)) {
                onClose();
            }
        };
        if (isModalOpened) {
            document.addEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isModalOpened, onClose]);

    return (
        <Modal open={isModalOpened} onClose={onClose} hideBackdrop>
            <Box id="modal-container" sx={navbarStyles.boxModalContainer}>
                <Box sx={navbarStyles.iconTextContainer}>
                    <TextField id="standard-basic" sx={navbarStyles.areaStreetName} value={searchAreaStreetName} onChange={e => { setSearchAreaStreetName(e.target.value) }} placeholder="Search for area, street name..." variant="standard" InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <NearMeIcon sx={{ ...navbarStyles.nearMeIcon, ...navbarStyles.nearMeIcon1 }} />
                            </InputAdornment>
                        ),
                    }} />
                </Box>
                <Box component="hr" sx={navbarStyles.hrElementModal} />
                <Box sx={{ ...navbarStyles.iconTextContainer, ...navbarStyles.iconTextContainer2 }}>
                    <NearMeIcon sx={{ ...navbarStyles.nearMeIcon, ...navbarStyles.nearMeIcon1 }} />
                    <Typography sx={navbarStyles.gpsText}>Locate me using GPS</Typography>
                </Box>
                <Box component="hr" sx={navbarStyles.hrElementModal} />
                <Box>
                    <List sx={navbarStyles.unorderedListMui}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((eachEle) => (
                            <>
                                <ListItem key={eachEle} sx={navbarStyles.listItemArea}>
                                    <ListItemAvatar>
                                        <NearMeIcon sx={navbarStyles.nearMeIconList} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Gorakhpur" secondary="Uttar Pradesh, India" />

                                </ListItem>
                                <Divider sx={navbarStyles.divider} />
                            </>
                        ))}
                    </List>
                </Box>
            </Box>
        </Modal>
    );
};

const NavbarThree: React.FC<Props> = (props: Props) => {
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isTexticonClicked, setIsTexticonClicked] = React.useState<IState['isTexticonClicked']>(false);
    const [searchDishOrRestaurantText, setSearchDishOrRestaurantText] = React.useState<IState["searchDishOrRestaurantText"]>("")
    const [isSearchForRestAndFoodClicked, setIsSearchForRestAndFoodClicked] = React.useState<IState["isSearchForRestAndFoodClicked"]>(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const onClickCloseiconEventHandler = () => {
        setSearchDishOrRestaurantText("")
    }

    const handleInitialSearchHandler = () => {
        setIsSearchForRestAndFoodClicked(!isSearchForRestAndFoodClicked)
    }

    const stopPropagation = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const renderSearchContainer = () => {
        return (
            <Box sx={navbarStyles.searchContainer}>
                {isSearchForRestAndFoodClicked ? (
                    <Box sx={navbarStyles.searchBox}>
                        <Box sx={navbarStyles.searchFilteredContainer}>
                            <FormControl fullWidth variant="outlined">
                                <TextField
                                    variant="outlined"
                                    sx={navbarStyles.textField}
                                    margin="normal"
                                    required
                                    fullWidth
                                    InputProps={{
                                        // disableUnderline: true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <WestIcon className="adornmentIcon" onClick={handleInitialSearchHandler} />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                {searchDishOrRestaurantText.length >= 1 && (
                                                    <CloseIcon onClick={onClickCloseiconEventHandler} className="adornmentIcon" style={{ marginLeft: "6px", marginRight: "-13px" }} />
                                                )}
                                            </InputAdornment>
                                        ),
                                    }}
                                    autoFocus
                                    placeholder="Search for Dishes and Restaurants"
                                    onChange={(e) => {
                                        setSearchDishOrRestaurantText(e.target.value);
                                    }}
                                    value={searchDishOrRestaurantText}
                                />

                            </FormControl>
                            <Box component="hr" sx={navbarStyles.hrElementDropDown} />
                            <Typography sx={navbarStyles.showingResultsInFoodText}>Showing Results in Food</Typography>
                            <Box sx={navbarStyles.listContainer}>
                                <Box component="ul" sx={navbarStyles.unorderedList}>
                                    <Box component="li" sx={navbarStyles.listFoodItem}>
                                        <Box sx={navbarStyles.foodImage} component='img' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/cqlbsjmwngaagned62yc'}></Box>
                                        <Box sx={navbarStyles.listItemDesc}>
                                            <Typography sx={navbarStyles.listHeading}>Chicken</Typography>
                                            <Typography sx={navbarStyles.listDesc}>Dish</Typography>
                                        </Box>
                                    </Box>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((eachListItem) => (
                                        <Box key={eachListItem} component="li" sx={navbarStyles.listFoodItem}>
                                            <Box sx={navbarStyles.foodImage} component='img' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/cqlbsjmwngaagned62yc'}></Box>
                                            <Box sx={navbarStyles.listItemDesc}>
                                                <Typography sx={navbarStyles.listHeading}>Chicken</Typography>
                                                <Typography sx={navbarStyles.listDesc}>Dish</Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ) : (
                    <Box sx={navbarStyles.initialSearchContainer} onClick={handleInitialSearchHandler}>
                        <Typography sx={navbarStyles.searchForRestAndFoodText}>Search for restaurant and food</Typography>
                        <SearchIcon sx={navbarStyles.searchIcon} />
                    </Box>
                )
                }
            </Box >
        );
    };


    const drawer = (
        <Box onClick={stopPropagation} sx={navbarStyles.drawerContainer}>
            <Typography variant="h6" sx={navbarStyles.swiggyLogoTypography}>
                <SwiggySmallLogo className="swiggySmallLogo" />
            </Typography>
            <Divider />
            {renderSearchContainer()}
        </Box>
    );

    return (
        <AppBar position="fixed" sx={navbarStyles.appBar}>
            <Container sx={navbarStyles.container} disableGutters>
                <Toolbar disableGutters sx={navbarStyles.toolbar}>
                    <Box sx={navbarStyles.leftContainer}>
                        <Box component="a" href="">
                            <SwiggyThreeLogo fontSize={"20px"} style={{
                                width: "60px",
                                '@media (min-width: 600px)': {
                                    width: '65px',
                                },
                                '@media (min-width: 900px)': {
                                    width: '72px',
                                },
                                '@media (min-width: 1200px)': {
                                    width: '78px',
                                },
                                '@media (min-width: 1400px)': {
                                    width: '120px',
                                },
                            } as any} />
                        </Box>
                        <Box component="hr" sx={navbarStyles.hrElement} />
                        <Box sx={navbarStyles.iconTextContainer} onClick={() => setIsTexticonClicked(true)}>
                            <NearMeIcon sx={navbarStyles.nearMeIcon} />
                            <Typography component="p" sx={navbarStyles.setupLocationText}>
                                Setup your precise location
                            </Typography>
                            <KeyboardArrowDownIcon sx={navbarStyles.keyDownArrowIcon} />
                        </Box>
                        <BasicModal isModalOpened={isTexticonClicked} onClose={() => setIsTexticonClicked(false)} />
                    </Box>
                    <Box sx={navbarStyles.rightContainer}>{renderSearchContainer()}
                        <AccountCircleIcon sx={navbarStyles.accountCircleIcon} />
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
                        sx={navbarStyles.drawer}>
                        {drawer}
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavbarThree;
