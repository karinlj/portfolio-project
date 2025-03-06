import "./_skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPuzzlePiece,
  faCode,
  faEye,
  faCircleInfo,
  faUserGroup,
  faUserCheck
} from "@fortawesome/free-solid-svg-icons";
import {
  faFigma,
  faHtml5,
  faSass,
  faWordpress,
  faReact,
  faVuejs,
  faGitSquare,
  faSquareJs,
  faJira,
  faMicrosoft,
  faCss3Alt
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { getSkillsData as getSkillsData_API } from "../portfolio_api";

const Skills = async () => {
  const skillsData = await getSkillsData_API();
  if (!skillsData) {
    return <div className="loading">Loading ...</div>;
  }

  const devIcons: IconDefinition[] = [
    faCode,
    faFigma,
    faHtml5,
    faSass,
    faWordpress,
    faReact,
    faVuejs,
    faGitSquare,
    faSquareJs,
    faPuzzlePiece,
    faGitSquare,
    faEye,
    faCircleInfo,
    faJira,
    faMicrosoft,
    faUserGroup,
    faUserCheck,
    faCss3Alt,

  ];

  type listItem = {
    icon?: string;
    text: string;
  };

  const getIcon = (iconName?: listItem["icon"]) => {
    let icon;
    if (iconName) {
      icon = devIcons.find((item) => {
        return item.iconName === iconName;
      });
    } else {
      icon = faCode;
    }

    if (icon === undefined) {
      throw new Error(`Expected 'icon' to be defined, but received ${icon}`);
    }
    return icon;
  };

  return (
    <section className="skills_section">
      <div className="container">
        <h1 className="heading_3 upper">Skills</h1>
      </div>
      <section className="content_section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-10">
              <div className="skills_row">
                {skillsData &&
                  skillsData?.map((skillsDataItem) => {
                    return (
                      <div key={skillsDataItem.sys.id}>
                        <h2 className="small_heading">
                          {skillsDataItem.fields.title}
                        </h2>
                        <div className="row box_row">
                          {skillsDataItem.fields.skillsList &&
                            (skillsDataItem.fields.skillsList as any).map(
                              (listItem: listItem, index: number) => {
                                return (
                                  <div
                                    className="col-4 col-lg-2"
                                    key={index}
                                  >
                                    <div className="skills_box_item">
                                      <div className="box_item_icon_content">
                                        <FontAwesomeIcon
                                          icon={getIcon(listItem.icon)}
                                          aria-hidden="true"
                                          className="icon"
                                        />
                                        <p className="text">{listItem.text}</p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Skills;
