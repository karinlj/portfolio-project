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
        <h3 className="heading_3">
          Karin Ljunggren <br /> Front End dev.
        </h3>
        <section className="footer_logo_wrapper">
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
          <div className="back_to_top_link">
            <Link href="#siteContent">
              <span className="to_top_icon">
                {" "}
                <FontAwesomeIcon icon={faAngleUp} aria-label="Top of page" />
              </span>
            </Link>
          </div>
        </section>
        <p className="footer_copy">
          © {new Date().getFullYear()}- Karin Ljunggren
        </p>{" "}
      </div>
    </section>
  );
};
export default Footer;
