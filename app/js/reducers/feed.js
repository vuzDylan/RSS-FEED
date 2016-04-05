'use strict';

import {
  ALL_FEEDS,
  SPORTS_FEEDS,
  WEATHER_FEEDS,
  FAV_FEEDS,
  US_NEWS_FEEDS,
  WORLD_NEWS_FEEDS,
  TECH_FEEDS,
} from '../consts/feed';
import combind from '../util/feeds';
import { ADD_FEEDS, SELECT_FEED, FILTER_FEED } from '../actions/feed';


const initState = {
  feeds: [],
  filter: "",
  selected: ALL_FEEDS,
}

function feeds(state, action) {
  switch(action.type) {
    case ADD_FEEDS:
      return combind(state, action.feeds);
    default:
      return state;
  }
}

function filter(state, action) {
  switch(action.type) {
    case FILTER_FEED:
      return action.filter
    default:
      return state;
  }
}

function selected(state, action) {
  switch(action.type) {
    case SELECT_FEED:
      return action.feed;
    default:
      return state;
  }
}

export default function feed(state=initState, action) {
  return {
    feeds: feeds(state.feeds, action),
    filter: filter(state.filter, action),
    selected: selected(state.selected, action),
  };
}
