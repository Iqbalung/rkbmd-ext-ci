/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('koyoku.view.job.JobModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.job',

	data: {
		
		detail : {
			JOB_ID : '',
	        JOB_JABATAN_ID : '',
	        JOB_SLUG : '',
	        JOB_TUGAS : '',
	        JOB_DESCRIPTION : '',
	        JOB_SALARY : '',
	        MATA_UANG_ID : '',
	        KONTRAK_ID : '',
	        OWNER_ID : '',
	        JOB_START_DATE : '',
	        JOB_END_DATE : '',
	        BARANG_ID : '',
	        JOB_JENJANG_KARIR : '',
	        BIDANG_ID : '',
	        JOB_FASILITAS_MAKAN : '',
	        JOB_FASILITAS_TT : '',
	        JOB_FASILITAS_TRANSPORTASI : '',
	        JOB_FASILITAS_KESEHATAN : '',
	        JOB_FASILITAS_LIBURAN : '',
	        JOB_FASILITAS_KOMUNIKASI : '',
	        JABATAN_ID : '',
	        JABATAN_NAMA : '',
	        JABATAN_SLUG : '',
	        JABATAN_TUGAS : '',
	        JABATAN_DESKRIPSI : '',
	        LINGKUNGAN_LING_ID : '',
	        BIDANG_NAMA : '',
	        OWNER_NAMA : '',
	        WILAYAH_ID : '',
	        OWNER_LOGO : '',
	        OWNER_NOMOR_TELPHONE : '',
	        OWNER_ALAMAT_LENGKAP : '',
	        OWNER_WEBSITE : '',
	        MATAUANG_ID : '',
	        MATAUANG_CAPTION : '',
	        WILAYAH_NAMA : '',
		}
	}

	//TODO - add data, formulas and/or methods to support your view
});

//Ext.getCmp('app_main').getViewModel().setData({'mn_beranda':'Home'})