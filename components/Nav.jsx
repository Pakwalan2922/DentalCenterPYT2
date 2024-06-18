import { Link } from 'react-scroll';

const links = [
  {
    path: 'home',
    name: 'ศูนย์ทันตกรรม',
    offset: -50
  },
  {
    path: 'service',
    name: 'บริการทันตกรรม',
    offset: -50
  },
  {
    path: 'article',
    name: 'บทความ',
    offset: -150
  },
  {
    path: 'doctor',
    name: 'ข้อมูลแพทย์',
    offset: 0
  },
]

const Nav = ({ containerStyles, linkStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            to={link.path}
            spy={true}
            smooth={true}
            offset={link.offset}
            duration={500}
            className={`${linkStyles}`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav