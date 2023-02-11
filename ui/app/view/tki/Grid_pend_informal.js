Ext.define('koyoku.view.tki.Grid_pend_informal', {
	extend: 'Ext.grid.Panel',
	xtype: 'grid_pend_informal',
	requires: [
		'koyoku.store.tki.Riw_pend_informal'
	],
	store: Ext.create('koyoku.store.tki.Riw_pend_informal'),
	minHeight : 200,
	width : 950,
	plugins: [{
		ptype: 'rowediting',
		clicksToEdit: 10
	}],
	columns: [{
		text: 'No',
		xtype: 'rownumberer',
		width: 60
	},{
		text: 'Instansi/BLKLN',
		editor : {
			forceSelection: true,
			allowBlank: false,
		    forceSelection: true,
		    store: Ext.create('koyoku.store.Blkln'),
		    displayField: 'NAMA',
		    valueField: 'ID',
		    name : 'BLKN_NAMA',
		    xtype : 'combobox',
		    listeners : {
		    	select:function( combo, records, eOpts ){
		    		var grid = combo.up('grid_pend_informal');
		    		var rec = grid.getSelectionModel().getSelection();
		    		rec[0].set('INSTANSI_NAMA', records.data.NAMA);
		    	}
		    }
		},	
		dataIndex: 'BLKLN_ID',
		renderer : function(v,i,rec){
			return rec.data.INSTANSI_NAMA;
		},
		flex : 1
	},{
		text: 'Nama Pelatihan',
		dataIndex: 'PELATIHAN_NAMA',
		editor : 'textfield',

		flex: 1
	},{
		text: 'Tanggal Mulai',
		dataIndex: 'INFORMAL_START',
		editor : 'datefield',
		width: 120
	},{
		text: 'Tanggal Selesai',
		dataIndex: 'INFORMAL_END',
		editor : 'datefield',
		submitFormat : 'Y-m-d',
		width: 120
	},{
		text: 'Nilai',
		dataIndex: 'INFORMAL_NILAI',
		editor : 'textfield',
		submitFormat : 'Y-m-d',
		width: 60
	},{
		text: 'Uraian',
		dataIndex: 'INFORMAL_URAIAN',
		editor : 'textfield',
		flex: 1
	}]
});