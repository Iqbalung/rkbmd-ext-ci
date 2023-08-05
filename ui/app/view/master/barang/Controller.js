Ext.define('koyoku.view.master.barang.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.barang',
   
    add: function(ths) {
        var me = this,        
            cmp = Ext.getCmp("page_barang"),
            grid = cmp.down("barangList"),
            selected = grid.getSelectionModel().getSelection(),
            windowForm = Ext.create('koyoku.view.master.barang.Form_barang'),
            form = windowForm.down("form");

        form.reset();
        var parentCode = "";
        if(selected.length > 0){      
            parentCode = selected[0].data.BARANG_CODE;
            form.getForm().setValues({                
                "PARENT_BARANG_CODE": parentCode,
            });
        }

        koyoku.app.ajaxRequest("barang/get_next_kode_tree", {
            BARANG_CODE: parentCode
        }, function(res) {				
            if(res.success) {
                form.getForm().setValues({                
                    "BARANG_CODE": res.data,
                });            
                windowForm.show();
            } else {
                Ext.Msg.alert('Informasi', res.msg);
            }
        });

    },

    upd:function(ths){
        var me = this,
        cmp = Ext.getCmp("page_barang"),
        grid = cmp.down("barangList");
        selected = grid.getSelectionModel().getSelection();
        windowForm = Ext.create('koyoku.view.master.barang.Form_barang');
        form = windowForm.down("form");
        form.reset();
        if(selected.length > 0){    
            windowForm.show();
            form.getForm().setValues(selected[0].data);
        }else{
            Ext.Msg.alert('Peringatan', 'Pilih Data Yang Akan Diubah');
        }
       
    },

    save: function(ths) {
        var me = this,
        cmp = Ext.getCmp("page_barang"),
        windowForm = Ext.getCmp('window_form_baang');
        form = windowForm.down("form");
        
        if (form.isValid()) {
            form.submit({
                url:  api.apiurl + '/Barang/save',
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
                            var store = Ext.getStore("listBarang");
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

    

    delete : function() {
        var me = this,
        cmp = Ext.getCmp("page_barang"),
        grid = cmp.down("barangList");
        rec = grid.getSelectionModel().getSelection();
       
        if (rec.length > 0) {
            var params = {
                BARANG_ID:rec[0].get("BARANG_ID"),
            };
            Ext.Msg.show({
                    title: 'Konfirmasi',
                    msg: 'Apakah anda yakin akan hapus Data ini ?',
                    buttons: Ext.Msg.YESNO,
                    fn: function(btn) {
                        if (btn == 'yes') {                         
                            Ext.Ajax.request({
                                url: "../api/index.php/Barang/del",                
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
                                            var store = Ext.getStore("listBarang");                          
                                            store.load();      
                                            grid.windowForm.hide();                                                                 
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
        }else{
            Ext.Msg.alert("Informasi","Pilih data terlebih dahulu");
        }
        
    }

});