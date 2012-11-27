Sculpin Blog Skeleton
=====================

A skeleton for a Sculpin based blog.

Powered by [Sculpin](http://getsculpin.com). =)

Build
-----

### If You Already Have Composer

    composer create-project sculpin/blog-skeleton
    cd blog-skeleton
    vendor/bin/sculpin generate

### If You Need Composer

    wget http://getcomposer.org/composer.phar
    php composer.phar create-project sculpin/blog-skeleton
    cd blog-skeleton
    vendor/bin/sculpin generate


Development Configuration
-------------------------

Create a development configuration file (`app/config/sculpin_site_dev.yml`)
so that the generated URLs will make sense for your environment. By default,
the development build will be placed into `output_dev` so make sure to include
that in your URL.

Example:

    imports:
        - sculpin_site.yml
    url: http://my.local/websites/sculpin-blog-skeleton/output_dev
