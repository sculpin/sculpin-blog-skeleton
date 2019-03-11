Sculpin Blog Skeleton
=====================

A skeleton for a Sculpin based blog.

Powered by [Sculpin](http://sculpin.io). =)


Features
--------

A very basic Sculpin based blog supporting the following features:

 * Very minimal Bootstrap based theme.
 * A handful of existing posts in `source/_posts/` to get you started. Feel
   free to remove these when you are ready.
 * An about page at `/about`.
 * An index page at `/`. It displays all posts and paginates them.
 * A blog archive page at `/blog`. It displays post titles broken down by
   month and is paginated.
 * A blog categories page at `/blog/categories`.
 * A blog category index at `/blog/categories/$category`. Similar to the blog
   archive except broken down by each category.
 * A blog tags page at `/blog/tags`.
 * A blog tag index at `/blog/tags/$tag`. Similar to the blog archive
   except broken down by each tag.

Prerequisites
-------------

Sculpin is a PHP application and installed with the PHP package manager `composer`.
See https://getcomposer.org/ for installation instructions.

Unless you do a very basic website, you want some CSS and Javascript assets. Sculpin
uses `yarn` to manage them. See https://yarnpkg.com/en/docs/install for installation
instructions.

Install
-------

Create a new project using composer:

```bash
$ composer create-project -s dev sculpin/blog-skeleton my-blog
```

This application uses [Symfony's Webpack Encore](https://symfony.com/doc/current/frontend.html)
to manage CSS, JavaScript and image assets. Install the JS dependencies:

```bash
$ cd my-blog
$ yarn install
```

Build
-----

Run Encore to compile the assets from `source/assets/` into `source/build/`:

```bash
$ yarn encore dev --watch
```

With the `--watch` option, yarn will keep running and update the assets
whenever you change a source asset.

Then create a new console window and generate and serve the site with Sculpin:

```bash
$ php vendor/bin/sculpin generate --watch --server
```

Your newly generated clone of sculpin-blog-skeleton is now
accessible at `http://localhost:8000/`.

With the `--watch` option, sculpin will keep running and update the HTML
whenever you change a source document.

Documentation
-------------

The skeleton provides you with useful configuration and some example data for
a Sculpin installation. Check out the [Get Started page](https://sculpin.io/getstarted/)
and have a look at the [documentation](https://sculpin.io/documentation/).
