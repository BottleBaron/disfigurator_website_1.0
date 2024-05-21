import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import "../assets/customfontstyling.css";

function ContactPage() {
  return (
    <Box
      sx={{
        display: "flex",

        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        marginInline: "5%",
        width: "60%",
      }}
    >
    <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', marginTop: 2.5}}>
      <Typography
        sx={{ fontSize: 34, fontFamily: "BloodSeeker, sans-serif", margin: 2 }}
      >
        Mail
      </Typography>
      <hr style={{width: "100%"}}/>
      <Typography sx={{fontSize: 18, marginBlock: 1,fontWeight: 'bold'}}>For booking or general inquiries, contact us at:</Typography>
      <Typography sx={{fontSize: 18, marginBlock: 1,}}>disfiguratorofficial@gmail.com</Typography>
    </Box>
    <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', marginTop: 5}}>
      <Typography
        sx={{ fontSize: 34, fontFamily: "BloodSeeker, sans-serif", margin: 2 }}
      >
        P.O. Box
      </Typography>
      <hr style={{width: "100%"}}/>
      <Typography sx={{fontSize: 18, marginBlock: 1,fontWeight: 'bold'}}>Packages and fanmail can be sent to:</Typography>
      <Typography sx={{fontSize: 18, marginTop: 1,}}>Storbackagatan 66,</Typography>
      <Typography sx={{fontSize: 18,}}>666 66 - Fejkbyn</Typography>
    </Box>
    <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', marginBlock: 5}}>
      <Typography
        sx={{ fontSize: 34, fontFamily: "BloodSeeker, sans-serif", margin: 2 }}
      >
        Social media
      </Typography>
      <hr style={{width: "100%"}}/>
      <Typography sx={{fontSize: 18, marginBlock: 1,fontWeight: 'bold'}}>Visit our social media pages</Typography>
      <Box>
        <NavLink to="https://www.facebook.com/profile.php?id=100064525667229&locale=sv_SE">
                            <img
                                style={{
                                    height: "auto",
                                    width: "2rem",
                                    marginInline: 5,
                                }}
                                src="../../resources/icons/ic--baseline-facebook.svg"
                                alt="fb"
                            />
                        </NavLink>
                        <NavLink to="https://www.instagram.com/disfigurator/?next=%2F24072013ilij%2Ftagged%2F&">
                            <img
                                style={{
                                    height: "auto",
                                    width: "2rem",
                                    marginInline: 5,
                                }}
                                src="../../resources/icons/mdi--instagram.svg"
                                alt="insta"
                            />
                        </NavLink>
                        <NavLink to="https://www.threads.net/@disfigurator">
                            <img
                                style={{
                                    height: "auto",
                                    width: "2rem",
                                    marginInline: 5,
                                }}
                                src="../../resources/icons/mingcute--threads-line.svg"
                                alt="threadsIcon"
                            />
                        </NavLink>
            </Box>
    </Box>
    </Box>
    
  );
}

export default ContactPage;
