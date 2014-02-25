elFinder.prototype.commands.testfile = function () {
    this.exec = function (hashes) {
        var file = this.files(hashes)[0];
        window.open('features/test?filename=' + this.fm.path(file.hash));
    }
    this.getstate = function (sel) {
        if (sel == undefined)
            return -1;
        var file = this.files(sel)[0];
        var patt = /\.feature$/i;
        if (file.mime != 'directory' && patt.test(file.name)) {
            return 0;
        }
        return -1;
    }
}
elFinder.prototype.i18.en.messages.cmdtestfile = 'Test file';

