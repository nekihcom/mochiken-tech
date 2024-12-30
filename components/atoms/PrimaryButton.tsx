import { FC, memo } from "react";

import { Button } from "@mui/material";
import { teal } from "@mui/material/colors";

type Props = {
  children: string;
  size?: 'small' | 'medium' | 'large';
};

const PrimaryButton:FC<Props> = memo(({
  children, size='small'
}) => {
  return (
    <>
      <Button size={size} sx={{color:'#fff', backgroundColor:teal[700], width:{xs:'100%', md:'auto'}}}>{ children }</Button>
    </>
  )
});

PrimaryButton.displayName = "PrimaryButton";
export default PrimaryButton;