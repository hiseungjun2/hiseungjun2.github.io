import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: true,

  list: [
    {
      title: '개인 중고거래 게시판',
      subTitle: '경남과학기술대학교 컴퓨터공학과 개인 프로젝트',
      at: '2018-05',
      descriptions: [
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          content: 'Slideshare:',
          postHref: 'https://www.slideshare.net//',
        },
      ],
    },
    {
      title: 'Cherry Bloosom',
      subTitle: '경남과학기술대학교 컴퓨터공학과 졸업과제',
      at: '2018-10',
      descriptions: [
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          content: 'Slideshare:',
          postHref: 'https://www.slideshare.net//',
        },
      ],
    },
  ],
};

export default presentation;
