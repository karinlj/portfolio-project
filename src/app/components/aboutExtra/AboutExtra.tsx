"use client";
import { getAboutExtraData as getAboutExtraData_API, getImageGrid as getImageGrid_API } from "../../portfolio_api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, ReactNode } from "react";
import "./_aboutExtra.scss";
import Image from "next/image";
import {
  TypeAboutPageMoreSkeleton,TypeImageGridFields,
  TypeImageGridSkeleton
} from "../../porfolio_types";

const AboutExtra: React.FC = () => {
  const [rowIndex, setRowIndex] = useState<number>(0);

  const [aboutExtraData, setAboutExtraData] =
    useState<TypeAboutPageMoreSkeleton  | null>(null);

   const [imageGrid, setImageGrid] =
    useState<TypeImageGridSkeleton [] | []>([]);

  
  const getAboutExtraData = async () => {
    try {
      const data = await getAboutExtraData_API();
      setAboutExtraData(data as any);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getImageGrid = async () => {
    try {
      const data = await getImageGrid_API();
      setImageGrid(data as any);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  let cardsRow  = [];

    if (imageGrid!) {
      cardsRow = imageGrid.map((row, i) => {
      return (
        <div className="row">
          {row.fields.imageGrid?.map((item, index) => {
              const src = `https:${item.fields.file?.url}`;

            return (
              <div className="col-12 col-md-4" key={index}>
              <div className="styled_card">
                <Image
                  src={src}
                  alt="cat"
                  className="grid_pict"
                  key={i}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            )
          })}
        </div>
      );
    });
  }
  const currentRow = cardsRow[rowIndex];

  const handleClick = () => {
    setRowIndex((prevIndex) =>
      prevIndex < imageGrid!.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    getAboutExtraData();
    getImageGrid()
  }, []);



  // Make sure data is not undefined
  if (!aboutExtraData || !imageGrid) {
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
                      title="Next image row"
                    >
                      <FontAwesomeIcon icon={faRedo} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              {currentRow}
            </div>
          </section>
        </>
      )}
    </section>
  );
};
export default AboutExtra;
