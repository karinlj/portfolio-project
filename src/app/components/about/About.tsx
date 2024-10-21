"use server";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getAboutData } from "../../portfolio_api";
import "./_about.scss";
import Image from "next/image";
import { IImage } from "../../porfolio_types";
import me_pict from "/public/me3.jpg";
import { ReactNode } from "react";

const About: React.FC = async () => {
  const aboutData = await getAboutData();

  if (!aboutData) {
    return <div>Loading...</div>;
  }
  const heading = aboutData?.fields.heading as ReactNode;
  const content = aboutData?.fields.content!;
  const mePict = aboutData?.fields.mePict! as IImage;

  const mePictSrc = `https:${mePict.fields.file.url}`;
  const mePictTitle = mePict.fields.title;

  return (
    <section className="about_me_section">
      <div className="container">
        <h2 className="small_heading">{heading}</h2>
      </div>
      <section className="content_section large_text white">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-6 col-xl-8">
              {aboutData ? (
                <>
                  <div>
                    {aboutData ? documentToReactComponents(content) : ""}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="col-12 col-lg-6 col-xl-4">
              <div className="styled_card pict">
                <Image
                  src={mePictSrc}
                  alt="picture of Karin"
                  className="me_pict"
                  width={300}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
                <p className="me_pict_caption">{mePictTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
