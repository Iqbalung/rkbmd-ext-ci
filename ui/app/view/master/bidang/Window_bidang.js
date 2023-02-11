Ext.define('koyoku.view.master.bidang.Window_bidang', {
    extend: 'Ext.Window',
    alias: 'widget.window_bidang',
    requires: [
        'koyoku.view.master.bidang.Tree_bidang',
        'koyoku.view.master.jabatan.Form_jabatan',
        'koyoku.view.master.kompetensi.Form_kompetensi',
    ],
    rec : {},
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
        padding: 10,
        width: 700,
        title: 'Pilih Satker',
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
                       cmp = Ext.getCmp('page_jabatan'),        
                                form = cmp.down('main_form_jabatan');
                                form.down("[name=BIDANG_ID]").setValue(wilayahSelected[0].get("BIDANG_ID"));
                                form.down("[name=BIDANG_NAMA]").setValue(wilayahSelected[0].get("BIDANG_NAMA"));
                                me.hide();
                    },
                }],

        }),
        me.callParent([arguments]);
    },
  
});
