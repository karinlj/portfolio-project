import "./_socialIcons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IiconListItem {
  url: string;
  icon: IconDefinition;
  ariaLabel: string;
  text: string;
}

const iconList: IiconListItem[] = [
  {
    url: "mailto:kaljunggren@gmail.com",
    icon: faEnvelope,
    ariaLabel: "Karin email",
    text: "Email me",
  },
  {
    url: "https://se.linkedin.com/in/karin-ljunggren",
    icon: faLinkedin,
    ariaLabel: "Karin Linkedin",
    text: "Linkedin",
  },
  {
    url: "https://github.com/karinlj",
    icon: faGithub,
    ariaLabel: "Karin github",
    text: "gitHub",
  },
];

const SocialIcons: React.FC = () => {
  return (
    <ul className="nav_link_list_social">
      {iconList.map((item, index) => {
        return (
          <li className="nav_social_link_item" key={index}>
            <a
              href={item.url}
              target="_top"
              aria-label="Karin email"
              className="link"
            >
              <span className="link_icon">
                {" "}
                <FontAwesomeIcon icon={item.icon} />
              </span>

              <span className="link_text" data-testid="textSpan">
                {item.text}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;
