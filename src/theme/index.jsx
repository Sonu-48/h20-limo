import { createTheme } from "@mui/material";
import typography from "./typography";

const theme = createTheme({
  typography,
  palette: {
    primary: {
      main: "#ffff",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
      errors: "#ef5350",
    },
    // secondary: purple,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#029e9d",
              color: "#fff",
              borderRadius: "10px",
              fontWeight: 500,
              fontSize: "16px",
              padding: "14px 24px",
              textTransform: "capitalize",
              // fontFamily:"'Futura, sans-serif'",
              boxShadow:'0px 0px 0px 4px rgba(255, 255, 255, 0.1)',
              "&:hover": {
                backgroundColor: "#029e9d",
                color: "#029e9d",
              },
            }),
        }),
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1350px!important",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          // paddingRight:'5px',
          "&$focused": {
            border: "1px solid black",
          },

          "& .MuiInputBase-input": {},
          "& $notchedOutline": {
            border: "1px solid black",
          },
          // "&:hover $notchedOutline": {
          //   borderColor: "green"
          // },
          "&$focused $notchedOutline": {
            borderColor: "green",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          background: "#029e9d",
          color: "#fff",
          "&:hover": {
            background: "#143e6b!important",
            color: "#fff!important",
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "0px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // width:'1200px',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: "850px",
          width: "100%",
          borderRadius: "8px",
          // padding:'20px 0px',
          margin:'10px',
          boxShadow:
            "0 3.3px 39.5px -27px rgba(255,255,255,.04), 0 4px 65.1px -27px rgba(255,255,255,.08400000000000001), 0 5.1px 113.7px -27px rgba(255,255,255,.083), 0 8px 246px -27px rgba(255,255,255,.079)",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#787878",
          fontWeight: 600,
          fontSize: "18px",
          textTransform: "capitalize",
          border:'1px solid #f1f1f1',
          borderRadius:'10px',
          "&.Mui-selected": {
           background:'#029e9d',
           color:'#fff'
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          background: "none",
          // height: "1px",
        },
      },
      "flexContainer":{
        justifyContent:'space-between',
      }
    },
    MuiDayCalendar: {
      styleOverrides: {
        root: {},
        "&.header": {
          background: "rgba(0, 0, 0, 0.87)!important",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "12px!important",
        },
      },
    },
    MuiBadge:{
      styleOverrides:{
        badge:{
          background:'#f23b3b',
          top:'-5px',
          right:'5px'
        }
      }
    }
  },
  
});
export default theme;
