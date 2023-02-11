Ext.define('koyoku.view.profile_pptkis.Rekan_kerja', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_rekan_kerja',
	requires: [
		"koyoku.store.barang.Rekan_kerja",
	],
	store: {
		type:'rekan_kerjaPptkis',
		storeId:"rekan_kerjaPptkis",
		autoLoad:true,
		listeners:{
			beforeload:function(str) {
				var cmp = Ext.getCmp("page_profile_pptkis");
				str.proxy.extraParams = {
					PPTKIS_ID:cmp.params[1]
				};
			}
		}
	},
	tbar:['->', {
	    text: 'Tambah',
	    handler: 'add_rekan_kerja',
	    glyph: 'xf067@fontAwesome'
	}, {
	    bind : { text : '{language.ubah}', },
	    glyph: 'xf044@fontAwesome',
	    handler: 'upd_rekan_kerja',
	}, {
	    bind : { text : '{language.hapus}', },
	    glyph: 'xf1f8@fontAwesome',
	    handler: 'delete_rekan_kerja',
	}],
	columns: [{
		xtype: 'rownumberer',
		width: 40
	},{
		text: 'Nama',
		dataIndex: 'NAMA',
		flex: 1
	},{
		text: 'Tipe',
		dataIndex: 'TIPE',
		flex: 1,
		renderer:function(v) {
			var tipe = ["","BLKLN","Lembaga Keuangan","Lembaga Sertifikasi Profesi","Sarana Kesehatan","Asuransi"],
				value = "";
			if (parseInt(v) > 0 && parseInt(v) < 6) {
				value = tipe[v];
			}
			return value;
		}
	}]
});