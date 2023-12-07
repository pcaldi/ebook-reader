module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ".",
          extensions: [
            ".ts",
            ".tsx",
          ],
          alias: {
            "@components": "./src/components",
            "@service": "./src/service",
            "@routes": "./src/routes",
            "@hooks": "./src/hooks",
            "@styles": "./src/styles",
            "@assets": "./src/assets",
          },
        },
      ],
    ],
  };
};
