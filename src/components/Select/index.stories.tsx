import { MenuItem, Select, Stack } from '@components';
import { useForm } from '@utils';
import * as yup from 'yup';

export default {
  title: 'Form Components/Select',
  component: Select,
};

type Schema1 = { size: number };

const schema1: yup.SchemaOf<Schema1> = yup.object({
  size: yup.number().required().default(null).typeError('This field is required'),
  sizes: yup.array(yup.number()).required().min(1).default([]),
});

export const WithReactHookForm = () => {
  const { control, watch } = useForm<Schema1>(schema1);

  return (
    <Stack spacing={5}>
      <Select label="Size" helperText="Size helper text" control={control} name="size">
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
      <Select label="Sizes" multiple control={control} name="sizes">
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
      <div>
        <pre>
          <code>{JSON.stringify(watch(), null, 2)}</code>
        </pre>
      </div>
    </Stack>
  );
};
