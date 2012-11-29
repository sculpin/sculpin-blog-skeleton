Sculpin Blog Skeleton
=====================

A skeleton for a Sculpin based blog.

Powered by [Sculpin](http://sculpin.io). =)

Build
-----

### If You Already Have Composer

    composer create-project sculpin/blog-skeleton -n -s dev sculpin-blog
    cd sculpin-blog
    vendor/bin/sculpin generate --watch --server

### If You Need Composer

    curl -s https://getcomposer.org/installer | php
    php composer.phar create-project sculpin/blog-skeleton -n -s dev sculpin-blog
    cd sculpin-blog
    vendor/bin/sculpin generate --watch --server


Previewing Development Builds
-----------------------------

By default the site will be generated in `output_dev/`. This is the location
of your development build.

To preview it with Sculpin's built in webserver, run either of the following
commands. This will start a simple webserver listening at `localhost:8000`.

### Using Sculpin's Internal Webserver

#### Generate Command

To serve files right after generating them, use the `generate` command with
the `--server` option:

    vendor/bin/sculpin generate --server

To listen on a different port, specify the `--port` option:

    vendor/bin/sculpin generate --server --port=9999

Combine with `--watch` to have Sculpin pick up changes as you make them:

    vendor/bin/sculpin generate --server --watch


##### Server Command

To serve files that have already been generated, use the `server` command:

    vendor/bin/sculpin server

To listen on a different port, specify the `--port` option:

    vendor/bin/sculpin server --port=9999


### Using a Standard Webserver

The only special consideration that needs to be taken into account for standard
webservers **in development** is the fact that the URLs generated may not match
the path at which the site is installed.

This can be solved by overriding the `site.url` configuration option when
generating the site.

    vendor/bin/sculpin generate --url=http://my.dev.host/blog-skeleton/output_dev

With this option passed, `{{ site.url }}/about` will now be generated as
`http://my.dev.host/blog-skelton/output_dev/about` instead of `/about`.


Publishing Production Builds
----------------------------

When `--env=prod` is specified, the site will be generated in `output_prod/`. This
is the location of your production build.

    vendor/bin/sculpin generate --env=prod

These files are suitable to be transfered directly to a production host. For example:

    vendor/bin/sculpin generate --env=prod
    vendor/bin/sculpin assets:install --env=prod output_prod
    rsync -avze 'ssh -p 999' output_prod/ user@yoursculpinsite.com:public_html

In fact, `publish.sh` is provided to get you started.
