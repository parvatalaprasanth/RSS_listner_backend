//////////////////////////
///////configuration

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace',
  apiVersion: '7.2', // use the same version of your Elasticsearch instance
});

client.ping({
  // ping usually has a 3000ms timeout
  requestTimeout: 1000
}, function (error) {
  if (error) {
    console.trace('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});

/////////////////////////////////////////////
exports.searchValue = async (value) => {
  const response = await client.search({
    index: 'rss',
    type: 'feeddata',
    body: {
      "_source": [],
      "size": 5000,
      "query": {
        "bool": {
          "should": [
            {
              "match_phrase": {
                "title": value
              }
            }
          ]
        }
      }
    }
  })

  const result = response.hits.hits.map((item) => { return item._source })
  return result
}



exports.totalesticlist=async ()=>{
  const response = await client.search({
    index: 'rss',
    type: 'feeddata',
    body: {
      "_source": [],
      "size":5000
      
    }
  })

  const result = response.hits.hits.map((item) => { return item._source })
  return result
}









