const cartToolTipStyles = {
  cartToolTipBox: {
    position: "absolute",
    top: { xs: 76, md: 65 },
    right: {xs: 3, sm: 55, md: 14 },
    // left: {xs: 3, md: 0},
    color: "black",
    width: { xs: "97%", sm: "83%", md: "350px" },
    height: "auto",
    borderTop: "2px solid orange",
    background: "#fff",
    margin: { xs: "auto", md: "0px" },
    // zIndex: 20,
    boxSizing: "border-box",
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
  },

  uparrow: {
    position: "absolute",
    borderTop: "2px solid orange",
    borderLeft: "2px solid orange",
    borderBottom: "2px solid #fff",
    borderRight: "0.2px solid #fff",
    width: "16px",
    // padding : '10px'
    transform: "rotate(45deg)",
    background: "#fff",
    height: "18px",
    // background: "#fff",
    top: -10,
    right: 0,
    left: { xs: 20, md: 300 },
  },

  cartToolTipChildBox: {
    padding: "25px 40px",
    // border: "2px solid red",
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },

  cartEmptytext: {
    fontSize: { xs: "23px", sm: "29px", md: "32px" },
    fontWeight: "700",
    color: "#585B6A",
    textAlign: "left",
  },

  goodFoodText: {
    fontSize: { xs: "12px", sm: "14px" },
    color: "#BDBEC4",
    textAlign: "left",
    lineHeight: { xs: "15px", sm: "19px" },
  },

  cartToolTipChildBox1: {
    // border: "1px solid red",
    padding: {xs:"20px", sm:"30px"},
    display: "flex",
    flexDirection: "column",
    gap: "17px",
  },

  topImageMenuContainer: {
    display: "flex",
    alignItems: "center",
    // border: "1px solid orange",
    gap: "10px",
  },

  foodImage: {
    width: {xs: "60px", sm:"68px"},
    height: {xs: "60px", sm:"68px"},
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: {xs:"12px", sm:"18px"},
  },

  textChildContainer: {
    display: "flex",
    flexDirection: "column",
    gap: {xs:"6px", sm:"8px"},
  },

  restName: {
    fontSize: {xs:"12px", sm:"15px"},
    color: "#3D4152",
    fontWeight: "700",
    // border: "3px solid red",
    lineHeight: "8px",
    textAlign: "left"
  },

  restAddress: {
    fontSize: {xs: "9px", sm:"11px"},
    color: "#7F828D",
    lineHeight: {xs:"11px", sm: "8px"},
    textAlign: "left"
    // border: "3px solid red"
  },

  viewFullMenuText: {
    color: "#5D8ED5",
    fontSize: {xs:"10px", sm:"12px"},
    textTransform: "uppercase",
  },

  divider: {
    width: "110%",
    border: "0.1px solid #B4B6BC",
  },

  foodNameAmountContainer: {
    // border: "1px solid red",
    display: "flex",
    justifyContent: "space-between",
  },

  iconFoodNameContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    // border: "3px solid pink",
    width: "100%",
    // justifyContent: "space-between",
  },

  foodSmallIcon: {
    width: "10px",
    height: "10px",
  },

  foodName: {
    fontSize: "11px",
    color: "#575A69",
    fontWeight: "600",
    display: "flex",
    gap: "1px",
    alignItems: "center",
  },

  ruppeeIcon: {
    fontSize: "13px",
    color: "#666977",
  },

  amount: {
    fontSize: "17px",
    color: "#666977",
  },

  dotttedLine: {
    border: "1px dashed #B4B6BC",
  },

  bottomSubTotalAmountContainer: {
    display: "flex",
    justifyContent: "space-between",
    // border: "2px solid red",
  },

  bottomSubTotalContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "9px",
    // border: "2px solid red",
  },

  subTotalText: {
    fontSize: "14px",
    color: "#3D4152",
    fontWeight: "700",
    // border: "3px solid red",
    lineHeight: "8px",
  },

  extraChargesText: {
    fontSize: "12px",
    color: "#7F828D",
    lineHeight: "8px",
  },

  amountRuppee: {
    color: "#3D4152",
    fontSize: {xs:"14px", sm:"16px"},
  },

  checkoutBtn: {
    backgroundColor: "#F5680F !important",
    color: "#ffffff",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: {xs:"10px", sm:"14px", md:"13px", lg: "14px"}
  },
};

export default cartToolTipStyles;
