# React Blog

A React component for dynamically reading and rendering markdown

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

 - An up to date version of Node & NPM.

### Installing

Install the latest version of `react-blog` from NPM.

```
$ npm install --save react-blog
```

## How to use

In your router, you will need to set up a dynamic route for your blog articles with the keyword `:article` as your route parameter.

```jsx
// in your routes file
// ... other imports
import { Article } from 'react-blog'

<Router>
  <Route path="blog/:article" component={Article} />
</Router>
```

In your markdown you can specify:

```md
---
title: Your Super Awesome Article Title
author: Your Name
tags:
- React
- JavaScript
- Blog
---
```

The `:article` parameter is based on the title field, in the example above the path to the article would be `/your-super-awesome-article-title`, however, if you have not specified an article title, the `:article` parameter will match the name of your markdown file, for example:

`super-awesome-article.md` would end up looking like `/super-awesome-article`.

To show a list of articles, you can use the `Blog` component. This component takes 3 props:
 - pathname => the path name you set up in your router for articles, e.g. `"/blog/:article"` or just `"/blog"`.
 - articles => the relative path to the directory holding all your markdown articles, e.g. `"../posts/articles/"`.
 - limit _(optional)_ => the number of articles to be shown per page, default is no limit.

<!-- _Additional prop `style`_ -->

An example `Blog` component might look like this:

```jsx
// ...imports
import { Blog } from 'react-blog'

// ...
<Blog pathname="/blog" articles="../posts/" limit={10} />
// ...
```

## Contributing

Please read [CONTRIBUTING.md](https://github.com/ysdexlic/react-blog/blob/master/CONTRIBUTING.md) for details on how to contribute.

## Authors

* **David Thompson** - [The Beardy Developer](https://thebeardydeveloper.com)

See also the list of [contributors](https://github.com/ysdexlic/react-blog/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
