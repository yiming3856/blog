import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://read.thinkly.cc/",
    title: "thinkly札记",
    description: "个人知识博客,用来记录日常的所思所想,也整理学习和工作中积累的知识。",
    author: "yiming",
    profile: "https://read.thinkly.cc/about/",
    ogImage: "default-og.jpg",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/yiming3856/blog/edit/main/",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github", url: "https://github.com/yiming3856" },
  ],
  shareLinks: [
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
