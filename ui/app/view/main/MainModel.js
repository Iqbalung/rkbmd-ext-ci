/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('koyoku.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.main',

	data: {
		name: 'RKBMD',
		footer: 'RKBMD Banjarnegara @ 2023',

		message :'',

		Logout: 'Keluar',
		mn_beranda: 'Beranda',
		mn_tambah: 'tambah',

		/*icon Glyph*/
		icon_tambah: 'xf067@fontAwesome',
		icon_ubah: 'xf044@fontAwesome',
		icon_hapus: 'xf067@fontAwesome',
		icon_cetak: 'xf067@fontAwesome',
		icon_cari: 'xf067@fontAwesome',

		user: {
			ID: '',
			NAMA: '',
			EMAIL: '',
			NO_TELP: '',
			NO_KTP: '',
			USERGROUP_ID: '',
			ALAMAT: '',
			DESKRIPSI: '',
			PHOTO: ''
		},
		
		TAHUN: '',

		INSTANSI: {
			ID: '',
			NAMA: '',
			ALAMAT: '',
			LEGALITAS: '',
			DES_PENDEK: '',
			DES_PANJANG: '',
			NOMOR_TELPHONE: '',
			LOGO: '',
			COVER: '',
			STRUKTUR_ORGANISASI: '',
			WILAYAH_ID : ''
		},

		akses : {
		}
	}

	//TODO - add data, formulas and/or methods to support your view
});

//Ext.getCmp('app_main').getViewModel().setData({'mn_beranda':'Home'})