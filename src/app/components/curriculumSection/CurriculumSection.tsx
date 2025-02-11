import { TypeResumeFields } from "../../porfolio_types";
import "./_curriculumSection.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const CurriculumSection: React.FC<TypeResumeFields> = ({ fields }) => {
  const { title, titleLink, date, descriptionLong } = fields;

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
      {/* <p className="description">{description}</p> */}
      <div className="description_long">
         {fields ? documentToReactComponents(descriptionLong as any) : ""}
      </div>
    </article>
  );
};

export default CurriculumSection;
