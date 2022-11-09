import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export type ButtonProps = MuiButtonProps;

export const Button: React.FC<MuiButtonProps> = (props) => {
  return <MuiButton {...props} />;
};
