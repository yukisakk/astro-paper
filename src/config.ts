export const SITE = {
  website: "https://www.yukisakk.me/", // replace this with your deployed domain
  author: "yukisakk",
  profile: "https://www.yukisakk.me/",
  desc: "当サイトは、雪村 朔太郎が運営するウェブサイトです。書評、ブログ、ウェブ小説などを雑多に収録しています。",
  title: "雪村朔太郎の日記",
  ogImage: "assets/reki.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  featuredPerIndex: 3,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/yukisakk/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "ja", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Tokyo", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
