const searchStyles = {
  searchMainContainer: {
    backgroundColor: "#FEFEFE",
    height: "calc(100vh)",
    width: "100%",
    // border: "1px solid red",
    paddingTop: "120px",
  },

  searchChildContainer: {
    // border: "1px solid red",
    margin: "auto",
    width: { xs: "100%", sm: "90%", md: "85%", lg: "75%", xl: "60%" },
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },

  formControl: {
    // m: 1,
    // border: "4px solid red",
    width: "100%",
    height: "40px",
  },

  textField: {
    width: "100%",
    height: "30px",
    p: "0",
    // px: "24px",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ": {
      border: "1px solid #C3C3C3",
    },

    "& .MuiOutlinedInput-root .MuiOutlinedInput-input ": {
      paddingTop: "13px",
      paddingBottom: "13px",
      // border: "4px solid green"
    },
    // border: "1px solid green"
  },

  recentSearchesMainContainer: {
    // border: "1px solid green",
    padding: "0px 15px",
  },

  recentSearchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  recentSearchesText: {
    fontSize: "15px",
    color: "#3D4152",
    fontWeight: "600",
  },

  showMoreBtn: {
    color: "#E46D58",
    fontSize: "10px",
    fontWeight: "800",
  },

  unorderedList: {
    width: "100%",
    // border: "1px solid red",
    padding: "0px",
    height: "200px",
    marginTop: "11px",

    "& .MuiListItem-root": {
      padding: "0px",
      display: "flex",
      alignItems: "center",
      // border: "10px solid pink",
    },

    "& .MuiListItem-root .MuiListItemAvatar-root": {
      minWidth: "30px",
      color: "#686B78",
      padding: 0,
      marginTop: "0",
      //   border: "3px solid green",
    },

    "& .MuiListItem-root .MuiButtonBase-root": {
      paddingLeft: "0px",
      paddingTop: "4px",
      marginLeft: "4px",
    },

    "& .MuiListItem-root .MuiTypography-root": {
      lineHeight: 0,
    },
  },

  listItemText: {
    color: "#686B78",
  },

  divider: {
    // width: "100%",
    // margin: "auto",
    margin: "13px 6px 13px 33px",
  },

  popularCuisinesMainContainer: {
    display: "grid",
    gap: "26px",
    padding: "0px 15px",
    // border: "2px solid yellow",
  },

  popularCuisinesText: {
    fontSize: "15px",
    color: "#3D4152",
    fontWeight: "600",
    // border: "2px solid violet"
  },

  popularCuisinesContainer: {
    // border: "2px solid orange",
    display: { xs: "none", sm: "grid", md: "grid", lg: "flex" },
    gridTemplateColumns: { sm: "repeat(5, 1fr)", md: "repeat(6, 1fr)" },
    flexDirection: { md: "column", lg: "row" },
    gap: { sm: "", lg: "13px", xl: "17px" },
    rowGap: "26px",
    justifyContent: "center",
  },

  foodImage: {
    borderRadius: "100%",
    height: "100px",
    width: "100px",
  },

  foodImageText: {
    color: "#3D4152",
    fontSize: "14px",
    fontWeight: "200",
  },
};

export default searchStyles;
