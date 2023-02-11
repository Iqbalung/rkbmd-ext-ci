<?php 

class M_publik extends CI_Model
{
	
	function __construct()
	{
		parent::__construct();
		//$this->load->database();

	}

	public function get_bantuan($value='')
	{
		$data = array();
		if($this->lang->load($this->session->userdata('language')) != "id"){
			$data['syarat_ketentuan'] = "<p> Syarat ketentuan yang ditetapkan di bawah ini mengatur pemakaian jasa yang ditawarkan oleh PT. Koyoku terkait penggunaan situs www.koyoku.com. Pengguna disarankan membaca dengan seksama karena dapat berdampak kepada hak dan kewajiban Pengguna di bawah hukum. Dengan mendaftar dan/atau menggunakan situs www.koyoku.com, maka pengguna dianggap telah membaca, mengerti, memahami dan menyutujui semua isi dalam Syarat ketentuan. Syarat ketentuan ini merupakan bentuk kesepakatan yang dituangkan dalam sebuah perjanjian yang sah antara Pengguna dengan PT.Koyoku. Jika pengguna tidak menyetujui salah satu, sebagian, atau seluruh isi Syarat &	 ketentuan, maka pengguna tidak diperkenankan menggunakan layanan di www.koyoku.com.</p>
<p><em><strong>Definisi</strong></em></p>
<ol>
<li>PT. Koyoku adalah suatu perseroan terbatas yang menjalankan kegiatan usaha jasa web portal www.koyoku.com, yakni situs media sosial dan pencarian lowongan pekerjaan bagi TKI, situs job management bagi Agency dan Job Owner, dan situs human capital management bagi PPTKIS terdaftar. Selanjutnya disebut Koyoku.</li>
<li>Situs Koyoku adalah www.koyoku.com.</li>
<li>Syarat & ketentuan adalah perjanjian antara Pengguna dan Koyoku yang berisikan seperangkat peraturan yang mengatur hak, kewajiban, tanggung jawab pengguna dan Koyoku, serta tata cara penggunaan sistem layanan Koyoku.</li>
<li>Pengguna adalah pihak yang menggunakan layanan Koyoku, termasuk namun tidakterbatas pada TKI, agen PPTKIS, Agency, Job Owner, Sarana Kesehatan, Balai Latihan</li>
<li>Kerja Luar Negeri, Lembaga Sertifikasi Profesi, Lembaga Keuangan, Lembaga Asuransi, ataupun pihak lain yang sekedar berkunjung ke Situs Koyoku. TKI adalah Pengguna terdaftar yang melakukan pendaftaran maupun didaftarkan secara manual oleh Recruiter di PPTKIS di Situs Koyoku.</li>
<li>&nbsp;PPTKIS adalah Pengguna terdaftar yang memiliki suatu struktur organisasi dan melakukan proses Human Capital Management terhadap para TKI Situs Koyoku.</li>
<li>Recruiter adalah Pengguna terdaftar yang merupakan bagian dari Agen, yang dapat membantu perseorangan untuk mendaftarkan diri di Situs Koyoku.</li>
<li>&nbsp;Agency adalah Pengguna terdaftar yang merupakan agen di luar negeri, yang melakukan proses pengelolaan lowongan pekerjaan</li>
<li>Job Owner adalah Pengguna terdaftar yang merupakan mitra, perusahaan penyedia pekerjaan di luar negeri, dan dapat melakukan proses pengelolaan lowongan pekerjaan, serta pengelolaan tenaga kerja di bawahnya.</li>
<li>Sarana Kesehatan adalah Pengguna terdaftar yang merupakan partner dari PPTKIS, dan melakukan proses pengelolaan data pemeriksaan kesehatan bagi calon tenaga kerja.</li>
<li>Balai Latihan Kerja Luar Negeri adalah Pengguna terdaftar yang merupakan partner dari PPTKIS, dan melakukan proses pengelolaan data pelatihan kerja bagi calon tenaga kerja.</li>
<li>Lembaga Sertifikasi Profesi adalah Pengguna terdaftar yang merupakan partner dari PPTKIS, dan melakukan proses pengelolaan data sertifikasi profesi bagi calon tenaga kerja.</li>
<li>Lembaga Keuangan adalah Pengguna terdaftar yang merupakan partner dari PPTKIS, dan melakukan proses pengelolaan data pinjaman keuangan bagi calon tenaga kerja.</li>
<li>Lembaga Asuransi adalah Pengguna terdaftar yang merupakan partner dari PPTKIS, dan melakukan proses pengelolaan data asuransi bagi calon tenaga kerja, tenaga kerja aktif, dan tenaga kerja purna.</li>
</ol>
<p><em><strong>Akun</strong></em></p>
<ol>
<li>Pengguna dengan ini menyatakan bahwa pengguna adalah orang yang cakap dan mampu untuk mengikatkan dirinya dalam sebuah perjanjian yang sah menurut hukum.</li>
<li>Koyoku tidak memungut biaya pendaftaran kepada Pengguna.</li>
<li>Pengguna yang telah mendaftar berhak bertindak sebagai:</li>
<p>- Calon Tenaga Kerja - PPTKIS - Agency - Job Owner - Sarana Kesehatan - Balai Latihan Kerja Luar Negeri - Lembaga Sertifikasi Profesi - Lembaga Keuangan - Lembaga Asurans</p>
<li>Pengguna yang akan bertindak sebagai PPTKIS, Agency, Job Owner, Sarana Kesehatan,</li>
<li>Balai Latihan Kerja Luar Negeri, Lembaga Sertifikasi Profesi, Lembaga Keuangan, dan Lembaga Asuransi akan melewati proses verifikasi dan validasi oleh Koyoku terlebih dahulu, untuk memastikan bahwa pengguna tersebut telah terlegalisasi oleh badan yang berwenang.</li>
<li>Koyoku tanpa pemberitahuan terlebih dahulu kepada Pengguna, memiliki kewenangan untuk melakukan tindakan yang perlu atas setiap dugaan pelanggaran atau pelanggaran Syarat & ketentuan dan/atau hukum yang berlaku, yakni tindakan berupa suspensi akun, dan/atau penghapusan akun pengguna.</p>
<li>Pengguna bertanggung jawab secara pribadi untuk menjaga kerahasiaan akun dan password untuk semua aktivitas yang terjadi dalam akun Pengguna.</li>
<li> Koyoku tidak akan meminta email, username, password milik akun Pengguna untuk alasan apapun, oleh karena itu Koyoku menghimbau Pengguna agar tidak memberikan data tersebut maupun data penting lainnya kepada pihak yang mengatasnamakan Koyoku atau pihak lain yang tidak dapat dijamin keamanannya.</li>
<li>Pengguna setuju untuk memastikan bahwa Pengguna keluar dari akun di akhir setiap sesi dan memberitahu Koyoku jika ada penggunaan tanpa izin atas sandi atau akun Pengguna.</li>
<li> Pengguna dengan ini menyatakan bahwa Koyoku tidak bertanggung jawab atas kerugian atau kerusakan yang timbul dari penyalahgunaan akun Pengguna. Kebijakan Privasi Privasi Pengguna merupakan prioritas bagi Koyoku. Koyoku akan menjaga privasi Pengguna</p>";

	$data['privasi'] = "
<p> Privasi Pengguna merupakan prioritas bagi Koyoku. Koyoku akan menjaga privasi Pengguna dengan benar. Kebijakan privasi ini merupakan salah satu bentuk komitmen nyata dari Koyoku untuk melindungi informasi pribadi Pengguna.</p>
<p>Kebijakan privasi menjadi dasar atas hal-hal yang menyangkut data pribadi Pengguna. Mulai dari saat Pengguna melakukan pendaftaran, mengakses dan menggunakan layanan di Koyoku. Data-data tersebut akan digunakan oleh Koyoku selama proses berlangsung. Pengguna dapat melihat ketentuan-ketentuan lain pada Koyoku seperti &ldquo;Syarat dan Ketentuan&rdquo; dan dokumen lain yang ada di Koyoku. Pengguna diharapkan memperhatikan ketentuan-ketentuan dibawah untuk memahami dengan seksama mengenai perlakuan data / informasi yang diberikan oleh Pengguna kepada Koyoku. Dengan tetap mengakses dan menggunakan layanan Koyoku, Pengguna dianggap telah membaca dan menyetujui ketentuan mengenai data pribadi Pengguna sebagaimana tentuang dalam Kebijakan Privasi ini.</p>
<p><strong>Pengumpulan Informasi</strong></p>
<p>Koyoku mengumpulkan informasi pengguna dengan tujuan memproses dan memperlancar proses penggunaan situs Koyoku. Tindakan tersebut telah memperoleh persetujuan Pengguna pada saat pengumpulan informasi.</p>
<p> <strong>Pendaftaran</strong></p>
<p>Untuk membuat akun, Pengguna memberikan data yang mencakup nama, jenis kelamin, tempat tanggal lahir, nomor KTP, alamat sesuai KTP, alamat email, nomor ponsel, dan kata sandi.</p>
<p><strong>Profil</strong></p>
<p>Pengguna dapat menambahkan informasi yang ada di profil, seperti pendidikan, pengalaman kerja, pengalaman kursus, kompetensi, bidang minat, foto, dan dokumen persyaratan (scan KTP, scan Kartu Keluarga, scan Akte Kelahiran, scan Surat Izin dari keluarga untuk pergi bekerja ke luar negeri, dan scan Paspor). Informasi profil membantu Pengguna mendapatkan manfaat maksimal dari Layanan Koyoku, termasuk membantu PPTKIS dan Job Owner memberikan lowongan pekerjaan yang sesuai bagi Pengguna. Informasi profil yang bersifat sensitif seperti nomor KTP, alamat sesuai KTP, dan dokumen persyaratan hanya dapat diakses oleh pihak yang berwenang terhadap informasi tersebut dan diharuskan merahasiakan informasi tersebut.</p>
<p><strong>Posting dan Upload</strong></p>
<p>Koyoku mengumpulkan data pribadi dari Pengguna ketika Pengguna memberikan, memposting, atau menguploadnya ke layanan Koyoku, misalnya ketika mengisi formulir, menjawab survei (misalnya status kontrak kerja anda jika telah menjadi TKI Aktif di Luar Negeri), mengirim lamaran ke lowongan tertentu, dan mengirim undangan koneksi kepada PPTKIS maupun sesama Pengguna.</p>
<p><strong>Penggunaan Informasi</strong></p>
<p>Layanan Umum Koyoku menggunakan data Anda untuk mengesahkan dan mengotorisasi akses Anda ke layanan kami.
<ol>
<li>Koneksi <br>
<p> Dengan layanan kami, Anda dapat berkomunikasi, serta mengikuti informasi terbaru tentang sesama pencari kerja, PPTKIS, Agency, Job Owner, Sarana Kesehatan, Balai Latihan Kerja Luar Negeri, Lembaga Sertifikasi Profesi, Lembaga Keuangan, Lembaga Asuransi, dan kontak profesional lainnya. Untuk melakukan hal ini, Anda harus terkoneksi dengan profesional pilihan Anda, dan yang juga ingin terkoneksi dengan Anda.</p>
</li>
<li>Pekerjaan dan Karir<br>
<p> Dengan layanan kami, Anda dapat mengeksplorasi karir, mengevaluasi peluang karir, mencari dan ditemukan oleh peluang karir. Profil Anda dapat diakses oleh PPTKIS namun terbatas pada nama, pendidikan terakhir, jabatan terakhir, dan minat, guna mengelola lowongan jabatan yang sesuai dengan Anda. Setelah Anda melamar suatu pekerjaan yang terkoneksi pada PPTKIS tertentu, maka dokumen persyaratan yang Anda upload dapat diakses oleh PPTKIS untuk dilakukan verifikasi. Setelah Anda tergabung dengan mereka, keseluruhan data pribadi Anda dapat diakses oleh PPTKIS untuk dijadikan informasi lengkap anggota dan untuk sarana keamanan dan perlindungan Anda ketika berada di Luar Negeri.</p>
</li>
<li>Produktivitas <br>
<p> Dengan layanan kami, dapat berkolaborasi dengan rekan kerja untuk diajak berbisnis. Dengan layanan kami, Anda juga dapat berkomunikasi dengan profesional lain.</p>
</li>
</ol>
<p> <strong>Layanan Premium </strong></p>
<p>Dengan layanan premium kami, pengguna yang membayar dapat mengelola data lowongan pekerjaan, mencari dan menghubungi kandidat pekerjaan, rekan kerja, serta mengelola orang yang berada di bawah organisasinya. Pengguna premium terbagi menjadi:</p>
	<ol>
<li>PPTKIS<br>
<p>Sebagai PPTKIS, Anda dapat mengelola data lowongan yang ada, mengelola data tenaga kerja yang tergabung menjadi anggota Anda, melakukan koneksi terhadap Agency dan rekan kerja seperti Sarana Kesehatan, Balai Latihan Kerja Luar Negeri, Lembaga Sertifikasi Profesi, Lembaga Keuangan, dan Lembaga Asuransi. Anda dapat mengakses keseluruhan profil tenaga kerja yang tergabung menjadi anggota Anda. Profil mengenai Anda berupa grafik jumlah anggota tenaga kerja yang tergabung, struktur organisasi, deskripsi, fasilitas dan layanan, serta foto yang Anda bagikan dapat diakses secara publik oleh Anggota dan Pengunjung situs Koyoku.</p>
</li><li>Agency<br>
<p>Sebagai Agency, Anda dapat melakukan koneksi terhadap Job Owner dan PPTKIS di Indonesia dan mengelola data lowongan pekerjaan.</p>
</li><li>Job Owner<br>
<p>Sebagai Job Owner, Anda dapat melakukan koneksi terhadap Agency dan PPTKIS di Indonesia, mengelola data lowongan pekerjaan, mengelola tenaga kerja Indonesia yang bekerja pada perusahaan Anda, termasuk mengakses keseluruhan profil mereka.</p>
</li><li>Sarana Kesehatan<br>
<p>Sebagai Sarana Kesehatan, Anda dapat melakukan koneksi terhadap PPTKIS, dan mengelola data pemeriksaan kesehatan bagi calon tenaga kerja. 
</li><li>Balai Latihan Kerja Luar Negeri <br>
<p>Sebagai Balai Latihan Kerja Luar Negeri, Anda dapat melakukan koneksi terhadap PPTKIS, dan mengelola data pelatihan kerja bagi calon tenaga kerja. 
</li><li>Lembaga Sertifikasi Profesi <br>
<p>Sebagai Lembaga Sertifikasi Profesi, Anda dapat melakukan koneksi terhadap PPTKIS, dan mengelola data sertifikasi profesi bagi calon tenaga kerja.</p>
</li><li>Lembaga Keuangan<br>
<p>Sebagai Lembaga Keuangan, Anda dapat melakukan koneksi terhadap PPTKIS, dan mengelola data pinjaman keuangan bagi tenaga kerja.</p>
</li><li>Lembaga Asuransi<br>
<p>Sebagai Lembaga Asuransi, Anda dapat melakukan koneksi terhadap PPTKIS, dan mengelola data asuransi bagi calon tenaga kerja, tenaga kerja aktif, dan tenaga kerja purna.</p>
</li></ol>

 <p> Pengguna premium dapat menyimpan informasi tentang Anda hanya jika Anda telah menjadi anggota mereka. Pengguna premium yang terdaftar pada Layanan kami adalah yang hanya memiliki legalitas sesuai hukum yang berlaku dan yang sudah melewati proses verifikasi terlebih dahulu untuk menjaga keamanan data Anda. </p>
 <p> Koyoku dapat menggunakan seluruh informasi/data pribadi Pengguna untuk keperluan kelancaran proses yang ada didalam Koyoku dan juga untuk meningkatkan layanan bagi Pengguna. Informasi pribadi yang Koyoku kumpulkan dapat digunakan atau dibagikan dengan Pengguna lain untuk keperluan pemanfaatan layanan seperti proses pendaftaran, verifikasi, dan transaksi/kegiatan lainnya. 
 <p> Koyoku dapat menggunakan informasi untuk menjawab permintaan Pengguna tentang tambahan informasi tertentu, untuk menghubungi Pengguna, untuk mengurus keanggotaan Pengguna atau untuk tujuan administrasi lainnya. Koyoku mungkin juga memakai informasi Pengguna untuk menyelesaikan perselisihan, untuk memecahkan masalah, untuk tujuan pemasaran, atau untuk keperluan lainnya.  
 Koyoku dapat menggunakan atau mengolah data Pengguna dengan tujuan untuk rencana pengembangan Koyoku kedepannya sesuai dengan kebutuhan pasar. </p>
 <p> Koyoku dapat menggunakan informasi tersebut untuk melakukan serangkaian pemeliharaan situs Koyoku dan menghasilkan berbagai kumpulan laporan untuk analisa internal, penelitian, dan tujuan pengamatan, yang tentunya hal ini akan menjadi pertimbangan bagi Koyoku dalam membangun dan meningkatkan Koyoku dan layanan untuk Pengguna. Melalui data pribadi yang Pengguna berikan pada Koyoku, Koyoku dapat menghubungi Pengguna sewaktu-waktu baik melalui email, surat, telepon, fax, dan lain sebagainya demi peningkatan layanan yang Koyoku berikan pada Pengguna. Hal ini dilakukan baik selama transaksi dan atau kegiatan lainnya yang membutuhkan peran serta Pengguna secara langsung.</p>

<p>Koyoku dapat meminta Pengguna untuk melengkapi survei yang Koyoku gunakan untuk tujuan penelitian atau lainnya, meskipun Pengguna tidak harus menanggapinya. Koyoku tidak bertanggung jawab atas penyalahgunaan informasi yang dilakukan pihak lain setelah mendapatkan informasi pribadi Pengguna melalui web Koyoku</p>
<p>&nbsp;</p>
<p><strong>&nbsp;Pengungkapan Informasi</strong></p>
<p>Koyoku menjamin tidak ada penjualan, pemberian dan atau meminjamkan informasi/data pribadi Pengguna kepada pihak ketiga lain, tanpa terdapat izin dari Pengguna. Koyoku hanya akan menggunakan data pribadi Pengguna jika terjadi hal-hal berikut:</p>
<p>- Koyoku asetnya diakuisisi atau merger dengan pihak lain, maka data pribadi Pengguna yang dimiliki oleh Koyoku akan menjadi salah satu asset yang digabung.</p>
<p>- Jika ada alasan kuat yang dapat dipercaya bahwa pengungkapan informasi diperlukan untuk mencegah hal-hal yang tidak dikehendaki atau dengan tujuan penegakan hukum. Maka Koyoku berkewajiban mengungkapkan dan/atau berbagi data pribadi Pengguna dalam upaya mematuhi kewajiban hukum.</p>
<p>- Untuk melindungi hak, properti, atau keselamatan Koyoku, pelanggan Koyoku, atau pihak lain. Termasuk didalamnya pertukaran informasi dengan perusahaan dan organisasi lain untuk tujuan perlindungan Koyoku beserta Penggunanya.</p>
<p>&nbsp;</p>
<p><strong>Keamanan Informasi Pribadi</strong></p>
<p>Koyoku memastikan bahwa informasi pribadi Pengguna tersimpan dengan aman. Jika Pengguna merasa Koyoku telah melanggar hak privasi Pengguna. Pengguna bisa menghubungi Koyoku melalui e-mail layanan@Koyoku.com atau Kontak Koyoku. Koyoku tidak bertanggung jawab atas kerugian yang dapat ditimbulkan akibat kelalaian Pengguna dalam menjaga kerahasiaan password-nya. Karena password adalah kunci masuk untuk mengakses akun yang dimiliki masing-masing Pengguna, kerahasiaan password merupakan tanggung jawab masing-masing Pengguna. Oleh karena itu, silakan gunakan nomor unik, huruf dan karakter khusus, dan jangan berbagi&nbsp;password kepada siapa pun. Jika&nbsp;password&nbsp;Pengguna telah disalahgunakan oleh pihak lain untuk alasan apapun, Pengguna harus segera menghubungi Koyoku dan atau mengganti password. Disarankan agar Pengguna selalu&nbsp;log out&nbsp;dari akun Pengguna dan menutup&nbsp;browser ketika selesai menggunakan komputer bersama untuk menghindari hal-hal yang tidak Pengguna inginkan.</p>
<p>&nbsp;</p>
<p><strong>Perubahan Data</strong></p>
<p>Pengguna dapat memperbarui Informasi pribadi Pengguna kapan saja dengan masuk (login) pada Koyoku. Koyoku mengambil langkah-langkah untuk berbagi pembaruan informasi pribadi Pengguna jika informasi pribadi tersebut terkait dengan keperluan sebagaimana disebutkan pada bagian Penggunaan Informasi. Koyoku dapat menggunakan sistem pembaruan otomatis (sesuai permintaan Pengguna) untuk membetulkan dan atau memperbarui data pribadi Pengguna. Pengguna dapat menghubungi bagian Layanan Pelanggan Koyoku melalui e-mail layanan@Koyoku.com atau Kontak Koyoku.</p>
<p>&nbsp;</p>
<p><strong>Perlindungan Anak</strong></p>
<p>Demi kebutuhan untuk perlindungan anak, Koyoku tidak memfasilitasi pendaftaran akun yang dilakukan oleh anak-anak ( kurang dari 18 tahun ). Koyoku akan melakukan validasi umur pada tahap awal pendaftaran.</p>
<p> <strong>Cookies</strong></p>
<p>Cookies merupakan data/informasi yang diciptakan untuk disimpan pada browser saat Pengguna sedang mengakses Koyoku. Cookies dapat diambil untuk mengetahui aktivitas yang telah dilakukan Pengguna pada waktu sebelumnya. Cookies juga bisa menyimpan informasi diri Pengguna seperti nama, e-mail, alamat rumah atau kantor, nomor telepon yang dapat digunakan untuk mengidentifikasi Pengguna. Hal ini hanya bisa terjadi apabila Pengguna memberikan informasi tersebut. Situs web tidak dapat mengakses informasi yang tidak pernah diberikan dan juga tidak dapat mengakses berkas lainnya pada komputer Pengguna. Cookies menyimpan pengaturan atau preferensi Pengguna pada situs Koyoku, misalnya bahasa yang dipilih atau lokasi. Ketika Pengguna kembali ke situs Koyoku, akan dikirimkan cookies yang bersesuaian. Sehingga dengan demikian, Koyoku dapat menampilkan informasi yang sesuai dengan pengaturan atau preferensi Pengguna. Pengguna dapat melakukan pengaturan pada browser yang digunakannya untuk mengaktifkan / menon-aktifkan cookies. Hal ini tentunya demi kenyamanan Pengguna selama mengakses Koyoku.</p>
<p>&nbsp;</p>
<p><strong>Merk Dagang</strong></p>
<p>Nama dan logo Koyoku telah terdaftar pada Direktorat Jenderal Hak Kekayaan Intelektual Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia. Selain nama dan logo, pada situs Koyoku juga berisi informasi / data lain yang telah didaftarkan sesuai ketentuan yang ada. Informasi / data tersebut misalnya merek dagang, desain konsep, user interface dan data-data lainnya yang secara hukum diakui menjadi hak milik Koyoku. Pihak lain dilarang untuk menggunakan nama, logo dan atau data-data lain milik Koyoku untuk kepentingan pribadi dan atau kelompok tertentu tanpa persetujuan resmi dan sah dari pihak Koyoku. Jika ditemukan penyalahgunaan atau bentuk pelanggaran hukum lainnya, maka akan dituntut sesuai ketentuan perundang-undangan yang berlaku. Tindakan hukum juga akan dilakukan apabila ditemukan tindakan percobaan (baik yang disengaja atau tidak disengaja) untuk mengubah, merusak situs Koyoku dan atau perangkat server yang ada di dalamnya, tanpa izin resmi dan sah dari pihak Koyoku. Perubahan Kebijakan Privasi Koyoku dapat memperbaharui kebijakan ini sewaktu-waku tanpa ada pemberitahuan sebelumnya. Perubahan kebijakan akan diberikan disini dan berlaku serta diterapkan untuk seluruh informasi didalamnya. Dengan tetap mengakses dan menggunakan layanan Koyoku, maka pengguna dianggap menyetujui perubahan-perubahan dalam Kebijakan Privasi ini.</p>
<p>&nbsp;</p>";

	$data['faq'] = "<p><strong>Bagaimana cara mendaftar di Koyoku?</strong></p>
<p><em>Tata cara mendaftar untuk menjadi anggota di Koyoku dapat dilihat di menu Ketentuan</em> <em>Umum &ndash; Pendaftaran</em></p>
<p>&nbsp;</p>
<p><strong>Apakah saya dikenai biaya pendaftaran dan biaya keanggotaan?</strong></p>
<p><em>Koyoku tidak menarik biaya bagi calon tenaga kerja yang mendaftar dan bergabung di&nbsp;<em>Koyoku.</em></em></p>
<p>&nbsp;</p>
<p><strong>Bagaimana jika saya lupa password?&nbsp;</strong></p>
<p><em>Gunakan fitur Lupa Password jika Anda tidak dapat mengingat password Anda.</em></p>
<p>&nbsp;</p>
<p><strong>Bagaimana mencari lowongan yang saya inginkan?</strong></p>
<p><em>Anda dapat mencari lowongan pekerjaan yang diinginkan dengan melakukan pencarian</em> <em>berdasarkan bidang pekerjaan, lokasi pekerjaan, dan negara penempatan.</em></p>
<p>&nbsp;</p>
<p><strong>Bagaimana cara melakukan apply terhadap lowongan pekerjaan tertentu?</strong></p>
<p><em>Anda dapat melihat tata cara apply lowongan di sini.</em></p>
<p>&nbsp;</p>
<p><em><strong>Apakah saya dapat melakukan lowongan pekerjaan tanpa harus tergabung sebagai</strong></em> <em><strong>anggota di PPTKIS?</strong></em></p>
<p><em>Anda tidak diharuskan untuk tergabung terlebih dahulu dengan PPTKIS, namun kami</em> <em>menyarankan bagi Anda yang melamar pekerjaan informal untuk bergabung karena ada</em> <em>proses pelatihan kerja, sertifikasi profesi, pengurusan asuransi dan keuangan yang</em> <em>mudah, yang tidak bisa Anda dapatkan jika Anda tidak bergabung dengan PPTKIS.</em></p>";

		}else{
			$data['syarat_ketentuan'] = "";
			$data['privasi'] = "";
			$data['faq'] = "";
		}
		
	
	return $data;

	}

	

}