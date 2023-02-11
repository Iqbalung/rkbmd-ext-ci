Ext.define('koyoku.view.detail_pptkis.Fasilitas', {
	extend: 'Ext.panel.Panel',
	xtype: 'grid_fasilitas_detail',
	requires: [
		"koyoku.store.barang.Fasilitas",
	],	
	items:[{
				xtype: 'dataview',
				margin : '5 10',				
				store: Ext.create("koyoku.store.barang.Fasilitas",{					
					storeId:"fasilitasPptkis_detail",
					autoLoad:false,
					listeners:{
						/*beforeload:function(str) {
							var cmp = Ext.getCmp("page_detail_pptkis");
							str.proxy.extraParams = {
								PPTKIS_ID:cmp.params[1]
							};
						}*/
					}
				}),	
				tpl: new Ext.XTemplate(
					'<tpl for=".">',
					'<div style="margin:2px;" class="thumb-wrap">',
						'<tr>',
							'<td>',
								'<img style="height:auto;width:150px;" src="../api/uploads/pptkis/fasilitas/{DOKUMEN_NAMA_GENERATE}" title="{FASILITAS_NAMA}" />',
							'</td>',
							'<td style="position:relative;top:0;">',
								'<span style="margin:5px;">',
								'{FASILITAS_NAMA}{FASILITAS_DESKRIPSI}',
								'</span>',
							'</td>',
						'</tr>',
					'</div>',
					'</tpl>'
				),
				itemSelector: 'div.thumb-wrap',
				emptyText: '',	
				 
			}]
});