import Accordion from "../accordion/Accordion";
import { TypeResumeFields } from "../../porfolio_types";
import "./_curriculumSection.scss";

const CurriculumSection: React.FC<TypeResumeFields> = ({ fields }) => {
  const { title, titleLink, date, description, siteList, subItemList } = fields;

  return (
    <article className="curriculum_item">
      <h3 className="curriculum_item_heading">
        <a
          href={titleLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Company homepage"
        >
          {title}
          {""}
        </a>
      </h3>
      <p className="date">{date} </p>
      <p className="description">{description}</p>
      {siteList &&
        siteList.map((site, index) => {
          return (
            <div className="styled_site_item" key={index}>
              <a
                href={site}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Site page"
              >
                {site}
                {""}
              </a>
            </div>
          );
        })}

      {/* course_items accordion */}
      {subItemList &&
        (subItemList as any).map((item, i) => {
          return (
            <>
              <Accordion
                key={i}
                heading={item.heading}
                content={item.content}
              />
            </>
          );
        })}
    </article>
  );
};

export default CurriculumSection;
