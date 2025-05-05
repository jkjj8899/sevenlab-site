
const fs = require('fs');
const https = require('https');

const API_KEY = '4e5e216823e06cdd3495c738bd0495d7';
const endpoint = `https://gnews.io/api/v4/top-headlines?lang=zh&token=${API_KEY}`;

https.get(endpoint, (res) => {
  let data = '';

  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const newsData = JSON.parse(data);
    if (!newsData.articles) {
      console.error("新闻数据无效或请求失败");
      return;
    }

const cards = newsData.articles.slice(0, 10).map(article => {
  return `
    <article class="news-card">
      <h2 class="news-title">
        <a href="${article.url}" class="news-link" target="_blank">${article.title}</a>
      </h2>
      <p class="news-desc">${article.description || ''}</p>
    </article>`;
}).join('\n\n');

    const html = `<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>七点科技 · 每日新闻</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      background: #f5f7fa;
      margin: 0;
      padding: 0;
    }
    header {
      background: #0a58ca;
      color: white;
      padding: 1.5em;
      text-align: center;
    }
    h1 {
      margin: 0;
      font-size: 1.8em;
    }
    .container {
      max-width: 960px;
      margin: 2em auto;
      padding: 1em;
    }
    .news-card {
      background: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1em;
      margin-bottom: 1em;
      transition: box-shadow 0.3s;
    }
    .news-card:hover {
      box-shadow: 0 2px 12px rgba(0,0,0,0.1);
    }
    .news-title {
      font-size: 1.1em;
      font-weight: bold;
      margin-bottom: 0.5em;
    }
    .news-link {
      text-decoration: none;
      color: #0a58ca;
    }
    .news-desc {
      color: #444;
      font-size: 0.95em;
    }
    footer {
      text-align: center;
      font-size: 0.9em;
      color: #666;
      padding: 2em;
    }
  </style>
</head>
<body>
  <header>
    <h1>📢 七点科技 · 每日新闻资讯</h1>
  </header>
<main class="container">
  ${cards}
</main>
  <footer>
    &copy; 2025 七点科技 - 技术构建未来 · <a href="/">返回首页</a>
  </footer>
</body>
</html>`;

    fs.writeFileSync('news.html', html);
    console.log("✅ news.html 已更新");
  });
}).on("error", (err) => {
  console.error("❌ 请求失败:", err.message);
});
