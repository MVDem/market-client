// import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormProps } from 'react-hook-form';
import { z } from 'zod';
import { Button, Col, Form, Input, Row, Upload } from 'antd';
import { FormItem } from 'react-hook-form-antd';
// import { UploadOutlined } from '@ant-design/icons';

interface InputProps {
  name: string;
  label: string;
  // type: 'text' | 'email' | 'password' | 'number' | 'upload';
  type: string;
  placeholder?: string;
  defaultValue?: string | number;
  required?: boolean;
  validationSchema?: z.ZodType<any, any, any>;
}

interface FormUICustomProps {
  inputs: InputProps[];
  buttonLabel: string;
  onSubmit: (data: DataFormType) => void;
  colspan?: number;
}

export type DataFormType = {
  [x: string]: string | number | File[];
};

function FormUICustom({
  inputs,
  buttonLabel,
  onSubmit,
  colspan = 24,
}: FormUICustomProps): JSX.Element {
  const formParams = (): UseFormProps<DataFormType> => {
    const params: UseFormProps<DataFormType> = {};

    // const baseSchema = z.object(
    //   inputs.reduce((acc, input) => {
    //     if (input.validationSchema) {
    //       acc[input.name] = input.validationSchema;
    //     } else if (input.required) {
    //       if (input.type === 'number') {
    //         acc[input.name] = z
    //           .number({
    //             invalid_type_error: `${input.label} должно быть числом`,
    //           })
    //           .min(0, { message: `${input.label} обязательно` });
    //       } else {
    //         acc[input.name] = z
    //           .string()
    //           .nonempty({ message: `${input.label} обязательно` });
    //       }
    //     } else {
    //       acc[input.name] =
    //         input.type === 'number'
    //           ? z.number().optional()
    //           : z.string().optional();
    //     }
    //     return acc;
    //   }, {} as Record<string, z.ZodType<any, any, any>>),
    // );

    // params.resolver = zodResolver(baseSchema);
    params.defaultValues = inputs.reduce((acc, input) => {
      acc[input.name] =
        input.defaultValue || (input.type === 'number' ? 0 : '');
      return acc;
    }, {} as Record<string, string | number>);

    params.mode = 'onBlur';
    return params;
  };

  const { control, handleSubmit } = useForm<DataFormType>(formParams());

  return (
    <Form
      style={{
        maxWidth: 600,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
      onFinish={handleSubmit(onSubmit)}
      layout="vertical"
    >
      <Row gutter={16}>
        {inputs.map(({ name, label, type, placeholder }, i) => {
          switch (type) {
            case 'text':
            case 'email':
              return (
                <Col span={colspan} key={i}>
                  <FormItem key={i} control={control} name={name} label={label}>
                    <Input type={type} placeholder={placeholder} size="large" />
                  </FormItem>
                </Col>
              );
            case 'password':
              return (
                <Col span={colspan} key={i}>
                  <FormItem key={i} control={control} name={name} label={label}>
                    <Input.Password placeholder={placeholder} size="large" />
                  </FormItem>
                </Col>
              );
            case 'number':
              return (
                <Col span={colspan} key={i}>
                  <FormItem key={i} control={control} name={name} label={label}>
                    <Input
                      type="number"
                      placeholder={placeholder}
                      size="large"
                    />
                  </FormItem>
                </Col>
              );
            case 'upload':
              return (
                <Form.Item key={i} label={label}>
                  <FormItem control={control} name={name}>
                    <Upload listType="picture-card" maxCount={1}>
                      <Button>Загрузить</Button>
                    </Upload>
                  </FormItem>
                </Form.Item>
              );
            default:
              return null;
          }
        })}
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          {buttonLabel}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormUICustom;
