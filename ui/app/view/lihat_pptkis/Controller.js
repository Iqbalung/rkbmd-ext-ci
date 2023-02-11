Ext.define('koyoku.view.lihat_pptkis.Controller', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.lihat_pptkis',
	
	getParam:function(index) {
		var cmp = Ext.getCmp("page_lihat_pptkis");
		return cmp.params[index];
	},	

	load_profile : function(ths){
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
						if (!Ext.isEmpty(res.data.PPTKIS_LOGO)) {							
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
						me.load_recruiter();
						
					}
				},
				failure: function(form, action) {
					Ext.Msg.alert('Error', action.response);
					return false;
				}							
		});
	},	

	load_recruiter:function(){
		var me = this,
			cmp = Ext.getCmp("page_lihat_pptkis"),
			gridSatker = cmp.down("satuan_kerja_detail"),
			storePegawai = Ext.getStore("listPegawai_pptkis_detail"),
			selectedTree = gridSatker.getSelectionModel().getSelection();
		if (selectedTree.length == 1) {
			storePegawai.SATKER_ID = selectedTree[0].data.SATKER_ID;
		}else{
			storePegawai.SATKER_ID = me.getParam(1)+".";
		}
		storePegawai.load();
	},

	load_satker: function(ths) {
		var me = this,
			cmp = Ext.getCmp("page_lihat_pptkis"),
			gridSatker = cmp.down("satuan_kerja_detail"),
			storeSatker = gridSatker.getStore(),
			params = {
				PPTKIS_ID: me.getParam(1),
				SATKER_TIPE: 1,
			};
		storeSatker.proxy.extraParams = params;
		storeSatker.load();
	},

	load_tree_satker:function() {
		var me = this,
			cmp = Ext.getCmp("page_lihat_pptkis"),
			gridSatker = cmp.down("tree_satker_detail");
		storeSatker = gridSatker.getStore(),
			params = {
				SATKER_ID: me.getParam(1)+'.',				
			};

		storeSatker.proxy.extraParams = params;
		storeSatker.load();		
		// set dinamis root tree satker
		storeSatker.root.data.SATKER_NAMA = cmp.down("identitas_detail").down("[name=PPTKIS_NAMA]").getValue();
		storeSatker.root.data.id = me.getParam(1)+'.';
		storeSatker.root.data.SATKER_ID = me.getParam(1)+'.';
		gridSatker.reconfigure(storeSatker);
	},	

});