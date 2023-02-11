Ext.define('koyoku.view.profile_pptkis.Form_rekan_kerja', {
    extend: 'Ext.Window',
    alias: 'widget.form_rekan_kerja',
    controller: 'profile_pptkis',
    padding: 10,
    modal: true,
    width: 400,
    title:'Form Rekan Kerja',
    requires:[
        'koyoku.store.Tipe_partner'        
    ],
    //selama close action destroy tidak pakai Hide window diberi ID tidak masalah
    id : 'window_form_rekan_kerja',
    initComponent:function() {
        var me = this;
        Ext.apply(me,{
            items: [{
                xtype : 'form',
                items: [
                    {
                        xtype: 'hiddenfield',
                        name: 'PPTKIS_PARTNER_ID'
                    },{
                        xtype: 'combobox',
                        fieldLabel: 'Tipe',
                        name: 'TIPE',
                        width : '100%',
                        allowBlank: false,
                        valueField:'value',
                        displayField:'text',
                        store:{
                            type:'tipe_partner',
                            autoLoad:true,
                        },
                        listeners:{
                            select:function(cmb,record) {                                
                                var combo_partner = me.down("[name=PARTNER_ID]"),
                                    partner_store = combo_partner.getStore();
                                combo_partner.reset();
                                partner_store.proxy.extraParams = {
                                    TABLE_NAME:record.data.table_name
                                };
                                partner_store.load();
                            }                                
                        }
                    },{
                        xtype: 'combobox',
                        fieldLabel: 'Rekan Kerja',
                        name: 'PARTNER_ID',
                        width : '100%',
                        allowBlank: false,
                        valueField:'ID',
                        displayField:'NAMA',                        
                        store:Ext.create("koyoku.store.barang.Partner",{                            
                        }),
                    }
                ],
            }]
        });
        me.callParent([arguments]);
    },    
    bbar:['->',{
        text:"Simpan",
        handler:'save_rekan_kerja',
        glyph: 'xf0c7@fontAwesome'

    }]
});
