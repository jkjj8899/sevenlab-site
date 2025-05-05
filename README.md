# sevenlab-site
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>七点科技 · 产品导航与资讯中心</title>
  <meta name="description" content="七点科技，专注于数字资产交易平台开发，提供产品导航与行业新闻聚合。">
  <meta name="keywords" content="七点科技, 数字货币交易系统, 区块链, 秒合约, 撮合引擎, 新闻聚合, GNews, GitHub Pages">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>七点科技</h1>
    <nav>
      <a href="news.html">📰 行业新闻</a>
      <a href="https://github.com/jkjj8899">GitHub</a>
      <a href="https://t.me/sy89899">Telegram</a>
      <a href="https://www.3xex.com">官网</a>
    </nav>
  </header>

  <section class="hero">
    <h2>用技术构建交易未来</h2>
    <p>我们专注于轻量级数字资产平台、撮合引擎与秒合约解决方案</p>
  </section>

  
<section class="products">
  <h3>我们的产品</h3>

  <div class="product">
    <img src="images/trade.png" alt="秒合约交易系统">
    <div>
      <h4>⚡ 秒合约交易系统</h4>
      <p>支持毫秒级撮合、爆仓机制、可快速部署至全球市场。</p>
      <a href="https://jkjj8899.github.io/jkjj8899/">查看演示 →</a>
    </div>
  </div>

  <div class="product reverse">
    <img src="images/quote.png" alt="实时行情系统">
    <div>
      <h4>📊 实时行情系统</h4>
      <p>多币种实时行情对接火币、币安 WebSocket，支持 K线图与深度图。</p>
      <a href="https://www.3xex.com/quote">了解更多 →</a>
    </div>
  </div>

  <div class="product">
    <img src="images/etf.png" alt="AI 智能交易平台">
    <div>
      <h4>🧠 AI 智能交易系统</h4>
      <p>自动策略下单，结合机器学习预测与风险控制。</p>
      <a href="https://www.3xex.com/etf">立即体验 →</a>
    </div>
  </div>
</section>
<style>
.products {
  max-width: 960px;
  margin: 3em auto;
  padding: 0 1em;
}
.product {
  display: flex;
  gap: 2em;
  align-items: center;
  margin-bottom: 3em;
}
.product.reverse {
  flex-direction: row-reverse;
}
.product img {
  width: 240px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.product h4 {
  margin-top: 0;
}
.product p {
  margin-bottom: 0.5em;
}
@media (max-width: 768px) {
  .product {
    flex-direction: column;
  }
  .product.reverse {
    flex-direction: column;
  }
}
</style>

<script src="inject-news.js"></script>

<section class="news-section">
  <h3>📢 每日新闻摘要（自动更新）</h3>
  <!-- NEWS_SECTION -->
</section>


  <section class="contact">
    <h3>合作与定制</h3>
    <p>欢迎交易所、钱包、做市商合作接入。我们支持 API 对接、KYC 合规系统、一站式部署。</p>
    <a href="mailto:your@email.com">📩 发送合作邮件</a> · 
    <a href="https://t.me/your_telegram">联系 Telegram</a>
  </section>

  <footer>
    <p>© 2025 七点科技 · 技术驱动 · 专业定制 · <a href="news.html">查看每日新闻</a></p>
  </footer>
</body>
</html>
