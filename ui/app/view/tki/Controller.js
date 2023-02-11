Ext.define('koyoku.view.tki.Controller', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.tki',

	/* Proses CRUD TKI */
	tambah_tki: function() {
		//this.redirectTo('profile_tki');
		Ext.create('koyoku.view.tki.Win_siskot', {
			id: 'window_siskot',
			title: 'Pendaftaran SISKOTKLN'
		});
		form = Ext.getCmp('window_siskot').down('form_siskot');
		form.reset();
		Ext.getCmp('window_siskot').show();
	},

	ubah_tki: function() {
		var grid_tki_all = this.getView().down('grid_tki_all');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		if (rec.length > 0) {
			this.redirectTo('profile_tki/' + rec[0].data.ID);
		} else {
			Ext.Msg.alert('Informasi', 'Pilih data yang akan diubah terlebih dahulu.');
		}
	},

	load_organisasi:function(ths){
		var me = this,
			data = me.getViewModel().data;
		store = ths.getStore();		
		setTimeout(function(){			
			if (('PPTKIS_ID' in data.USER)) {
				store.proxy.extraParams = {
					SATKER_ID:data.USER.PPTKIS_ID+'.',
					IS_TKI:1,
				};
				store.load();
				
			}else{
				me.load_organisasi(ths);
			}
		},200);		
	},

	select_filter_org : function( ths, record, index, eOpts ){
		this.load_tki();
		this.load_calon_tki();
		this.load_pendaftar();
		this.load_aktif();
		this.load_purna();
	},

	load_tki_keyword : function(field, e){
		me=this;
        if (e.getKey() == e.ENTER) {
            me.load_tki();
        }
    },

    load_ctki_keyword : function(field, e){
		me=this;
        if (e.getKey() == e.ENTER) {
            me.load_calon_tki();
        }
    },

    load_pendaftar_keyword : function(field, e){
		me=this;
        if (e.getKey() == e.ENTER) {
            me.load_pendaftar();
        }
    },

    load_aktif_keyword : function(field, e){
		me=this;
        if (e.getKey() == e.ENTER) {
            me.load_aktif();
        }
    },

    load_purna_keyword : function(field, e){
		me=this;
        if (e.getKey() == e.ENTER) {
            me.load_purna();
        }
    },

	load_tki : function(){
		var store = this.getView().down('grid_tki_all').getStore();
		var fcari = this.getView().down('grid_tki_all').down('#text_cari');
		var tree_org = this.getView().down('tree_satker');
		var rec = tree_org.getSelectionModel().getSelection();
		if(rec.length>0){
			store.proxy.extraParams.SATKER_ID = rec[0].data.SATKER_ID;
			if(rec[0].data.IS_PEGAWAI){
				store.proxy.extraParams.REKRUITER_ID = rec[0].data.ID;				
			}else{
				store.proxy.extraParams.REKRUITER_ID = '';
			}	
		}
		store.proxy.extraParams.keyword = fcari.getValue();
		store.load();
	},

	load_pendaftar:function(){

		var me = this,
			store = Ext.getStore("store_lamaran"),
			data = me.getViewModel().data;	
		var tree_org = this.getView().down('tree_satker');
		var rec = tree_org.getSelectionModel().getSelection();		
		store.proxy.extraParams.STATUS = '1.';
		store.proxy.extraParams.REKRUITER_ID = '';
		if(rec.length>0){
			store.proxy.extraParams.SATKER_ID = rec[0].data.SATKER_ID;
			if(rec[0].data.IS_PEGAWAI){
				store.proxy.extraParams.REKRUITER_ID = rec[0].data.ID;				
			}else{
				store.proxy.extraParams.REKRUITER_ID = '';
			}	
		};
		cmp = Ext.getCmp("page_tki");
		store.proxy.extraParams.TEXT_CARI = cmp.down("grid_pendaftar_tki").down("#text_cari").getValue()
		store.load();
	},

	load_calon_tki:function(){
		var me = this,
			cmp = Ext.getCmp("page_tki"),
			store = Ext.getStore("store_calon"),
			data = me.getViewModel().data;	
		var tree_org = this.getView().down('tree_satker');
		var rec = tree_org.getSelectionModel().getSelection();		
		store.proxy.extraParams.STATUS = '2.';
		store.proxy.extraParams.REKRUITER_ID = '';
		if(rec.length>0){
			store.proxy.extraParams.SATKER_ID = rec[0].data.SATKER_ID;
			if(rec[0].data.IS_PEGAWAI){
				store.proxy.extraParams.REKRUITER_ID = rec[0].data.ID;				
			}else{
				store.proxy.extraParams.REKRUITER_ID = '';
			}	
		};
		store.proxy.extraParams.TEXT_CARI = cmp.down("grid_ctki").down("#text_cari").getValue();
		store.proxy.extraParams.JOB_JABATAN_ID = cmp.down("grid_ctki").down("#combo_posisi").getValue();
		store.load();
	},

	load_aktif:function(){
		var me = this,
			cmp = Ext.getCmp("page_tki"),
			store = Ext.getStore("store_aktif"),
			data = me.getViewModel().data;	
		var tree_org = this.getView().down('tree_satker');
		var rec = tree_org.getSelectionModel().getSelection();		
		store.proxy.extraParams.STATUS = '3.';
		store.proxy.extraParams.REKRUITER_ID = '';
		if(rec.length>0){
			store.proxy.extraParams.SATKER_ID = rec[0].data.SATKER_ID;
			if(rec[0].data.IS_PEGAWAI){
				store.proxy.extraParams.REKRUITER_ID = rec[0].data.ID;				
			}else{
				store.proxy.extraParams.REKRUITER_ID = '';
			}	
		};
		store.proxy.extraParams.TEXT_CARI = cmp.down("grid_tki").down("#text_cari").getValue();
		store.proxy.extraParams.JOB_JABATAN_ID = cmp.down("grid_tki").down("#combo_posisi").getValue();
		store.load();
	},

	load_purna:function(){
		var me = this,
			cmp = Ext.getCmp("page_tki"),
			store = Ext.getStore("store_purna"),
			data = me.getViewModel().data;	
		var tree_org = this.getView().down('tree_satker');
		var rec = tree_org.getSelectionModel().getSelection();		
		store.proxy.extraParams.STATUS = '4.';
		store.proxy.extraParams.REKRUITER_ID = '';
		if(rec.length>0){
			store.proxy.extraParams.SATKER_ID = rec[0].data.SATKER_ID;
			if(rec[0].data.IS_PEGAWAI){
				store.proxy.extraParams.REKRUITER_ID = rec[0].data.ID;				
			}else{
				store.proxy.extraParams.REKRUITER_ID = '';
			}	
		};
		store.proxy.extraParams.TEXT_CARI = cmp.down("grid_ptki").down("#text_cari").getValue();		
		store.load();
	},


	/* Proses Lamaran */
	show_set_posisi: function() {

	},

	show_medup_pra: function() {
		var grid_tki_all = Ext.getCmp("page_tki").down('grid_pendaftar_tki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_medup', {
			id: 'window_medup_pra',
			title: 'Medical Check Up Pra'
		});
		form = Ext.getCmp('window_medup_pra').down('form_medup');
		form.reset();
		status = Ext.getCmp('window_medup_pra').down('form_medup').down('[name=MEDICAL_STATUS]').setValue("1");;
		form.load({
			url: 'http://localhost/koyoku/api/index.php/Tki/getmedical',
			params: {
				LAMARAN_ID: rec[0].data.ID,
				MEDICAL_STATUS: 1
			},
			success: function(form) {

			}

		});
		var grid_tki_all = Ext.getCmp("page_tki").down('grid_pendaftar_tki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		form.getForm().setValues(rec[0].data);
		combo = Ext.getCmp('window_medup_pra').down('combo_sarkes');
		store = combo.getStore();
		store.load();
		Ext.getCmp('window_medup_pra').show();

	},

	show_medup_full: function() {
		var grid_tki_all = this.getView().down('grid_ctki');
		var rec = grid_tki_all.getSelectionModel().getSelection();

		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_medup', {
			id: 'window_medup_full',
			title: 'Medical Check Up Full'
		});
		form = Ext.getCmp('window_medup_full').down('form_medup');
		form.reset();
		status = Ext.getCmp('window_medup_full').down('form_medup').down('[name=MEDICAL_STATUS]').setValue("2");

		form.load({
			url: 'http://localhost/koyoku/api/index.php/Tki/getmedical',
			params: {
				LAMARAN_ID: rec[0].data.ID,
				MEDICAL_STATUS: 2
			},
			success: function(form) {
			}
		});
		var grid_tki_all = this.getView().down('grid_ctki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		form.getForm().setValues(rec[0].data);
		combo = Ext.getCmp('window_medup_full').down('combo_sarkes');
		store = combo.getStore();
		store.load();
		Ext.getCmp('window_medup_full').show();

	},

	show_purna: function() {
		grid = Ext.getCmp("page_tki").down('grid_ptki');
		var rec = grid.getSelectionModel().getSelection();

		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_purna', {
			id: 'window_purna',
			title: 'Status Purna'
		});
		form = Ext.getCmp('window_purna').down('form_purna');
		form.reset();
		form.load({
			url: 'http://localhost/koyoku/api/index.php/Tki/getkepulangan',
			params: {
				LAMARAN_ID: rec[0].data.ID,
			},
			success: function(form) {

			}

		});
		form.getForm().setValues(rec[0].data);
		form.getForm().setValues(rec[0].data);
		Ext.getCmp('window_purna').show();

	},


	show_siskotkln: function() {
		grid = Ext.getCmp("page_tki").down('grid_ctki');
		var rec = grid.getSelectionModel().getSelection();

		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_siskot', {
			id: 'window_siskot',
			title: 'Pendaftaran SISKOTKLN'
		});
		form = Ext.getCmp('window_siskot').down('form_siskot');
		form.reset();
		form.getForm().setValues(rec[0].data);
		Ext.getCmp('window_siskot').show();
	},

	show_pekerjaan: function() {
		var grid_tki_all = this.getView().down('grid_ctki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		
		Ext.create('koyoku.view.tki.Win_job', {
			id: 'window_job',
			title: 'Status Purna'
		});
		form = Ext.getCmp('window_job').down('form');
		form.reset();
		form.getForm().setValues(rec[0].data);
		Ext.getCmp('window_job').show();

	},

	set_job: function() {
		var rec = Ext.getCmp('window_job').down('jobList').getSelectionModel().getSelection();
		win = Ext.getCmp('window_job');
		Ext.getCmp('window_job').down('form');
		form = Ext.getCmp('window_job').down('form').getForm();
		if (form.isValid) {
			form.submit({
				url: 'http://localhost/koyoku/api/index.php/Tki/setjob',
				params:{
					JOB_ID: rec[0].data.JOB_ID
				},
				success: function(form, action) {
					var success_opt = true;
					try {
						res = Ext.JSON.decode(action.response.responseText);
					} catch (err) {
						var success_opt = false;
						Ext.Msg.alert('Error', "Terjadi Kesalahan");
					}
					if (success_opt) {
						if (res.success) {
							grid = Ext.getCmp("page_tki").down('grid_ctki')
							store = grid.getStore();
							store.load();
							win.destroy();
						} else {
							Ext.Msg.alert('Informasi', res.msg);
						}
						Ext.Msg.alert('Informasi', res.msg);
					}
				}
			})
		}

	},

	show_bnp2tki: function() {
		grid = Ext.getCmp("page_tki").down('grid_ctki');
		var rec = grid.getSelectionModel().getSelection();
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_bnp2tki', {
			id: 'window_bnp2tki',
			title: 'Status Bnp2tki'
		});
		form = Ext.getCmp('window_bnp2tki').down('form_bnp2tki');
		form.reset();
		form.load({
			url: 'http://localhost/koyoku/api/index.php/Tki/getbnp2tki',
			params: {
				LAMARAN_ID: rec[0].data.ID,
			},
			success: function(form) {

			}

		});
		form.getForm().setValues(rec[0].data);
		Ext.getCmp('window_bnp2tki').show();

	},

	show_perjanjian_kerja: function() {
		var grid_tki_all = this.getView().down('grid_ctki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_perjanjian_kerja', {
			id: 'window_perjanjian_kerja',
		});

		form = Ext.getCmp('window_perjanjian_kerja').down('form_perjanjian_kerja');
		form.load({
			url: 'http://localhost/koyoku/api/index.php/Tki/getperjanjian',
			params: {
				LAMARAN_ID: rec[0].data.ID,
			},
			success: function(form) {

			}

		});
		form.getForm().setValues(rec[0].data);
		Ext.getCmp('window_perjanjian_kerja').show();
	},

	show_asuransi: function() {

		var grid_tki_all = this.getView().down('grid_ctki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_asuransi', {
			id: 'window_asuransi',
		});
		win = Ext.getCmp('window_asuransi');
		form = win.down('form_asuransi');
		form.getForm().reset();

		form.load({
			url: 'http://localhost/koyoku/api/index.php/Tki/getasuransi',
			params: {
				LAMARAN_ID: rec[0].data.ID,
				ASURANSI_STATUS: "1",
			},
			success: function(form) {

			}

		});
		form.down('[name=ASURANSI_STATUS]').setValue('1')
		form.getForm().setValues(rec[0].data);
		
		Ext.getCmp('window_asuransi').show();
	},

	show_asuransi_penempatan: function() {

		var grid_tki_all = this.getView().down('grid_ctki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_asuransi', {
			id: 'window_asuransi_penempatan',
		});
		win = Ext.getCmp('window_asuransi_penempatan');
		form = win.down('form_asuransi');
		form.getForm().reset();

		form.load({
			url: 'http://localhost/koyoku/api/index.php/Tki/getasuransi',
			params: {
				LAMARAN_ID: rec[0].data.ID,
				ASURANSI_STATUS: "2",
			},
			success: function(form) {

			}

		});
		form.down('[name=ASURANSI_STATUS]').setValue('2')
		form.getForm().setValues(rec[0].data);
	
		Ext.getCmp('window_asuransi_penempatan').show();
	},

	show_konfirmasi: function() {
		var grid_tki_all = this.getView().down('grid_tki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_sampai', {
			id: 'window_sampai',
		});
		win = Ext.getCmp('window_sampai');
		form = Ext.getCmp('window_sampai').down('form');
		form.getForm().setValues(rec[0].data);
		Ext.getCmp('window_sampai').show();

	},

	show_kasus: function() {
		var grid_tki_all = this.getView().down('grid_tki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_kasus', {
			id: 'window_kasus',
		});
		win = Ext.getCmp('window_kasus');
		form = Ext.getCmp('window_kasus').down('form');
		form.getForm().setValues(rec[0].data);
		Ext.getCmp('window_kasus').show();

	},

	show_perpanjang: function() {
		var grid_tki_all = this.getView().down('grid_tki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_perpanjang', {
			id: 'window_perpanjang',
		});
		win = Ext.getCmp('window_perpanjang');
		form = Ext.getCmp('window_perpanjang').down('form');
		form.getForm().setValues(rec[0].data);
		Ext.getCmp('window_perpanjang').show();

	},

	show_hilang: function() {
		var grid_tki_all = this.getView().down('grid_tki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_hilang', {
			id: 'window_hilang',
		});
		win = Ext.getCmp('window_hilang');
		form = Ext.getCmp('window_hilang').down('form');
		form.getForm().setValues(rec[0].data);
		Ext.getCmp('window_hilang').show();

	},

	show_pindah: function() {
		var grid_tki_all = this.getView().down('grid_tki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_pindah', {
			id: 'window_pindah',
		});
		win = Ext.getCmp('window_pindah');
		form = Ext.getCmp('window_pindah').down('form');
		form.getForm().setValues(rec[0].data);
		Ext.getCmp('window_pindah').show();
	},

	show_selesai: function() {
		var grid_tki_all = this.getView().down('grid_tki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_selesai', {
			id: 'window_selesai',
		});
		win = Ext.getCmp('window_selesai');
		form = Ext.getCmp('window_selesai').down('form');
		form.getForm().setValues(rec[0].data);
		Ext.getCmp('window_selesai').show();

	},

	show_visa: function() {
		var grid_tki_all = this.getView().down('grid_ctki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_visa', {
			id: 'window_visa',
		});
		form = Ext.getCmp('window_visa').down('form_visa');
		form.load({
			url: 'http://localhost/koyoku/api/index.php/Tki/getvisa',
			params: {
				LAMARAN_ID: rec[0].data.ID,
			},
			success: function(form) {}
		});
		form.getForm().setValues(rec[0].data);
		Ext.getCmp('window_visa').show();
	},

	show_blkln: function() {
		Ext.create('koyoku.view.tki.Win_pend_informal', {
			id: 'window_pend_informal',
		});
		form = Ext.getCmp('window_pend_informal').down('form').getForm();
		var grid = Ext.getCmp('window_pend_informal').down('grid_pend_informal');
		var grid_tki_all = this.getView().down('grid_ctki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		form.setValues(rec[0].data);
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}

		store = grid.getStore();

		store.proxy.extraParams = {
			JOB_ID: rec[0].data.JOB_ID,
			PENGGUNA_ID: rec[0].data.PEKERJA_ID,
			LAMARAN_ID: rec[0].data.ID
		};

		store.load();
		Ext.getCmp('window_pend_informal').show();
	},

	show_lembaga_keuangan: function() {
		var grid_tki_all = this.getView().down('grid_ctki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_lembaga_keuangan', {
			id: 'window_lembaga_keuangan',
		});
		form = Ext.getCmp('window_lembaga_keuangan').down('form_proses_lk');
		form.getForm().reset();
		form.getForm().setValues(rec[0].data);
		form.load({
			url: 'http://localhost/koyoku/api/index.php/Tki/getlk',
			params: {
				LAMARAN_ID: rec[0].data.ID,
			},
			success: function(form) {}
		});
		combo = Ext.getCmp('window_lembaga_keuangan').down('combo_lembaga_keuangan');
		store = combo.getStore();
		store.load();
		Ext.getCmp('window_lembaga_keuangan').show();
	},

	show_pap: function() {
		var grid_tki_all = this.getView().down('grid_ctki');
		var rec = grid_tki_all.getSelectionModel().getSelection();
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_pap', {
			id: 'window_pap',
		});
		form = Ext.getCmp('window_pap').down('form_pap');
		form.getForm().reset();
		form.getForm().setValues(rec[0].data);
		form.load({
			url: 'http://localhost/koyoku/api/index.php/Tki/getpap',
			params: {
				LAMARAN_ID: rec[0].data.ID,
			},
			success: function(form) {}
		});
		Ext.getCmp('window_pap').show();
	},

	show_berangkat: function() {
		var grid_tki_all = this.getView().down('grid_ctki');

		var rec = grid_tki_all.getSelectionModel().getSelection();
		if (rec.length == 0) {
			Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
			return;
		}
		Ext.create('koyoku.view.tki.Win_berangkat', {
			id: 'window_berangkat',
		});
		form = Ext.getCmp('window_berangkat').down('form_berangkat');
		form.getForm().reset();
		form.getForm().setValues(rec[0].data);
		form.load({
			url: 'http://localhost/koyoku/api/index.php/Tki/getberangkat',
			params: {
				LAMARAN_ID: rec[0].data.ID,
			},
			success: function(form) {}
		});
		Ext.getCmp('window_berangkat').show();


	},

	simpanPerjanjian: function() {
		form = Ext.getCmp('window_perjanjian_kerja').down('form_perjanjian_kerja').getForm();
		if (form.isValid()) {
			form.submit({
				url: 'http://localhost/koyoku/api/index.php/Tki/saveperjanjian',
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
							grid = Ext.getCmp("page_tki").down('grid_ctki')
							store = grid.getStore();
							store.load();

							Ext.getCmp('window_perjanjian_kerja').destroy();
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

	savemedical: function() {
		if (win = Ext.getCmp('window_medup_pra') == undefined) {
			win = Ext.getCmp('window_medup_full');
			form = win.down('form_medup').getForm();
		} else {
			win = Ext.getCmp('window_medup_pra');
			form = win.down('form_medup').getForm();
		}
		if (form.isValid()) {
			form.submit({
				url: 'http://localhost/koyoku/api/index.php/Tki/savemedical',
				success: function(form, action) {
					var success_opt = true;
					try {
						res = Ext.JSON.decode(action.response.responseText);
					} catch (err) {
						var success_opt = false;
						Ext.Msg.alert('Error', "Data Sudah Ada");
					}
					if (success_opt) {
						if (res.success) {
							grid = Ext.getCmp("page_tki").down('grid_ctki')
							grid = Ext.getCmp("page_tki").down('grid_pendaftar_tki')
							store = grid.getStore();
							store.load();
							win.destroy();
						}
						Ext.Msg.alert('Informasi', res.msg);
					}
				},
				failure: function(form, action) {
					Ext.Msg.alert('Error', "Data Sudah Ada");
					return false;
				}
			});
		} else {
			Ext.Msg.alert('Informasi', 'Form belum diisi dengan lengkap');
		}
	},

	simpanvisa: function() {
		win = Ext.getCmp('window_visa');
		form = win.down('form_visa').getForm();
		if (form.isValid()) {
			form.submit({
				url: 'http://localhost/koyoku/api/index.php/Tki/savevisa',
				success: function(form, action) {
					var success_opt = true;
					try {
						res = Ext.JSON.decode(action.response.responseText);
					} catch (err) {
						var success_opt = false;
						Ext.Msg.alert('Error', "Data Sudah Ada");
					}
					if (success_opt) {
						if (res.success) {
							grid = Ext.getCmp("page_tki").down('grid_ctki')
							store = grid.getStore();
							store.load();
							win.destroy();
						}
						Ext.Msg.alert('Informasi', res.msg);
					}
				},
				failure: function(form, action) {
					Ext.Msg.alert('Error', "Data Sudah Ada");
					return false;
				}
			});
		} else {
			Ext.Msg.alert('Informasi', 'Form belum diisi dengan lengkap');
		}
	},

	simpansiskot: function() {
		win = Ext.getCmp('window_siskot');
		form = win.down('form_siskot').getForm();
		if (form.isValid()) {
			form.submit({
				url: 'http://localhost/koyoku/api/index.php/Tki/savesiskot',
				success: function(form, action) {
					var success_opt = true;
					try {
						res = Ext.JSON.decode(action.response.responseText);
					} catch (err) {
						var success_opt = false;
						Ext.Msg.alert('Error', "Data Sudah Ada");
					}
					if (success_opt) {
						if (res.success) {
							grid = Ext.getCmp("page_tki").down('grid_ctki')
							store = grid.getStore();
							store.load();
							win.destroy();
						}
						Ext.Msg.alert('Informasi', res.msg);
					}
				},
				failure: function(form, action) {
					Ext.Msg.alert('Error', "Data Sudah Ada");
					return false;
				}
			});
		} else {
			Ext.Msg.alert('Informasi', 'Form belum diisi dengan lengkap');
		}
	},


	simpanberangkat: function() {
		win = Ext.getCmp('window_berangkat');
		form = win.down('form_berangkat').getForm();
		if (form.isValid()) {
			form.submit({
				url: 'http://localhost/koyoku/api/index.php/Tki/saveberangkat',
				success: function(form, action) {
					var success_opt = true;
					try {
						res = Ext.JSON.decode(action.response.responseText);
					} catch (err) {
						var success_opt = false;
						Ext.Msg.alert('Error', "Data Sudah Ada");
					}
					if (success_opt) {
						if (res.success) {
							grid = Ext.getCmp("page_tki").down('grid_ctki')
							store = grid.getStore();
							store.load();
							grid = Ext.getCmp("page_tki").down('grid_tki')
							store = grid.getStore();
							store.load();
							win.destroy();
						}
						Ext.Msg.alert('Informasi', res.msg);
					}
				},
				failure: function(form, action) {
					Ext.Msg.alert('Error', "Data Sudah Ada");
					return false;
				}
			});
		} else {
			Ext.Msg.alert('Informasi', 'Form belum diisi dengan lengkap');
		}
	},

	simpanlk: function() {
		win = Ext.getCmp('window_lembaga_keuangan');
		form = win.down('form_proses_lk').getForm();
		if (form.isValid) {
			form.submit({
				url: 'http://localhost/koyoku/api/index.php/Tki/savelk',
				success: function(form, action) {
					var success_opt = true;
					try {
						res = Ext.JSON.decode(action.response.responseText);
					} catch (err) {
						var success_opt = false;
						Ext.Msg.alert('Error', "Data Sudah Ada");
					}
					if (success_opt) {
						if (res.success) {
							grid = Ext.getCmp("page_tki").down('grid_ctki')
							store = grid.getStore();
							store.load();
							win.destroy();
						}
						Ext.Msg.alert('Informasi', res.msg);
						1
					}
				}
			})
		}

	},

	simpanpembekalan: function() {
		win = Ext.getCmp('window_pap');
		form = win.down('form_pap').getForm();
		if (form.isValid) {
			form.submit({
				url: 'http://localhost/koyoku/api/index.php/Tki/savepembekalan',
				success: function(form, action) {
					var success_opt = true;
					try {
						res = Ext.JSON.decode(action.response.responseText);
					} catch (err) {
						var success_opt = false;
						Ext.Msg.alert('Error', "Data Sudah Ada");
					}
					if (success_opt) {
						if (res.success) {
							grid = Ext.getCmp("page_tki").down('grid_ctki');
							store = grid.getStore();
							store.load();
							win.destroy();
						}
						Ext.Msg.alert('Informasi', res.msg);
					}
				}
			})
		}

	},

	simpanasuransi: function() {
		win = Ext.getCmp('window_asuransi');
		if(win==undefined){
			win = Ext.getCmp('window_asuransi_penempatan');
		}
		form = win.down('form_asuransi').getForm();
		if (form.isValid) {
			form.submit({
				url: 'http://localhost/koyoku/api/index.php/Tki/saveasuransi',
				success: function(form, action) {
					var success_opt = true;
					try {
						res = Ext.JSON.decode(action.response.responseText);
					} catch (err) {
						var success_opt = false;
						Ext.Msg.alert('Error', "Terjadi Kesalahan");
					}
					if (success_opt) {
						if (res.success) {
							grid = Ext.getCmp("page_tki").down('grid_ctki')
							store = grid.getStore();
							store.load();
							win.destroy();
						} else {
							Ext.Msg.alert('Informasi', res.msg);
						}
						Ext.Msg.alert('Informasi', res.msg);
					}
				}
			})
		}
	},



	simpansampai: function() {
		win = Ext.getCmp('window_sampai');
		form = Ext.getCmp('window_sampai').down('form_sampai');
		if (form.isValid) {
			form.submit({
				url: 'http://localhost/koyoku/api/index.php/Tki/change_status',
				success: function(form, action) {
					var success_opt = true;
					try {
						res = Ext.JSON.decode(action.response.responseText);
					} catch (err) {
						var success_opt = false;
						Ext.Msg.alert('Error', "Terjadi Kesalahan");
					}
					if (success_opt) {
						if (res.success) {
							grid = Ext.getCmp("page_tki").down('grid_tki')
							store = grid.getStore();
							store.load();
							win.destroy();
						} else {
							Ext.Msg.alert('Informasi', res.msg);
						}
						Ext.Msg.alert('Informasi', res.msg);
					}
				}
			})
		}
	},

	simpansampai: function() {
		var riwayat = "";
		if (win = Ext.getCmp('window_sampai')!=undefined) {
			win = Ext.getCmp('window_sampai');
			form = Ext.getCmp('window_sampai').down('form_sampai');
		} else if (win = Ext.getCmp('window_hilang')!=undefined) {
			win = Ext.getCmp('window_hilang');
			form = Ext.getCmp('window_hilang').down('form_hilang');
		} else if (win = Ext.getCmp('window_kasus')!=undefined) {
			win = Ext.getCmp('window_kasus');
			form = win.down('form_kasus');
			riwayat = form.down('#riwayat').getRawValue();
		} else if (win = Ext.getCmp('window_pindah')!=undefined) {
			win = Ext.getCmp('window_pindah');
			form = Ext.getCmp('window_pindah').down('form_pindah');
			riwayat = form.down('#riwayat').getRawValue();
		} else if (win = Ext.getCmp('window_perpanjang')!=undefined) {
			win = Ext.getCmp('window_perpanjang');
			form = Ext.getCmp('window_perpanjang').down('form_perpanjang');
		} else if (win = Ext.getCmp('window_selesai')!=undefined) {
			win = Ext.getCmp('window_selesai');
			form = Ext.getCmp('window_selesai').down('form_selesai');
		}
		if (form.isValid) {
			form.submit({
				url: 'http://localhost/koyoku/api/index.php/Tki/change_status',
				params : {
					TEXT : riwayat,
				},
				success: function(form, action) {
					var success_opt = true;
					try {
						res = Ext.JSON.decode(action.response.responseText);
					} catch (err) {
						var success_opt = false;
						Ext.Msg.alert('Error', "Terjadi Kesalahan");
					}
					if (success_opt) {
						if (res.success) {
							grid = Ext.getCmp("page_tki").down('grid_tki')
							store = grid.getStore();
							store.load();
							win.destroy();
						} else {
							Ext.Msg.alert('Informasi', res.msg);
						}
						Ext.Msg.alert('Informasi', res.msg);
					}
				}
			})
		}
	},

	simpanperpanjang: function() {
		win = Ext.getCmp('window_perpanjang');
		form = Ext.getCmp('window_perpanjang').down('form_perpanjang');
		if (form.isValid) {
			form.submit({
				url: 'http://localhost/koyoku/api/index.php/Tki/saveperjanjian',

				success: function(form, action) {
					var success_opt = true;
					try {
						res = Ext.JSON.decode(action.response.responseText);
					} catch (err) {
						var success_opt = false;
						Ext.Msg.alert('Error', "Terjadi Kesalahan");
					}
					if (success_opt) {
						if (res.success) {
							grid = Ext.getCmp("page_tki").down('grid_tki')
							store = grid.getStore();
							store.load();
							win.destroy();
						} else {
							Ext.Msg.alert('Informasi', res.msg);
						}
						Ext.Msg.alert('Informasi', res.msg);
					}
				}
			})
		}
	},

	simpanpurna: function() {
		win = Ext.getCmp('window_purna');
		form = Ext.getCmp('window_purna').down('form_purna');
		if (form.isValid) {
			form.submit({
				url: 'http://localhost/koyoku/api/index.php/Tki/savepurna',
				params : {
					TEXT : form.down('#riwayat').getRawValue(),
				},
				success: function(form, action) {
					var success_opt = true;
					try {
						res = Ext.JSON.decode(action.response.responseText);
					} catch (err) {
						var success_opt = false;
						Ext.Msg.alert('Error', "Terjadi Kesalahan");
					}
					if (success_opt) {
						if (res.success) {
							grid = Ext.getCmp("page_tki").down('grid_ptki')
							store = grid.getStore();
							store.load();
							grid = Ext.getCmp("page_tki").down('grid_tki')
							store = grid.getStore();
							store.load();
							win.destroy();
						} else {
							Ext.Msg.alert('Informasi', res.msg);
						}
						Ext.Msg.alert('Informasi', res.msg);
					}
				}
			})
		}
	},

	simpanBnp2tki: function() {
		win = Ext.getCmp('window_bnp2tki');
		form = Ext.getCmp('window_bnp2tki').down('form_bnp2tki');
		if (form.isValid) {
			form.submit({
				url: 'http://localhost/koyoku/api/index.php/Tki/savebnp2tki',
				success: function(form, action) {
					var success_opt = true;
					try {
						res = Ext.JSON.decode(action.response.responseText);
					} catch (err) {
						var success_opt = false;
						Ext.Msg.alert('Error', "Terjadi Kesalahan");
					}
					if (success_opt) {
						if (res.success) {
							grid = Ext.getCmp("page_tki").down('grid_ctki')
							store = grid.getStore();
							store.load();
							win.destroy();
						} else {
							Ext.Msg.alert('Informasi', res.msg);
						}
						Ext.Msg.alert('Informasi', res.msg);
					}
				}
			})
		}
	},

	proses_pendaftar:function(){
		var me = this;
			cmp = Ext.getCmp("page_tki");

		gridTki = cmp.down("grid_pendaftar_tki");
		gridSelected = gridTki.getSelectionModel().getSelection();
		if (gridSelected.length == 1) {
			var data = gridSelected[0].data,
				dataModel = me.getViewModel(),
				win = Ext.create("koyoku.view.tki.Win_proses_pendaftar");
				win.show();			
				win.down('form').getForm().setValues(data);
				for (r in data) {
		            dataModel.set('detail.'+r,data[r]);
		        }
		}else{
			Ext.Msg.alert('Informasi', "Pilih data terlebih dahulu");
		}
	},

	ditolak:function(){
		var me = this,
			win = Ext.getCmp("win_verifikasi_pendaftar"),
			form = win.down("form");
		form.submit({
			url: 'http://localhost/koyoku/api/index.php/Tki/change_status',
			params:{
				STATUS_ID:'1.1.'
			},
			success: function(form, action) {
				var success_opt = true;
				try {
					res = Ext.JSON.decode(action.response.responseText);
				} catch (err) {
					var success_opt = false;
					Ext.Msg.alert('Error', "Terjadi Kesalahan");
				}
				if (success_opt) {
					if (res.success) {
						grid = Ext.getCmp("page_tki").down('grid_pendaftar_tki')
						store = grid.getStore();
						store.load();
						win.destroy();
					} else {
						Ext.Msg.alert('Informasi', res.msg);
					}
					Ext.Msg.alert('Informasi', res.msg);
				}
			}
		});
	},

	diterima:function(){
		var me = this,
			win = Ext.getCmp("win_verifikasi_pendaftar"),
			form = win.down("form");
		form.submit({
			url: 'http://localhost/koyoku/api/index.php/Tki/change_status',
			params:{
				STATUS_ID:'2.'
			},
			success: function(form, action) {
				var success_opt = true;
				try {
					res = Ext.JSON.decode(action.response.responseText);
				} catch (err) {
					var success_opt = false;
					Ext.Msg.alert('Error', "Terjadi Kesalahan");
				}
				if (success_opt) {
					if (res.success) {
						grid = Ext.getCmp("page_tki").down('grid_pendaftar_tki')
						store = grid.getStore();
						store.load();
						win.destroy();
					} else {
						Ext.Msg.alert('Informasi', res.msg);
					}
					Ext.Msg.alert('Informasi', res.msg);
				}
			}
		});
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
    },

    detail_tki:function(){
    	var me = this,
    		cmp = Ext.getCmp("page_tki"),    		
    		grid = cmp.down("grid_tki_all"),
    		selected = grid.getSelectionModel().getSelection();
    	if (selected.length == 1) {
    		var data = selected[0];
    		me.redirectTo('lihat_tki/'+data.get("ID"));
    	}
    },

    detail_tki_lamaran:function(ths,record,items){
    	var me = this,
    		cmp = Ext.getCmp("page_tki");

    	me.redirectTo('lihat_tki/'+record.get("PEKERJA_ID"));
    	
    	/*if (selected.length == 1) {
    		var data = selected[0];
    		me.redirectTo('lihat_tki/'+record.get("ID"));
    	}*/
    },

    select_statuspurna: function() {
    	var me = this;
        	cmp = Ext.getCmp("page_tki");    		
    		grid = cmp.down("grid_ptki");
    		store = grid.getStore();
			store.proxy.extraParams.PURNA = cmp.down("grid_ptki").down("#combo_purna").getValue();
			store.load();
    },



});