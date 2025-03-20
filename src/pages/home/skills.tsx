
import { FaJs, FaPython, FaReact, FaNodeJs, FaGit, FaDocker, FaVuejs, FaVimeo } from 'react-icons/fa';
import { SiTypescript, SiVscodium ,SiHtml5, SiCss3, SiHono, SiExpress, SiFlask, SiVim, SiAlchemy, SiDrizzle, SiPostgresql, SiLinux} from 'react-icons/si';

type SkillItem = {
  name: string;
  icon: React.ReactNode; // Use ReactNode for icons
};

export type SkillsCategory = {
  category: string;
  items: SkillItem[];
};

export const skills: SkillsCategory[] = [
  {
    category: 'Languages',
    items: [
      {name:'Html',icon:<SiHtml5 className='w-16 h-16'/>},
      {name:'Css',icon:<SiCss3 className='w-16 h-16'/>},
      { name: 'JavaScript', icon: <FaJs className="w-16 h-16" /> },
      { name: 'TypeScript', icon: <SiTypescript className="w-16 h-16" /> },
      { name: 'Python', icon: <FaPython className="w-16 h-16" /> },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'React', icon: <FaReact className="w-16 h-16" /> },
      {name:'Vue',icon:<FaVuejs className='w-16 h-16'/>},
      {name:'Hono',icon:<SiHono className='w-16 h-16'/>},
      { name: 'Express', icon: <SiExpress className="w-16 h-16" /> },
      { name: 'Flask', icon: <SiFlask className="w-16 h-16" /> },
      { name: 'Node.js', icon: <FaNodeJs className="w-16 h-16" /> },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'SQLAlchemy', icon: <SiAlchemy className="w-16 h-16" /> },
      { name: 'Drizzle', icon: <SiDrizzle className="w-16 h-16" /> },
      { name: 'Postgres', icon: <SiPostgresql className="w-16 h-16" /> },
      { name: 'Git', icon: <FaGit className="w-16 h-16" /> },
      { name: 'vim', icon: <SiVim className="w-16 h-16" /> },
      { name: 'VS Code', icon: <SiVscodium className="w-16 h-16" /> },
      { name: 'Linux', icon: <SiLinux className="w-16 h-16" /> },
    ],
  },
];

