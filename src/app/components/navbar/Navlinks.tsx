import SocialIcons from "./SocialIcons";
import "./_navlinks.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faFolderOpen,
  faFolderClosed,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IProps {
  clickLink?(): void;
}

interface IlistItem {
  path: string;
  icon: IconDefinition;
  text: string;
}

const linkList: IlistItem[] = [
  {
    path: "/skills",
    icon: faGraduationCap,
    text: "Skills",
  },
  {
    path: "/projects",
    icon: faFolderClosed,
    text: "Projects",
  },
  {
    path: "/personalProjects",
    icon: faFolderOpen,
    text: "Personal projects",
  },
  {
    path: "/resume",
    icon: faFileLines,
    text: "Resume",
  },
];

interface IProps {
  clickLink?(): void;
}

const NavLinks: React.FC<IProps> = ({ clickLink }) => {
  const pathName = usePathname();
  return (
    <div className="nav_links">
      <ul className="nav_link_list">
        {linkList.map((item, index) => {
          return (
            <li key={index} className="link_item">
              <Link
                href={item.path}
                className={`link ${
                  pathName === `${item.path}` ? "active" : ""
                }`}
                onClick={clickLink}
              >
                <span className="link_icon">
                  {" "}
                  <FontAwesomeIcon icon={item.icon} />
                </span>

                <p className="link_text">{item.text}</p>
              </Link>
            </li>
          );
        })}
      </ul>

      <SocialIcons />
    </div>
  );
};
export default NavLinks;
