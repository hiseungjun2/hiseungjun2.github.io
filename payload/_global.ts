import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'RESUME | SEUNGJUN KIM';
const description = 'System Integration WEB Developer RESUME.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image profile.jpeg',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'SEUNGJUN',
        lastName: 'KIM',
        username: 'KIM SEUNGJUN',
        gender: 'Male',
      },
    },
  },
};
