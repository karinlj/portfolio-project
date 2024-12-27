import Image from "next/image";
import "./_footer.scss";
import next_logo from "/public/next_logo.png";
import contentful_logo from "/public/logos_contentful.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SocialIcons from "../navbar/SocialIcons";

const Footer: React.FC = () => {
  return (
    <footer className="footer_section">
      <div
        className="container"
        style={{
          paddingTop: "3rem",
          position: "relative",
        }}
      >
        <SocialIcons />
        <h3 className="heading_3">Karin Ljunggren<span>Front End dev.</span>
    
        </h3>
          <section className="footer_logo_section">
            <p>Powered by:</p>
            <div>
              <a href="https://nextjs.org/">
                <Image
                  src={next_logo}
                  title="Next.js"
                  alt="Next logo"
                  className="next_logo"
                  width={35}
                />
              </a>
              <span style={{ fontSize: "1.2rem", padding: "0 1rem" }}>& </span>
              <a href="https://www.contentful.com/">
                <Image
                  src={contentful_logo}
                  title="Contentful"
                  alt="Contentful logo"
                  className="contentful_logo"
                  width={80}
                />
              </a>
            </div>
          </section>
      
          <section className="footer_bottom_wrapper">

        <p className="footer_copy">
          © {new Date().getFullYear()}- Karin Ljunggren
        </p>{" "}

        <div className="back_to_top_link">
            <Link href="#nav">
              <span className="to_top_icon">
                {" "}
                <FontAwesomeIcon icon={faAngleUp} aria-label="Top of page" />
              </span>
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
