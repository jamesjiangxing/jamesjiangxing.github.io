import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 站点根地址（GitHub Pages 用户站固定为仓库名）
export default defineConfig({
  site: 'https://jamesjiangxing.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
