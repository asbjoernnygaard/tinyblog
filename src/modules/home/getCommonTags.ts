import {BlogPostProps} from "./blogpost/BlogPost";

const createTagFrequencyDictionaryForPosts = (posts:BlogPostProps[]) => {
  const tagFreq: {[key: string]: number} = {}
  posts.forEach(post => {
    post.tags.forEach(tag => {
      Object.keys(tagFreq).includes(tag) ? tagFreq[tag]++ : tagFreq[tag] = 1
    })
  })
  return tagFreq;
}

const sortTagsByFrequency = (tagFreq: {[key: string]: number}) => {
  const tagFreqArray: [string, number][] = [];
  Object.entries(tagFreq).forEach(entry => {
    tagFreqArray.push(entry);
  })
  return tagFreqArray.sort((a, b) => a[1] - b[1]).reverse()
}

const getCommonTags = (posts:BlogPostProps[]) => {
  const tagFreq = createTagFrequencyDictionaryForPosts(posts);
  const sortedTagFreq = sortTagsByFrequency(tagFreq);
  const commonTags = sortedTagFreq.slice(0, 5).map(e => e[0]);
  return commonTags;
}

export default getCommonTags;