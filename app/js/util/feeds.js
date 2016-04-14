function equals(a, b) {
  if (a.title !== b.title) {
    return false;
  } else if(a.date.toString() !== b.date.toString()) {
    return false;
  } else {
    return true;
  }
}

export default function combind(old_feeds, new_feeds) {
  const relivant = old_feeds.filter(feed => {
    return old_feeds.feed === new_feeds[0].feed;
  });
  const additions = new_feeds.filter(feed => {
    return !relivant.find(old_feeds => equals(feed, old_feeds))
  });
  return [
    ...old_feeds,
    ...additions,
  ];
}
