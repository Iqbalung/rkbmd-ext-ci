Ext.define('koyoku.view.detail_pptkis.Controller', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.detail_pptkis',
	
	beforeload_kantor : function( store, operation, eOpts ){
		var me = this;
		store.proxy.extraParams.PPTKIS_ID = this.getView().params[1];		
		me.load()
	},

	getParam:function(index) {
		var cmp = Ext.getCmp("page_detail_pptkis");
		return cmp.params[index];
	},	

	load_kantor:function(){
		var me = this,
			cmp = Ext.getCmp("page_detail_pptkis"),
			grid = cmp.down("kantor_pptkis"),
			store = grid.getStore();
		store.proxy.extraParams.PPTKIS_ID = me.getParam(1);
		store.load();
	},

	load_fasilitas:function(){
		var me = this;
			store = Ext.getStore("fasilitasPptkis_detail");
			store.proxy.extraParams = {
				PPTKIS_ID:me.getParam[1]
			};
		store.load();
	},

	load_profil:function(ths){
		var me = this;
		ths.load({
			url : '../api/index.php/pptkis/get_by_id',
			params : {
				PPTKIS_ID : me.getParam(1)
			},
			success: function(form, action) {
					var success_opt = true;
					try {
						res = Ext.JSON.decode(action.response.responseText);
					} catch (err) {
						var success_opt = false;
						Ext.Msg.alert('Error', form.responseText);
					}
					if (success_opt) {		
						var dataModel = me.getViewModel(),
							data = res.data;						
						for (r in data) {
				            dataModel.set('detail.'+r,data[r]);
				        }
				        me.load_kantor();
				        me.load_fasilitas();	
						/*if (!Ext.isEmpty(res.data.PPTKIS_LOGO)) {							
							ths.down("#preview_pptkis_logo").setSrc("../api/uploads/pptkis/"+res.data.PPTKIS_LOGO);
						}
						if (!Ext.isEmpty(res.data.PPTKIS_COVER)) {							
							ths.down("#preview_pptkis_cover").setSrc("../api/uploads/pptkis/"+res.data.PPTKIS_COVER);
						}
						if (!Ext.isEmpty(res.data.PPTKIS_STRUKTUR_ORGANISASI)) {							
							ths.down("#preview_pptkis_struktur_organisasi").setSrc("../api/uploads/pptkis/"+res.data.PPTKIS_STRUKTUR_ORGANISASI);
						}
						me.load_satker();
						me.load_tree_satker();
						me.load_recruiter();*/
						
					}
				},
				failure: function(form, action) {
					Ext.Msg.alert('Error', action.response);
					return false;
				}							
		});
	}

});