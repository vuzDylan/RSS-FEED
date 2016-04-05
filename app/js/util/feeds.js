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
  const relivant = old.filter(feed => {
    return old_feed.feed === new_feeds[0].feed;
  });
  const additions = new_feeds.filter(feed => {
    if(relivant.find(old_feed => equals(feed, old_feeds))) {
      return true;
    } else {
      return false;
    }
  });
  return [
    ...old_feeds,
    ...additions,
  ];
}
