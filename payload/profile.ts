import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김승준',
    small: '',
  },
  contact: [
    {
      title: 'hiseungjun2@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=hiseungjun2@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/hiseungjun2',
      link: 'https://github.com/hiseungjun2',
      icon: faGithub,
    },
    {
      title: 'https://www.linkedin.com/in/hiseungjun2/',
      link: 'https://www.linkedin.com/in/hiseungjun2/',
      icon: faLinkedin,
    },
  ],
  notice: {
    title: '이메일로 연락 부탁드립니다! :)',
    icon: faBell,
  },
};

export default profile;
