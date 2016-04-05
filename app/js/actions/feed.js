'use strict';

export const ADD_FEEDS = 'ADD_FEEDS';
export const SELECT_FEED = 'SELECT_FEED';
export const FILTER_FEED = 'FILTER_FEED';

export function addFeeds(feeds) {
  return {
    type: ADD_FEEDS,
    feeds,
  };
}

export function selectFeed(feed) {
  return {
    type: SELECT_FEED,
    feed,
  };
}

export function filterFeed(filter) {
  return {
    type: FILTER_FEED,
    filter,
  };
}
