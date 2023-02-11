Ext.define('Admin.view.bidang.BidangsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.bidangs',
    add: function() {
        var cmp = Ext.getCmp("bidangs"),
            grid = cmp.down("tree_bidang"),
            form = cmp.windowForm.down("form"),
            parent = grid.getSelectionModel().getSelection();
        form.reset();

        if (parent.length > 0) {
            form.down("[name=PARENT_BIDANG_ID]").setValue(parent[0].get('BIDANG_ID'));
            form.show();
        } else {
            form = cmp.windowForm.down("form");
            form.reset();
            cmp.windowForm.show();
        }

    },
    upd: function() {
        var cmp = Ext.getCmp("bidangs"),
            grid = cmp.down("tree_bidang"),
            selected = grid.getSelectionModel().getSelection();
        if (selected.length > 0 && selected[0].get('BIDANG_ID')) {
            var form = cmp.windowForm.down("form");
            form.reset();
            form.getForm().setValues(selected[0].data);
            cmp.windowForm.show();
        } else {
            Ext.Msg.alert("Informasi", "Pilih data terlebih dahulu");
        }
    },
    save: function() {
        var me = this,
            cmp = Ext.getCmp("bidangs"),
            grid = cmp.down("tree_bidang"),
            form = cmp.windowForm.down("form");
        if (form.isValid()) {
            form.submit({
                url: 'http://localhost/koyoku/api/index.php/Bidang/save',
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
                            var store = Ext.getStore("store_bidang");
                            store.load();
                            cmp.windowForm.hide();
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
    
    delete: function() {
        var cmp = Ext.getCmp("bidangs"),
            grid = cmp.down("tree_bidang");
        parent = grid.getSelectionModel().getSelection();
        if (parent.length > 0) {
            var params = {
                BIDANG_ID: parent[0].get("BIDANG_ID"),
            };
            Ext.Msg.show({
                title: 'Konfirmasi',
                msg: 'Apakah anda yakin akan hapus Data ini ?',
                buttons: Ext.Msg.YESNO,
                fn: function(btn) {
                    if (btn == 'yes') {
                        Ext.Ajax.request({
                            url: "../api/index.php/Bidang/del",
                            params: params,
                            success: function(form, action, value) {
                                var success_opt = true;
                                try {
                                    res = Ext.JSON.decode(form.responseText);
                                } catch (err) {
                                    var success_opt = false;
                                    Ext.Msg.alert('Error', form.responseText);
                                }
                                if (success_opt) {
                                    if (res.success) {
                                        var store = Ext.getStore("store_bidang");
                                        store.load();
                                        cmp.windowForm.hide();
                                    }
                                    Ext.Msg.alert('Informasi', res.msg);
                                }
                            },
                            failure: function(form) {
                                Ext.Msg.alert('Error', form.responseText);
                                return false;
                            }
                        });
                    }
                }
            });
        } else {
            Ext.Msg.alert("Informasi", "Pilih data terlebih dahulu");
        }
    }

});
