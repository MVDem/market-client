import { useEffect, useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { CLOUDINARY_CLOUD_NAME } from '../config';

function useCloudinary() {
  const [cloudinary, setCloudinary] = useState<Cloudinary | null>(null);

  useEffect(() => {
    const cloudinary = new Cloudinary({
      cloud: {
        cloudName: CLOUDINARY_CLOUD_NAME || '',
      },
    });
    setCloudinary(cloudinary);
  }, []);
  return cloudinary;
}
export default useCloudinary;
