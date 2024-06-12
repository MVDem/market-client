import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, UseFormProps, useForm } from 'react-hook-form';
import { z } from 'zod';
import styles from './FormUICustom.module.scss';
import { useEffect } from 'react';

interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  validationSchema?: z.ZodType<any, any, any>;
}

interface FormUICustomProps {
  inputs: InputProps[];
  buttonLabel: string;
  onSubmit: (data: DataFormType) => void;
}
export type DataFormType = {
  [x: string]: string;
};

function FormUICustom({
  inputs,
  buttonLabel,
  onSubmit,
}: FormUICustomProps): JSX.Element {
  const formParams = () => {
    const params: UseFormProps = {};

    const baseSchema = z.object(
      inputs.reduce((acc, input) => {
        if (input.validationSchema) {
          acc[input.name] = input.validationSchema;
        }
        return acc;
      }, {} as Record<string, z.ZodType<any, any, any>>),
    );

    const schema =
      'password' in baseSchema && 'confirmPassword' in baseSchema
        ? baseSchema.refine((data) => data.password === data.confirmPassword, {
            message: 'Passwords do not match',
            path: ['confirmPassword'],
          })
        : baseSchema;

    params.resolver = zodResolver(schema);

    params.defaultValues = inputs.reduce((acc, input) => {
      acc[input.name] = input.defaultValue || '';
      return acc;
    }, {} as Record<string, string>);

    return params;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm(formParams());

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log(errors);
    }
  }, [errors]);

  const _onSubmit: SubmitHandler<DataFormType> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(_onSubmit)}>
        {inputs.map(({ name, label, type, placeholder, required }, i) => (
          <div key={i}>
            <label htmlFor={name}>
              {label}
              <input
                {...register(name)}
                id={name}
                type={type}
                placeholder={placeholder}
                required={required}
              />
            </label>
            <div className={styles.errorMessage}>
              {errors[name] && (
                <div role="alert" style={{ color: 'red' }}>
                  {(errors[name]?.message as string) ||
                    'This field is required'}
                </div>
              )}
            </div>
          </div>
        ))}
        <button type="submit" disabled={!isValid}>
          {buttonLabel}
        </button>
      </form>
    </>
  );
}

export default FormUICustom;
