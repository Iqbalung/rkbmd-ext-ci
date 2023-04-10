Ext.define('koyoku.view.master.partner.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.partner',
   
    add: function(ths) {        
        cmp = Ext.getCmp("page_partner"),
        form = cmp.form;
        form.show();
    },


    edit: function(ths) {
        this.resetReport();
    },

    save: function(ths) {        
        var me = this,
        cmp = Ext.getCmp("page_partner"),
        windowForm = cmp.form;
        form = windowForm.down("form");
        if (form.isValid()) {
            form.submit({
                url: 'http://karya-inovasi.com/beta-rkbmdapi/index.php/Bidang/save',
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
                            grid.windowForm.hide();
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
        
    },

    resetReport: function() {
        
    },

    /* Form */
    kembali: function(ths) {
        
    },

    
    simpanItems:function() {
        

    },

   
   

});