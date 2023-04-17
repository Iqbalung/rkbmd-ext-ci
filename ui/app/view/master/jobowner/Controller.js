Ext.define('koyoku.view.master.jobowner.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.jobowner',
   
    add: function(ths) {
        var me = this,        
        cmp = Ext.getCmp("page_jobowner"),
        grid = cmp.down("jobownerList");
        selected = grid.getSelectionModel().getSelection();
        windowForm = cmp.form;
        form = windowForm.down("form");
        form.reset();
        windowForm.show();
    },

    upd:function(ths){
        var me = this,
        cmp = Ext.getCmp("page_jobowner"),
        grid = cmp.down("jobownerList");
        selected = grid.getSelectionModel().getSelection();
        windowForm = cmp.form;
        form = windowForm.down("form");
        form.reset();
        if(selected.length > 0){    
            windowForm.show();
            form.getForm().setValues(selected[0].data);
            
            var name = form.down("[name=UPDATE]");
            name.setValue("1");
        }else{
            Ext.Msg.alert('Peringatan', 'Pilih Data Yang Akan Diubah');
        }
       
    },
    edit: function(ths) {
        this.resetReport();
    },

    save: function(ths) {
        var me = this,
        cmp = Ext.getCmp("page_jobowner"),
        windowForm = cmp.form;
        form = windowForm.down("form");
        if (form.isValid()) {
            form.submit({
                url:  api.siteurl + '/Owner/save',
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
                            var store = Ext.getStore("listOwner");
                            store.load();
                            windowForm.hide();
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
        cmp = Ext.getCmp("page_jobowner"),
        grid = cmp.down("jobownerList");
        parent = grid.getSelectionModel().getSelection();
       
        if (parent.length > 0) {
            var params = {
                OWNER_ID:parent[0].get("OWNER_ID"),
            };
            Ext.Msg.show({
                    title: 'Konfirmasi',
                    msg: 'Apakah anda yakin akan hapus Data ini ?',
                    buttons: Ext.Msg.YESNO,
                    fn: function(btn) {
                        if (btn == 'yes') {                         
                            Ext.Ajax.request({
                                url: "../api/index.php/Owner/del",                
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
                                            var store = Ext.getStore("listOwner");                          
                                            store.load();      
                                             windowForm.hide();                                                                 
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
            Ext.Msg.alert("Informasi","Pilih data parent terlebih dahulu");
        }
        
    },

    resetReport: function() {
        
    },

    /* Form */
    kembali: function(ths) {
        
    },

    wilayah: function(ths){
        var me = this,        
        cmp = Ext.getCmp("page_jobowner"),
        windowForm = cmp.window;
        windowForm.show();

    },

    
    simpanItems:function() {
        

    },

   
   

});