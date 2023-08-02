Ext.define('koyoku.components.field.TreeFieldBarang', {
	extend: 'Ext.form.field.Trigger',
    xtype: 'barangtreefield',
    requires: [        
        'koyoku.components.tree.Barang'    
    ],
    trigger1Cls: '',
    trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger',
    hasSearch 	: false,
    paramName 	: 'query',
    isEnter 	: false,
	window: null,
	dataSelected: [],
	clearIcon : false,
	clearable: false,
    initComponent: function(config) {
        var me = this;
		
		me.initConfig(config);
        me.callParent(arguments);
        me.on('specialkey', function(f, e){
            if (e.getKey() == e.ENTER) {
				me.isEnter=true;
                me.onTrigger2Click();
            }
        });
		me.on("click", function(f, e) {
			
		})

    },

    afterRender: function(){
        this.callParent();
        this.triggerCell.item(0).setDisplayed(false);
    },

    onTrigger1Click : function(){
        var me = this;

        if (me.hasSearch) {
			me.fireEvent("reset",me);
			
            me.setValue('');
            me.hasSearch = false;
            me.triggerCell.item(0).setDisplayed(false);
            me.updateLayout();
        }
    },

    onTrigger2Click : function(){
        var me = this,
            value = me.getValue();        
		if(me.isEnter===true){
            alert("1");
			me.fireEvent("enter", value,me);
		}else
			me.fireEvent("click", value,me);
        
		
		me.fireEvent("search", value,me);
		
		me.isEnter=false;
		
        if (value.length > 0) {
         
            me.hasSearch = true;
            me.triggerCell.item(0).setDisplayed(true);
            me.updateLayout();
        }

		me.window = me.createWindow();
		var str = me.window.down("tree_barang").getStore();
		str.getRootNode().data.BARANG_NAMA = me.root_text;
		me.window.show();
    },
	createWindow: function() {
		var me = this;		
		me.dataSelected = [];
		return  Ext.create('Ext.Window', {
                    id: 'window_barang',
                    modal: true,
					title: 'Barang',
                    items: [Ext.create('koyoku.components.tree.Barang', {
                        params: me.params,
                        root_text: me.root_text,
                        height : 450,
                        width : 640,
                        modal : true,
                        tbar: [ '->',
                    {
                        labelWidth  : 50,
                        xtype: 'textfield',
                        triggerAction: 'all',
                        typeAhead: true,
                        queryMode: 'remote',
                        minChars: 2,
                        itemId: 'pencarian_barang',
                        forceSelection: false,
                        displayField: 'BARANG_NAMA',
                        width: 250,
                        emptyText: "Ketik Kata Kunci",
                        hideTrigger: true,
                        listeners: {
                            specialkey: function(field, e){
                                if (e.getKey() == e.ENTER) {
                                    var win = Ext.getCmp('window_barang'),
                                        grid = win.down('tree_barang');
                                        store = grid.getStore();                                                                        

                                    store.proxy.extraParams.f_text = field.getValue(); 
                                    store.load();
                                }
                            }

                        }
                    }],
                        bbar: [
                            '->', {
                                text: 'Pilih',
                                handler: function(){
                                    var win = Ext.getCmp('window_barang');
                                    var rec = win.down('tree_barang').getSelectionModel().getSelection();
                                    if(rec.length>0){
                                        // var rowData = rec[0].data;
                                        // if (rowData.TIPE == "SUB") {                                                
                                        //     me.down('[name=SUB_BARANG_ID]').setValue(rec[0].data.BARANG_ID);
                                        //     me.down('[name=SUB_BARANG_NAMA]').setValue(rec[0].data.BARANG_NAMA);
                                        //     me.down('[name=BARANG_ID]').setValue(rec[0].data.PARENT_BARANG_ID);
                                        //     me.down('[name=BARANG_NAMA]').setValue(rec[0].data.PARENT_BARANG_NAMA);
                                        // } else {
                                        //     me.down('[name=BARANG_ID]').setValue(rec[0].data.BARANG_ID);
                                        //     me.down('[name=BARANG_NAMA]').setValue(rec[0].data.BARANG_NAMA);
                                        // }						
										me.dataSelected = rec;				
										me.fireEvent("onPilih", rec, me);
                                        win.destroy();
                                    }else{
                                        Ext.Msg.alert('Informasi', 'Pilih data terlebih dahulu.');
                                    }
                                }
                            }
                        ]
                    })]
                });
    }
});