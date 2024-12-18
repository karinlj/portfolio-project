import "./_skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece, faCode, faEye, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import {
  faFigma,
  faHtml5,
  faSass,
  faWordpress,
  faReact,
  faVuejs,
  faGitSquare,
  faSquareJs
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { getSkillsData as getSkillsData_API } from "../portfolio_api";

const Skills: React.FC = async () => {
  const skillsData = await getSkillsData_API();
  if (!skillsData) {
    return <div>Loading ...</div>;
  }

  const devIcons: IconDefinition[] = [
    faFigma,
    faHtml5,
    faSass,
    faWordpress,
    faReact,
    faVuejs,
    faGitSquare,
    faSquareJs,
    faPuzzlePiece,
    faCode,
    faGitSquare,
    faEye,faCircleInfo
  ];
  const getIcon = (iconName: string) => {
    const icon = devIcons.find((item) => {
      return item.iconName === iconName;
    });
    return icon;
  };

  return (
    <section className="skills_section">
      <div className="container">
        <h2 className="heading_3 upper">Skills</h2>
      </div>
      <section className="content_section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-10 col-xl-12">
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
                              (listItem, index) => {
                                return (
                                  <div
                                    className="col-4 col-lg-2 col-xl-1"
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
