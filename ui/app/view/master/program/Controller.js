Ext.define('koyoku.view.master.program.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.program',
   
    add: function(ths) {
        var me = this,        
        cmp = Ext.getCmp("page_program"),
        tree = cmp.down('tree_bidang').getSelectionModel().getSelection();

        if (tree.length < 1) {
            Ext.Msg.alert('Peringatan', 'Pilih OPD Terlebih Dahulu');
            return ;
        }

        grid = cmp.down("programList");
        selected = grid.getSelectionModel().getSelection();
        windowForm = Ext.create('koyoku.view.master.program.Form');
        form = windowForm.down("form");
        form.reset();
        form.getForm().setValues(tree[0].data);
        windowForm.show();
    },

    upd:function(ths){
        var me = this,
        cmp = Ext.getCmp("page_program"),
        grid = cmp.down("programList");
        selected = grid.getSelectionModel().getSelection();
        windowForm = Ext.create('koyoku.view.master.program.Form');
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
        cmp = Ext.getCmp("page_program"),
        windowForm = Ext.getCmp('window_form_program');
        form = windowForm.down("form");
        
        if (form.isValid()) {
            form.submit({
                url:  api.apiurl + '/Program/save',
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
                            var store = Ext.getStore("listProgram");
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
        cmp = Ext.getCmp("page_program"),
        grid = cmp.down("programList");
        rec = grid.getSelectionModel().getSelection();
       
        if (rec.length > 0) {
            var params = {
                PROGRAM_ID:rec[0].get("PROGRAM_ID"),
            };
            Ext.Msg.show({
                    title: 'Konfirmasi',
                    msg: 'Apakah anda yakin akan hapus Data ini ?',
                    buttons: Ext.Msg.YESNO,
                    fn: function(btn) {
                        if (btn == 'yes') {                         
                            Ext.Ajax.request({
                                url: "../api/index.php/Program/del",                
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
                                            var store = Ext.getStore("listProgram");                          
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