import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts
    .filter(postFilter)
    .filter(post => post.data.modDatetime || post.data.pubDatetime)
    .sort((a, b) => {
      const aTime = new Date(
        a.data.modDatetime ?? a.data.pubDatetime
      ).getTime();
      const bTime = new Date(
        b.data.modDatetime ?? b.data.pubDatetime
      ).getTime();
      return bTime - aTime;
    });
};

export default getSortedPosts;
