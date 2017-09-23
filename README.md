hexo-theme-Typography
======

![Head](https://github.com/SumiMakito/hexo-theme-typography/blob/master/_art/head.png?raw=true)

![Screenshot](https://github.com/SumiMakito/hexo-theme-typography/blob/master/_art/screenshot.png?raw=true)

## Install

### Install dependencies

```bash
cd hexo # cd into the root directory of your Hexo blog
npm install --save hexo-renderer-jade hexo-generator-archive
git clone https://github.com/SumiMakito/hexo-theme-typography themes/typography
cd theme/typography
npm install
```

> You can skip the second line provided you have already installed `hexo-renderer-jade` and `hexo-generator-archive` in your Hexo blog's root directory.

### Modify the config file

Find `theme:` in your `_config.yml` at the root directory of your Hexo blog, and change that line into `theme: typography`, then add these lines:

```yaml
archive_generator:
  per_page: 0
```

## Update

```bash
cd themes/typography
git pull
```

> You may encounter the error `modified: themes/typography` if you are managing the whole blog with `git`. In that case, instead of using `git push`, we recommend you to download the zip and update the theme manually.

## Customize

Typography has packed up several labor-saving functions, thus you can easily make any change at any time in the `_config.yml` file located in the root directory of the theme.

### Correctly define the title

Typography has three titles: `title`, `title_primary`, and `title_secondary`. The `title` is defined in the `_config.yml` inside the Hexo blog's root directory while the `title_primary` and `title_secondary` are defined in Typography's `_config.yml`.

- `title`: The `<title>` of all the HTML pages. 
- `title_primary`: The bigger title to display on nav/side bar.
- `title_secondary `: The smaller title to display on nav/side bar.

### Change the language

Modify the `.yml` files in `themes/typography/languages` or add new files according to your need.

### Auto truncate

It is possible to control the length for all the summaries on the index page by setting a value for `truncate_len`. The default length is 160.

e.g. `truncate_len: 160`

### Set up the comment service

The comment box is a place for readers to exchange their ideas with the author. Typography has integrated two 3rd-party comment services, and they are ready to use at any time.

Currently, Typography supports comment services provided by [Disqus](https://disqus.com/) and [LiveRe](https://livere.com/). The only thing you need to do is to set the corresponding key for the comment service that you would like to use.

e.g. `disqus: disqus_shortname` OR `livere: livere_data_uid`

> Do not use two comment services at the same time, or the post will be followed by two comment boxes. Just leave blank for the rest of the comment service-related options.

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

Typography uses `node-sass` and `scss-compile` to generate `.css` files for styling. We have provided several options such as background and foreground colors for you to choose. When your editing is finished, don't forget to run the commands below to re-generate the `.css` files:

```bash
cd theme/typography
npm run scss-compile
```

> `.scss` files are located in `theme/typography/raw/scss`.

## Customize<sup>3</sup>

As for the jade templates inside `theme/typography/layout`, just edit them and remember to add some pepper as you like it.

## Support me

Please consider support me if you really like my work. `_(:з」∠)_` 

<img width="350" src="https://github.com/SumiMakito/hexo-theme-typography/blob/master/_art/alipay.png?raw=true" alt="Alipay QR code">

> Scan with Alipay to buy me a cup of cappuccino.

## License

© 2017 Makito

Typography is released under the MIT license.
