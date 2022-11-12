import { Stack, Box } from '@components';

export default {
  title: 'Components/Stack',
  component: Stack,
};

export const Overview = () => {
  return (
    <Stack spacing={2}>
      <Box>Element 1</Box>
      <Box>Element 2</Box>
      <Box>Element 3</Box>
      <Box>Element 4</Box>
    </Stack>
  );
};
