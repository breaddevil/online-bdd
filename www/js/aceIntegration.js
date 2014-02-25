aceEditor =
{
    mimes: ['text/feature'],
    load: function (textarea) {
        var source = $(textarea);

        var edit_div = $('<div>', {
            position: 'absolute',
            'class': 'aced'
        }).insertBefore(source);

        source.hide();
        var ace_editor = ace.edit(edit_div[0]);

        edit_div.data('ace', ace_editor);

        ace_editor.setOptions({
            maxLines: Infinity
        });

        ace_editor.getSession().setValue($(textarea).val());
        ace_editor.getSession().setUseSoftTabs(true);
        ace_editor.renderer.setShowInvisibles(true);
        //editor.setTheme("ace/theme/monokai");
        ace_editor.getSession().setMode("ace/mode/gherkin-en");

    },
    close: function (textarea, instance) {
        var edit_div = $(textarea).parent().find('.aced');
        var ace = edit_div.data('ace');
        ace.destroy();
    },
    save: function (textarea, editor) {
        var source = $(textarea);
        var edit_div = source.parent().find('.aced');
        var ace = edit_div.data('ace');
        source.val(ace.getSession().getValue());
    }
}
