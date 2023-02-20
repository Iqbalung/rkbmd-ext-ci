Ext.define('koyoku.view.tki.Controller', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.tki',

	show_page(to) {
		var me = this,
			page = Ext.getCmp("page_renbut"),
			tree_bidang = page.down("tree_bidang"),
			layout = Ext.getCmp("panel_pemeliharaan").getLayout();

		switch (to) {
			case 'form_pemeliharaan':
				layout.setActiveItem(1);
				tree_bidang.hide();
				break;
			case 'form_pemanfaatan':
				layout.setActiveItem(2);
				tree_bidang.hide();
				break;
			case 'form_penghapusan':
				layout.setActiveItem(3);
				tree_bidang.hide();
				break;		
			case 'form_pengadaan':
				layout.setActiveItem(4);
				tree_bidang.hide();
				break;		
			default:
				layout.setActiveItem(0);
				tree_bidang.show();
				break;
		}		
	},

	kembali: function() {
		this.show_page('back');
	}, 

	select_filter_bidang : function( ths, record, index, eOpts ){
		this.load_pemeliharaan();		
		this.load_pemanfaatan();
		this.load_penghapusan();
		this.load_pengadaan();
	},
	
	clear_form_pemeliharaan: function() {
		var me = this,
				cmp = Ext.getCmp("page_renbut"),
				form = cmp.down("form_pemeliharaan").down("form"),
				grid = cmp.down("#grid_form_pemeliharaan"),
				store = grid.getStore();
			
			form.reset();
			store.clearData();
			store.reload();

	},

	tambah_pemeliharaan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),
			page = Ext.getCmp("page_renbut"),
			tree_bidang = page.down("tree_bidang"),
			form = cmp.down("form_pemeliharaan").down("form"),
			data_bidang = tree_bidang.getSelectionModel().getSelection();
		
		if(data_bidang.length > 0)
		{
			var row_bidang = data_bidang[0].getData();
			form.down("[name=BIDANG_ID]").setValue(row_bidang.BIDANG_ID);
			form.down("[name=BIDANG_NAMA]").setValue(row_bidang.BIDANG_NAMA);	
			me.show_page('form_pemeliharaan');
		} else {
			Ext.Msg.alert('Perhatian', "Pilih salah satu bidang terlebih dahulu");
		}
	},

	ubah_pemeliharaan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),
			page = Ext.getCmp("page_renbut"),			
			grid = cmp.down("grid_pemeliharaan"),
			grid_form = cmp.down("#grid_form_pemeliharaan"),
			form = cmp.down("form_pemeliharaan").down("form"),
			data_selected = grid.getSelectionModel().getSelection();
		
		if(data_selected.length > 0)
		{
			me.clear_form_pemeliharaan();
			var row = data_selected[0].getData();			
			me.show_page('form_pemeliharaan');			
			var params = {
				ROWID: btoa(row.PEMELIHARAAN_ID)
			}
			koyoku.app.ajaxRequest("pemeliharaan/get_detail", params, function(res) {				
				if(res.success) {
					if(res.items) {						
						var data_form = res.items;						
						form.getForm().setValues(res.items);
						if (data_form.DATA_BARANG) {
							data_form.DATA_BARANG.forEach(function(row_barang, idx) {
								grid_form.getStore().insert(idx, row_barang);
							})
						}
					}					
				}
			});
		} else {
			Ext.Msg.alert('Perhatian', "Pilih salah satu terlebih dahulu");
		}
	},

	ubah_barang_pemeliharaan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),
			grid = cmp.down("#grid_form_pemeliharaan"),
			store = grid.getStore(),
			row_editing = grid.getPlugin('rowediting'),
			row_selection = grid.getSelectionModel().getSelection();
		if (row_selection.length > 0) {			
			var idx = store.indexOf(row_selection[0]);					
			row_editing.cancelEdit();			
			row_editing.startEdit(idx, 0);
		} else {
			Ext.Msg.alert('Perhatian', "Pilih salah satu data terlebih dahulu");
		}
	},

	hapus_barang_pemeliharaan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),
			grid = cmp.down("#grid_form_pemeliharaan"),
			row_selection = grid.getSelectionModel().getSelection();
		if (row_selection.length > 0) {			
			Ext.Msg.confirm('Konfirmasi', 'Apakah anda yakin akan menghapus data ?', function(e) {
                if (e == 'yes') {
					grid.getStore().remove(row_selection);
					grid.getView().refresh();
				}
			});
		} else {
			Ext.Msg.alert('Perhatian', "Pilih salah satu data terlebih dahulu");
		}
	},

	tambah_barang_pemeliharaan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),
			grid = cmp.down("#grid_form_pemeliharaan"),
			rowEditing = grid.getPlugin('rowediting');
		
			rowEditing.cancelEdit(); // rowEditing is now defined... :)
			let idx = grid.getStore().getData().length;
			grid.getStore().insert(idx, {});
			rowEditing.startEdit(idx, 0);
	},

	simpan_draft_pemeliharaan: function() {
		var me = this;	
		me.simpan_pemeliharaan(0);
	},

	simpan_ajukan_pemeliharaan: function() {
		var me = this;	
		me.simpan_pemeliharaan(1);
	},

	simpan_pemeliharaan: function(status) {
		try {
			var me = this,
				cmp = Ext.getCmp("page_renbut"),
				form = cmp.down("form_pemeliharaan").down("form"),
				grid = cmp.down("#grid_form_pemeliharaan"),
				store = grid.getStore();

			let params = form.getValues(),
				data_barang = [];

			store.getData().items.forEach(function (row) {
				data_barang.push(row.data);
			})

			params.STATUS = status;
			params.DATA_BARANG = JSON.stringify(data_barang);
			koyoku.app.ajaxRequest("pemeliharaan/save", params, function(res) {				
				if(res.success) {
					Ext.Msg.alert('Informasi', res.msg);
					me.clear_form_pemeliharaan();
					me.show_page('back');
					me.load_pemeliharaan();
				}
			});
		} catch (error) {
			console.error(error);
		}
	},

	load_pemeliharaan_keyword : function(field, e){
		me=this;
        if (e.getKey() == e.ENTER) {
            me.load_pemeliharaan();
        }
    },

	load_pemeliharaan : function(){
		var store = this.getView().down('grid_pemeliharaan').getStore();
		var fcari = this.getView().down('grid_pemeliharaan').down('#text_cari');
		var tree_bidang = this.getView().down('tree_bidang');
		var rec = tree_bidang.getSelectionModel().getSelection();
		if(rec.length>0){
			store.proxy.extraParams.BIDANG_ID = rec[0].data.BIDANG_ID;			
		}
		store.proxy.extraParams.PENCARIAN = fcari.getValue();
		store.load();
	},

	tambah_pemanfaatan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),			
			tree_bidang = cmp.down("tree_bidang"),
			form = cmp.down("form_pemanfaatan").down("form"),
			data_bidang = tree_bidang.getSelectionModel().getSelection();
		
		if(data_bidang.length > 0)
		{
			var row_bidang = data_bidang[0].getData();
			form.down("[name=BIDANG_ID]").setValue(row_bidang.BIDANG_ID);
			form.down("[name=BIDANG_NAMA]").setValue(row_bidang.BIDANG_NAMA);	
			me.show_page('form_pemanfaatan');
		} else {
			Ext.Msg.alert('Perhatian', "Pilih salah satu bidang terlebih dahulu");
		}
	},

	ubah_pemanfaatan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),			
			grid = cmp.down("grid_pemanfaatan"),
			grid_form = cmp.down("#grid_form_pemanfaatan"),
			form = cmp.down("form_pemanfaatan").down("form"),
			data_selected = grid.getSelectionModel().getSelection();
		
		if(data_selected.length > 0)
		{
			me.clear_form_pemanfaatan();
			var row = data_selected[0].getData();			
			me.show_page('form_pemanfaatan');			
			var params = {
				ROWID: btoa(row.PEMANFAATAN_ID)
			}
			koyoku.app.ajaxRequest("pemanfaatan/get_detail", params, function(res) {				
				if(res.success) {
					if(res.items) {						
						var data_form = res.items;						
						form.getForm().setValues(res.items);
						if (data_form.DATA_BARANG) {
							data_form.DATA_BARANG.forEach(function(row_barang, idx) {
								grid_form.getStore().insert(idx, row_barang);
							})
						}
					}					
				}
			});
		} else {
			Ext.Msg.alert('Perhatian', "Pilih salah satu terlebih dahulu");
		}
	},

	ubah_barang_pemanfaatan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),
			grid = cmp.down("#grid_form_pemanfaatan"),
			store = grid.getStore(),
			row_editing = grid.getPlugin('rowediting'),
			row_selection = grid.getSelectionModel().getSelection();
		if (row_selection.length > 0) {			
			var idx = store.indexOf(row_selection[0]);					
			row_editing.cancelEdit();			
			row_editing.startEdit(idx, 0);
		} else {
			Ext.Msg.alert('Perhatian', "Pilih salah satu data terlebih dahulu");
		}
	},

	hapus_barang_pemanfaatan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),
			grid = cmp.down("#grid_form_pemanfaatan"),
			row_selection = grid.getSelectionModel().getSelection();
		if (row_selection.length > 0) {			
			Ext.Msg.confirm('Konfirmasi', 'Apakah anda yakin akan menghapus data ?', function(e) {
                if (e == 'yes') {
					grid.getStore().remove(row_selection);
					grid.getView().refresh();
				}
			});
		} else {
			Ext.Msg.alert('Perhatian', "Pilih salah satu data terlebih dahulu");
		}
	},

	tambah_barang_pemanfaatan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),
			grid = cmp.down("#grid_form_pemanfaatan"),
			rowEditing = grid.getPlugin('rowediting');
		
			rowEditing.cancelEdit(); // rowEditing is now defined... :)
			let idx = grid.getStore().getData().length;
			grid.getStore().insert(idx, {});
			rowEditing.startEdit(idx, 0);
	},
	
	simpan_draft_pemanfaatan: function() {
		var me = this;	
		me.simpan_pemanfaatan(0);
	},

	simpan_ajukan_pemanfaatan: function() {
		var me = this;	
		me.simpan_pemanfaatan(1);
	},

	simpan_pemanfaatan: function(status) {
		try {
			var me = this,
				cmp = Ext.getCmp("page_renbut"),
				form = cmp.down("form_pemanfaatan").down("form"),
				grid = cmp.down("#grid_form_pemanfaatan"),
				store = grid.getStore();

			let params = form.getValues(),
				data_barang = [];

			store.getData().items.forEach(function (row) {
				data_barang.push(row.data);
			})

			params.STATUS = status;
			params.DATA_BARANG = JSON.stringify(data_barang);
			koyoku.app.ajaxRequest("pemanfaatan/save", params, function(res) {				
				if(res.success) {
					Ext.Msg.alert('Informasi', res.msg);
					me.clear_form_pemanfaatan();
					me.show_page('back');
					me.load_pemanfaatan();
				}
			});
		} catch (error) {
			console.error(error);
		}
	},

	clear_form_pemanfaatan: function() {
		var me = this,
				cmp = Ext.getCmp("page_renbut"),
				form = cmp.down("form_pemanfaatan").down("form"),
				grid = cmp.down("#grid_form_pemanfaatan"),
				store = grid.getStore();
			
			form.reset();
			store.clearData();
			store.reload();

	},

	load_pemanfaatan_keyword : function(field, e){
		me=this;
        if (e.getKey() == e.ENTER) {
            me.load_pemanfaatan();
        }
    },

	load_pemanfaatan : function(){
		var store = this.getView().down('grid_pemanfaatan').getStore();
		var fcari = this.getView().down('grid_pemanfaatan').down('#text_cari');
		var tree_bidang = this.getView().down('tree_bidang');
		var rec = tree_bidang.getSelectionModel().getSelection();
		if(rec.length>0){
			store.proxy.extraParams.BIDANG_ID = rec[0].data.BIDANG_ID;			
		}
		store.proxy.extraParams.PENCARIAN = fcari.getValue();
		store.load();
	},

	clear_form_penghapusan: function() {
		var me = this,
				cmp = Ext.getCmp("page_renbut"),
				form = cmp.down("form_penghapusan").down("form"),
				grid = cmp.down("#grid_form_penghapusan"),
				store = grid.getStore();
			
			form.reset();
			store.clearData();
			store.reload();

	},

	tambah_penghapusan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),
			page = Ext.getCmp("page_renbut"),
			tree_bidang = page.down("tree_bidang"),
			form = cmp.down("form_penghapusan").down("form"),
			data_bidang = tree_bidang.getSelectionModel().getSelection();
		
		if(data_bidang.length > 0)
		{
			var row_bidang = data_bidang[0].getData();
			form.down("[name=BIDANG_ID]").setValue(row_bidang.BIDANG_ID);
			form.down("[name=BIDANG_NAMA]").setValue(row_bidang.BIDANG_NAMA);	
			me.show_page('form_penghapusan');
		} else {
			Ext.Msg.alert('Perhatian', "Pilih salah satu bidang terlebih dahulu");
		}
	},

	ubah_penghapusan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),
			page = Ext.getCmp("page_renbut"),			
			grid = cmp.down("grid_penghapusan"),
			grid_form = cmp.down("#grid_form_penghapusan"),
			form = cmp.down("form_penghapusan").down("form"),
			data_selected = grid.getSelectionModel().getSelection();
		
		if(data_selected.length > 0)
		{
			me.clear_form_penghapusan();
			var row = data_selected[0].getData();			
			me.show_page('form_penghapusan');			
			var params = {
				ROWID: btoa(row.PENGHAPUSAN_ID)
			}
			koyoku.app.ajaxRequest("penghapusan/get_detail", params, function(res) {				
				if(res.success) {
					if(res.items) {						
						var data_form = res.items;						
						form.getForm().setValues(res.items);
						if (data_form.DATA_BARANG) {
							data_form.DATA_BARANG.forEach(function(row_barang, idx) {
								grid_form.getStore().insert(idx, row_barang);
							})
						}
					}					
				}
			});
		} else {
			Ext.Msg.alert('Perhatian', "Pilih salah satu terlebih dahulu");
		}
	},

	ubah_barang_penghapusan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),
			grid = cmp.down("#grid_form_penghapusan"),
			store = grid.getStore(),
			row_editing = grid.getPlugin('rowediting'),
			row_selection = grid.getSelectionModel().getSelection();
		if (row_selection.length > 0) {			
			var idx = store.indexOf(row_selection[0]);					
			row_editing.cancelEdit();			
			row_editing.startEdit(idx, 0);
		} else {
			Ext.Msg.alert('Perhatian', "Pilih salah satu data terlebih dahulu");
		}
	},

	hapus_barang_penghapusan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),
			grid = cmp.down("#grid_form_penghapusan"),
			row_selection = grid.getSelectionModel().getSelection();
		if (row_selection.length > 0) {			
			Ext.Msg.confirm('Konfirmasi', 'Apakah anda yakin akan menghapus data ?', function(e) {
                if (e == 'yes') {
					grid.getStore().remove(row_selection);
					grid.getView().refresh();
				}
			});
		} else {
			Ext.Msg.alert('Perhatian', "Pilih salah satu data terlebih dahulu");
		}
	},

	tambah_barang_penghapusan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),
			grid = cmp.down("#grid_form_penghapusan"),
			rowEditing = grid.getPlugin('rowediting');
		
			rowEditing.cancelEdit(); // rowEditing is now defined... :)
			let idx = grid.getStore().getData().length;
			grid.getStore().insert(idx, {});
			rowEditing.startEdit(idx, 0);
	},

	simpan_draft_penghapusan: function() {
		var me = this;	
		me.simpan_penghapusan(0);
	},

	simpan_ajukan_penghapusan: function() {
		var me = this;	
		me.simpan_penghapusan(1);
	},

	simpan_penghapusan: function(status) {
		try {
			var me = this,
				cmp = Ext.getCmp("page_renbut"),
				form = cmp.down("form_penghapusan").down("form"),
				grid = cmp.down("#grid_form_penghapusan"),
				store = grid.getStore();

			let params = form.getValues(),
				data_barang = [];

			store.getData().items.forEach(function (row) {
				data_barang.push(row.data);
			})

			params.STATUS = status;
			params.DATA_BARANG = JSON.stringify(data_barang);
			koyoku.app.ajaxRequest("penghapusan/save", params, function(res) {				
				if(res.success) {
					Ext.Msg.alert('Informasi', res.msg);
					me.clear_form_penghapusan();
					me.show_page('back');
					me.load_penghapusan();
				}
			});
		} catch (error) {
			console.error(error);
		}
	},

	load_penghapusan_keyword : function(field, e){
		me=this;
        if (e.getKey() == e.ENTER) {
            me.load_penghapusan();
        }
    },

	load_penghapusan : function(){
		var store = this.getView().down('grid_penghapusan').getStore();
		var fcari = this.getView().down('grid_penghapusan').down('#text_cari');
		var tree_bidang = this.getView().down('tree_bidang');
		var rec = tree_bidang.getSelectionModel().getSelection();
		if(rec.length>0){
			store.proxy.extraParams.BIDANG_ID = rec[0].data.BIDANG_ID;			
		}
		store.proxy.extraParams.PENCARIAN = fcari.getValue();
		store.load();
	},

	tambah_pengadaan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),			
			tree_bidang = cmp.down("tree_bidang"),
			form = cmp.down("form_pengadaan").down("form"),
			data_bidang = tree_bidang.getSelectionModel().getSelection();
		
		if(data_bidang.length > 0)
		{
			var row_bidang = data_bidang[0].getData();
			form.down("[name=BIDANG_ID]").setValue(row_bidang.BIDANG_ID);
			form.down("[name=BIDANG_NAMA]").setValue(row_bidang.BIDANG_NAMA);	
			me.show_page('form_pengadaan');
		} else {
			Ext.Msg.alert('Perhatian', "Pilih salah satu bidang terlebih dahulu");
		}
	},

	ubah_pengadaan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),			
			grid = cmp.down("grid_pengadaan"),
			grid_form = cmp.down("#grid_form_pengadaan"),
			form = cmp.down("form_pengadaan").down("form"),
			data_selected = grid.getSelectionModel().getSelection();
		
		if(data_selected.length > 0)
		{
			me.clear_form_pengadaan();
			var row = data_selected[0].getData();			
			me.show_page('form_pengadaan');			
			var params = {
				ROWID: btoa(row.PENGADAAN_ID)
			}
			koyoku.app.ajaxRequest("pengadaan/get_detail", params, function(res) {				
				if(res.success) {
					if(res.items) {						
						var data_form = res.items;						
						form.getForm().setValues(res.items);
						if (data_form.DATA_BARANG) {
							data_form.DATA_BARANG.forEach(function(row_barang, idx) {
								grid_form.getStore().insert(idx, row_barang);
							})
						}
					}					
				}
			});
		} else {
			Ext.Msg.alert('Perhatian', "Pilih salah satu terlebih dahulu");
		}
	},

	ubah_barang_pengadaan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),
			grid = cmp.down("#grid_form_pengadaan"),
			store = grid.getStore(),
			row_editing = grid.getPlugin('rowediting'),
			row_selection = grid.getSelectionModel().getSelection();
		if (row_selection.length > 0) {			
			var idx = store.indexOf(row_selection[0]);					
			row_editing.cancelEdit();			
			row_editing.startEdit(idx, 0);
		} else {
			Ext.Msg.alert('Perhatian', "Pilih salah satu data terlebih dahulu");
		}
	},

	hapus_barang_pengadaan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),
			grid = cmp.down("#grid_form_pengadaan"),
			row_selection = grid.getSelectionModel().getSelection();
		if (row_selection.length > 0) {			
			Ext.Msg.confirm('Konfirmasi', 'Apakah anda yakin akan menghapus data ?', function(e) {
                if (e == 'yes') {
					grid.getStore().remove(row_selection);
					grid.getView().refresh();
				}
			});
		} else {
			Ext.Msg.alert('Perhatian', "Pilih salah satu data terlebih dahulu");
		}
	},

	tambah_barang_pengadaan: function() {
		var me = this,
			cmp = Ext.getCmp("page_renbut"),
			grid = cmp.down("#grid_form_pengadaan"),
			rowEditing = grid.getPlugin('rowediting');
		
			rowEditing.cancelEdit(); // rowEditing is now defined... :)
			let idx = grid.getStore().getData().length;
			grid.getStore().insert(idx, {});
			rowEditing.startEdit(idx, 0);
	},
	
	simpan_draft_pengadaan: function() {
		var me = this;	
		me.simpan_pengadaan(0);
	},

	simpan_ajukan_pengadaan: function() {
		var me = this;	
		me.simpan_pengadaan(1);
	},

	simpan_pengadaan: function(status) {
		try {
			var me = this,
				cmp = Ext.getCmp("page_renbut"),
				form = cmp.down("form_pengadaan").down("form"),
				grid = cmp.down("#grid_form_pengadaan"),
				store = grid.getStore();

			let params = form.getValues(),
				data_barang = [];

			store.getData().items.forEach(function (row) {
				data_barang.push(row.data);
			})

			params.STATUS = status;
			params.DATA_BARANG = JSON.stringify(data_barang);
			koyoku.app.ajaxRequest("pengadaan/save", params, function(res) {				
				if(res.success) {
					Ext.Msg.alert('Informasi', res.msg);
					me.clear_form_pengadaan();
					me.show_page('back');
					me.load_pengadaan();
				}
			});
		} catch (error) {
			console.error(error);
		}
	},

	clear_form_pengadaan: function() {
		var me = this,
				cmp = Ext.getCmp("page_renbut"),
				form = cmp.down("form_pengadaan").down("form"),
				grid = cmp.down("#grid_form_pengadaan"),
				store = grid.getStore();
			
			form.reset();
			store.clearData();
			store.reload();

	},

	load_pengadaan_keyword : function(field, e){
		me=this;
        if (e.getKey() == e.ENTER) {
            me.load_pengadaan();
        }
    },

	load_pengadaan : function(){
		var store = this.getView().down('grid_pengadaan').getStore();
		var fcari = this.getView().down('grid_pengadaan').down('#text_cari');
		var tree_bidang = this.getView().down('tree_bidang');
		var rec = tree_bidang.getSelectionModel().getSelection();
		if(rec.length>0){
			store.proxy.extraParams.BIDANG_ID = rec[0].data.BIDANG_ID;			
		}
		store.proxy.extraParams.PENCARIAN = fcari.getValue();
		store.load();
	},
	
});