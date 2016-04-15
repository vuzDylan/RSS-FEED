'use strict';

const topics =  {
  SPORTS_FEEDS: "http://www.se.rit.edu/~dpv1592/dumb.php?url=http://espn.go.com/espn/rss/news",
  WEATHER_FEEDS: "http://www.se.rit.edu/~dpv1592/dumb.php?url=http://rss.weather.com/rss/national/rss_nwf_rss.xml?cm_ven=NWF&amp;cm_cat=rss&amp;par=NWF_rss",
  US_NEWS_FEEDS: "http://www.se.rit.edu/~dpv1592/dumb.php?url=http://rss.cnn.com/rss/cnn_us.rss",
  WORLD_NEWS_FEEDS: "http://www.se.rit.edu/~dpv1592/dumb.php?url=http://rss.cnn.com/rss/cnn_world.rss",
  TECH_FEEDS: "http://www.se.rit.edu/~dpv1592/dumb.php?url=http://rss.cnn.com/rss/cnn_tech.rss",
}

function parseItem(item, topic) {
  if(item.querySelector('pubDate') &&
  item.querySelector('title') &&
  item.querySelector('link') &&
  item.querySelector('description') ) {
    return {
      title: clean(item.querySelector('title').innerHTML),
      date: new Date(clean(item.querySelector('pubDate').innerHTML)),
      link: clean(item.querySelector('link').innerHTML),
      content: clean(item.querySelector('description').innerHTML),
      feed: topic,
    };
  }
  return false;
}

function clean(text) {
  return text.replace('<![CDATA[', '').replace(']]>', '').trim();
}

export default function getRss(topic) {
  const promise = new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    const fullUrl = topics[topic];
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        resolve(xhttp.responseXML.querySelectorAll('item'));
      } else if (xhttp.readyState == 4) {
        reject(xhttp.statusText);
      }
    };
    xhttp.open("GET", fullUrl, true);
    xhttp.overrideMimeType('text/xml');
    xhttp.send();
  });
  return promise.then(items => {
    const parsed = [];
    for(let i=0;i<items.length;i++) {
      let item = items.item(i);
      let clean = parseItem(item, topic);
      if (clean) { parsed.push(clean); }
    }
    return parsed;
  });
}

