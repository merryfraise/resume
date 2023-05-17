import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '겜투(GAMETO) : 게이머를 위한 소셜 서비스',
      startedAt: '2023-01',
      endedAt: '2023-02',
      where: '코드스테이츠 메인 프로젝트 (6인 /4주)',
      descriptions: [
        { content: 'React.js | Redux Toolkit | Styled-Components | Axios', weight: 'BOLD' },
        { content: '게임의 파티원 구인 시스템과 SNS을 결합한 서비스 기획 및 프론트 개발' },
        {
          content:
            '재사용이 가능한 컴포넌트 설계로 UI/UX에 통일성을 부여함과 동시에 개발에 소요되는 시간을 단축함',
          // descriptions: [
          //   { content: 'Integer ut libero eu libero mattis rutrum at at urna' },
          //   { content: 'Integer non turpis ante' },
          // ],
        },
        { content: '프로필, 프로필 수정, 차단 목록, 탈퇴 페이지 구현' },
        { content: '서버의 게임 DB와 클라이언트의 게임 icon을 매치시키는 유틸 함수 제작' },
        {
          content:
            'Redux Toolkit을 이용한 전역 상태관리로 상태 업데이트에 따른 즉각적인 렌더링 구현',
        },
      ],
    },
    {
      title: 'Stack Overflow : 클론 코딩',
      startedAt: '2022-12',
      endedAt: '2023-01',
      where: '코드스테이츠 메인 프로젝트 (5인 /4주)',
      descriptions: [
        { content: 'React.js | Redux Toolkit | Styled-Components | Axios', weight: 'BOLD' },
        { content: '로그인 비동기 처리 코드의 오류 수정' },
        { content: '메인, 질문 작성, 질문 수정, 답변 수정, 유저 목록, 프로필 페이지 구현' },
        {
          content:
            'Redux Toolkit을 이용한 전역 상태관리로 서치박스의 ON/OFF 상태 변화에 따른 렌더링 구현',
        },
      ],
    },
  ],
};

export default project;
