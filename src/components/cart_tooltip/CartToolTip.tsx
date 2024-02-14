import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';
import cartToolTipStyles from './CartToolTip.Styles';
import vegIcon from "../../assets/navbar_one_logos/vegIcon.png"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


interface IProps {
    isCartHovered: boolean,
    handleCartMouseEnter: () => void,
    handleCartMouseLeave: () => void,
    cartCount: number

}

const CartTooltip: React.FC<IProps> = ({ isCartHovered, handleCartMouseEnter, handleCartMouseLeave, cartCount }) => {
    return (
        <Box onMouseEnter={handleCartMouseEnter}
            onMouseLeave={handleCartMouseLeave} sx={cartToolTipStyles.cartToolTipBox}>
            <Box sx={cartToolTipStyles.uparrow}></Box>
            {cartCount ? (
                <Box sx={cartToolTipStyles.cartToolTipChildBox}>
                    <Typography sx={cartToolTipStyles.cartEmptytext}>Cart Empty</Typography>
                    <Typography sx={cartToolTipStyles.goodFoodText}>Good food is always cooking! Go ahead, order some yummy items from the menu.</Typography>
                </Box>
            ) : (
                <Box sx={cartToolTipStyles.cartToolTipChildBox1}>
                    <Box sx={cartToolTipStyles.topImageMenuContainer}>
                        <Box component="img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_132,h_132,c_fill/f1bc9ddf53de574cdc35ab2f717df234"} alt="image" sx={cartToolTipStyles.foodImage} />
                        <Box sx={cartToolTipStyles.textContainer}>
                            <Box sx={cartToolTipStyles.textChildContainer}>
                                <Typography sx={cartToolTipStyles.restName}>Good Morning Tea...</Typography>
                                <Typography sx={cartToolTipStyles.restAddress}>Benz Circle and Auto Nagar</Typography>
                            </Box>
                            <Typography sx={cartToolTipStyles.viewFullMenuText}>VIEW FULL MENU</Typography>
                        </Box>
                    </Box>
                    <Divider sx={cartToolTipStyles.divider} />
                    <Box sx={cartToolTipStyles.foodNameAmountContainer}>
                        <Box sx={cartToolTipStyles.iconFoodNameContainer}>
                            <Box component="img" src={vegIcon} alt="food-icon" sx={cartToolTipStyles.foodSmallIcon} />
                            <Typography sx={cartToolTipStyles.foodName}>Sambar Idli x 4</Typography>
                        </Box>
                        <Typography sx={cartToolTipStyles.foodName}>
                            <CurrencyRupeeIcon sx={cartToolTipStyles.ruppeeIcon} />280
                        </Typography>
                    </Box>
                    <Box sx={cartToolTipStyles.dotttedLine}></Box>
                    <Box sx={cartToolTipStyles.bottomSubTotalAmountContainer}>
                        <Box sx={cartToolTipStyles.bottomSubTotalContainer}>
                            <Typography sx={cartToolTipStyles.subTotalText}>Sub total</Typography>
                            <Typography sx={cartToolTipStyles.extraChargesText}>Extra charges may apply</Typography>
                        </Box>
                        <Typography sx={{ ...cartToolTipStyles.foodName, ...cartToolTipStyles.amountRuppee }}>
                            <CurrencyRupeeIcon
                                sx={{ ...cartToolTipStyles.ruppeeIcon, ...cartToolTipStyles.amountRuppee }} />280
                        </Typography>
                    </Box>
                    <Button sx={cartToolTipStyles.checkoutBtn}>
                        CHECKOUT
                    </Button>
                </Box>
            )}
        </Box>
    )
}

export default CartTooltip