import { Box } from "@mui/material";
import React from "react";

interface IHeaderProps {
  text: string;
  backgroundColor?: string;
}

export default function Header(props: IHeaderProps) {
  const { text, backgroundColor = "#D7E4E4" } = props;

  return <Box sx={{ backgroundColor: backgroundColor }}>{text}</Box>;
}
