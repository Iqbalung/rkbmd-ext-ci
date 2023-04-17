Ext.define('koyoku.view.lihat_tki.Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.lihat_tki',
    get_params:function(index){
        var cmp = Ext.getCmp("page_lihat_tki");
        return cmp.params[index];
    },

    load_identitas: function(ths) {
        var me = this,
            id = me.getView().params[1],
            cmp = Ext.getCmp('page_lihat_tki');

        if (typeof id != 'undefined') {
            ths.load({
                url:  api.apiurl + '/pekerja/get_by_id',
                params: {
                    ID: id
                },
                success: function(form, action) {
                    var success_opt = true;
                    try {
                        res = Ext.JSON.decode(action.response.responseText);
                    } catch (err) {
                        var success_opt = false;
                        Ext.Msg.alert('Error', form.responseText);
                    }
                    if (success_opt) {                      
                        if (!Ext.isEmpty(res.data.PHOTO)) {                           
                            ths.down("#preview_photo").setSrc("../api/uploads/tki/identitas/"+res.data.PHOTO);
                        }                                              
                        if (!Ext.isEmpty(res.data.COVER)) {                           
                            ths.down("#preview_cover").setSrc("../api/uploads/tki/identitas/"+res.data.COVER);
                        }                                     
                    }
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Error', action.response);
                    return false;
                }   
            });
            cmp.down('panel').setHidden(false);
            me.load_riw_kerja();
            me.load_riw_pend();
            me.load_riw_keluarga();
            me.load_media();
            me.load_perjanjian();
            me.load_medical();
            me.load_medicalfull();
            me.load_keberangkatan();
            me.load_pak();
            me.load_asuransi();
            me.load_visa();
            me.load_bnptki();
            me.load_pak();
            me.load_lk();
            me.load_kasus();
            me.load_hilang();
            me.load_purna();
            me.load_pindah();
        }else{            
            cmp.down('tabpanel').setHidden(true);
        }
    },

    load_riw_kerja:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_riw_kerja_detail').getStore();
        store.proxy.extraParams = {
            PEKERJA_ID:me.get_params(1)
        };
        store.load();
    },

    load_riw_pend:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_riw_pendidikan_detail').getStore();
        store.proxy.extraParams = {
            PEKERJA_ID:me.get_params(1)
        };
        store.load();
    },

    load_riw_keluarga:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_riw_keluarga_detail').getStore();
        store.proxy.extraParams = {
            PEKERJA_ID:me.get_params(1)
        };
        store.load();
    },

    load_media:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_media_pengguna_detail').getStore();
        store.proxy.extraParams = {
            PEKERJA_ID:me.get_params(1)
        };
        store.load();
    },  

    load_perjanjian:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_riw_perjanjian').getStore();
        store.proxy.extraParams = {
            PENGGUNA_ID:me.get_params(1)
        };
        store.load();
    },    
    load_medical:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_riw_medical').getStore();
        store.proxy.extraParams = {
            PENGGUNA_ID:me.get_params(1),
            MEDICAL_STATUS: 0
        };
        store.load();
    },

    load_medicalfull:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_riw_medical_full').getStore();
        store.proxy.extraParams = {
            PENGGUNA_ID:me.get_params(1),
            MEDICAL_STATUS: 1
        };
        store.load();
    },    

    load_asuransi:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_riw_asuransi').getStore();
        store.proxy.extraParams = {
            PENGGUNA_ID:me.get_params(1),
        };
        store.load();
    },

    load_visa:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_riw_visa').getStore();
        store.proxy.extraParams = {
            PENGGUNA_ID:me.get_params(1),
        };
        store.load();
    },   

    load_pak:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_riw_pak').getStore();
        store.proxy.extraParams = {
            PENGGUNA_ID:me.get_params(1),
        };
        store.load();
    },    

    load_bnptki:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_riw_bnptki').getStore();
        store.proxy.extraParams = {
            PENGGUNA_ID:me.get_params(1),
        };
        store.load();
    },

    load_lk:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_riw_lk').getStore();
        store.proxy.extraParams = {
            PENGGUNA_ID:me.get_params(1),
        };
        store.load();
    },    

    load_keberangkatan:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_riw_keberangkatan').getStore();
        store.proxy.extraParams = {
            PENGGUNA_ID:me.get_params(1),
        };
        store.load();
    }, 

    /*
    memasukan table name ke params nantinya digunakan untuk melakukan query db
    diletakan pad parameter TABLE_NAME
    */

    load_hilang:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_riw_hilang').getStore();
        store.proxy.extraParams = {
            PENGGUNA_ID:me.get_params(1),
            TABLE_NAME:'LAMARAN_HILANG',
        };
        store.load();
    },    

    load_kasus:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_riw_kasus').getStore();
        store.proxy.extraParams = {
            PENGGUNA_ID:me.get_params(1),
            TABLE_NAME:'LAMARAN_KASUS',
        };
        store.load();
    },

    load_purna:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_riw_purna').getStore();
        store.proxy.extraParams = {
            PENGGUNA_ID:me.get_params(1),
            TABLE_NAME:'LAMARAN_PURNA',
        };
        store.load();
    }, 

    load_pindah:function(){
        var me = this,
            cmp = Ext.getCmp('page_lihat_tki');
            store = cmp.down('grid_riw_pindah').getStore();
        store.proxy.extraParams = {
            PENGGUNA_ID:me.get_params(1),
            TABLE_NAME:'LAMARAN_PINDAH',
        };
        store.load();
    },   

    detailriwayat:function(){
        var data = Ext.getCmp('page_lihat_tki').down('#gridriwayat').getSelectionModel().getSelection();
        data = data[0].data.index;
        Ext.getCmp('page_lihat_tki').down('#card').setActiveItem(data);
    }
});