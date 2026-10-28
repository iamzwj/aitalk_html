# 蝶发AI Talk 第二期 · 完整17页演示

React + TypeScript + Vite + Tailwind CSS。仅面向电脑展示。原23页内容按确认要求删除第一部分的5页工具详解、实战经验与演示总结两页，再新增 THANK YOU 封底，合计17页。

```bash
npm install
npm run dev
```

生产构建：`npm run build`；构建预览：`npm run preview`。

## 页码与部分

| 当前页码 | 部分 | 配色 | 内容 |
| --- | --- | --- | --- |
| 01 | 封面 | 绿色 | D-Gen·蝶发工作台案例、分享主题、讲者 |
| 02–04 | 第一部分 | 绿色 | 产品演进、六项并列能力、团队共建闭环 |
| 05–07 | 第二部分 | 浅蓝 | Vibe Coding 定义、Coze 经历、走向自主开发 |
| 08–15 | 第三部分 | 淡紫 | 完整上线路径、GitHub、前后端、服务器、域名与备案、自动部署、API、Cloudflare |
| 16 | 第四部分 | 暖金 | 工具选择 |
| 17 | 封底 | 绿色 | THANK YOU、分享反馈、欢迎打赏 |

第05页已突出“需要掌握编程语言 / 不必先掌握代码”，并明确人仍负责需求判断、测试与验收。原第一部分工具详解留给用户现场演示。

## 操作

- 底部前后按钮、左右方向键、PageUp/PageDown 翻页。
- Home 返回首页，End 到最后一页。
- `?page=8` 直接进入第三部分；刷新保留页码。
- 封面视频由鼠标横向移动控制进度，不自动播放；所有页面主标题的故障动画每3秒循环，减少动态效果偏好下关闭。

## 验证

已逐页检查1280×720与1920×1080电脑尺寸：正文标题位置统一，无页面横向/纵向溢出，底栏与内容无重叠。已检查按钮、键盘首尾边界、章节切色，TypeScript与生产构建通过。

## 素材与范围

文案依据用户提供的《分享完整原稿.md》及后续修订。业务数据和个人经历按用户提供的内容展示；演示页描述现场演示步骤，并不代表此项目自动执行了部署。背景视频采用用户原视频的轻量关键帧版本，与站点一同部署；字体依赖外部网络。生产站点为 https://aitalk.17design.fun 。

源码位于src/，构建结果位于dist/，当前逐页预览位于preview/完整版/。文件名末尾1280与1920标识检查尺寸。历史稿保存在originals/，不影响当前演示。

## 生产部署

仓库：`https://github.com/iamzwj/aitalk_html.git`

域名：`https://aitalk.17design.fun`

`main` 分支推送后，GitHub Actions 自动执行 `npm ci`、生产构建、上传与独立发布。构建输出保存在腾讯云 `/var/www/aitalk/releases/<commit>`，通过 `current` 符号链接切换版本；历史哈希资源保留在独立 assets 目录。

工作流所需仓库 Secrets：`SERVER_SSH_PRIVATE_KEY`、`SERVER_SSH_KNOWN_HOSTS`。不将密钥写入仓库。Nginx 配置模板在 `deploy/aitalk.nginx.conf`，HTTPS 证书由服务器的 Certbot 管理。可通过 `/version.json` 核对线上 commit。

本地原稿、历史版本、预览图片和交付 ZIP 不纳入 Git 仓库。
