module.exports = {
    require: ["ts-node/register", "module-alias/register"],
    spec: `e2e/**/*.e2e.ts`,
    timeout: 10000
};
