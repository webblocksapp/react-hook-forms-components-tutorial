import { Button, TextField, Stack } from '@components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from '@utils';
import * as yup from 'yup';

export default {
  title: 'Implementations/Form validation',
};

type Schema1 = { name: string; age: number };

const schema1: yup.SchemaOf<Schema1> = yup.object({
  name: yup.string().required().default(''),
  age: yup.number().required().default(0),
});

export const ResetAndFill = () => {
  const { control, handleSubmit, reset: resetForm, watch } = useForm<Schema1>(schema1);

  const submit = (data: Schema1) => {
    alert(JSON.stringify(data));
    reset();
  };

  const fill = () => {
    const apiResponse = { name: 'John', age: 19 };
    resetForm(apiResponse);
  };

  const reset = () => {
    resetForm(schema1.getDefaultFromShape());
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Stack spacing={2}>
        <TextField label="Name" name="name" control={control} />
        <TextField label="Age" name="age" control={control} />
        <Stack direction="row" spacing={2}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Button variant="contained" onClick={fill}>
            Fill
          </Button>
          <Button variant="contained" onClick={reset}>
            Reset
          </Button>
        </Stack>
      </Stack>
      <pre>
        <code>{JSON.stringify(watch(), null, 2)}</code>
      </pre>
    </form>
  );
};
