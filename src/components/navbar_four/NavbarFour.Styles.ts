const navbarStyles = {
  appBar: {
    width: "100%",
    backgroundColor: "#ffffff",
    height: { xs: "65px", md: "80px" },
  },

  container: {
    width: { xs: "90%", sm: "90%", md: "90%", lg: "90%" },
    margin: "auto",
    // border: "2px solid yellow",
    padding: "0",
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  leftContainer: {
    display: "flex",
    alignItems: "center",
    gap: { xs: "6px", sm: "10px", md: "15px", lg: "20px" },
    cursor: "pointer",
  },

  logo: {
    width: { xs: "35px", sm: "50px" },
    height: { xs: "35px", sm: "50px" },
    "&:hover": {
      transform: "perspective(200px) translateZ(16px)",
    },
  },

  helpText: {
    fontSize: "13px",
    color: "#3D4152",
    fontWeight: "600",
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

  rightContainer: {
    display: { xs: "none", md: "block" },
  },

  unorderdList: {
    padding: "0",
    margin: "0",
    listStyleType: "none",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: { xs: "20px", md: "5px", lg: "20px", xl: "40px" },
    alignItems: "center",
    mt: { xs: "40px", md: "0px" },
  },

  listItem: {
    width: { xs: "100%", md: "83px", lg: "93px" },
    backgroundColor: { xs: "#cededc", md: "#ffffff" },
    height: { xs: "55px", md: "auto" },
    borderRadius: { xs: "10px", md: "0px" },
  },

  ListItemText: {
    color: "#404455",
    fontSize: "10px",
    fontWeight: "900",
    pt: { xs: "0px", md: "2px" },
  },

  ListItemButton: {
    display: "flex",
    gap: { xs: "10px", md: "7px", lg: "10px" },
    alignItems: "center",
    justifyContent: "center",
    padding: { xs: "0", md: "10px" },

    "& .iconStyle": {
      width: { xs: "18px", md: "13px" },
      height: { xs: "18px", md: "13px" },
      color: "#404455",
      ml: { xs: "10px", md: "0px" },
    },

    "&:hover": {
      backgroundColor: "#CEDEDC",
      borderRadius: "6px",
      "& .iconStyle": {
        color: "#FC8019",
      },

      "& .ListItemText": {
        color: "#FC8019",
      },
    },
  },

  cartCount: {
    fontSize: "17px",
    fontWeight: "800",
    color: "#FC8019",
    ml: { xs: "6px", md: "0px" },
    border: "1px solid black",
    p: "2px 6px",
    borderRadius: "4px",
  },

  fontSize: {
    fontSize: { sm: "14px", md: "13px", lg: "15px" },
  },

  hamburgerIcon: {
    display: { xs: "block", md: "none" },
    color: "black",
    mt: "10px",
  },

  drawer: {
    display: { xs: "block", md: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: { xs: "250px", sm: "400px" },
    },
  },

  swiggyLogoTypography: {
    my: 2.4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  cartListItem: {
    position: "relative",
  },
};

export default navbarStyles;
