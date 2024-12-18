import { getHomeData as getHomeData_API } from "./portfolio_api";
import About from "./components/about/About";
import AboutExtra from "./components/aboutExtra/AboutExtra";

const Home: React.FC = async () => {
  const homeDataOutput = await getHomeData_API();
  if (!homeDataOutput) {
    return <div>Loading ...</div>;
  }
  const homePreamble = homeDataOutput?.fields.preamble;
  const homeTitle = homeDataOutput?.fields.title;
  const homeDescription = homeDataOutput?.fields.description;
  return (
    <main>
      <section
        className="home_wrapper"
      
      >
        <section className="content_section">
          <div className="container">
            {homeDataOutput ? (
              <>
                <h1>
                  <span className="home_small_heading">{homePreamble}</span>
                  <span className="home_heading">{homeTitle}</span>
                  <span className="home_small_heading">{homeDescription}</span>
                </h1>

                <p>
                  - I <span className="emfasis">love</span> creating deligthful
                  and functional user interfaces.
                </p>
              </>
            ) : (
              ""
            )}
          </div>
        </section>
      </section>
      <About />
      <AboutExtra />
    </main>
  );
};
export default Home;
