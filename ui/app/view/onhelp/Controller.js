Ext.define('koyoku.view.onhelp.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.onhelp',

    add: function(ths) {
        var me = this,
            cmp = Ext.getCmp("page_online_help"),
            pesan = cmp.down('#kirim_pesan').lastValue;
        gridUser = cmp.down("onhelpListUser"),
            grid = cmp.down("onhelpList"),

            rec = gridUser.getSelectionModel().getSelection();
        Ext.Ajax.request({
            url: "../api/index.php/Chat/addhelpchat",
            params: {
                HELP_ID: rec[0].data.HELP_ID,
                CHAT_TEXT: pesan,
            },
        });
        grid.getStore().load();
        Ext.getCmp("page_online_help").down('#kirim_pesan').setValue("");
    },

    addenter: function(ths) {
        if (characterCode == 13) {
            var me = this,
                cmp = Ext.getCmp("page_online_help"),
                pesan = cmp.down('#kirim_pesan').lastValue;
            gridUser = cmp.down("onhelpListUser"),
                grid = cmp.down("onhelpList"),
                rec = gridUser.getSelectionModel().getSelection();
            Ext.Ajax.request({
                url: "../api/index.php/Chat/addhelpchat",
                params: {
                    HELP_ID: rec[0].data.HELP_ID,
                    CHAT_TEXT: pesan,
                },
            });
            grid.getStore().load();

        }

    },
    
    addpertanyaan : function() {
        Ext.create('koyoku.view.onhelp.Win_add', {
            id: 'window_add',
        });
        win = Ext.getCmp('window_add');
        win.show();
    },


    
    detail: function() {
        var me = this,
            cmp = Ext.getCmp("page_online_help"),
            grid = cmp.down("onhelpListUser"),
            rec = grid.getSelectionModel().getSelection();
        if (rec.length > 0) {
            console.log(rec[0].data.HELP_ID);
            grid = cmp.down("onhelpList");
            store = grid.getStore();
            store.proxy.extraParams = {
                HELP_ID: rec[0].data.HELP_ID
            };
             Ext.getCmp('page_online_help').down('#SenderName').setValue(rec[0].data.HELP_JUDUL)
            store.load();
            Ext.getCmp('page_online_help').down('onhelpList').setHidden(false);
        } else {
            Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
        }
    },

    save: function(ths) {
        var me = this,
            windowForm = Ext.getCmp('window_add');
        form = windowForm.down("form");
        if (form.isValid()) {
            form.submit({
                url: 'http://localhost/project/rkbmd/api/index.php/Chat/addhelptitle',
                success: function(form, action) {
                    var success_opt = true;
                    try {
                        res = Ext.JSON.decode(action.response.responseText);
                    } catch (err) {
                        var success_opt = false;
                        Ext.Msg.alert('Error', form.responseText);
                    }
                    if (success_opt) {
                        if (res.success) {
                            var store = Ext.getStore("store_judul");
                            store.load();
                            windowForm.destroy();
                        }
                        Ext.Msg.alert('Informasi', res.msg);
                    }
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Error', action.response);
                    return false;
                }
            });
        } else {
            Ext.Msg.alert('Informasi', 'Form belum diisi dengan lengkap');
        }
    },

});