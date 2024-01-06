import { Stack, Typography, createTheme, useMediaQuery } from "@mui/material";
import React from "react";

type CardList = {
  title: string;
  children: any;
  color?: any;
};

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

export default function CardList(props: CardList) {
  const { title, children, color } = props;
  const md = useMediaQuery("(min-width: 750px)");
  const sm = useMediaQuery("(max-with: 375px)");
  const responsive = md ? (md ? "150px" : "0") : !sm ? "35px" : "0";
  return (
    <div style={{ marginTop: 15 }}>
      <Typography variant="subtitle1" fontWeight="bold" sx={{ color: color }}>
        {title}
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: 2,
          marginLeft: responsive,
        }}
      >
        {children}
      </Stack>
    </div>
  );
}
