import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Spring Framework',
      level: 2,
    },
    {
      title: 'Spring boot',
      level: 2,
    },
    {
      title: 'Java',
      level: 2,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'javascript',
      level: 3,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
    {
      title: 'jQuery',
      level: 3,
    },
    {
      title: 'React.js',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'MS-SQL',
      level: 2,
    },
    {
      title: 'Maria DB',
      level: 3,
    },
    {
      title: 'Google Firebase',
      level: 1,
    },
    {
      title: 'Oracle',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Nexacro UI',
    },
    {
      title: 'AWS',
    },
    {
      title: 'WebSquare5',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [frontend, backend, database, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
