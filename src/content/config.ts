import { defineCollection, z } from 'astro:content';

// 博客文章集合：Front Matter 用 Zod 强校验，
// 元数据写错会在 `npm run build` 阶段直接失败，杜绝带错上线。
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1, 'title 不能为空'),
    description: z.string().min(1, 'description 不能为空（用于列表与 SEO）'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('James'),
    // 五大关注方向，作为一级分类
    category: z.enum([
      'AI DC Scale-out',
      'AI DCI/Scale-across',
      'AI Security',
      'Internet New Tech',
      'Operator New Tech',
    ]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    // 信源与校验留痕（M4 内容规范用）
    sources: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .optional(),
  }),
});

export const collections = { blog };
