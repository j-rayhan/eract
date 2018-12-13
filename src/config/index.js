import devConfig from "./development";
import stageConfig from "./staging";
import betaConfig from "./beta";
import prodConfig from "./production";

const env = process.env.REACT_APP_ENV;
console.log("env: =========>", env);
let config = {};

switch (env) {
  case "staging":
    config = stageConfig;
    break;
  case "beta":
    config = betaConfig;
    break;
  case "production":
    config = prodConfig;
    break;
  default:
    config = devConfig;
}

// console.log('config', config);
export const SERVER_URL = config.SERVER_URL;
export const GAID = config.GAID;
export const FB_APP_ID = config.FB_APP_ID;
export const GEOIP_SERVICE_URL = "https://extreme-ip-lookup.com/json/";
export const CDN_PATH = "h";
export const AWS_POLLYREGION = "ap";
export const AWS_POLLYACCESSKEYID = "A";
export const AWS_POLLYSECRETACCESSKEY = "l";
