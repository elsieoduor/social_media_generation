/* eslint-disable import/no-anonymous-default-export */
export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://yuki_social_db_owner:F9XvPBf8sHNg@ep-noisy-heart-a50eyvg9.us-east-2.aws.neon.tech/yuki_social_db?sslmode=require",
    connectionString:
      "postgresql://yuki_social_db_owner:F9XvPBf8sHNg@ep-noisy-heart-a50eyvg9.us-east-2.aws.neon.tech/yuki_social_db?sslmode=require",
  },
};
