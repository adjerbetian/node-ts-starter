import { execute } from "@test/utils/execute";

export * from "./unit";
export * from "./utils/execute";

before(async () => {
    await execute(`IF EXIST dist\\ RMDIR dist /S /Q`);
    await execute("npm run build");
});
