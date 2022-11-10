import { FormHelperText } from '@components';

export default {
  title: 'Components/FormHelperText',
  component: FormHelperText,
};

export const Overview = () => {
  return (
    <>
      <FormHelperText>I'm helper text</FormHelperText>
      <FormHelperText error>I'm helper text with error</FormHelperText>
    </>
  );
};
