"use client";
import { useState, useEffect } from "react";
import CurriculumSection from "../components/curriculumSection/CurriculumSection";
import {
  TypeWorkItemSkeleton,
  TypeSchoolItemSkeleton,
} from "../porfolio_types";
import {
  getWorkItemData as getWorkItemData_API,
  getSchoolItemData as getSchoolItemData_API,
} from "../portfolio_api";
import Link from "next/link";
import "./_resume.scss";

const Resume: React.FC = () => {
  const [workItems, setWorkItems] = useState<TypeWorkItemSkeleton[] | null>(
    null
  );
  const [schoolItems, setSchoolItems] = useState<
    TypeSchoolItemSkeleton[] | null
  >(null);

  const [loadingWorkItems, setLoadingWorkItems] = useState(false);
  const [loadingSchoolItems, setLoadingSchoolItems] = useState(false);

  const getWorkItems = async () => {
    try {
      const data = await getWorkItemData_API();
      setWorkItems(data as any);
      setLoadingWorkItems(false);
    } catch (error) {
      console.error("Error fetching WorkItem data:", error);
    }
  };

  const getSchoolItems = async () => {
    try {
      const data = await getSchoolItemData_API();
      setSchoolItems(data as any);
      setLoadingSchoolItems(false);
    } catch (error) {
      console.error("Error fetching SchoolItems data:", error);
    }
  };

  useEffect(() => {
    setLoadingWorkItems(true);
    getWorkItems();
    setLoadingSchoolItems(true);
    getSchoolItems();
  }, []);

  return (
    <main>
      <section className="resume_section">
        {" "}
        <div className="container">
          <h2 className="heading_3 upper">Resume</h2>
          <div className="row">
            <div className="col-12 col-lg-6" style={{ marginBottom: "2rem" }}>
              {/* Work Experience */}
              <section className="curriculum_bg_wrapper">
                <div>
                  <h2 className="small_heading resume">Work Experience</h2>

                  <section>
                    {loadingWorkItems && <p>...Loading</p>}
                    {workItems &&
                      workItems.map((workEntry, i) => {
                        return (
                          <CurriculumSection
                            fields={workEntry.fields}
                            key={i}
                          />
                        );
                      })}
                  </section>
                </div>
              </section>
            </div>

            <div className="col-12 col-lg-6" style={{ marginBottom: "2rem" }}>
              {/* education */}
              <section className="curriculum_bg_wrapper">
                <div>
                  <h2 className="small_heading resume">Education</h2>
                  <section>
                    {loadingSchoolItems && <p>...Loading</p>}
                    {schoolItems &&
                      schoolItems.map((schoolEntry, i) => {
                        return (
                          <div>
                            <CurriculumSection
                              fields={schoolEntry.fields}
                              key={i}
                            />
                          </div>
                        );
                      })}
                  </section>
                </div>
              </section>
            </div>
          </div>

          <Link
            href={`/resume_dev_sv.pdf`}
            className="resume_link"
            target="_blank"
            download
          >
            {" "}
            Download Resume.pdf
          </Link>
        </div>
      </section>
    </main>
  );
};
export default Resume;
