const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: [...resolver.assetExts.filter((ext) => ext !== "svg"), "wav", "mp3"],
    sourceExts: [...resolver.sourceExts, "svg"],
  };
config.resolver.assetExts.push("wav");
config.resolver.assetExts.push("mp3");
  return withNativeWind(config, { input: "./global.css" });
})();