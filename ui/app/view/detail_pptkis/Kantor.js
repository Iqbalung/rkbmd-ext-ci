Ext.define('koyoku.view.detail_pptkis.Kantor', {
	extend: 'Ext.grid.Panel',
	xtype: 'kantor_pptkis',
	requires: [
		'koyoku.store.Satker_pptkis',
	],
	controller: 'detail_pptkis',
	store: Ext.create('koyoku.store.Satker_pptkis', {
		autoLoad: false,
		/*listeners: {
			beforeload: ''
		}*/
	}),
	hideHeaders: true,
	columns: [{
		text: 'Nama',
		dataIndex: 'SATKER_NAMA',
		flex: 1,
		renderer: function(v, i, rec) {
			var str = '<span style="white-space: normal">';
			str += '<span style="color:red;font-weight:bold">'+rec.data.SATKER_NAMA+'</span><br>'
			str += '<span></span>'+rec.data.SATKER_ALAMAT+'<br>'
			str += 'No Telp : '+rec.data.SATKER_TELP+'<br>'
			str += '</span>';
			return str;
		}
	}]

});