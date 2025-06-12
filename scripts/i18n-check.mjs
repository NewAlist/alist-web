// scripts/i18n-check.mjs
import { existsSync } from "fs";

const apiToken = process.env.CROWDIN_PERSONAL_TOKEN;
const projectId = process.env.CROWDIN_PROJECT_ID;
const crowdinConfig = existsSync(".crowdin.yml") || existsSync("crowdin.yml");

if (apiToken && projectId) {
  console.log("Crowdin 环境变量已设置，开始上传/下载翻译文件...");
  process.exit(0); // 正常退出，继续执行 node ./scripts/i18n.mjs
} else if (crowdinConfig) {
  console.warn("检测到配置文件，但缺少环境变量 CROWDIN_PERSONAL_TOKEN 和 CROWDIN_PROJECT_ID。跳过 Crowdin。");
  process.exit(0);
} else {
  console.warn("未检测到 Crowdin 配置，跳过翻译同步步骤。");
  process.exit(0); // 同样正常退出
}
