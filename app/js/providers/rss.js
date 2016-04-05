'use strict';

const topics =  {
  sports: "",
  weather: "",
  usNews: "cnn_us",
  worldNews: "cnn_world",
  tech: "cnn_tech",
}

export default function getRss(topic) {
  const promise = new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    const fullUrl = 'http://www.se.rit.edu/~dpv1592/dumb.php?url=http://rss.cnn.com/rss/' + topics[topic] + '.rss';
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
      parsed.push({
        title: item.querySelector('title').innerHTML,
        date: new Date(item.querySelector('pubDate').innerHTML),
        link: item.querySelector('link').innerHTML,
        content: item.querySelector('description').innerHTML,
        feed: topic,
      });
    }
    return parsed;
  });
}

