import type {
  EntrySkeletonType,
  EntryFields,
  Asset,
  ChainModifiers,
} from "contentful";

export interface IImage {
  fields: {
    title: string;
    file: {
      url: string;
    };
  };
}
export interface IFilter {
  id: number;
  name: string;
  isChecked: boolean | undefined;
}

//homeData
export interface TypeHomeDataFields {
  preamble?: EntryFields.Symbol;
  title?: EntryFields.Symbol;
  description?: EntryFields.Symbol;
}
export type TypeHomeDataSkeleton = EntrySkeletonType<
  TypeHomeDataFields,
  "homeData"
>;

//aboutPage
export interface TypeAboutPageFields {
  heading?: EntryFields.Symbol;
  content?: EntryFields.RichText;
  mePict?: EntryFields.AssetLink;
}
export type TypeAboutPageSkeleton = EntrySkeletonType<
  TypeAboutPageFields,
  "aboutPage"
>;

//aboutPageMore
export interface TypeAboutPageMoreFields {
  heading?: EntryFields.Symbol;
  description?: EntryFields.Text;
  imageBoxes?: EntryFields.Object;
}
export type TypeAboutPageMoreSkeleton = EntrySkeletonType<
  TypeAboutPageMoreFields,
  "aboutPageMore"
>;

//project
export interface TypeProjectFields {
  title?: EntryFields.Symbol;
  link?: EntryFields.Symbol;
  image?: Asset;
  releaseDate?: EntryFields.Date;
  techniques?: EntryFields.Symbol[];
  description?: EntryFields.Text;
}
export type TypeProjectSkeleton = EntrySkeletonType<
  TypeProjectFields,
  "project"
>;

//personalProject
export interface TypePersonalProjectFields extends TypeProjectFields {}
export type TypePersonalProjectSkeleton = EntrySkeletonType<
  TypePersonalProjectFields,
  "personalProject"
>;

//project fields for component
export interface TypeProjectComponentFields {
  project: {
    fields: {
      title?: EntryFields.Symbol;
      link?: EntryFields.Symbol;
      image?: IImage | Asset<ChainModifiers, string>;
      releaseDate?: EntryFields.Date;
      techniques?: EntryFields.Symbol[];
      description?: EntryFields.Text;
    };
  };
}

//workItem
export interface TypeWorkItemFields {
  title?: EntryFields.Symbol;
  sortDate?: EntryFields.Date;
  titleLink?: EntryFields.Symbol;
  date?: EntryFields.Symbol;
  description?: EntryFields.Text;
  siteList?: EntryFields.Symbol[];
}
export type TypeWorkItemSkeleton = EntrySkeletonType<
  TypeWorkItemFields,
  "workItem"
>;

//schoolItem
export interface TypeSchoolItemFields {
  title?: EntryFields.Symbol;
  sortDate?: EntryFields.Date;
  titleLink?: EntryFields.Symbol;
  date?: EntryFields.Symbol;
  description?: EntryFields.Symbol;
  subItemList?: EntryFields.Object;
}
export type TypeSchoolItemSkeleton = EntrySkeletonType<
  TypeSchoolItemFields,
  "schoolItem"
>;
//ResumeFields for component
export interface TypeResumeFields {
  fields: {
    title?: EntryFields.Symbol;
    sortDate?: EntryFields.Date;
    titleLink?: EntryFields.Symbol;
    date?: EntryFields.Symbol;
    description?: EntryFields.Symbol;
    subItemList?: EntryFields.Object;
    siteList?: EntryFields.Symbol[];
  };
}

//skillNew
export interface TypeSkillNewFields {
  sortNumber?: EntryFields.Symbol;
  title?: EntryFields.Symbol;
  skills?: EntryFields.Object;
}
export type TypeSkillNewSkeleton = EntrySkeletonType<
  TypeSkillNewFields,
  "skillNew"
>;

//skill24
export interface TypeSkills24Fields {
  sortNumber?: EntryFields.Symbol;
  title?: EntryFields.Symbol;
  skillsList?: EntryFields.Object;
}
export type TypeSkills24Skeleton = EntrySkeletonType<
  TypeSkills24Fields,
  "skills24"
>;
