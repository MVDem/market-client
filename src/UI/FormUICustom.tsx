import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, Form, useForm } from 'react-hook-form';
import { z } from 'zod';

interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  validationSchema?: z.Schema;
}

function FormUICustom({ control, inputs }: { inputs: InputProps[] }): JSX.Element {
    if (!control) return null;
    const schema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    name: z.string().min(2, 'Name must be at least 2 characters'),
    city: z.string().min(2, 'City must be at least 2 characters'),
    country: z.string().min(2, 'Country must be at least 2 characters'),
    phone: z.coerce.number().min(10, 'Phone must be at least 10 digits'),
  });

  type FormFields = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data: FormFields) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit) as any}>
      {inputs.map((input) => {
        const inputSchema = input.validationSchema || schema[input.name as keyof typeof schema];
        return (
          <div key={input.name}>
            <label htmlFor={input.name}>{input.label}</label>
            <input
                {...register(input.name as keyof FormFields, {
                    required: true,
                    ...(inputSchema instanceof z.ZodType ? { required: true } : {}),
                })}
                id={input.name}
                type={input.type}
                placeholder={input.placeholder}
            />
            {errors[input.name as keyof typeof errors]?.message ?? 'This field is required'}
          </div>
        );
      })}
      <button type='submit'>Submit</button>
    </Form>
  );
}

export default FormUICustom;
