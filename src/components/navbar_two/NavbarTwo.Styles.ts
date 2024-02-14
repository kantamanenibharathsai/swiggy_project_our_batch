const navbarStyles = {
  appBar: {
    width: "100%",
    backgroundColor: "#ffffff",
    height: { xs: "70px", lg: "80px" },
    // border: "2px solid orange",
  },

  container: {
    width: { xs: "90%", sm: "90%", md: "90%", lg: "100%" },
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
    // border: "2px solid yellow",
    height: { xs: "65px", lg: "80px" },
    boxSizing: "border-box",
  },

  smallLeftContainer: {
    display: { xs: "block", lg: "none" },
    // border: "2px solid red",
  },

  largeLeftContainer: {
    display: { xs: "none", lg: "flex" },
    alignItems: "center",
    gap: { xs: "6px", sm: "10px", md: "15px", lg: "5px" },
    cursor: "pointer",
    // border: "2px solid red",
  },

  logo: {
    width: { xs: "40px", sm: "50px" },
    height: { xs: "45px", sm: "50px" },
    display: { xs: "block", lg: "none" },
    "&:hover": {
      transform: "perspective(200px) translateZ(16px)",
    },
  },

  addressArrowContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "& .areaName": {
      borderBottom: "2px solid black",
      color: "#3D4152",
      fontSize: { xs: "10px", sm: "13px" },
      pb: "3px",
      fontWeight: "600",
      mr: { xs: "10px", md: "7px" },
      mt: "5px",
    },

    "& .logoAddress": {
      color: "#81848F",
      fontSize: { xs: "10px", sm: "13px" },
      mr: "0",
      display: "flex",
      alignItems: "center",
    },

    "& .downArrowIcon": {
      width: { xs: "20px", sm: "26px" },
      height: { xs: "20px", sm: "25px" },
      color: "#FC8019",
    },

    "&:hover": {
      "& .areaName": {
        color: "#FC8019",
        borderBottom: "2px solid #FC8019",
        opacity: 1.0,
      },

      "& > .logoAddress": {
        opacity: 0.6,
      },

      "& > .downArrowIcon": {
        opacity: 1.0,
      },
    },
  },

  chipText: {
    fontSize: { lg: "11px", xl: "15px" },
    // border: "2px solid red",
    // width: {xs:"80px"}
    mr:"-5px",

    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "start",
    // alignItems: "center",
    // gap: 0,
  },

  filterIcon: {
    fontSize: "14px",
  },

  rightContainer: {
    width: { md: "300px", lg: "360px", xl: "400px" },
    display: { xs: "none", lg: "flex" },
    alignItems: "center",
    // border: "2px solid yellow",
  },

  outlineInput: {
    "& .css-13bgnto-MuiInputBase-root-MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0,0,0,0.2)",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
      "&:hover fieldset": {
        borderColor: "rgba(0,0,0,0.2)",
      },
      "&.Mui-focused fieldset": {
        borderWidth: "1px",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderColor: "#ED6C02",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },

  textField: {
    border: "none",
    outline: "none",
    backgroundColor: "#F0F0F5 !important",
    borderRadius: "9px",
    width: { md: "430px", lg: "360px", xl: "400px" },
    m: "auto",
    mt: { xs: "35px", lg: "0px" },
    // width: "100%",
    // width: { xs: "90%", sm: "90%", md: "200px", lg: "auto" },
    "& fieldset": { border: "none" },

    "& .searchIcon": {
      width: { md: "22px", lg: "20px", xl: "24px" },
      height: { md: "22px", lg: "20px", xl: "24px" },
    },

    "& ::placeholder": {
      fontSize: { xs: "13px", sm: "16px", md: "18px", lg: "14px", xl: "17px" },
    },
  },

  navbarStack: {
    padding: { xs: "0px", md: "0px 26px", lg: "0px" },
    margin: "0",
    display: { xs: "flex", md: "grid", lg: "flex" },
    flexDirection: { xs: "column", lg: "row" },
    gap: { xs: "25px", lg: "12px", xl: "10px" },
    alignItems: "center",
    mt: { xs: "44px", lg: "0px" },
    // border: "3px solid red",
    gridTemplateColumns: { md: "repeat(3, 1fr)" },
  },

  listItem: {
    backgroundColor: { xs: "#cededc", md: "#ffffff" },
    border: "1px solid #F0F0F5",
    borderRadius: "50px",
  },

  ListItemText: {
    color: "#404455",
    fontSize: "10px",
    fontWeight: "900",
    pt: { xs: "0px", md: "2px" },
    // border: "2px solid red",
  },

  ListItemButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    wordWrap: "no-wrap",
    // border: "2px solid red",
  },

  fontSize: {
    fontSize: { sm: "14px", md: "13px", lg: "15px" },
  },

  hamburgerIcon: {
    display: { xs: "block", lg: "none" },
    color: "black",
    mt: "10px",
  },

  swiggyLogoTypography: {
    my: 2.4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default navbarStyles;
