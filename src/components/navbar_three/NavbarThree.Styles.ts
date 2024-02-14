const navbarStyles = {
  appBar: {
    width: "100%",
    backgroundColor: "#ffffff",
    height: { xs: "70px", lg: "80px" },
    // border: "2px solid orange",
  },

  container: {
    width: { xs: "90%", sm: "90%", md: "90%", lg: "85%", xl: "80%" },
    margin: "auto",
    // border: "2px solid orange",
    padding: "0",
    height: { xs: "65px", lg: "80px" },
    maxWidth: { xl: "90%" },
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    //border: "2px solid yellow",
    height: { xs: "65px", lg: "80px" },
    boxSizing: "border-box",
  },

  leftContainer: {
    display: { xs: "flex", sm: "flex" },
    alignItems: "center",
    gap: { xs: "6px", sm: "10px", md: "15px", lg: "15px" },
    cursor: "pointer",
    // border: "2px solid red",
  },

  "& .swiggyLogo": {
    fontSize: { xs: "80px", sm: "90px", md: "75px", lg: "70px", xl: "90px" },
  },

  hrElement: {
    border: "1px solid #E2E2E7",
    height: { xs: "30px", sm: "34px" },
  },

 

  setupLocationText: {
    fontSize: { xs: "11px", sm: "17px", xl: "18px" },
    color: "#414454",
    fontWeight: "900",
    // border: "1px solid #E2E2E7",
    width: { xs: "90px", sm: "auto" },
  },

  keyDownArrowIcon: {
    color: "rgb(241, 87, 0)",
    cursor: "pointer",
  },

  rightContainer: {
    width: { md: "300px", lg: "430px", xl: "490px" },
    display: { xs: "none", lg: "flex" },
    alignItems: "center",
    // border: "2px solid yellow",
    justifyContent: "space-between",
  },

  searchContainer: {
    p: { xs: "0px 5px", lg: "0px" },
    height: "92.3vh",
  },

  searchBox: {
    // width: { xs: "90%", lg: "360px", xl: "400px" },
    width: { xs: "97%", sm: "95%", md: "430px", lg: "360px", xl: "400px" },
    // border: "2px solid orange",
    height: { xs: "85vh", lg: "570px" },
    // marginTop: "450px",
    borderBottom: "none",
    // zIndex: 10,
    position: { xs: "relative", lg: "fixed" },
    top: { xs: "0", lg: 13 },
    // marginRight: "60px",
    boxShadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    mt: { xs: "35px", lg: "0px" },
    // paddingBottom: "300px"
    margin: "auto",
  },

  searchFilteredContainer: {
    position: "relative",
    // border: "2px solid black",
    padding: "0px 10px",
    outline: "none",
  },

  textField: {
    // border: "2px solid yellow",
    outline: "none",
    width: "100%",
    height: { xs: "50px", md: "auto" },
    mt: { xs: "0px", lg: "0px" },
    "& fieldset": { border: "none" },
    "& .adornmentIcon": {
      width: { xs: "15px", md: "22px", lg: "20px", xl: "20px" },
      height: { xs: "15px", md: "22px", lg: "20px", xl: "20px" },
      mr: "4px",
      ml: "-18px",
      cursor: "pointer",
    },
    "& ::placeholder": {
      fontSize: { xs: "10px", sm: "16px", md: "18px", lg: "14px", xl: "16px" },
    },
  },

  hrElementDropDown: {
    border: "1px solid #DBDCDC",
    width: "100%",
    mt: "-5px",
  },

  showingResultsInFoodText: {
    color: "#676A72",
    fontSize: { xs: "14px", sm: "15px" },
    mt: "10px",
    textAlign: "left",
    // border: "2px solid green",
    fontWeight: "700",
  },

  listContainer: {
    position: "absolute",
    // border: "10px solid blue",
    outline: "none",
    width: "100%",
    left: 0,
    margin: { xs: "0px", lg: "auto" },
    padding: "10px 5px",
    // marginTop: "15px"
  },

  unorderedList: {
    listStyleType: "none",
    // border: "2px solid pink",
    borderBottomLeftRadius: "9px",
    borderBottomRightRadius: "9px",
    width: { xs: "100%", lg: "97%" },
    height: { xs: "610px", lg: "450px" },
    overflowY: "scroll",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "13px",
  },

  listFoodItem: {
    // border: "2px solid green",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },

  foodImage: {
    borderRadius: "5px",
    height: { xs: "57px", sm: "58px", md: "70px", lg: "62px" },
    width: { xs: "57px", sm: "58px", md: "70px", lg: "62px" },
  },

  listItemDesc: {
    marginLeft: "16px",
    // border: "3px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: { xs: "4px", sm: "7px", md: "10px", lg: "5px" },
  },

  listHeading: {
    color: "#000",
    fontSize: { xs: "15px", lg: "14px" },
    fontWeight: "700",
    // border: "3px solid red",
    lineHeight: "1",
  },

  listDesc: {
    fontSize: { xs: "13px", lg: "12px" },
    color: "#43464A",
    // border: "3px solid red",
    lineHeight: "1",
  },

  initialSearchContainer: {
    borderRadius: "9px",
    backgroundColor: "#F0F0F5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // width: { md: "430px", lg: "360px", xl: "400px" },
    width: { xs: "97%", sm: "95%", md: "430px", lg: "360px", xl: "400px" },
    m: "auto",
    mt: { xs: "35px", lg: "0px" },
    height: "60px",
    p: "0px 20px",
    // border: "3px solid red",
    position: { xs: "relative", lg: "fixed" },
    top: { xs: "0", lg: 11 },
  },

  searchForRestAndFoodText: {
    color: "#898FAA",
    fontSize: { xs: "12px", sm: "17px" },
  },

  searchIcon: {
    fontSize: { xs: "14px", sm: "20px" },
    color: "#898FAA",
  },

  accountCircleIcon: {
    // border: "3px solid red",
    color: "#43464A",
    fontSize: "59px",
  },

  hamburgerIcon: {
    display: { xs: "block", lg: "none" },
    color: "black",
    mt: "10px",
  },

  drawer: {
    display: { xs: "block", lg: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: { xs: "275px", sm: "400px", md: "500px" },
    },
  },

  drawerContainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },

  swiggyLogoTypography: {
    my: 2.4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  boxModalContainer: {
    position: "fixed",
    // top: "32%",
    top: { xs: 300, md: 300 },
    left: { xs: 160, sm: 280, md: 320, lg: 370, xl: 450 },
    // border: "2px solid red",
    transform: "translate(-50%, -50%)",
    width: { xs: "300px", sm: "330px", md: "375px" },
    borderRadius: "14px",
    background: "#ffffff",
    p: 3,
    display: "flex",
    flexDirection: "column",
    gap: "17px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    height: "570px",
  },

  iconTextContainer: {
    display: "flex",
    gap: { xs: "4px", sm: "15px", md: "20px", lg: "12px", xl: "35px" },
    alignItems: "center",
    position: "relative",
    // border: "3px solid red",
    height: "46px",
  },

  areaStreetName: {
    height: "35px",
    // border: "3px solid orange",
    width: "100%",
    paddingLeft: "13px",
    "& ::placeholder": {
      fontSize: "14px",
    },
  },

  nearMeIcon: {
    color: "rgb(241, 87, 0)",
    fontSize: { xs: "15px", sm: "20px" },
  },


  nearMeIcon1: {
    fontSize: "23px",
    cursor: "pointer",
  },

  hrElementModal: {
    border: "0.4px solid #E2E2E7",
    width: "100%",
    mt: "-15px",
  },

  iconTextContainer2: {
    cursor: "pointer",
    paddingLeft: "15px",
    marginTop: "-10px",
  },

  gpsText: {
    fontSize: "13px",
    color: "rgb(241, 87, 0)",
  },

  unorderedListMui: {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
    // border: "2px solid pink",
    marginTop: "-17px",
    padding: "0px",
    overflowY: "scroll",
    height: "400px",
  },

  listItemArea: {
    listStyleType: "none",
    // border: "2px solid blue",
    height: "55px",
    cursor: "pointer",
  },

  nearMeIconList: {
    color: "#8D8F91",
  },

  divider: {
    border: "1px solid #E2E2E7",
    width: "100%",
  },
};

export default navbarStyles;
