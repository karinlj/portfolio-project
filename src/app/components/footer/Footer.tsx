import Image from "next/image";
import "./_footer.scss";
import react_logo from "/public/react_logo.png";
import contentful_logo from "/public/logos_contentful.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <section className="footer_section">
      <div
        className="container"
        style={{
          paddingTop: "3rem",
          position: "relative",
        }}
      >
        <div className="row align-items-end">
          <div className="col-12 col-md-8">
            <h3 className="heading_3">Karin Ljunggren</h3>
            <h3 className="heading_3">Front end dev.</h3>
          </div>
          <div className="col-12 col-md-4">
            <section className="footer_logo_wrapper">
              <div className="back_to_top_link">
                <Link href="#siteContent">
                  <span className="to_top_icon">
                    {" "}
                    <FontAwesomeIcon
                      icon={faAngleUp}
                      aria-label="Top of page"
                    />
                  </span>
                </Link>
              </div>
              <section className="footer_logo_section">
                <p>Powered by:</p>
                <div>
                  <a href="https://reactjs.org/">
                    <Image
                      src={react_logo}
                      alt="React logo"
                      className="react_logo"
                      width={80}
                    />
                  </a>
                  <span style={{ fontSize: "1.2rem" }}>& </span>
                  <a href="https://www.contentful.com/">
                    <Image
                      src={contentful_logo}
                      alt="Contentful logo"
                      className="contentful_logo"
                      width={80}
                    />
                  </a>
                </div>
              </section>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <p className="footer_copy">
              © {new Date().getFullYear()}- Karin Ljunggren
            </p>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
