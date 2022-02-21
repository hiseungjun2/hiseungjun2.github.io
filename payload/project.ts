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
        { content: 'Spring F/W 기반 자사 프레임워크, Nexacro 사용하여 백엔드 구성' },
        {
          content: '자산관리시스템 개발 담당 업무 수행',
          weight: 'MEDIUM',
          descriptions: [
            { content: '코리아세븐이 보유중인 자산/물품을 관리하는 시스템' },
            { content: '본사 및 점포가 보유한 기초자산데이터 파악 및 분석' },
            { content: '신규/리뉴얼/폐점 등 점포에서 발생하는 공사 프로세스 정의 및 개발' },
            { content: '외부 전자결재 모듈 사용' },
          ],
        },
        {
          content: 'SAP 시스템과의 인터페이스 개발 및 연동',
          weight: 'MEDIUM',
          descriptions: [
            { content: '보유자산 중 폐기/매각대상 자산 처리' },
            { content: '인터페이스를 통해 자산관리시스템-SAP시스템과의 데이터 연동' },
          ],
        },
      ],
    },
    {
      title: '롯데정보통신 데이터 전환 솔루션 구축',
      startedAt: '2020-10',
      endedAt: '2021-05',
      where: '롯데정보통신 (LOTTE Data Communication Company)',
      descriptions: [
        { content: '자사 사내 아이디어 공모전 신사업 아이디어 부문 수상' },
        {
          content: '자사가 보유중인 DB 마이그레이션 솔루션의 고도화 진행 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '레거시 모듈의 핵심부분(전환엔진) 추출' },
            { content: 'Spring F/W, Bootstrap 을 사용하여 프론트/백엔드 개발' },
            { content: '전환에 필요한 메타데이터, 전환쿼리 자동 생성 개발' },
            { content: '엔진을 통한 DB to DB 마이그레이션 진행' },
          ],
        },
        { content: '전체적인 마이그레이션 프로세스 경험' },
      ],
    },
    {
      title: '굿네이버스 회원관리시스템 리뉴얼 프로젝트',
      startedAt: '2019-03',
      endedAt: '2020-02',
      where: '굿네이버스 (Goodneighbors)',
      descriptions: [
        { content: '굿네이버스에 후원중인 회원을 관리하는 시스템' },
        { content: '전자정부프레임워크, Nexacro UI를 사용하여 프론트/백엔드 개발' },
        {
          content: '회원이 정기/일시적으로 납부하는 회비관리 업무 개발 담당',
          weight: 'MEDIUM',
          descriptions: [
            { content: '신용카드, 휴대폰결제 등 여러 방식의 회비결제 모듈 개발' },
            { content: '결제사 ' },
            { content: 'Nexacro UI 를 사용한 화면 구성' },
          ],
        },
        {
          content: '회원이 정기/일시적으로 납부하는 회비관리 모듈 담당',
          weight: 'MEDIUM',
          descriptions: [
            { content: '신용카드 등 다양한 방식의 회비결제 모듈 개발' },
            { content: '결제사(KG이니시스)의 외부 모듈을 사용한 가상계좌 납부방식 구현' },
          ],
        },
        { content: '내부 시스템과의 연동을 위한 REST API 기반의 인터페이스 개발 진행' },
      ],
    },
  ],
};

export default project;
