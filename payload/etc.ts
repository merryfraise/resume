import { IEtc } from '../component/etc/IEtc';

const etc: IEtc.Payload = {
  disable: false,

  list: [
    {
      title: '알테스터디 1기',
      subTitle: '알고리즘 테스트를 위한 알고리즘 스터디',
      startedAt: '2023-04',
    },
    {
      title: '전북대학교 사회봉사',
      subTitle: '필리핀 바기오 해외봉사',
      startedAt: '2018-06',
      endedAt: '2018-07',
    },
    {
      title: '전북대학교 오프캠퍼스집중실용영어',
      subTitle: '필리핀 코딜레라대학교 어학연수',
      startedAt: '2016-07',
      endedAt: '2016-08',
    },
  ],
};

export default etc;
