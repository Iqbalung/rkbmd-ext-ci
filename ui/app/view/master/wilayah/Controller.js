Ext.define('koyoku.view.master.wilayah.Controller', {
    extend: 'Ext.app.ViewController',
    requires: [
       
    ],
    alias: 'controller.wilayah',
    add: function(){
    	var cmp = Ext.getCmp("page_wilayah"),
    		grid = cmp.down("tree_wilayah"),
    		form = cmp.windowForm.down("form"),
    		parent = grid.getSelectionModel().getSelection();
            form.reset(); 	
    	if (parent.length > 0) {
    		var params = {
    			WILAYAH_ID:parent[0].get("WILAYAH_ID"),
    		};	
            form = cmp.windowForm.down("form");
            form.down("[name=WILAYAH_ID]").setValue(parent[0].get("WILAYAH_ID"));
            cmp.windowForm.show();   
    	}else{
            form = cmp.windowForm.down("form");
            form.reset();
            cmp.windowForm.show();
    	}
    },
    upd:function(){
    	var cmp = Ext.getCmp("page_wilayah"),
    		grid = cmp.down("tree_wilayah"),
            form = cmp.windowForm.down("form"),
    		selected = grid.getSelectionModel().getSelection();
            form.reset();
    		if(selected.length > 0 && selected[0].get('WILAYAH_ID')){
    			var form = cmp.windowForm.down("form");
    			form.getForm().setValues(selected[0].data);
                var name = form.down("[name=UPDATE]");
                name.setValue("1");
    			cmp.windowForm.show();
    		}else{
    			Ext.Msg.alert("Informasi","Pilih data parent terlebih dahulu");
    		}
    },
    save:function(){
    	var me = this,
    	cmp = Ext.getCmp("page_wilayah"),
    	form = cmp.windowForm.down("form");
    	if (form.isValid()) {
            form.submit({
                url: 'http://localhost/project/rkbmd/api/index.php/Wilayah/save',
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
                            var store = Ext.getStore("store_wilayah");
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


    delete:function() {
        var cmp = Ext.getCmp("page_wilayah"),
            grid = cmp.down("tree_wilayah");
            parent = grid.getSelectionModel().getSelection();       
        if (parent.length > 0) {
            var params = {
                WILAYAH_ID:parent[0].get("WILAYAH_ID"),
                WILAYAH_PARENT:parent[0].get("WILAYAH_PARENT"),
            };
            Ext.Msg.show({
                    title: 'Konfirmasi',
                    msg: 'Apakah anda yakin akan hapus Data ini ?',
                    buttons: Ext.Msg.YESNO,
                    fn: function(btn) {
                        if (btn == 'yes') {                         
                            Ext.Ajax.request({
                                url: "../api/index.php/Wilayah/del",                
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
                                            var store = Ext.getStore("store_wilayah");                          
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
            Ext.Msg.alert("Informasi","Pilih data parent terlebih dahulu");
        }
    }


});