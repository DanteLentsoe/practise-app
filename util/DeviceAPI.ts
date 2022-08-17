import { Platform, Dimensions } from "react-native";

const deviceHeight = Dimensions.get("screen").height;
const deviceWeight = Dimensions.get("screen").width;

export { deviceHeight, deviceWeight };
