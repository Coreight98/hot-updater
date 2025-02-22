import { metro } from "@hot-updater/metro";
import { mockDatabase } from "@hot-updater/mock";
import "dotenv/config";

export default {
  build: metro({
    enableHermes: true,
  }),
  database: mockDatabase({
    initialBundles: [
      {
        id: "1",
        enabled: true,
        fileUrl: "https://example.com/bundle.js",
        shouldForceUpdate: false,
        fileHash: "1234",
        gitCommitHash: "5678",
        platform: "ios",
        targetAppVersion: "",
        message: null,
      },
      {
        id: "2",
        enabled: true,
        fileUrl: "https://example.com/bundle.js",
        shouldForceUpdate: false,
        fileHash: "1234",
        gitCommitHash: "5678",
        platform: "ios",
        targetAppVersion: "",
        message: null,
      },
    ],
  }),
};
