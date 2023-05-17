import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '코드스테이츠',
      subTitle: 'Software Engineering Bootcamp, Front-End (41기 수료)',
      startedAt: '2022-08',
      endedAt: '2023-02',
      descriptions: [
        { content: '웹 프론트 개발을 위한 기초인 JavaScript, HTML, CSS를 학습했습니다.' },
        {
          content:
            '대표적인 웹 프론트 개발 라이브러리인 React.js를 이용한 개발 방법에 대해 학습했습니다.',
        },
        { content: '페어 프로그래밍을 통해 과제를 수행하며 커뮤니케이션 능력을 길렀습니다.' },
        {
          content:
            '프리 프로젝트, 메인 프로젝트 총 2회의 백엔드와의 협업으로 서비스의 기획부터 개발까지 경험했습니다.',
        },
        {
          content:
            '모르는 부분은 스스로 찾아보고 꾸준하게 공부하는 자세, 꾸준히 블로깅으로 기록을 남기는 자세를 배우고 실천하게 되었습니다.',
        },
      ],
    },
    {
      title: '전북대학교',
      subTitle: '바이오메디컬공학부(헬스케어기기전공) 수료 (4.3 / 4.5)',
      startedAt: '2016-03',
      endedAt: '2021-02',
      descriptions: [
        {
          content: '다양한 프로그래밍 언어 강의를 수강하며 프로그래밍에 대한 재미를 쌓아갔습니다.',
        },
        { content: '컴퓨터프로그래밍의기초 (Visual Basic) - A+' },
        { content: 'C언어기초 (C) - A+' },
        { content: 'Visual프로그래밍및실습 (R) - A+' },
        { content: '웹프로그래밍및실습 (Java) - A+' },
      ],
    },
    {
      title: '계산여자고등학교',
      subTitle: '자연계 졸업 (인천광역시)',
      startedAt: '2011-03',
      endedAt: '2014-02',
    },
  ],
};

export default education;
