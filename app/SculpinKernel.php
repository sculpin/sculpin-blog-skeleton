<?php

use Sculpin\Bundle\SculpinBundle\HttpKernel\AbstractKernel;

/**
 * Custom Sculpin Kernel
 *
 * This file only needs to be here in order to register optional bundles
 * or bundles from third-party vendors.
 */
class SculpinKernel extends AbstractKernel
{
    /**
     * {@inheritdoc}
     */
    public function registerBundles()
    {
        return array_merge(parent::registerBundles(), array(
            new \Dflydev\Bundle\GitHubGistTwigBundle\DflydevGitHubGistTwigBundle,
        ));
    }
}
