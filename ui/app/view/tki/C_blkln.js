Ext.define('koyoku.view.tki.C_blkln', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.c_blkln',

    add_grid_crud() {
        grid = this.getView().down('grid_pend_informal');
        new_index = grid.getStore().getCount();
        grid.getStore().insert(new_index, {
            ID: ''
        });

        grid.getSelectionModel().select(new_index);
        var rec = grid.getSelectionModel().getSelection()[0];
        var editor = grid.plugins[0];
        editor.startEdit(rec, 0);

    },

    simpan() {
        grid = this.getView().down('grid_pend_informal');
        grid_tki = Ext.getCmp("page_tki").down('grid_ctki')
        grid.getStore().clearFilter();
        tableInfromal = grid.getStore().getRange();
        grid.getStore().filter('HAPUS', null);

        //ambil kompetensi softskill dari combo
        data_informal = tableInfromal.map(function(key, index) {
            return key.data
        });

        data_job = Ext.getCmp('window_pend_informal').down('form').getForm().getValues();

        data_informal = JSON.stringify(data_informal);
        Ext.Ajax.request({
                    url: "../api/index.php/Tki/saveblkln",
                    params: {
                        DATA: data_informal,
                        JOB_ID: data_job.JOB_ID,
                        PEKERJA_ID: data_job.PEKERJA_ID,
                        LAMARAN_ID: data_job.ID,
                    },
                    success: function(form, action, data) {
                        var success_opt = true;
                        try {
                            res = Ext.JSON.decode(form.responseText);
                        } catch (err) {
                            var success_opt = false;
                            Ext.Msg.alert('Error', form.responseText);
                        }
                        if (success_opt) {
                            if (res.success) {
                               Ext.getCmp('window_pend_informal').destroy();
                               grid_tki.getStore().load();


                            }
                            Ext.Msg.alert('Informasi', res.msg);

                        }
                    },
                    failure: function(form) {
                        Ext.Msg.alert('Error', form.responseText);
                        return false;
                    }
                });

    },

    upd_grid_crud() {
        grid = this.getView().down('grid_pend_informal');
        var rec = grid.getSelectionModel().getSelection();
        if (rec.length > 0) {
            var editor = grid.plugins[0];
            editor.startEdit(rec[0], 0);
        } else {
            Ext.Msg.alert('Info', 'Pilih data Terlebih dahulu');
        }
    },

    del_grid_crud() {
        grid = this.getView().down('grid_pend_informal');
        var rec = grid.getSelectionModel().getSelection();
        if (rec.length > 0) {
            rec[0].set('HAPUS', 1);
            grid.getStore().filter('HAPUS', null);
        } else {
            Ext.Msg.alert('Info', 'Pilih data Terlebih dahulu');
        }
    }
});