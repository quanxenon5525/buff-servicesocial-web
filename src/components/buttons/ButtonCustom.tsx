import { Button, IconButton, useMediaQuery } from "@mui/material";
import React, { FC, ReactNode, useState } from "react";

type ButtonProps = {
  children?: ReactNode;
  color?: any;
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon?: any;
  endIcon?: ReactNode;
  href?: string;
  size?: any;
  variant?: any;
  onClick?: any;
};
export const ButtonCustom: FC<ButtonProps> = (props: any) => {
  const {
    children,
    color = "primary",
    variant = "outlined",
    disabled = false,
    fullWidth = false,
    startIcon,
    endIcon,
    href,
    size,
    onClick,
  } = props;
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      {!isMobile ? (
        <Button
          color={color}
          disabled={disabled}
          fullWidth={fullWidth}
          startIcon={startIcon}
          endIcon={endIcon}
          href={href}
          size={size}
          variant={variant}
          onClick={onClick}
        >
          {children}
        </Button>
      ) : (
        <IconButton
          color={color}
          disabled={disabled}
          size={size}
          onClick={onClick}
        >
          {startIcon}
        </IconButton>
      )}
    </>
  );
};
