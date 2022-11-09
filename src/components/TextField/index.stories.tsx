import { TextField } from '@components';

export default {
  title: 'TextField',
  component: TextField,
};

export const Primary = () => {
  return (
    <TextField
      label="Name"
      name="name"
      onChange={() => {
        console.log('Hello universe');
      }}
    />
  );
};
