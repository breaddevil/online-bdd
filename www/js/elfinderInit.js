$().ready(function () {
    var elf = $('#elfinder').elfinder({
        url: 'connector',
        lang: 'en',
        commands: [
            'open', 'reload', 'home', 'up', 'back', 'forward', 'getfile', 'quicklook',
            'download', 'rm', 'duplicate', 'rename', 'mkdir', 'mkfile', 'upload', 'copy',
            'cut', 'paste', 'edit', 'search', 'info', 'view', 'help',
            'resize', 'sort', 'testfile'
        ],
        contextmenu: {
            navbar: ['open', '|', 'copy', 'cut', 'paste', 'duplicate', '|', 'rm', '|', 'info'],
            cwd: ['reload', 'back', '|', 'upload', 'mkdir', 'mkfile', 'paste', '|', 'sort', '|', 'info'],
            files: ['getfile', '|', 'testfile', 'quicklook', '|', 'download', '|', 'copy', 'cut', 'paste', 'duplicate', '|', 'rm', '|', 'edit', 'rename', 'resize', '|', 'archive', 'extract', '|', 'info']
        },

        commandsOptions: {
            edit: {
                editors: [
                    aceEditor
                ]
            }
        }
    }).elfinder('instance');
});