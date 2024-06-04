import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import styles from './FormUICustom.module.scss';
import { useNavigate } from 'react-router-dom';
import { User } from '../types/User';

interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  validationSchema?: z.ZodType<any, any, any>;
}

interface FormUICustomProps {
  inputs: InputProps[];
  buttonLabel: string;
  onSubmit: (data: Pick<User, 'email' | 'password'>)=>void;
}

function FormUICustom({ inputs, buttonLabel, onSubmit }: FormUICustomProps): JSX.Element {
  const schema = z
    .object(
      inputs.reduce((acc, input) => {
        if (input.validationSchema) {
          acc[input.name] = input.validationSchema;
        }
        return acc;
      }, {} as Record<string, z.ZodType<any, any, any>>)
    )
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });


  return (
    <form onSubmit={handleSubmit(data => onSubmit(data as Pick<User, 'email' | 'password'>))}>
      {inputs.map(({ name, label, type, placeholder, required }) => (
        <div key={name} className={styles.inputWrapper}>
          <div>
            <label htmlFor={name}>{label}</label>
          </div>
          <input
            {...register(name)}
            id={name}
            type={type}
            placeholder={placeholder}
            required={required}
          />
          <div className={styles.errorMessage}>
            {errors[name] && (
              <div role='alert' style={{ color: 'red' }}>
                {(errors[name]?.message as string) || 'This field is required'}
              </div>
            )}
          </div>
        </div>
      ))}
      <button type='submit' disabled={!isValid}>
        {buttonLabel}
      </button>
    </form>
  );
}

export default FormUICustom;
