"use client";
import { useState, useEffect, ReactNode } from "react";
import { getProjectData as getProjectData_API } from "../portfolio_api";
import { TypeProjectSkeleton, IFilter } from "../porfolio_types";
import SingleProject from "../components/singleProject/SingleProject";
import { Filter } from "../components/filter/Filter";
import "./_projects.scss";

const Projects: React.FC = () => {
  const [projectData, setProjectData] = useState<TypeProjectSkeleton[]>([]);
  const [checkedTecniqueNames, setCheckedTecniqueNames] = useState<string[]>(
    []
  );
  const getData = async () => {
    try {
      const data = await getProjectData_API();
      setProjectData(data as any);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const activeFilter: IFilter[] = [
    { id: 1, name: "vuejs", isChecked: true },
    { id: 2, name: "reactjs", isChecked: true },
    { id: 3, name: "wordpress", isChecked: true },
  ];

  //functon with names of checked items as parameter from Filter comp
  const displayItems = (names: string[]) => {
    //set state
    setCheckedTecniqueNames(names);
  };

  //help function
  const intersection = (array1: string[], array2: string[]) => {
    return array1.filter((element) => {
      //return true or false depending on if array2 includes one element from array1
      return array2.includes(element);
    });
  };
  useEffect(() => {
    getData();
    console.log("my projects", projectData);
  }, []);

  if (!projectData) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <section className="project_section">
        <div className="container">
          <h2 className="heading_3 upper">Projects</h2>
          <p>My Client Projects</p>
          <Filter displayItems={displayItems} activeFilter={activeFilter} />

          {/* <div className="row my-gutters"> */}
          <div className="row my-gutters">
            {/* {loading && (
                  <StyledContentLoading>...Loading</StyledContentLoading>
                )} */}
            {projectData &&
              //if project.techniques includes name from checkedTecniqueNames
              projectData.map((project, index) => {
                //[]returns true
                return intersection(
                  project.fields.techniques as any,
                  checkedTecniqueNames
                ).length > 0 ? (
                  <div
                    className="col-12 col-sm-6 col-lg-4 col-xl-3"
                    key={index}
                  >
                    <SingleProject project={project} />
                  </div>
                ) : null;
              })}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Projects;
