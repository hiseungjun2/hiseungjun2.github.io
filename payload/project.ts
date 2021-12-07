import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '코리아세븐 기간계 업무시스템 구축 프로젝트',
      startedAt: '2021-06',
      endedAt: '2022-02',
      where: '코리아세븐 (KOREA SEVEN)',
      descriptions: [
        { content: '코리아세븐 기간계업무(FD지원/통합정산/자산관리) 시스템 구축 프로젝트' },
        {
          content: '코리아세븐이 보유중인 자산/물품을 관리하는 자산관리시스템 개발 담당',
          weight: 'MEDIUM',
          descriptions: [
            { content: '본사 및 점포가 보유한 기초자산데이터 파악 및 분석' },
            { content: '신규/리뉴얼/폐점 등 점포에서 발생하는 공사 프로세스 정의' },
            { content: '외부 전자결재 모듈 연동을 통한 업무 진행 개발' },
          ],
        },
        { content: 'Spring Framework 기반 자사 프레임워크를 사용한 백엔드 구성' },
        { content: 'Nexacro UI 사용한 화면 개발 진행' },
      ],
    },
    {
      title: '롯데정보통신 데이터 전환 솔루션 구축',
      startedAt: '2020-10',
      endedAt: '2021-05',
      where: '롯데정보통신 (LOTTE Data Communication Company)',
      descriptions: [
        { content: '롯데정보통신 사내 아이디어 공모전 신사업 부문 수상' },
        {
          content: '자사 보유 DB Migration Solution 고도화',
          weight: 'MEDIUM',
          descriptions: [
            { content: '레거시 모듈의 Core(전환엔진) 추출' },
            { content: 'Web 환경을 기반으로 하는 Soulution 개발' },
          ],
        },
        // {
        //   content: '',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     { content: '레거시 모듈의 Core(전환엔진) 추출' },
        //     { content: 'Web 환경을 기반으로 하는 Soulution 개발' },
        //   ],
        // },
      ],
    },
    {
      title: '롯데슈퍼 가맹 앱 구축 프로젝트',
      startedAt: '2020-06',
      endedAt: '2020-09',
      where: '롯데슈퍼 (LOTTE Super)',
      descriptions: [
        { content: '롯데슈퍼 가맹점주를 대상으로, 상품 발주용으로 사용할 어플리케이션 개발' },
        {
          content: '하이브리드 방식의 App 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '캐모마일 프레임워크를 사용하여 백엔드 환경 구성' },
            { content: '롯데정보통신에서 Spring 을 기반으로 개발한 프레임워크' },
            { content: 'HTML/CSS 와 jQuery 를 사용하여 UI 구현' },
          ],
        },
        { content: '단위/통합테스트 참여를 통한 프로젝트 품질 향상 및 안정화 기여' },
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
            { content: '전자정부프레임워크를 도입하여 백엔드 개발' },
            { content: 'Nexacro UI 를 사용한 화면 구성' },
          ],
        },
        {
          content: '회원이 정기/일시적으로 납부하는 회비관리 모듈 담당',
          weight: 'MEDIUM',
          descriptions: [
            { content: '신용카드 등 다양한 방식의 회비결제 모듈 개발' },
            { content: '결제사 (KG이니시스) 모듈을 사용한 가상계좌 납부방식 구현' },
          ],
        },
        { content: 'REST API 를 사용하여 다른 내부 시스템과의 인터페이스 개발' },
      ],
    },
  ],
};

export default project;
