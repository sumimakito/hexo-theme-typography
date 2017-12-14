hexo-theme-Typography
======

![Head](https://github.com/SumiMakito/hexo-theme-typography/blob/master/_art/head.png?raw=true)

![Screenshot](https://github.com/SumiMakito/hexo-theme-typography/blob/master/_art/screenshot.png?raw=true)

> Chinese version of this document is coming soon. 本文档的中文翻译版即将上线。

## Install

### Install dependencies

*Do not simply copy and paste the whole block of codes, please take a carefully look in advance. :)*

```bash
cd hexo # cd into the root directory of your Hexo blog
npm install --save hexo-renderer-jade hexo-generator-archive hexo-generator-category-enhance hexo-generator-feed hexo-generator-tag
npm uninstall --save hexo-generator-category # use hexo-generator-category-enhance instead
git clone https://github.com/SumiMakito/hexo-theme-typography themes/typography
cd themes/typography
npm install
```

> You can skip the second line provided you have already installed `hexo-renderer-jade` , `hexo-generator-category-enhance `, `hexo-generator-feed`, `hexo-generator-tag` and `hexo-generator-archive` in your Hexo blog's root directory.

### Modify the config file

Find `theme:` in your `_config.yml` at the root directory of your Hexo blog, and change that line into `theme: typography`, set `language` to `zh-cn` or `en` as you like , then add these lines:

```yaml
# Generate archive page
archive_generator:
  per_page: 0

# Generate categories index page and each category page
category_generator:
  per_page: 10
  enable_index_page: true

# Generate tags index page and each tag page
tag_generator:
  per_page: 10
  enable_index_page: true

# Generator atom feed for you website
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:
  content_limit: 140
  content_limit_delim: ' '
```

## Update

```bash
cd themes/typography
git pull
npm run scss-compile
```

> **We recommend you to run `npm run scss-compile` after each update, although CSS files will also be updated in each commit.**

> You may encounter the error `modified: themes/typography` if you are managing the whole blog with `git`. In that case, instead of using `git push`, we recommend you to download the zip and update the theme manually.

## Customize

Typography has packed up several labor-saving functions, thus you can easily make any change at any time in the `_config.yml` file located in the root directory of the theme.

### Correctly define the title<sup>* Important *</sup>

Typography has three titles: `title`, `title_primary`, and `title_secondary`. The `title` is defined in the `_config.yml` inside the Hexo blog's root directory while the `title_primary` and `title_secondary` are defined in Typography's `_config.yml`.

- `title`: The `<title>` of all the HTML pages. 
- `title_primary`: The bigger title to display on nav/side bar.
- `title_secondary `: The smaller title to display on nav/side bar.

### Change the language

Modify the `.yml` files in `themes/typography/languages` or add new files according to your need.

### Auto truncate

It is possible to control the length for all the summaries on the index page by setting a value for `truncate_len`. The default length is 160.

e.g. `truncate_len: 160`

### Changing the color scheme

You can find this option in theme's `_config.yml`.

Currently, there are two color schemes available: 

- light
- dark

``` yaml
themeStyle: light
```

### Set up the comment service

The comment box is a place for readers to exchange their ideas with the author. Typography has integrated two 3rd-party comment services, and they are ready to use at any time.

Currently, Typography supports comment services provided by [Disqus](https://disqus.com/) and [LiveRe](https://livere.com/). The only thing you need to do is to set the corresponding key for the comment service that you would like to use.

e.g. `disqus: disqus_shortname` OR `livere: livere_data_uid`

> Do not use two comment services at the same time, or the post will be followed by two comment boxes. Just leave blank for the rest of the comment service-related options.

### Show/Hide the page indicator

Set to false to hide the page indicator above the page switcher.

```yaml
showPageCount: true
```

### Show/Hide categories and tags links behind post title

You can choose whether or not to show categories and tags links behind post title in index and post page by changing the following values in theme's `_config.yml`:

``` yaml
showCategories: true
showTag: true
```
### Set website favicon

Prepare `favicon.png` file and put in `themes/typography/source/images/favicon.png`

### Embed Google Analytics in your blog

Find the line below in `themes/typography/source/js/google-analytics.js`:

`ga('create', 'UA-73442912-1', 'auto');`

Replace `UA-73442912-1` with your own google analytics id.

### SEO-friendly meta description tag

Typography gives you the chance to insert unique SEO-friendly meta description tags for different posts. Also, it is handy. Just add a new line in the head section of your post:

```yaml
title: Another post
date: 1970-01-01 00:00
desc: Description to be inserted into the metadata of the post page.
---
```

Then the generated HTML file will contain:

```html
<meta name="description" content="Description to be inserted into the metadata of the post page.">
```

> If `desc` is not specified, the first 140 words of the post will be used as the description.

### Icons for social network accounts

Typography natively supports the following social network accounts:

- Twitter
- GitHub
- Instagram
- Sina Weibo

To use light up those icons, just simply set the values for the corresponding options.

```yaml
twitter: user_name
weibo: user_id/permanent_name
instagram: user_name
github: user_name
```

> Tips: leave blanks to remove the icons from the site.

## Customize<sup>2</sup>

Typography uses `node-sass` and `scss-compile` to generate `.css` files for styling. We have provided several options such as background and foreground colors for you to choose. When your editing is finished, **do not** forget to run the commands below to re-generate the `.css` files:

```bash
cd themes/typography
npm run scss-compile
```

> `.scss` files are located in `theme/typography/raw/scss`.

## Customize<sup>3</sup>

As for the jade templates inside `theme/typography/layout`, just edit them and remember to add some pepper as you like it.

## Contributors

- [Makito](https://github.com/SumiMakito)
- [pmtao](https://github.com/pmtao)

## Support me

Please consider support me if you really like my work. `_(:з」∠)_` 

<img width="240" src="https://github.com/SumiMakito/hexo-theme-typography/blob/master/_art/alipay.png?raw=true" alt="Alipay QR code">

> Scan with Alipay to buy me a cup of cappuccino.

## License

© 2017 Makito

Typography is released under the MIT license.
