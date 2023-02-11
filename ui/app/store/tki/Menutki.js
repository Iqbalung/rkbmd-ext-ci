Ext.define('koyoku.store.tki.Menutki', {
    extend: 'Ext.data.Store',
    alias: 'store.menutki',
    fields:['name', 'email', 'phone'],
    data:{'items':[
        {"name":"Pengalaman", "index":0},
        {"name":"Pendidikan", "index":1},
        {"name":"Keluarga", "index":2},
        {"name":"Media", "index":3},
        {"name":"Medical Pra", "index":4},
        {"name":"Medical Full", "index":5},
        {"name":"Perjanjian Kerja", "index":6},                        
        {"name":"Asuransi", "index":7},            
        {"name":"Legalisasi BP3TKI", "index":8} ,           
        {"name":"VISA", "index":9},            
        {"name":"Lembaga Keuangan", "index":10} ,           
        {"name":"PAP", "index":11},  
        {"name":"Keberangkatan", "index":12},                      
        {"name":"Hilang", "index":13},          
        {"name":"Kasus", "index":14},         
        {"name":"Pindah", "index":15},         
        {"name":"Kepulangan", "index":16},          
            
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});
