import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'JavaScript와 React.js를 기반으로 꾸준히 개발 공부를 하고 있는 신입 프론트엔드 개발자입니다.',
    '학부 시절 여러 개발 언어에 대해 접하게 된 것을 시작으로 개발 세계에 입문하였습니다. 부트캠프를 통한 2회의 협업 프로젝트 경험이 있고, 개인적으로도 협업 프로젝트를 찾아 현재 장기 취미 프로젝트에 합류한 상태입니다.',
    '배우고 적용하는 것을 좋아합니다. 부트캠프 수료 후에도 꾸준히 알고리즘, Next.js와 TypeScript에 대해 학습하고 기록하고 있습니다.',
  ],
  sign: 'Subin',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
