# Hobikoding Theme

Hobikoding Theme is a simple hugo theme.

## Installation

Inside the folder of your Hugo site run:

```bash
cd themes
git clone https://github.com/saefullohmaslul/hobikoding-theme
```

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.

## Config

Modify your configuration:

```bash
vi config.toml
```

```toml
baseURL = "https://www.hobikoding.com/"
languageCode = "id-id"
title = "Hobi Koding — Mari Ngoding Sambil Tidur"
theme = "hobikoding-tema"

copyright = "Copyright (c) 2018, Hobikoding; all rights reserved."
disqusShortname = "xxxxxx"
enableRobotsTXT = true
enableEmoji = true
googleAnalytics = "UA-xxxxx"

[Params]
    SiteDescription = "Mari ngoding sambil tidur. Hobikode adalah blog yang akan membantumu belajar pemrograman dengan konten-konten berkualitas yang mudah dipahami"
    DefaultKeywords = "ReactJS, JavaScript, HTML, CSS, Hugo, Programming"

[permalinks]
    reactjs = "/:slug/"
    artikel = "/:slug/"
    root = "/:slug/"
    html = "/:slug/"
    js = "/:slug/"

[taxonomies]
    topik = "topik"

[Author]
    nama = "Saefulloh Maslul"
    web = "https://maslul.kopianget.net"

[outputs]
    home = ["HTML", "JSON", "RSS"]
    artikel = ["HTML", "JSON", "RSS"]

[menu]

  [[menu.main]]
    identifier = "artikel"
    name = "This is the blog section"
    title = "blog section"
    url = "/artikel/"
    weight = 130
```

## Multilingual

Configure your language. Now support these languages.

## License

This theme is released under the [MIT License](//github.com/saefullohmaslul/hobikoding-theme/blob/master/LICENSE.md).
