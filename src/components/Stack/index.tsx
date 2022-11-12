import { Stack as MuiStack, StackProps as MuiStackProps } from '@mui/material';

export type StackProps = MuiStackProps;

export const Stack: React.FC<MuiStackProps> = (props) => {
  return <MuiStack {...props} />;
};
