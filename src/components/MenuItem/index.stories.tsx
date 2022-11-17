import { MenuItem } from '@components';

export default {
  title: 'Components/MenuItem',
  component: MenuItem,
};

export const Overview = () => {
  return <MenuItem value={1}>Value 1</MenuItem>;
};
