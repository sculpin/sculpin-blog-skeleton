---
layout: post
title: Syntax Highlighting
categories:
    - features

---
You're all programmers, right? And you're writing code snippets on your Sculpin
powered blog? Yeah. So you want some highlighting with your static site generation?
Here you go!

    namespace Foo;

    /**
     * Awesome Contrived Example.
     */
    class Bar impliments BarInterface
    {
        private $baz;

        public function __construct(BazInterface $baz)
        {
            $this->baz = $baz;
        }

        public function doIt()
        {
            return $this->baz->do('it');
        }
    }

Like this addition to the skeleton? You can thank for [@Pawka](https://github.com/Pawka)
for suggesting it. :)
