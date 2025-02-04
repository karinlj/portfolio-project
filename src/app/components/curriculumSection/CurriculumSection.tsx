import Accordion from "../accordion/Accordion";
import { TypeResumeFields } from "../../porfolio_types";
import "./_curriculumSection.scss";
import { Key } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const CurriculumSection: React.FC<TypeResumeFields> = ({ fields }) => {
  const { title, titleLink, date, description, descriptionLong, siteList, subItemList } = fields;

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
      <div className="description_long">
         {fields ? documentToReactComponents(descriptionLong as any) : ""}
      </div>

      {/* course_items accordion */}
      {subItemList &&
        (subItemList as any).map((item: { heading: string; content: string; }, i: Key | null | undefined) => {
          return (
            <div key={i}>
              <Accordion
                heading={item.heading}
                content={item.content}
              />
            </div>
          );
        })}
    </article>
  );
};

export default CurriculumSection;
