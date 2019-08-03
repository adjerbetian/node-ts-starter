module.exports = {
    root: true,
    env: {
        es6: true,
        mocha: true,
        node: true
    },
    plugins: ["import"],
    extends: [
        "eslint:recommended",
        "prettier",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    rules: {
        "no-unused-expressions": "error",
        "no-unused-vars": ["error", { args: "after-used" }],
        "no-shadow": "error",

        // import
        "import/no-internal-modules": ["error", { allow: ["module-alias/*"] }],
        "import/no-unresolved": ["error", { ignore: ["@"] }],
        "import/no-cycle": "error",
    },
    overrides: [
        {
            files: ["*.ts"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: "module",
                project: "./tsconfig.json"
            },
            plugins: ["@typescript-eslint"],
            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "prettier/@typescript-eslint",
                "plugin:import/typescript"
            ],
            rules: {
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/no-unused-vars": "error",
                "@typescript-eslint/no-use-before-define": ["error", "nofunc"],
                "@typescript-eslint/interface-name-prefix": "off",
                "@typescript-eslint/no-floating-promises": "error",
                "@typescript-eslint/no-for-in-array": "error",
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/no-require-imports": "error",
                "@typescript-eslint/no-this-alias": "error",
                "@typescript-eslint/no-useless-constructor": "error",
                "@typescript-eslint/prefer-function-type": "error",
                "@typescript-eslint/prefer-includes": "error",
                "@typescript-eslint/prefer-readonly": "error",
                "@typescript-eslint/prefer-string-starts-ends-with": "error",
                "@typescript-eslint/promise-function-async": "error",
                "@typescript-eslint/unbound-method": "error",
                "@typescript-eslint/no-explicit-any": "off"
            },
        },
        {
            files: ["*.spec.ts", "*.unit.ts", "*.e2e.ts"],
            rules: {
                "no-unused-expressions": "off"
            }
        }
    ]
};
