import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Web Front/Backend 개발을 담당하고 있는 시니어 개발자 입니다.',
    '대내 그룹사 프로젝트 및 대외 여러 프로젝트를 경험하며 실력을 쌓아가고 있습니다.',
    'Application Architecture 에 관심이 많아, Spring Framework / Spring Boot 외 많은 기술들을 찾아보고 학습하며 실무에 어떤 방법으로 적용해야 좋은지 늘 고민하고 있습니다.',
  ],
  sign: 'Seungjun Kim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
