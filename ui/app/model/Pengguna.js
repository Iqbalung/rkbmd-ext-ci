Ext.define('koyoku.model.Pengguna', {
    extend: 'koyoku.model.Base',

    fields: [
		'ID',
		'NAMA',
		'EMAIL',
		'KOMPETENSI',
		'BIDANG',
		'WILAYAH_MINAT',
		'PHOTO',
		'NO_KTP',
		'NEGARA',
		'ALAMAT_TINGGAL',
		'WILAYAH_ID_TINGGAL',
		'ALAMAT_KTP',
		'WILAYAH_ID_KTP',
		'TEMPAT_LAHIR',
		'TANGGAL_LAHIR',
		'JENIS_KELAMIN',
		'NO_TELP',
		'USERGROUP_ID',
		'USERGROUP',
		'DATE_CREATED',
		'LAST_UPDATED',
		'PASSWORD',
		'UID',
		'ACTIVE'
    ]
});
