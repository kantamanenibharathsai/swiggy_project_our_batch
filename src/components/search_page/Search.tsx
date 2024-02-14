import * as React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
  Button,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import searchStyles from "./Search.Styles";

import CarouselExtraSmall from "../carousel_extra_small/CarouselExtraSmall";

interface IState {
  searchForResAndFood: string;
  isShowMoreClicked: boolean;
}

const SearchPage = () => {
  const [searchForResAndFood, setSearchForResAndFood] =
    React.useState<IState["searchForResAndFood"]>("");
  const [isShowMoreClicked, setIsShowMoreClicked] =
    React.useState<IState["isShowMoreClicked"]>(false);

  return (
    <Box sx={searchStyles.searchMainContainer}>
      <Box sx={searchStyles.searchChildContainer}>
        <FormControl sx={searchStyles.formControl} variant="outlined">
          <TextField
            id="outlined-adornment-search-for-restaurants-and-food"
            type="text"
            onChange={(e) => {
              setSearchForResAndFood(e.target.value);
            }}
            value={searchForResAndFood}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">{<SearchIcon />}</IconButton>
                </InputAdornment>
              ),
            }}
            placeholder="Search for restaurants and food"
            sx={searchStyles.textField}
          />
        </FormControl>
        <Box sx={searchStyles.recentSearchesMainContainer}>
          <Box sx={searchStyles.recentSearchContainer}>
            <Typography sx={searchStyles.recentSearchesText}>
              Recent Searches
            </Typography>
            {!isShowMoreClicked && (
              <Button
                sx={searchStyles.showMoreBtn}
                onClick={() => {
                  setIsShowMoreClicked(true);
                }}
                color="primary"
                size="small"
              >
                SHOW MORE
              </Button>
            )}
          </Box>
          <List sx={searchStyles.unorderedList}>
            {[1, 2, 3, 4].map((eachItem) => (
              <React.Fragment key={eachItem}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <SearchIcon />
                  </ListItemAvatar>
                  <ListItemButton>
                    <ListItemText
                      primary="Paradise Biryani"
                      sx={searchStyles.listItemText}
                    />
                  </ListItemButton>
                </ListItem>
                <Divider component="li" sx={searchStyles.divider} />
              </React.Fragment>
            ))}
          </List>
        </Box>
        <Box sx={searchStyles.popularCuisinesMainContainer}>
          <Typography sx={searchStyles.popularCuisinesText}>
            Popular Cuisines
          </Typography>
          <Box sx={searchStyles.popularCuisinesContainer}>
            <Avatar
              sx={searchStyles.foodImage}
              alt="Biryani"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/b4ff78ecc5b8b66f732dd06228916d65"
            />
            <Avatar
              sx={searchStyles.foodImage}
              alt="Pizzas"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/5dd234f7decdac4b4f71a2ff1408e10f"
            />
            <Avatar
              sx={searchStyles.foodImage}
              alt="Rolls"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/3df4fca020027e89b89c733cdffc4966"
            />
            <Avatar
              sx={searchStyles.foodImage}
              alt="Tea"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/87664acb0f9dd95d10a549bb8190ab27"
            />
            <Avatar
              sx={searchStyles.foodImage}
              alt="Burger"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/e76b511935016406e6ebc11dd7593387"
            />
            <Avatar
              sx={searchStyles.foodImage}
              alt="Chinese"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/89f3fec702aef5acbb51a6cbc284b3f7"
            />
            <Avatar
              sx={searchStyles.foodImage}
              alt="Cake"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/8322f6d6df488dc1f5a6674cfe863f0f"
            />
            <Avatar
              sx={searchStyles.foodImage}
              alt="Dessert"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/31f03222ea978aef3b10d386729eb076"
            />
          </Box>
          <CarouselExtraSmall />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchPage;
