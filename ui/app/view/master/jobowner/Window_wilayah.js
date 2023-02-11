Ext.define('koyoku.view.master.jobowner.Window_wilayah', {
    extend: 'Ext.Window',
    alias: 'widget.window_lokasi',
    requires: [
        'koyoku.view.master.jobowner.Controller',
        'koyoku.view.master.wilayah.Tree_wilayah',
        'koyoku.view.master.jobowner.Form_jobowner',
    ],
    rec : {},
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
        controller: 'jobowner',
        padding: 10,
        modal: true,
        width: 700,

        closeAction: 'hide',   
        items: [{
                    xtype: 'tree_wilayah',
                    allowDeselect: true,
                    width: 700,
                    height: 300,
                    listeners:{
                            itemclick:function( ths, record, item, index, e, eOpts ){   
                                gridSatker = me.down("tree_wilayah"),
                                me.rec = gridSatker.getSelectionModel().getSelection();
                                
                            }
                    }
                }],
                buttons: [{
                    text: 'Pilih',
                    handler : function(){
                        wilayahSelected = me.rec;
                        form = windowForm.down("form");
                        form.down("[name=WILAYAH_ID]").setValue(wilayahSelected[0].get("WILAYAH_ID"));
                        form.down("[name=WILAYAH_NAMA]").setValue(wilayahSelected[0].get("WILAYAH_NAMA"));
                        me.hide();
                    },
                }],
        }),
        me.callParent([arguments]);
    },
  
});
