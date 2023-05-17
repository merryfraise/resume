import { ISkill } from '../component/skill/ISkill';

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'JavaScript',
    },
    {
      title: 'TypeScript',
    },
    {
      title: 'React.js',
    },
    {
      title: 'Next.js',
    },
    {
      title: 'HTML/CSS',
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'VS Code',
    },
    {
      title: 'Notion',
    },
    {
      title: 'Figma',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [frontend, etc],
  tooltip: '',
};

export default skill;
