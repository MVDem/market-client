import { Button, Upload, UploadFile } from 'antd';

type InputImageProps = {
  label: 'coverURL' | 'logoURL';
  onChange: (file: { [x: string]: UploadFile }) => void;
};

function InputImage({ label, onChange }: InputImageProps) {
  return (
    <Upload
      name={label}
      listType="picture"
      beforeUpload={(file) => {
        onChange({ [label]: file });
        return false;
      }}
      iconRender={(file) => <img src={file.url} alt={file.name} />}
    >
      <Button>Upload</Button>
    </Upload>
  );
}
export default InputImage;
