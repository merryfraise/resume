import favicon from '../asset/shoupeach.ico';
import previewImage from '../asset/subin.png';
import { IGlobal } from '../component/common/IGlobal';

const title = '손수빈 이력서';
const description = '프론트엔드 개발자 손수빈 이력서';

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
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: '수빈',
        lastName: '손',
        username: '슈피치',
        gender: 'female',
      },
    },
  },
};
