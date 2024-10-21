import Link from "next/link";
import "./_singleProject.scss";
import Image from "next/image";
import { TypeProjectComponentFields, IImage } from "../../porfolio_types";

const SingleProject: React.FC<TypeProjectComponentFields> = ({ project }) => {
  const { link, image, title, releaseDate, techniques, description } =
    project.fields;

  const projectLink = link! as any;
  const projectImage = image! as IImage;
  const projectTechniques = techniques! as any;
  const projectReleaseDate = releaseDate as any;

  const src = `https:${projectImage.fields.file.url}`;

  return (
    <section className="single_project">
      <Link
        className="single_project_link"
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="project url or gitHub repo"
      ></Link>

      <div className="styled_image_container">
        <Image
          src={src}
          alt={projectImage!.fields.title}
          className="styled_image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <section className="styled_content_container">
        <h3>{title}</h3>
        <section className="styled_meta_text">
          <div className="techniques">
            {projectTechniques.map((technique, index) => {
              return (
                <div key={index} className="technique">
                  {technique}
                  {index === releaseDate!.length - 1 ? "" : ","}
                </div>
              );
            })}
          </div>
          <div className="date">
            <span>Finished:</span>
            {new Date(projectReleaseDate).toLocaleDateString()}
          </div>
        </section>
        <p className="project_description">{description}</p>
      </section>
    </section>
  );
};

export default SingleProject;
