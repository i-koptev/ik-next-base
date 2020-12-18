## Steps

```bash
$ npx create-next-app ik-next-base
```

```bash
$ mkdir ./src
$ mv ./pages ./src
$ mv ./styles ./src
```

```bash
$ yarn add next-translate
$ touch /next.config.js
```

### next.cofig.js:

```js
const nextTranslate = require("next-translate")
module.exports = nextTranslate()
```

```bash
$ touch  /118n.json
```

### 118n.json:

```json
{
    "locales": ["ru", "en", "lv"],
    "defaultLocale": "en",
    "pages": {
        "*": ["common"]
    }
}
```

```bash
$ mkdir ./locales

$ mkdir ./locales/en
$ touch ./locales/en/common.json

$ mkdir ./locales/ru
$ touch ./locales/ru/common.json

$ mkdir ./locales/lv
$ touch ./locales/lv/common.json
```

### Source: https://nextjs.org/learn/basics/data-fetching/blog-data

```bash
$ mkdir ./src/posts
$ touch ./src/posts/pre-rendering.md
$ touch ./src/posts/ssg-ssr.md
```

```bash
$ yarn add gray-matter remark remark-html

```
