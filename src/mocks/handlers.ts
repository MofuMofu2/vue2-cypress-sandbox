import { rest } from "msw";

export const handlers = [
  rest.get("/books", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "ひよこエンジニアに送るお仕事サバイバルガイド",
          url: "https://mofu-mofu.booth.pm/items/965770",
          published: "技術書典4",
        },
        {
          name: "技術同人誌を書くための文章技術",
          url: "https://mofu-mofu.booth.pm/items/1275490",
          published: "技術書典6",
        },
      ])
    );
  }),
];
