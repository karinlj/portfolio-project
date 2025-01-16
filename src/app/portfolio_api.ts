import { client } from "../client";
import {
  TypeHomeDataSkeleton,
  TypeAboutPageSkeleton,
  TypeAboutPageMoreSkeleton,
  TypeProjectSkeleton,
  TypePersonalProjectSkeleton,
  TypeWorkItemSkeleton,
  TypeSchoolItemSkeleton,
  TypeSkills24Skeleton,TypeImageGridSkeleton
} from "./porfolio_types";

export const getHomeData = async () => {
  try {
    const response = await client.getEntries<TypeHomeDataSkeleton>({
      content_type: "homeData",
    });
    if (!response || !response.items) {
      throw new Error("No OK Home data response");
    }
    // console.log("home_response:", response);
    const dataFields = response.items[1];
    return dataFields;
  } catch (err) {
    console.log("error: ", err);
  }
};

export const getAboutData = async () => {
  try {
    const response = await client.getEntries<TypeAboutPageSkeleton>({
      content_type: "aboutPage",
    });
    if (!response || !response.items) {
      throw new Error("No OK About data response");
    }
    // console.log("about_response:", response);
    const dataFields = response.items[1];
    return dataFields;
  } catch (err) {
    console.log("error: ", err);
  }
};

export const getAboutExtraData = async () => {
  try {
    const response = await client.getEntries<TypeAboutPageMoreSkeleton>({
      content_type: "aboutPageMore",
    });
    if (!response || !response.items) {
      throw new Error("No OK AboutExtra data response");
    }
    // console.log("aboutPageMore_response:", response);
    const dataFields = response.items[0]; //single item here

    return dataFields;
  } catch (err) {
    console.log("error: ", err);
  }
};


export const getImageGrid = async () => {
  try {
    const response = await client.getEntries<TypeImageGridSkeleton>({
      content_type: "imageGrid",
      order: "fields.sortDate" as any,

    });
    if (!response || !response.items) {
      throw new Error("No OK imageGrid data response");
    }
    const dataFields = response.items; //array here
    // console.log("imageGrid_dataFields:", dataFields);

    return dataFields;
  } catch (err) {
    console.log("error: ", err);
  }
};


export const getProjectData = async () => {
  try {
    const response = await client.getEntries<TypeProjectSkeleton>({
      content_type: "project",
      order: "-fields.releaseDate" as any,
    });
    if (!response || !response.items) {
      throw new Error("No OK Project data response");
    }
    // console.log("project_response:", response);
    const dataFields = response.items; //array here

    return dataFields;
  } catch (err) {
    console.log("error: ", err);
  }
};

export const getPersonalProjectData = async () => {
  try {
    const response = await client.getEntries<TypePersonalProjectSkeleton>({
      content_type: "personalProject",
      order: "-fields.releaseDate" as any,
    });
    if (!response || !response.items) {
      throw new Error("No OK PersonalProject data response");
    }
    // console.log("personalProject_response:", response);
    const dataFields = response.items; //array here
    return dataFields;
  } catch (err) {
    console.log("error: ", err);
  }
};

export const getSchoolItemData = async () => {
  try {
    const response = await client.getEntries<TypeSchoolItemSkeleton>({
      content_type: "schoolItem",
      order: "-fields.sortDate" as any,
    });
    if (!response || !response.items) {
      throw new Error("No OK SchoolItem data response");
    }
    // console.log("SchoolItem_response:", response);
    const dataFields = response.items; //array here
    return dataFields;
  } catch (err) {
    console.log("error: ", err);
  }
};

export const getWorkItemData = async () => {
  try {
    const response = await client.getEntries<TypeWorkItemSkeleton>({
      content_type: "workItem",
      order: "-fields.sortDate" as any,
    });
    if (!response || !response.items) {
      throw new Error("No OK WorkItem data response");
    }
    // console.log("WorkItem_response:", response);
    const dataFields = response.items; //array here
    return dataFields;
  } catch (err) {
    console.log("error: ", err);
  }
};

export const getSkillsData = async () => {
  try {
    const response = await client.getEntries<TypeSkills24Skeleton>({
      content_type: "skills24",
      order: "fields.sortNumber" as any,
    });
    if (!response || !response.items) {
      throw new Error("No OK About data response");
    }
    // console.log("skills_response:", response);
    const dataFields = response.items;
    return dataFields;
  } catch (err) {
    console.log("error: ", err);
  }
};
