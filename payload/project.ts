import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '코리아세븐 기간계 업무시스템 구축 프로젝트',
      startedAt: '2021-06',
      where: '코리아세븐 (KOREA SEVEN)',
      descriptions: [
        { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { content: 'Integer massa magna, feugiat commodo arcu sed, sagittis sollicitudin tortor' },
        { content: 'Nullam diam ex, interdum nec lacus vel, ultrices pretium sapien' },
        { content: 'Proin bibendum non nibh eu aliquet' },
      ],
    },
    {
      title: '롯데정보통신 데이터 전환 솔루션 구축',
      startedAt: '2020-10',
      endedAt: '2021-05',
      where: '롯데정보통신 (LOTTE Data Communication Company)',
      descriptions: [
        { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { content: 'Integer massa magna, feugiat commodo arcu sed, sagittis sollicitudin tortor' },
        { content: 'Nullam diam ex, interdum nec lacus vel, ultrices pretium sapien' },
        { content: 'Proin bibendum non nibh eu aliquet' },
      ],
    },
    {
      title: '롯데슈퍼 가맹 앱 구축 프로젝트',
      startedAt: '2020-06',
      endedAt: '2020-09',
      where: '롯데슈퍼 (LOTTE Super)',
      descriptions: [
        { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { content: 'Integer massa magna, feugiat commodo arcu sed, sagittis sollicitudin tortor' },
        { content: 'Nullam diam ex, interdum nec lacus vel, ultrices pretium sapien' },
        {
          content: '굿네이버스에 후원하는 회원을 관리하는 시스템 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Integer ut libero eu libero mattis rutrum at at urna' },
            { content: 'Integer non turpis ante' },
          ],
        },
      ],
    },
    {
      title: '굿네이버스 회원관리시스템 리뉴얼 프로젝트',
      startedAt: '2019-03',
      endedAt: '2020-02',
      where: '굿네이버스 (Goodneighbors)',
      descriptions: [
        { content: '굿네이버스에 후원중인 회원을 관리하는 시스템' },
        {
          content: '레거시 시스템의 노후화(C#, 약 10년) 에 따른 시스템 재설계 및 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기존 데이터베이스 구조 분석 및 재설계, 데이터 이관' },
            { content: '전자정부프레임워크 도입' },
            { content: 'Nexacro UI 를 사용한 화면 구성' },
          ],
        },
        { content: 'REST API 를 사용하여 굿네이버스의 다른 시스템과 인터페이스 개발' },
        {
          content: '회원이 정기/일시적으로 납부하는 회비 관리 모듈 담당',
          weight: 'MEDIUM',
          descriptions: [
            { content: '신용카드 등 다양한 방식의 회비결제 모듈 개발' },
            { content: '결제사 (KG이니시스) 모듈을 사용한 가상계좌 납부방식 개발' },
          ],
        },
      ],
    },
  ],
};

export default project;
