import * as contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_APP_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_APP_ACCESS_TOKEN!,
  environment: process.env.NEXT_PUBLIC_APP_ENVIRONMENT,
});
