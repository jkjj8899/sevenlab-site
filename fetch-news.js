const fs = require('fs');
const https = require('https');

const API_KEY = 'your_gnews_api_key';
const NEWS_FILE = 'news.html';
const apiUrl = `https://gnews.io/api/v4/top-headlines?lang=zh&topic=business&token=${API_KEY}`;

https.get(apiUrl, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    const articles = json.articles || [];
    let content = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>七点科技新闻聚合</title></head><body>';
    content += '<h1>七点科技 · 最新行业新闻</h1><ul>';
    articles.slice(0, 10).forEach(article => {
      content += `<li><a href="${article.url}" target="_blank">${article.title}</a></li>`;
    });
    content += '</ul><footer><p>自动每日更新 · 来源：GNews</p></footer></body></html>';
    fs.writeFileSync(NEWS_FILE, content);
    console.log("News page updated.");
  });
}).on("error", (err) => {
  console.error("Error fetching news:", err);
});