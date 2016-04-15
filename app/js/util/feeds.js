function equals(a, b) {
  return a.title === b.title;
}

export default function combind(old_feeds, new_feeds) {
  const additions = new_feeds.filter(feed => {
    return !old_feeds.find(old_feed => equals(feed, old_feed))
  });
  return [...old_feeds, ...additions];
}
