Ext.define('koyoku.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'koyoku.view.login.LoginController',
        'Ext.form.Panel',
        'koyoku.components.combo.Tahun'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'Email',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            fieldLabel: 'Tahun',
            xtype:'combo_tahun',
            allowBlank: false,
            name : 'tahun'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});