import { faEnvelope, faPhone, faRss } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/subin.png';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '손수빈',
    small: '',
  },
  contact: [
    {
      title: 'shoutrawberry@gmail.com',
      link: 'mailto:shoutrawberry@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '010-4408-4221',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/merryfraise',
      link: 'https://github.com/merryfraise',
      icon: faGithub,
    },
    // {
    //   link: 'https://www.facebook.com/iu.loen',
    //   icon: faFacebook,
    // },
    {
      title: 'https://merryfraise.tistory.com',
      link: 'https://merryfraise.tistory.com',
      icon: faRss,
      // icon: faYoutube,
    },
  ],
  // notice: {
  //   title: '',
  //   icon: faBell,
  // },
};

export default profile;
