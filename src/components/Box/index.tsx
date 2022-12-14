import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/material';

export type BoxProps = MuiBoxProps;

export const Box: React.FC<MuiBoxProps> = (props) => {
  return <MuiBox {...props} />;
};
