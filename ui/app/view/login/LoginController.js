Ext.define('koyoku.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {

        me = this;

        me.getView().down('form').submit({
            url: 'http://localhost/project/rkbmd/api/index.php/login/do_login',
            success: function(form, action) {
                var success_opt = true;
                try {
                    res = Ext.JSON.decode(action.response.responseText);
                } catch (err) {
                    var success_opt = false;
                    Ext.Msg.alert('Error', form.responseText);
                }
                if (success_opt) {
                    if (res.success) {
                        // Remove Login Window
                        /*me.getView().destroy();
                        // Add the main view to the viewport
                        Ext.create({
                            xtype: 'app-main'
                        });*/
                        localStorage.setItem("is_login", 'yes');
                        localStorage.setItem("IS_BIDANG_TELAAH", res.data.IS_BIDANG_TELAAH);
                        koyoku.app.IS_BIDANG_TELAAH = res.data.IS_BIDANG_TELAAH;
                        window.location.reload();
                    }
                    Ext.Msg.alert('Informasi', res.msg);
                }
            },
            failure: function(form, action) {
                localStorage.setItem("is_login", 'no');
                Ext.Msg.alert('Informasi', 'Login Gagal');
            }
        });

    }
});