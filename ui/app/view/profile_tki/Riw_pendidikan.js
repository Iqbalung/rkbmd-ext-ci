Ext.define('koyoku.view.profile_tki.Riw_pendidikan', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_riw_pendidikan',
	requires: [
		'koyoku.store.tki.Riw_pendidikan'
	],
	store: Ext.create('koyoku.store.tki.Riw_pendidikan'),
	minHeight: 200,
	plugins: [{
		ptype: 'rowediting',
		clicksToEdit: 10
	}],
	tbar: [
		'->', {
			text: 'Tambah',
			handler: 'add_riw_pend',
			glyph: 'xf067@fontAwesome'
		}, {
			bind : { text : '{language.ubah}', },
			handler: 'upd_riw_pend',
			glyph: 'xf044@fontAwesome'
		}, {
			bind : { text : '{language.hapus}', },
			handler: 'del_riw_pend',
			glyph: 'xf1f8@fontAwesome'
		},{
			text: 'Tambahkan File',
			handler: 'add_riw_pend_attch',
			glyph: 'xf1f8@fontAwesome'
		}
	],
	columns: [{
		text: 'No',
		xtype: 'rownumberer',
		width: 40
	}, {
		text: 'Nama Instansi',
		dataIndex: 'NAMA_INSTANSI',
		editor : 'textfield',
		flex: 1
	}, {
		text: 'Tingkat Pendidikan',
		editor : {
			allowBlank: false,
		    forceSelection: true,
		    store: Ext.create('koyoku.store.TingkatPendidikan'),
		    displayField: 'PENDIDIKAN_NAMA',
		    valueField: 'PENDIDIKAN_ID',
		    name : 'PENDIDIKAN_NAMA',
		    xtype : 'combobox',
		    listeners : {
		    	select:function( combo, records, eOpts ){
		    		var grid = combo.up('grid_riw_pendidikan');
		    		var rec = grid.getSelectionModel().getSelection();
		    		rec[0].set('PENDIDIKAN_NAMA', records.data.PENDIDIKAN_NAMA);
		    		rec[0].set('PENDIDIKAN_ID', records.data.PENDIDIKAN_ID);
		    	}
		    }
		},	
		dataIndex: 'PENDIDIKAN_ID',
		renderer : function(v,i,rec){
			return rec.data.PENDIDIKAN_NAMA;
		},
		flex : 1
	}, {
		text: 'Jurusan',
		dataIndex: 'FORMAL_JURUSAN',
		editor : 'textfield',
		flex: 1
	}, {
		text: 'Tahun Mulai',
		editor : 'datefield',
		dataIndex: 'FORMAL_START',
		submitFormat: 'Y-m-d',
		flex: 1
	}, {
		text: 'Tahun Selesai',
		editor : 'datefield',
		submitFormat: 'Y-m-d',
		dataIndex: 'FORMAL_END',
		flex: 1
	}, {
		text: 'Nilai/IPK',
		editor : 'textfield',
		dataIndex: 'NILAI',
		flex: 1
	}]
});