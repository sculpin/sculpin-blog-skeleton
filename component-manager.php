<?php
namespace ComponentManager;

use Composer\Script\Event;
use Symfony\Component\Filesystem\Filesystem;

class ComponentManager
{
    public static function postComposerInstall(Event $event)
    {
        $config       = $event->getComposer()->getConfig();
        $componentDir = $config->get('component-dir');
        $components   = $config->get('components');
        $vendorDir    = $config->get('vendor-dir');

        // if either configuration is empty it's a noop
        if (empty($componentDir) || empty($components)) {
            return;
        }

        $componentDir = __DIR__ .'/'. $componentDir;

        if (!is_dir($componentDir)) {
            mkdir($componentDir);
        }

        $filesystem   = new Filesystem();

        foreach ($components as $component) {
            $componentSource = $vendorDir .'/'. $component;

            if (!is_dir($componentSource)) {
                continue;
            }

            $filesystem->mirror($componentSource, $componentDir .'/'. basename($component));
        }
    }
}
