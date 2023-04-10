Ext.define('koyoku.view.profile_pptkis.Controller', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.profile_pptkis',
	
	getParam:function(index) {
		var cmp = Ext.getCmp("page_profile_pptkis");
		return cmp.params[index];
	},

	save_profile:function() {
		var me = this,
			cmp = Ext.getCmp("page_profile_pptkis"),
			form = cmp.down("identitas");
			

		if (form.getForm().isValid()) {
			form.submit({
				url: 'http://localhost:8888/project/rkbmd/api/index.php/pptkis/save',			
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
						}
						me.load_profile(cmp.down("identitas"));
						Ext.Msg.alert('Informasi', res.msg);
					}
				},
				failure: function(form, action) {
					Ext.Msg.alert('Error', action.response);
					return false;
				}
			});
		}else{
			Ext.Msg.alert('Informasi', 'Form belum diisi dengan lengkap');
		}
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
			cmp = Ext.getCmp("page_profile_pptkis"),
			gridSatker = cmp.down("satuan_kerja"),
			storePegawai = Ext.getStore("listPegawai_pptkis"),
			selectedTree = gridSatker.getSelectionModel().getSelection();
		if (selectedTree.length == 1) {			
			storePegawai.proxy.extraParams.SATKER_ID = selectedTree[0].data.SATKER_ID;
		}else{			
			storePegawai.proxy.extraParams.SATKER_ID = me.getParam(1)+".";
		}
		storePegawai.load();
	},

	load_satker: function(ths) {
		var me = this,
			cmp = Ext.getCmp("page_profile_pptkis"),
			gridSatker = cmp.down("satuan_kerja"),
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
			cmp = Ext.getCmp("page_profile_pptkis"),
			gridSatker = cmp.down("tree_satker");
		storeSatker = gridSatker.getStore(),
			params = {
				SATKER_ID: me.getParam(1)+'.',				
			};

		storeSatker.proxy.extraParams = params;
		storeSatker.load();		
		// set dinamis root tree satker
		storeSatker.root.data.SATKER_NAMA = cmp.down("identitas").down("[name=PPTKIS_NAMA]").getValue();
		storeSatker.root.data.id = me.getParam(1)+'.';
		storeSatker.root.data.SATKER_ID = me.getParam(1)+'.';
		gridSatker.reconfigure(storeSatker);
	},	


	add_satker: function(ths) {
		var me = this,
			cmp = Ext.getCmp("page_profile_pptkis"),
			grid = cmp.down("satuan_kerja");
		selected = grid.getSelectionModel().getSelection();
		windowForm = Ext.create("koyoku.view.profile_pptkis.Form_satker");
		form = windowForm.down("form");
		form.reset();
		form.down('[name=PPTKIS_ID]').setValue(me.getParam(1));
		windowForm.show();
	},

	upd_satker: function(ths) {
		var me = this,
			cmp = Ext.getCmp("page_profile_pptkis"),
			grid = cmp.down("satuan_kerja");
		selected = grid.getSelectionModel().getSelection();
		windowForm = Ext.create("koyoku.view.profile_pptkis.Form_satker");
		form = windowForm.down("form");
		if (selected.length > 0) {
			windowForm.show();
			form.getForm().setValues(selected[0].data);
		} else {
			Ext.Msg.alert('Peringatan', 'Pilih Data Yang Akan Diubah');
		}

	},

	save_satker: function(ths) {
		var me = this,
			cmp = Ext.getCmp("page_profile_pptkis"),
			windowForm = Ext.getCmp('window_form_sarker');
		form = windowForm.down("form");
		if (form.isValid()) {
			form.submit({
				url: 'http://localhost:8888/project/rkbmd/api/index.php/pptkis/save_satker',
				params:{
					SATKER_TIPE:1,
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
						if (res.success) {
							var store = Ext.getStore("listSatker_pptkis");
							store.load();
							me.load_tree_satker();
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

	delete_satker: function() {
		var me = this,
			cmp = Ext.getCmp("page_profile_pptkis"),
			grid = cmp.down("satuan_kerja"),
			rec = grid.getSelectionModel().getSelection();
		if (rec.length > 0) {
			var params = {
				SATKER_ID: rec[0].get("SATKER_ID"),
			};
			Ext.Msg.show({
				title: 'Konfirmasi',
				msg: 'Apakah anda yakin akan hapus Data ini ?',
				buttons: Ext.Msg.YESNO,
				buttonText:{
					yes:"Ya",
				    no:"Tidak"
				},
				fn: function(btn) {
					if (btn == 'yes') {
						me.ajaxRequest("pptkis/del_satker",params,function(res) {
							Ext.Msg.alert('Informasi', res.msg);
						});
					}
				}
			});
		} else {
			Ext.Msg.alert("Informasi", "Pilih data terlebih dahulu");
		}

	},


	add_pegawai: function(ths) {
		var me = this,
			cmp = Ext.getCmp("page_profile_pptkis"),
			grid = cmp.down("tree_satker"),
			selected = grid.getSelectionModel().getSelection();
		if (selected.length == 1) {
			var windowForm = Ext.create("koyoku.view.profile_pptkis.Form_pegawai");
			var form = windowForm.down("form");
			var store = form.down("[name=USERGROUP_ID]").getStore();
			store.load();
			form.reset();						
			form.down('[name=SATKER_ID]').setValue(selected[0].get("SATKER_ID"));			
			var data_type = ['2','3'];
			store.filterBy(function(record) {
                var field = record.get('ID'),
                    cek = data_type.indexOf(field);                	
                return cek != -1;
            });
			windowForm.show();
		}else{
			Ext.Msg.alert('Informasi', 'Pilih data satuan kerja terlebih dahulu');
		}
	},

	upd_pegawai: function(ths) {
		var me = this,
			cmp = Ext.getCmp("page_profile_pptkis"),
			grid = cmp.down("grid_pegawai");
		selected = grid.getSelectionModel().getSelection();
		windowForm = Ext.create("koyoku.view.profile_pptkis.Form_pegawai");
		form = windowForm.down("form");
		if (selected.length > 0) {
			windowForm.show();
			var store = form.down("[name=USERGROUP_ID]").getStore();
			store.load();		
			var data_type = ['2','3'];
			store.filterBy(function(record) {
                var field = record.get('ID'),
                    cek = data_type.indexOf(field);                	
                return cek != -1;
            });
			setTimeout(function(){
                store.load(function(){
                	form.getForm().setValues(selected[0].data);	
              	});
            },500);
		} else {
			Ext.Msg.alert('Peringatan', 'Pilih Data Yang Akan Diubah');
		}

	},

	save_pegawai: function(ths) {
		var me = this;
		var cmp = Ext.getCmp("page_profile_pptkis"),
			windowForm = Ext.getCmp('window_form_sarker');
		form = windowForm.down("form");
		if (form.isValid()) {
			form.submit({
				url: 'http://localhost:8888/project/rkbmd/api/index.php/pptkis/save_pegawai',		
				params:{
					PPTKIS_ID:me.getParam(1),
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
						if (res.success) {
							//var store = Ext.getStore("listPegawai_pptkis");															
							me.load_recruiter();
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

	delete_pegawai: function() {
		var me = this;
		var cmp = Ext.getCmp("page_profile_pptkis"),
			grid = cmp.down("grid_pegawai"),
			rec = grid.getSelectionModel().getSelection();
		if (rec.length > 0) {
			var params = {
				ID: rec[0].get("ID"),
				MAP_ID:rec[0].get("MAP_ID")
			};
			Ext.Msg.show({
				title: 'Konfirmasi',
				msg: 'Apakah anda yakin akan hapus Data ini ?',
				buttons: Ext.Msg.YESNO,
				buttonText:{
					yes:"Ya",
				    no:"Tidak"
				},
				fn: function(btn) {
					if (btn == 'yes') {
						me.ajaxRequest("pptkis/del_pegawai",params,function(res) {
							Ext.Msg.alert('Informasi', res.msg);
						});
					}
				}
			});
		} else {
			Ext.Msg.alert("Informasi", "Pilih data terlebih dahulu");
		}
	},

	add_fasilitas: function(ths) {
		var me = this,
			cmp = Ext.getCmp("page_profile_pptkis"),						
			windowForm = Ext.create("koyoku.view.profile_pptkis.Form_fasilitas"),
			form = windowForm.down("form");
		windowForm.setTitle("Tambah Fasilitas");
		form.reset();									
		windowForm.show();		
	},

	upd_fasilitas: function(ths) {
		var me = this,
			cmp = Ext.getCmp("page_profile_pptkis"),
			grid = cmp.down("grid_fasilitas");
		selected = grid.getSelectionModel().getSelection();
		form = windowForm.down("form");
		if (selected.length > 0) {
			var windowForm = Ext.create("koyoku.view.profile_pptkis.Form_fasilitas");
			windowForm.setTitle("Ubah Fasilitas");
			windowForm.show();
			form.getForm().setValues(selected[0].data);
		} else {
			Ext.Msg.alert('Peringatan', 'Pilih Data Yang Akan Diubah');
		}

	},

	save_fasilitas: function(ths) {
		var me = this;
		var cmp = Ext.getCmp("page_profile_pptkis"),
			windowForm = Ext.getCmp('window_form_fasilitas');
		form = windowForm.down("form");
		if (form.isValid()) {
			form.submit({
				url: 'http://localhost:8888/project/rkbmd/api/index.php/pptkis/save_fasilitas',		
				params:{
					PPTKIS_ID:me.getParam(1),
				},	
				success: function(form, action) {
					var success_opt = true;
					try {
						res = Ext.JSON.decode(action.response.responseText);
					} catch (err) {
						var success_opt = false;
					}
					if (success_opt) {
						if (res.success) {
							var store = Ext.getStore("fasilitasPptkis");															
							store.load();
							windowForm.destroy();
						}
						Ext.Msg.alert('Informasi', res.msg);
					}else{
						console.log("test");
					}
				},
				failure: function(form, action) {
					try {
						res = Ext.JSON.decode(action.response.responseText);
					} catch (err) {
						var success_opt = false;				
					}
					Ext.Msg.alert('Error', res.msg);
					return false;
				}
			});
		} else {
			Ext.Msg.alert('Informasi', 'Form belum diisi dengan lengkap');
		}
	},

	delete_fasilitas: function() {
		var me = this;
		var cmp = Ext.getCmp("page_profile_pptkis"),
			grid = cmp.down("grid_fasilitas"),
			rec = grid.getSelectionModel().getSelection();
		if (rec.length > 0) {
			var params = {
				FASILITAS_ID: rec[0].get("FASILITAS_ID")				
			};
			Ext.Msg.show({
				title: 'Konfirmasi',
				msg: 'Apakah anda yakin akan hapus Data ini ?',
				buttons: Ext.Msg.YESNO,
				buttonText:{
					yes:"Ya",
				    no:"Tidak"
				},
				fn: function(btn) {
					if (btn == 'yes') {
						me.ajaxRequest("pptkis/del_fasilitas",params,function(res) {
							var store = Ext.getStore("fasilitasPptkis");															
							store.load();
							Ext.Msg.alert('Informasi', res.msg);
						});
					}
				}
			});
		} else {
			Ext.Msg.alert("Informasi", "Pilih data terlebih dahulu");
		}
	},

	add_rekan_kerja: function(ths) {
		var me = this,
			cmp = Ext.getCmp("page_profile_pptkis"),						
			windowForm = Ext.create("koyoku.view.profile_pptkis.Form_rekan_kerja"),
			form = windowForm.down("form");
		form.reset();									
		windowForm.show();		
	},

	upd_rekan_kerja: function(ths) {
		var me = this,
			cmp = Ext.getCmp("page_profile_pptkis"),
			tipe = ["","PARTNER_BLKLN","PARTNER_LK","PARTNER_LSP","PARTNER_SARKES","PARTNER_ASURANSI"],
			grid = cmp.down("grid_rekan_kerja"),
			selected = grid.getSelectionModel().getSelection(),
			windowForm = Ext.create("koyoku.view.profile_pptkis.Form_rekan_kerja"),
			form = windowForm.down("form"),
			store = form.down("[name=PARTNER_ID]").getStore(),
			table_name = "";		
		if (selected.length > 0) {
			windowForm.show();
			form.getForm().setValues(selected[0].data);			
			if (parseInt(selected[0].data.TIPE) > 0 && parseInt(selected[0].data.TIPE) < 6) {
				table_name = tipe[selected[0].data.TIPE];
			}
			store.proxy.extraParams = {
				TABLE_NAME:table_name
			};
			store.load();
		} else {
			Ext.Msg.alert('Peringatan', 'Pilih Data Yang Akan Diubah');
		}

	},

	save_rekan_kerja: function(ths) {
		var me = this;
		var cmp = Ext.getCmp("page_profile_pptkis"),
			windowForm = Ext.getCmp('window_form_rekan_kerja');
		form = windowForm.down("form");
		if (form.isValid()) {
			form.submit({
				url: 'http://localhost:8888/project/rkbmd/api/index.php/pptkis/save_partner',		
				params:{
					PPTKIS_ID:me.getParam(1),
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
						if (res.success) {
							var store = Ext.getStore("rekan_kerjaPptkis");															
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

	delete_rekan_kerja: function() {
		var me = this;
		var cmp = Ext.getCmp("page_profile_pptkis"),
			grid = cmp.down("grid_rekan_kerja"),
			rec = grid.getSelectionModel().getSelection();
		if (rec.length > 0) {
			var params = {
				PPTKIS_PARTNER_ID: rec[0].get("PPTKIS_PARTNER_ID")				
			};
			Ext.Msg.show({
				title: 'Konfirmasi',
				msg: 'Apakah anda yakin akan hapus Data ini ?',
				buttons: Ext.Msg.YESNO,
				buttonText:{
					yes:"Ya",
				    no:"Tidak"
				},
				fn: function(btn) {
					if (btn == 'yes') {
						me.ajaxRequest("pptkis/del_partner",params,function(res) {
							var store = Ext.getStore("rekan_kerjaPptkis");															
							store.load();
							Ext.Msg.alert('Informasi', res.msg);
						});
					}
				}
			});
		} else {
			Ext.Msg.alert("Informasi", "Pilih data terlebih dahulu");
		}
	},

	ajaxRequest:function(url,params,callback) {
		Ext.Ajax.request({
			url: "../api/index.php/"+url,
			method:'POST',
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
					if (callback) {
						callback(res)
					}					
				}
			},
			failure: function(form) {
				Ext.Msg.alert('Error', form.responseText);
				return false;
			}
		});
	}




});