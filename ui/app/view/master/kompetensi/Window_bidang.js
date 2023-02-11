Ext.define('koyoku.view.master.kompetensi.Window_bidang', {
    extend: 'Ext.Window',
    alias: 'widget.window_lokasi',
    requires: [
        'koyoku.view.master.bidang.Tree_bidang',
        'koyoku.view.master.jabatan.Form_jabatan',
    ],
    rec : {},
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
        padding: 10,
        modal: true,
        width: 700,
        title: 'Pilih Kompetensi',
        closeAction: 'hide',   
        items: [{
                    xtype: 'tree_bidang',
                    allowDeselect: true,
                    width: 700,
                    height: 300,
                    listeners:{
                            itemclick:function( ths, record, item, index, e, eOpts ){
                                gridSatker = me.down("tree_bidang"),
                                me.rec = gridSatker.getSelectionModel().getSelection();
                               
                            }
                    }
                }],
                buttons: [{
                    text: 'Pilih',
                    handler : function(){
                        wilayahSelected = me.rec;
                        cmp = Ext.getCmp('page_kompetensi'),        
                        form = cmp.windowForm.down("form");
                        form.down("[name=BIDANG_ID]").setValue(wilayahSelected[0].get("BIDANG_ID"));
                        form.down("[name=BIDANG_NAMA]").setValue(wilayahSelected[0].get("BIDANG_NAMA"));
                        me.hide();
                    },
                }],
        }),
        me.callParent([arguments]);
    },
  
});
