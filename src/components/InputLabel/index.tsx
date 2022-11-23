import { InputLabel as MuiInputLabel, InputLabelProps as MuiInputLabelProps } from '@mui/material';

export type InputLabelProps = MuiInputLabelProps;

export const InputLabel: React.FC<MuiInputLabelProps> = (props) => {
  return <MuiInputLabel {...props} />;
};
