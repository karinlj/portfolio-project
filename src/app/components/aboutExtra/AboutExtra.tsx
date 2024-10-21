"use client";
import { getAboutExtraData as getAboutExtraData_API } from "../../portfolio_api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, ReactNode } from "react";
import "./_aboutExtra.scss";
import Image from "next/image";
import {
  TypeAboutPageMoreSkeleton,
  TypeAboutPageMoreFields,
} from "../../porfolio_types";

const AboutExtra: React.FC = () => {
  const [aboutExtraData, setAboutExtraData] =
    useState<TypeAboutPageMoreSkeleton>({
      fields: {},
      contentTypeId: "aboutPageMore",
    });
  const getData = async () => {
    try {
      const data = await getAboutExtraData_API();
      setAboutExtraData(data as any);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const [index, setIndex] = useState<number>(0);
  // const boxes = [
  //   {
  //     imageLeft: "filip_lo",
  //     imageCenter: "vilda2",
  //     imageRight: "lo",
  //   },
  //   {
  //     imageLeft: "truls_tree",
  //     imageCenter: "hugo_play",
  //     imageRight: "filip_truls",
  //   },
  //   {
  //     imageLeft: "filip_tree",
  //     imageCenter: "vilda",
  //     imageRight: "lo_window",
  //   },
  // ];

  const imageBoxes = aboutExtraData?.fields.imageBoxes;

  let cardsGrid = [];
  if (imageBoxes!) {
    cardsGrid = imageBoxes.map((box, i) => {
      return (
        <div className="row" key={i}>
          <div className="col-12 col-md-4">
            <div className="styled_card">
              {" "}
              <Image
                src={require(`/public/${box.imageLeft}.jpg`)}
                alt="cat"
                className="grid_pict"
                key={i}
              />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="styled_card">
              {" "}
              <Image
                src={require(`/public/${box.imageCenter}.jpg`)}
                alt="cat"
                className="grid_pict"
                key={i}
              />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="styled_card">
              {" "}
              <Image
                src={require(`/public/${box.imageRight}.jpg`)}
                alt="cat"
                className="grid_pict"
                key={i}
              />
            </div>
          </div>
        </div>
      );
    });
  }
  const currentCard = cardsGrid[index];

  const handleClick = () => {
    setIndex((prevIndex) =>
      prevIndex < imageBoxes!.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    getData();
    if (aboutExtraData!) {
      // console.log("imageBoxes", imageBoxes[0].imageLeft);
    }
    console.log("aboutExtraData", aboutExtraData);
  }, []);

  // useEffect(() => {
  //   if (aboutExtraData.fields.imageBoxes!) {
  //     console.log(
  //       "aboutExtraData",
  //       aboutExtraData.fields.imageBoxes[0].imageCenter
  //     );
  //   }
  // }, [aboutExtraData]);

  // Make sure aboutExtraData is not undefined
  if (!aboutExtraData) {
    return <div>Loading...</div>;
  }
  const heading = aboutExtraData?.fields.heading as ReactNode;
  const description = aboutExtraData?.fields.description as ReactNode;

  return (
    <section className="about_me_more_section">
      {aboutExtraData && (
        <>
          <div className="container">
            <h2 className="small_heading">{heading}</h2>
          </div>
          <section className="content_section large_text white">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-12 col-lg-10">
                  <div className="styled_info_box">
                    <p>{description}</p>
                    <button
                      className="styled_reload_btn"
                      onClick={handleClick}
                      title="Next image"
                    >
                      <FontAwesomeIcon icon={faRedo} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              {currentCard}
            </div>
          </section>
        </>
      )}
    </section>
  );
};
export default AboutExtra;
