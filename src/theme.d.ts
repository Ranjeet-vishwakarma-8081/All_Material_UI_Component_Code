
declare module "@mui/material/style" {
  interface Theme {
    status: {
      danger: string
    }
  }
  interface ThemeOptions {
    status: {
      danger: CSSProperties["color"]
    }
  }

}