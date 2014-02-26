<?php

$app = new Silex\Application();
$app['debug'] = true;

$app->register(new Silex\Provider\SecurityServiceProvider(), array(
    'security.firewalls' => array(
        'secured_area' => array(
            'pattern'    => '^/',
            'http'      => true,
            'users' => array(
                'admin' => array('ROLE_ADMIN', 'nn3g0H0VkS21YVuGcwl2UMUvQai4ozWKDu+SE+cf02JFet7yVFCaI5qQjeTINJDaD5TguUMPrN3jN6shSUm7hQ=='),
            ),
        ),
    )
));

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/views',
));