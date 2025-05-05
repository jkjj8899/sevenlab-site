// inject-news.js
// 将 news.html 中的前3条新闻自动注入到 index.html 的 .news-section 中

document.addEventListener('DOMContentLoaded', () => {
  fetch('news.html')
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // 从 news.html 中抓取所有 article 元素（通常是你生成的新闻列表）
      const articles = doc.querySelectorAll('main article');

      // 获取目标插入容器
      const newsSection = document.querySelector('.news-section');
      if (!newsSection) {
        console.warn('找不到 .news-section 容器，跳过注入');
        return;
      }

      // 清空容器并重建标题
      newsSection.innerHTML = '<h3>📢 每日新闻摘要（自动更新）</h3>';

      // 注入前3条新闻
      articles.forEach((article, index) => {
        if (index >= 3) return;
        const cloned = article.cloneNode(true);
        newsSection.appendChild(cloned);
      });
    })
    .catch(err => {
      console.error('新闻注入失败:', err);
    });
});
