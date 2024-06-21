
import { Typography } from "@mui/material";

const Banner = () => {
    const bannerStyleObj = {
        fontSize: 72,
        color: "#7bb7d1",
        textAlign: "left",
        // paddingTop: "40px",
        paddingLeft: "40px",
    }
return (
    <Typography style={bannerStyleObj}>Flavortown USA</Typography>
)
}

export default Banner;