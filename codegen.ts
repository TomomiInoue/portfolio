import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_API_URL,
  documents: ["./**/*.tsx", "./**/*.ts"],
  generates: {
    "./gql/": {
      preset: "client",
    },
  },
};
export default config;
