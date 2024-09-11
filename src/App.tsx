import React from "react";
import { colors, createTheme, ThemeProvider } from "@mui/material";
// Use the App.css file for MuiPaperLayout Component
import "./App.css";
import { MuiSignInPage } from "./components/AdvanceTopic/MuiSignInPage";
// import { MuiCustomizingTheme } from "./components/AdvanceTopic/MuiCustomizingTheme";
// import { MuiResponsiveness } from "./components/AdvanceTopic/MuiResponsiveness";
// import { MuiMasonry } from "./components/ExperimentalComponents/MuiMasonry";
// import { MuiTimeline } from "./components/ExperimentalComponents/MuiTimeline";
// import { MuiTabs } from "./components/ExperimentalComponents/MuiTabs";
// import { MuiDateRangePicker } from "./components/ExperimentalComponents/MuiDateRangePicker";
// import { MuiDateAndTimePicker } from "./components/ExperimentalComponents/MuiDateAndTimePicker";
// import { MuiLoadingButton } from "./components/ExperimentalComponents/MuiLoadingButton";
// import { MuiSkeleton } from "./components/MuiSkeleton";
// import { MuiPrograss } from "./components/MuiProgress";
// import { MuiDialog } from "./components/MuiDialog";
// import { MuiSnackbar } from "./components/MuiSnackbar";
// import { MuiAlert } from "./components/MuiAlert";
// import { MuiTable } from "./components/MuiTable";
// import { MuiTooltip } from "./components/MuiTooltip";
// import { MuiChip } from "./components/MuiChip";
// import { MuiList } from "./components/MuiList";
// import { MuiBadge } from "./components/MuiBadge";
// import { MuiAvtar } from "./components/MuiAvtar";
// import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
// import { MuiSpeedDial } from "./components/MuiSpeedDial";
// import { MuiDraver } from "./components/MuiDraver";
// import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs";
// import { MuiLink } from "./components/MuiLink";
// import { MuiMenu } from "./components/MuiMenu";
// import { MuiNavbar } from "./components/MuiNavbar";
// import { MuiImageListLayout } from "./components/MuiImageListLayout";
// import { MuiAccordionLayout } from "./components/MuiAccordionLayout";
// import { MuiCardLayoutLayout } from "./components/MuiCardLayout";
// import { MuiPaperLayout } from "./components/MuiPaperLayout";
// import { MuiGridLayout } from "./components/MuiGridLayout";
// import { MuiStackLayout } from "./components/MuiStackLayout";
// import { MuiBoxLayout } from "./components/MuiBoxLayout";
// import { MuiAutocomplete } from "./components/MuiAutocomplete";
// import { MuiRating } from "./components/MuiRating";
// import { MuiSwitch } from "./components/MuiSwitch";
// import { MuiCheckbox } from "./components/MuiCheckbox";
// import { MuiRadioButton } from "./components/MuiRadioButton";
// import MuiSelectElement from "./components/MuiSelectElement";
// import MuiTextField from "./components/MuiTextField";
// import MuiToggleButton from "./components/MuiToggleButton";
// import MuiButtonGroup from "./components/MuiButtonGroup";
// import MuiButtons from "./components/MuiButtons";
// import MuiTypography from "./components/MuiTypography";

// Customizing the Theme
const THEME = createTheme({
  // status: {
  //   danger: "#e53e3e",
  // },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
});
const App = () => {
  return (
    <>
      <ThemeProvider theme={THEME}>
        {/* <MuiTypography /> */}
        {/* <MuiButtons /> */}
        {/* <MuiButtonGroup /> */}
        {/* <MuiToggleButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelectElement/> */}
        {/* <MuiRadioButton/> */}
        {/* <MuiCheckbox /> */}
        {/* <MuiSwitch/> */}
        {/* <MuiRating/> */}
        {/* <MuiAutocomplete/> */}
        {/* <MuiBoxLayout /> */}
        {/* <MuiStackLayout /> */}
        {/* <MuiGridLayout /> */}
        {/* <MuiPaperLayout /> */}
        {/* <MuiCardLayout/> */}
        {/* <MuiAccordionLayout/> */}
        {/* <MuiImageListLayout /> */}
        {/* <MuiNavbar/> */}
        {/* <MuiMenu/> */}
        {/* <MuiLink/> */}
        {/* <MuiBreadcrumbs/> */}
        {/* <MuiDraver/> */}
        {/* <MuiSpeedDial/> */}
        {/* <MuiBottomNavigation/> */}
        {/* <MuiAvtar/> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiTooltip/> */}
        {/* <MuiTable/> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar/> */}
        {/* <MuiDialog/> */}
        {/* <MuiPrograss/> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton/> */}
        {/* <MuiDateAndTimePicker /> */}
        {/* <MuiDateRangePicker/> */}
        {/* <MuiTabs/> */}
        {/* <MuiTimeline /> */}
        {/* <MuiMasonry/> */}
        {/* <MuiResponsiveness/> */}
        {/* <MuiCustomizingTheme /> */}
        <MuiSignInPage/>

      </ThemeProvider>
    </>
  );
};

export default App;
