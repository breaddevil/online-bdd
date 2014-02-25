<?php

require_once __DIR__.'/../vendor/autoload.php';

include __DIR__ . '/config.php';

use Symfony\Component\HttpFoundation\Request;

use FM\ElFinderPHP\Connector\ElFinderConnector;
use FM\ElFinderPHP\ElFinder;
use FM\ElFinderPHP\Driver\ElFinderVolumeLocalFileSystem;

$app->get('/', function () use ($app) {
    return $app['twig']->render('editor.twig');
});


function access($attr, $path, $data, $volume) {
    return strpos(basename($path), '.') === 0       // if file/folder begins with '.' (dot)
        ? !($attr == 'read' || $attr == 'write')    // set read+write to false, other (locked+hidden) set to true
        :  null;                                    // else elFinder decide it itself
}

$app->match('/connector', function () use ($app) {
    $opts = array(
        'roots' => array(
            array(
                'debug' => true,
                'driver'        => 'LocalFileSystem',
                'path'          => './files/',
                'URL'           => '/files/',
                'accessControl' => 'access',
                'mimeDetect' => 'internal',
                'mimefile'  => __DIR__ . '/mime.types',
            )
        )
    );
    $connector = new elFinderConnector(new elFinder($opts));
    $connector->run();
});

$app->get('features/list', function(){
    $files = scandir(__DIR__ . '/files');
    $features = array();
    foreach ($files as $file)
    {
        if (preg_match('/\.feature/', $file))
        {
            $features[] = $file;
        }
    }
    return json_encode($features);
});

$app->get('features/test', function(Request $request){

    $filename = $request->get('filename');
    if (!file_exists($filename))
    {
        return 'file does not exist';
    }

    $command = sprintf('%s %s "%s" 2>&1', '../bin/behat', '-f html -c ../behat.yml', $filename);
    $html = system($command, $ret);
    return $html;
});

$app->run();