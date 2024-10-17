import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getAboutData } from "../../portfolio_api";
import "./_about.scss";
import Image from "next/image";
import me_pict from "/public/me3.jpg";
import { ReactNode } from "react";

const About: React.FC = async () => {
  const aboutData = await getAboutData();

  if (!aboutData) {
    return <div>Loading...</div>; 
  }
  const heading = aboutData?.fields.heading as ReactNode;
  const content = aboutData?.fields.content!
  return (
    <section className="about_me_section">
      <div className="container">
        <h2 className="small_heading">{heading}</h2>
      </div>
      <section className="content_section large_text white">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-8">
              {aboutData ? (
                <>
                  <div>
                    {aboutData
                      ? documentToReactComponents(content)
                      : ""}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="col-12 col-lg-3">
              <div className="styled_card">
                <Image
                  src={me_pict}
                  alt="picture of me"
                  className="me_pict"
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
