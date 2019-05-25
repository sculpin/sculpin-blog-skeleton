<?php

class SculpinKernel extends \Sculpin\Bundle\SculpinBundle\HttpKernel\AbstractKernel
{
    protected function getAdditionalSculpinBundles(): array
    {
        return [
//            'App\Bundle\ExampleBundle\AppExampleBundle'
        ];
    }
}
