/*
Navicat MySQL Data Transfer

Source Server         : 192.168.1.18
Source Server Version : 100109
Source Host           : 192.168.1.18:3306
Source Database       : koyoku_live

Target Server Type    : MYSQL
Target Server Version : 100109
File Encoding         : 65001

Date: 2017-08-25 18:32:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ALAT_KERJA
-- ----------------------------
DROP TABLE IF EXISTS `ALAT_KERJA`;
CREATE TABLE `ALAT_KERJA` (
  `ALAT_KERJA_ID` int(11) NOT NULL AUTO_INCREMENT,
  `ALAT_KERJA_NAMA` varchar(255) NOT NULL,
  `JABATAN_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ALAT_KERJA_ID`),
  KEY `ALAT_KERJA_ID` (`ALAT_KERJA_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of ALAT_KERJA
-- ----------------------------

-- ----------------------------
-- Table structure for ALAT_KERJA_JOB
-- ----------------------------
DROP TABLE IF EXISTS `ALAT_KERJA_JOB`;
CREATE TABLE `ALAT_KERJA_JOB` (
  `ALAT_KERJA_ID` int(11) NOT NULL AUTO_INCREMENT,
  `ALAT_KERJA_NAMA` varchar(255) NOT NULL,
  `JOB_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ALAT_KERJA_ID`),
  KEY `ALAT_KERJA_ID` (`ALAT_KERJA_ID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of ALAT_KERJA_JOB
-- ----------------------------

-- ----------------------------
-- Table structure for DOKUMEN
-- ----------------------------
DROP TABLE IF EXISTS `DOKUMEN`;
CREATE TABLE `DOKUMEN` (
  `DOKUMEN_ID` int(11) NOT NULL AUTO_INCREMENT,
  `DOKUMEN_NAMA` varchar(100) DEFAULT NULL,
  `DOKUMEN_NAMA_GENERATE` varchar(100) DEFAULT NULL,
  `DOKUMEN_TIPE` varchar(50) DEFAULT NULL,
  `DOKUMEN_UKURAN` varchar(20) DEFAULT NULL,
  `KLASIFIKASI_ID` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`DOKUMEN_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of DOKUMEN
-- ----------------------------

-- ----------------------------
-- Table structure for HELP
-- ----------------------------
DROP TABLE IF EXISTS `HELP`;
CREATE TABLE `HELP` (
  `HELP_ID` int(11) NOT NULL AUTO_INCREMENT,
  `HELP_JUDUL` varchar(100) DEFAULT NULL,
  `PEKERJA_ID` varchar(100) DEFAULT NULL,
  `HELP_DATE` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`HELP_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of HELP
-- ----------------------------

-- ----------------------------
-- Table structure for HELP_CHAT
-- ----------------------------
DROP TABLE IF EXISTS `HELP_CHAT`;
CREATE TABLE `HELP_CHAT` (
  `CHAT_ID` int(11) NOT NULL AUTO_INCREMENT,
  `CHAT_DATE` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `PENGIRIM_ID` varchar(100) DEFAULT NULL,
  `CHAT_TEXT` text,
  `HELP_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`CHAT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of HELP_CHAT
-- ----------------------------

-- ----------------------------
-- Table structure for JOB
-- ----------------------------
DROP TABLE IF EXISTS `JOB`;
CREATE TABLE `JOB` (
  `JOB_ID` int(11) NOT NULL AUTO_INCREMENT,
  `JOB_JABATAN_ID` int(11) NOT NULL,
  `JOB_SLUG` varchar(100) DEFAULT NULL,
  `JOB_TUGAS` varchar(255) DEFAULT NULL,
  `JOB_SALARY` int(11) NOT NULL,
  `MATA_UANG_ID` int(11) NOT NULL,
  `KONTRAK_ID` int(11) NOT NULL,
  `OWNER_ID` int(11) NOT NULL,
  `JOB_START_DATE` date NOT NULL,
  `JOB_END_DATE` date NOT NULL,
  `AGEN_ID` int(11) NOT NULL,
  `JOB_JENJANG_KARIR` int(11) NOT NULL,
  `BIDANG_ID` varchar(11) DEFAULT NULL,
  `JOB_FASILITAS_MAKAN` varchar(100) DEFAULT NULL,
  `JOB_FASILITAS_TT` varchar(100) DEFAULT NULL,
  `JOB_FASILITAS_TRANSPORTASI` varchar(100) DEFAULT NULL,
  `JOB_FASILITAS_KESEHATAN` varchar(100) DEFAULT NULL,
  `JOB_FASILITAS_LIBURAN` varchar(100) DEFAULT NULL,
  `JOB_FASILITAS_KOMUNIKASI` varchar(100) DEFAULT NULL,
  `PENDIDIKAN_ID` varchar(100) DEFAULT NULL,
  `JOB_KEBUTUHAN` varchar(100) DEFAULT NULL,
  `JOB_FASILITAS_LAINYA` varchar(100) DEFAULT NULL,
  `JABATAN_NAMA` varchar(45) NOT NULL,
  `JABATAN_TUGAS` varchar(255) NOT NULL,
  `JABATAN_DESKRIPSI` varchar(255) NOT NULL,
  `LINGKUNGAN_LING_ID` int(11) DEFAULT NULL,
  `JABATAN_SERTIFIKAT` varchar(100) DEFAULT NULL,
  `JABATAN_JURUSAN` varchar(100) DEFAULT NULL,
  `JOB_SALARY_MAX` int(11) DEFAULT NULL,
  `DATE_CREATED` timestamp NULL DEFAULT NULL,
  `WILAYAH_ID` varchar(100) DEFAULT NULL,
  `PPTKIS_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`JOB_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of JOB
-- ----------------------------

-- ----------------------------
-- Table structure for KLASIFIKASI_LING_ITEM
-- ----------------------------
DROP TABLE IF EXISTS `KLASIFIKASI_LING_ITEM`;
CREATE TABLE `KLASIFIKASI_LING_ITEM` (
  `KLASIFIKASI_ITEM_ID` int(11) NOT NULL AUTO_INCREMENT,
  `KLASIFIKASI_ITEM_NAMA` varchar(45) DEFAULT NULL,
  `KLASIFIKASI_ITEM_TYPE` int(11) DEFAULT NULL,
  `KLASIFIKASI_ITEM_VALUE` varchar(11) DEFAULT NULL,
  `KLASIFIKASI_LING_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`KLASIFIKASI_ITEM_ID`),
  KEY `KLASIFIKASI_LING_ID` (`KLASIFIKASI_LING_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of KLASIFIKASI_LING_ITEM
-- ----------------------------

-- ----------------------------
-- Table structure for KLASIFIKASI_LINGKUNGAN
-- ----------------------------
DROP TABLE IF EXISTS `KLASIFIKASI_LINGKUNGAN`;
CREATE TABLE `KLASIFIKASI_LINGKUNGAN` (
  `KLASIFIKASI_LING_ID` int(11) NOT NULL AUTO_INCREMENT,
  `KLASIFIKASI_LING_NAMA` varchar(25) DEFAULT NULL,
  `JABATAN_ID` varchar(100) DEFAULT NULL,
  `KLASIFIKASI_LING_ITEM` varchar(100) DEFAULT NULL,
  `KLASIFIKASI_LING_VALUE` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`KLASIFIKASI_LING_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of KLASIFIKASI_LINGKUNGAN
-- ----------------------------

-- ----------------------------
-- Table structure for KLASIFIKASI_LINGKUNGAN_JABATAN
-- ----------------------------
DROP TABLE IF EXISTS `KLASIFIKASI_LINGKUNGAN_JABATAN`;
CREATE TABLE `KLASIFIKASI_LINGKUNGAN_JABATAN` (
  `KLASIFIKASI_LING_ID` int(11) NOT NULL AUTO_INCREMENT,
  `KLASIFIKASI_LING_NAMA` varchar(25) DEFAULT NULL,
  `JOB_ID` varchar(100) DEFAULT NULL,
  `KLASIFIKASI_LING_ITEM` varchar(100) DEFAULT NULL,
  `KLASIFIKASI_LING_VALUE` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`KLASIFIKASI_LING_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of KLASIFIKASI_LINGKUNGAN_JABATAN
-- ----------------------------

-- ----------------------------
-- Table structure for KLASIFIKASI_LINGKUNGAN_JOB
-- ----------------------------
DROP TABLE IF EXISTS `KLASIFIKASI_LINGKUNGAN_JOB`;
CREATE TABLE `KLASIFIKASI_LINGKUNGAN_JOB` (
  `KLASIFIKASI_LING_ID` int(11) NOT NULL AUTO_INCREMENT,
  `KLASIFIKASI_LING_NAMA` varchar(25) DEFAULT NULL,
  `JOB_ID` varchar(100) DEFAULT NULL,
  `KLASIFIKASI_LING_ITEM` varchar(100) DEFAULT NULL,
  `KLASIFIKASI_LING_VALUE` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`KLASIFIKASI_LING_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of KLASIFIKASI_LINGKUNGAN_JOB
-- ----------------------------

-- ----------------------------
-- Table structure for KOMPETENSI_JABATAN
-- ----------------------------
DROP TABLE IF EXISTS `KOMPETENSI_JABATAN`;
CREATE TABLE `KOMPETENSI_JABATAN` (
  `JABATAN_ID` varchar(100) DEFAULT NULL,
  `KOMPETENSI_ID` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of KOMPETENSI_JABATAN
-- ----------------------------
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('124', '13');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('124', '15');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('124', '10');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('124', '17');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('125', '11');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('125', '11');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('126', '16');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('126', '14');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('126', '18');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('126', '13');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('126', '10');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('126', '15');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('126', '9');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('129', '13');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('129', '19');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('129', '10');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('129', '16');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('129', '15');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('129', '17');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('129', '18');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('133', '19');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('133', '18');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('133', '17');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('133', '15');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('133', '19');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('133', '18');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('133', '10');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('133', '17');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('137', '14');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('137', '10');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('137', '15');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('137', '16');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('137', '17');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('137', '19');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('137', '18');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('1', '9');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('1', '9');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('4', '15');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('4', '14');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('4', '15');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('4', '14');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('4', '15');
INSERT INTO `KOMPETENSI_JABATAN` VALUES ('4', '14');

-- ----------------------------
-- Table structure for LAMARAN
-- ----------------------------
DROP TABLE IF EXISTS `LAMARAN`;
CREATE TABLE `LAMARAN` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PEKERJA_ID` int(11) NOT NULL,
  `JOB_ID` int(11) NOT NULL,
  `DATE_CREATED` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `STATUS_ID` varchar(10) DEFAULT NULL,
  `REKRUITER_ID` int(11) DEFAULT NULL,
  `PPTKIS_ID` int(11) DEFAULT NULL,
  `ID_TKI` varchar(100) DEFAULT NULL,
  `BNP2TKI_TKI_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `PEKERJA_ID` (`PEKERJA_ID`),
  KEY `JOB_ID` (`JOB_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of LAMARAN
-- ----------------------------

-- ----------------------------
-- Table structure for LAMARAN_ASURANSI
-- ----------------------------
DROP TABLE IF EXISTS `LAMARAN_ASURANSI`;
CREATE TABLE `LAMARAN_ASURANSI` (
  `ASURANSI_ID` int(11) NOT NULL AUTO_INCREMENT,
  `ASURANSI_DATE` date NOT NULL,
  `ASURANSI_LK` varchar(11) NOT NULL,
  `ASURANSI_AKUN` varchar(45) NOT NULL,
  `ASURANSI_URAIAN` text NOT NULL,
  `DOKUMEN_ID` varchar(45) NOT NULL,
  `JOB_ID` int(11) NOT NULL,
  `PENGGUNA_ID` int(11) NOT NULL,
  `LAMARAN_ID` int(11) NOT NULL,
  PRIMARY KEY (`ASURANSI_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of LAMARAN_ASURANSI
-- ----------------------------

-- ----------------------------
-- Table structure for LAMARAN_BERANGKAT
-- ----------------------------
DROP TABLE IF EXISTS `LAMARAN_BERANGKAT`;
CREATE TABLE `LAMARAN_BERANGKAT` (
  `PEMBERANGKATAN_ID` int(11) NOT NULL AUTO_INCREMENT,
  `BANDARA_START` varchar(11) DEFAULT NULL,
  `BANDARA_END` varchar(100) DEFAULT NULL,
  `PEMBERANGKATAN_MASKAPAI` varchar(100) DEFAULT NULL,
  `PENGGUNA_ID` varchar(100) DEFAULT NULL,
  `JOB_ID` varchar(100) DEFAULT NULL,
  `LAMARAN_ID` varchar(100) DEFAULT NULL,
  `DOKUMEN_ID` varchar(150) DEFAULT NULL,
  `PEMBERANGKATAN_DATE` date DEFAULT NULL,
  PRIMARY KEY (`PEMBERANGKATAN_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of LAMARAN_BERANGKAT
-- ----------------------------

-- ----------------------------
-- Table structure for LAMARAN_BNP2TKI
-- ----------------------------
DROP TABLE IF EXISTS `LAMARAN_BNP2TKI`;
CREATE TABLE `LAMARAN_BNP2TKI` (
  `BNP2TKI_ID` int(11) NOT NULL AUTO_INCREMENT,
  `LAMARAN_ID` varchar(100) DEFAULT NULL,
  `JOB_ID` varchar(100) DEFAULT NULL,
  `PENGGUNA_ID` varchar(100) DEFAULT NULL,
  `BNP2TKI_DATE` varchar(100) DEFAULT NULL,
  `BNP2TKI_URAIAN` varchar(100) DEFAULT NULL,
  `BNP2TKI_TKI_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`BNP2TKI_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of LAMARAN_BNP2TKI
-- ----------------------------

-- ----------------------------
-- Table structure for LAMARAN_HILANG
-- ----------------------------
DROP TABLE IF EXISTS `LAMARAN_HILANG`;
CREATE TABLE `LAMARAN_HILANG` (
  `JOB_ID` varchar(100) DEFAULT NULL,
  `PENGGUNA_ID` varchar(100) DEFAULT NULL,
  `RIWAYAT_DATE` date DEFAULT NULL,
  `RIWAYAT_ID` int(100) NOT NULL AUTO_INCREMENT,
  `LAMARAN_ID` varchar(100) DEFAULT NULL,
  `RIWAYAT_KETERANGAN` varchar(100) DEFAULT NULL,
  `STATUS_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`RIWAYAT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of LAMARAN_HILANG
-- ----------------------------

-- ----------------------------
-- Table structure for LAMARAN_KASUS
-- ----------------------------
DROP TABLE IF EXISTS `LAMARAN_KASUS`;
CREATE TABLE `LAMARAN_KASUS` (
  `JOB_ID` varchar(100) DEFAULT NULL,
  `PENGGUNA_ID` varchar(100) DEFAULT NULL,
  `RIWAYAT_DATE` date DEFAULT NULL,
  `RIWAYAT_ID` int(100) NOT NULL AUTO_INCREMENT,
  `LAMARAN_ID` varchar(100) DEFAULT NULL,
  `RIWAYAT_KETERANGAN` varchar(100) DEFAULT NULL,
  `STATUS_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`RIWAYAT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of LAMARAN_KASUS
-- ----------------------------

-- ----------------------------
-- Table structure for LAMARAN_LK
-- ----------------------------
DROP TABLE IF EXISTS `LAMARAN_LK`;
CREATE TABLE `LAMARAN_LK` (
  `LLK_ID` int(11) NOT NULL AUTO_INCREMENT,
  `LK_ID` int(11) NOT NULL,
  `JOB_ID` int(11) NOT NULL,
  `PENGGUNA_ID` int(11) NOT NULL,
  `LAMARAN_ID` int(11) NOT NULL,
  `LK_AKUN` varchar(255) NOT NULL,
  `LK_URAIAN` varchar(255) NOT NULL,
  `DOKUMEN_ID` int(11) NOT NULL,
  `LK_DATE` date NOT NULL,
  PRIMARY KEY (`LLK_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of LAMARAN_LK
-- ----------------------------

-- ----------------------------
-- Table structure for LAMARAN_MEDICALPRA
-- ----------------------------
DROP TABLE IF EXISTS `LAMARAN_MEDICALPRA`;
CREATE TABLE `LAMARAN_MEDICALPRA` (
  `MEDICAL_ID` int(11) NOT NULL AUTO_INCREMENT,
  `MEDICAL_SARANA` varchar(11) DEFAULT NULL,
  `MEDICAL_PEMERIKSAAN` varchar(100) DEFAULT NULL,
  `MEDICAL_HASIL` varchar(100) DEFAULT NULL,
  `MEDICAL_FILE` varchar(100) DEFAULT NULL,
  `ID` varchar(100) DEFAULT NULL,
  `MEDICAL_STATUS` varchar(100) DEFAULT NULL,
  `PENGGUNA_ID` varchar(100) DEFAULT NULL,
  `JOB_ID` varchar(100) DEFAULT NULL,
  `LAMARAN_ID` varchar(100) DEFAULT NULL,
  `DOKUMEN_ID` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`MEDICAL_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of LAMARAN_MEDICALPRA
-- ----------------------------

-- ----------------------------
-- Table structure for LAMARAN_PEMBEKALAN
-- ----------------------------
DROP TABLE IF EXISTS `LAMARAN_PEMBEKALAN`;
CREATE TABLE `LAMARAN_PEMBEKALAN` (
  `PEMBEKALAN_ID` int(11) NOT NULL,
  `PEMBEKALAN_URAIAN` varchar(255) NOT NULL,
  `JOB_ID` varchar(11) NOT NULL,
  `LAMARAN_ID` varchar(11) NOT NULL,
  `PENGGUNA_ID` int(11) NOT NULL,
  `PEMBEKALAN_START` date DEFAULT NULL,
  `PEMBEKALAN_END` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of LAMARAN_PEMBEKALAN
-- ----------------------------

-- ----------------------------
-- Table structure for LAMARAN_PERJANJIAN
-- ----------------------------
DROP TABLE IF EXISTS `LAMARAN_PERJANJIAN`;
CREATE TABLE `LAMARAN_PERJANJIAN` (
  `PERJANJIAN_ID` int(11) NOT NULL AUTO_INCREMENT,
  `LAMARAN_ID` varchar(100) DEFAULT NULL,
  `JOB_ID` varchar(100) DEFAULT NULL,
  `PENGGUNA_ID` varchar(100) DEFAULT NULL,
  `PERJANJIAN_DATE` varchar(100) DEFAULT NULL,
  `PERJANJIAN_URAIAN` varchar(100) DEFAULT NULL,
  `PERJANJIAN_START` date DEFAULT NULL,
  `PERJANJIAN_END` date DEFAULT NULL,
  `DOKUMEN_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`PERJANJIAN_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of LAMARAN_PERJANJIAN
-- ----------------------------

-- ----------------------------
-- Table structure for LAMARAN_PINDAH
-- ----------------------------
DROP TABLE IF EXISTS `LAMARAN_PINDAH`;
CREATE TABLE `LAMARAN_PINDAH` (
  `JOB_ID` varchar(100) DEFAULT NULL,
  `PENGGUNA_ID` varchar(100) DEFAULT NULL,
  `RIWAYAT_DATE` date DEFAULT NULL,
  `RIWAYAT_ID` int(100) NOT NULL AUTO_INCREMENT,
  `LAMARAN_ID` varchar(100) DEFAULT NULL,
  `RIWAYAT_KETERANGAN` varchar(100) DEFAULT NULL,
  `STATUS_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`RIWAYAT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of LAMARAN_PINDAH
-- ----------------------------

-- ----------------------------
-- Table structure for LAMARAN_PURNA
-- ----------------------------
DROP TABLE IF EXISTS `LAMARAN_PURNA`;
CREATE TABLE `LAMARAN_PURNA` (
  `JOB_ID` varchar(100) DEFAULT NULL,
  `PENGGUNA_ID` varchar(100) DEFAULT NULL,
  `PURNA_DATE` date DEFAULT NULL,
  `PURNA_ID` int(100) NOT NULL AUTO_INCREMENT,
  `LAMARAN_ID` varchar(100) DEFAULT NULL,
  `PURNA_KETERANGAN` varchar(100) DEFAULT NULL,
  `STATUS_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`PURNA_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of LAMARAN_PURNA
-- ----------------------------

-- ----------------------------
-- Table structure for LAMARAN_SAMPAI
-- ----------------------------
DROP TABLE IF EXISTS `LAMARAN_SAMPAI`;
CREATE TABLE `LAMARAN_SAMPAI` (
  `JOB_ID` varchar(100) DEFAULT NULL,
  `PENGGUNA_ID` varchar(100) DEFAULT NULL,
  `RIWAYAT_DATE` date DEFAULT NULL,
  `RIWAYAT_ID` int(100) NOT NULL AUTO_INCREMENT,
  `LAMARAN_ID` varchar(100) DEFAULT NULL,
  `RIWAYAT_KETERANGAN` varchar(100) DEFAULT NULL,
  `STATUS_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`RIWAYAT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of LAMARAN_SAMPAI
-- ----------------------------

-- ----------------------------
-- Table structure for LAMARAN_SELESAI
-- ----------------------------
DROP TABLE IF EXISTS `LAMARAN_SELESAI`;
CREATE TABLE `LAMARAN_SELESAI` (
  `JOB_ID` varchar(100) DEFAULT NULL,
  `PENGGUNA_ID` varchar(100) DEFAULT NULL,
  `RIWAYAT_DATE` date DEFAULT NULL,
  `RIWAYAT_ID` int(100) NOT NULL AUTO_INCREMENT,
  `LAMARAN_ID` varchar(100) DEFAULT NULL,
  `RIWAYAT_KETERANGAN` varchar(100) DEFAULT NULL,
  `STATUS_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`RIWAYAT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of LAMARAN_SELESAI
-- ----------------------------

-- ----------------------------
-- Table structure for LAMARAN_VISA
-- ----------------------------
DROP TABLE IF EXISTS `LAMARAN_VISA`;
CREATE TABLE `LAMARAN_VISA` (
  `VISA_ID` int(11) NOT NULL AUTO_INCREMENT,
  `JOB_ID` varchar(100) DEFAULT NULL,
  `PENGGUNA_ID` varchar(100) DEFAULT NULL,
  `VISA_DATE_END` varchar(100) DEFAULT NULL,
  `DOKUMEN_ID` varchar(100) DEFAULT NULL,
  `VISA_NOMOR` varchar(100) DEFAULT NULL,
  `LAMARAN_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`VISA_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of LAMARAN_VISA
-- ----------------------------

-- ----------------------------
-- Table structure for MASTER_AGENSI
-- ----------------------------
DROP TABLE IF EXISTS `MASTER_AGENSI`;
CREATE TABLE `MASTER_AGENSI` (
  `AGEN_ID` int(11) NOT NULL AUTO_INCREMENT,
  `AGEN_NAMA` varchar(255) NOT NULL,
  `AGEN_TELP` varchar(20) NOT NULL,
  `BARANG_SATUAN` varchar(255) NOT NULL,
  `WILAYAH_ID` int(11) NOT NULL,
  `LEGALITAS` varchar(100) DEFAULT NULL,
  `NEGARA` varchar(255) DEFAULT NULL,
  KEY `AGEN_ID` (`AGEN_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of MASTER_AGENSI
-- ----------------------------
INSERT INTO `MASTER_AGENSI` VALUES ('1', 'YUNG SHENG FUNG CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('2', 'GUAN YU INTERNATIONAL DEVELOPMENT CO., LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('3', 'LIYING INTERNATIONAL BUSINESS ENTERPRISE CO,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('4', 'LIEN-TING INTERNASIONAL DEVELOP CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('5', 'LONG SENG INTERNATIONAL CO,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('6', 'CHIA I MANAGEMENT CO.,LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('7', 'YU TO MANPOWER AGENCY CO,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('8', 'Li-Wang lnternational Co., Ltd', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('9', 'LEE SOON HUMAN RESOURCE MANAGEMENT CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('10', 'HUNG YU INTERNATIONAL DEVELOPMENT CO LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('11', 'WEI DE MANPOWER CO.,LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('12', 'MANSTRONG INTERNATIONAL MANPOWER DEVELOPMENT CO,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('13', 'TUNG HUA HUMAN RESOURCE CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('14', 'SHENG ASIA MANPOWER AGENCY AND CONSULT CORP.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('15', 'Yong Xin Human Resources Co.,Ltd.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('16', 'YI HONG INTERNATIONAL CO,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('17', 'LI TUNG INTERNATIONAL CO., LTD. KAOHSIUNG OFFICE', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('18', 'CYUAN WEI MANAGEMENT CONSULTING CO.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('19', 'LIYANG MANPOWER CO.LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('20', 'SUMMIT CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('21', 'KAI JI MANPOWER RESOURCE MANAGEMENT CONSULTANT CO., LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('22', 'FAVOR INTERNATIONAL PLACEMENT CO., LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('23', 'FORWARD HUMAN RESOURCE MANAGEMENT CONSULT CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('24', 'CEDARS MANPOWER AGENCY CO., LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('25', 'LI FON INTERNATIONAL CORP.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('26', 'LIEN-YANG INTERNATIONAL DEVELOP CO.,LTD-CHUNG KAOHSIUNG BRANCH', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('27', 'CREATIVE DEVELOPMENT CO. LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('28', 'SECURITY INTERNATIONAL PLACEMENT CO., LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('29', 'MENGO TRADING AND MANPOWER DEVELOPMENT CO. ,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('30', 'MAN LEADER INTERNATIONAL INC', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('31', 'HUAN-CHIH INTERNATIONAL DEVELOPMENT CO.LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('32', 'SHENGHSING MANPOWER CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('33', 'SHIEH SHUN INTERNATIONAL CO.,LTD.TAIPEI CITY CO.,LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('34', 'JU ZHAN DEVELOPMENT ENTERPRISE CO ., LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('35', 'YONG FONG INTERNATIONAL DEVELOP CO LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('36', 'TOP INTERNATIONAL CORP', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('37', 'CHENG YI MANPOWER CO.LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('38', 'MAW YIH INTERNATIONAL MANPOWER CO., LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('39', 'BAOHUA MANPOWER CO.,LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('40', 'ALL-REAL CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('41', 'SHENG DE INTERNATION MANPOWER CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('42', 'NOSTRA MANPOWER PTE LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('43', 'AZA EMPLOYMENT AGENCY PTE LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('44', 'REN DE INTERNATIONAL DEVELOPMENT CO. LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('45', 'CHU CHERNG HUMAN RESOURCES CONSULTING CORP..', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('46', 'TAI MING INTERNATIONAL CO., LTD. KAOHSIUNG BRANCH', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('47', 'WISDOMS INTERNATIONAL CORPORATION', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('48', 'TAI MING INTERNATIONAL CO.,LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('49', 'TOP CITY MANPOWER CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('50', 'THAI FENG INTERNATIONAL MANPOWER CO., LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('51', 'OCEAN HUMAN RESOURCES CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('52', 'YU CANG INTERNATIONAL DEVELOP CO., LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('53', 'SHEY CHENG MANPOWER AGENCY CO.LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('54', 'ONE-CREDIT INTERNATIONAL MANPOWER AGENCY CO., LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('55', 'HSIANG YOU INTERNATIONAL CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('56', 'WE FIND HUMAN RESOURCES MANAGEMENT ADVISOR CO.LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('57', 'JIH SHENG INTERNATIONAL CO,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('58', 'MAGI UNION INTERNATIONAL CO.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('59', 'CHENG KAI HUMAN RESOURCE CO., LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('60', 'BIG TREE HUMAN RESOURCES MANAGEMENT AND CONSULTING', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('61', 'KANG TUO MANPOWER CO.,LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('62', 'ALL WIN MANPOWER SERVICE CO., LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('63', 'TOP ASIA MANPOWER AGENCY AND CONSULT CORP.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('64', 'MENG CHENG MANPOWER DEVELOPMENT CO.LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('65', 'EN DER INTERNATIONAL DEVELOPMENT CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('66', 'PREMIER MANPOWER CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('67', 'YU-WEN INTERNATIONAL CO., LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('68', 'MULTI PROSPERITY MANPOWER CO LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('69', 'CHIUAN HUNG INTERNATIONAL DEVELOPMENT CO,.LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('70', 'LIEN-WIN INTERNATIONAL DEVELOP CO., LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('71', 'MAJESTY MANPOWER CO., LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('72', 'GIANT FRIEND', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('73', 'HSIN HUNG MANPOWER CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('74', 'SHENG HUA MANPOWER RESOURCE ENTERPRISE CO., LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('75', 'K. H. INTERNATIONAL DEPT CO., LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('76', 'CHANG CHENG NAN SERVICES CO.LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('77', 'CHRISTINA MANPOWER INC', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('78', 'COMPEX INTERNATIONAL BUSINESS CO.,LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('79', 'TSAIR TA INTERNATIONAL CO LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('80', 'YUANTA INTERNATIONAL CONCERN CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('81', 'HONG MING HUMAN RESOURCES CO., LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('82', 'TONG SENG INTERNATIONAL CORP.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('83', 'HUNG DA INTERNATIONAL MANPOWER CONSULTANTS CO., LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('84', 'ANN HUMAN RESOURCES AND MANAGEMENT CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('85', 'CTS INTERNATIONAL DEVELOPMENT CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('86', 'HI LINK INTERNATIONAL', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('87', 'I HSIN MANPOWER PROPERTY CO., LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('88', 'CHEN DARD MANPOWER CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('89', 'HONGLONG EMPLOYMENT SERVICE CO.,LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('90', 'EASTERN MANPOWER CO., LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('91', 'PROSPERITY MANPOWER AGENCY CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('92', 'JIA-HE INTERNATIONAL CO., LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('93', 'WEN HAO INTERNATIONAL COMPANY LIMITED.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('94', 'ELITE HUMAN RESOUECES MANAGEMENT CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('95', 'GOLDEN LEACH INT`L DEVELOPMET CO LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('96', 'U CHEER HUMAN RESOURCE MANAGEMENT CONSULTANT CO.,LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('97', 'JYE-BOW HUMAN RESOURCE CONSULTING.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('98', 'NEW VISION HUMAN RESOURCE CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('99', 'XINXING INTERNATION DEVELOPMENT CO.,LTD', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('100', 'SIXTY-SEVEN THOUSAND INTERNATIONAL MANPOWER AGENCY CO., LTD.', '', '', '0', null, 'TAIWAN');
INSERT INTO `MASTER_AGENSI` VALUES ('101', 'TA-AN INTERNATIONAL BUSINESS MANPOWERANDCONSULTING CO.,LTD', '', '', '0', null, 'TAIWAN');

-- ----------------------------
-- Table structure for MASTER_BIDANG
-- ----------------------------
DROP TABLE IF EXISTS `MASTER_BIDANG`;
CREATE TABLE `MASTER_BIDANG` (
  `BIDANG_ID` varchar(11) NOT NULL,
  `BIDANG_NAMA` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of MASTER_BIDANG
-- ----------------------------
INSERT INTO `MASTER_BIDANG` VALUES ('1.', 'Hospitality');
INSERT INTO `MASTER_BIDANG` VALUES ('2.', 'Pemasaran');
INSERT INTO `MASTER_BIDANG` VALUES ('3.', 'Konstruksi');
INSERT INTO `MASTER_BIDANG` VALUES ('4.', 'Manufaktur');
INSERT INTO `MASTER_BIDANG` VALUES ('5.', 'Kesehatan');
INSERT INTO `MASTER_BIDANG` VALUES ('6.', 'Jasa');
INSERT INTO `MASTER_BIDANG` VALUES ('7.', 'Maritim');
INSERT INTO `MASTER_BIDANG` VALUES ('8.', 'Transportasi');
INSERT INTO `MASTER_BIDANG` VALUES ('9.', 'Teknologi Informasi (IT)');
INSERT INTO `MASTER_BIDANG` VALUES ('10.', 'Perhubungan dan Komunikasi');
INSERT INTO `MASTER_BIDANG` VALUES ('11.', 'Otomotif');
INSERT INTO `MASTER_BIDANG` VALUES ('12.', 'Minyak dan Gas');
INSERT INTO `MASTER_BIDANG` VALUES ('13.', 'Pertanian / Perkebunan');
INSERT INTO `MASTER_BIDANG` VALUES ('1.1.', 'Spa');
INSERT INTO `MASTER_BIDANG` VALUES ('2.1.', 'Penjualan Retail');
INSERT INTO `MASTER_BIDANG` VALUES ('3.1.', 'Sipil');
INSERT INTO `MASTER_BIDANG` VALUES ('3.2.', 'Mekanikal');
INSERT INTO `MASTER_BIDANG` VALUES ('6.1.', 'Homecare');
INSERT INTO `MASTER_BIDANG` VALUES ('6.2.', 'Teknisi');
INSERT INTO `MASTER_BIDANG` VALUES ('7.1.', 'Perikanan');
INSERT INTO `MASTER_BIDANG` VALUES ('7.2.', 'Pelayaran');
INSERT INTO `MASTER_BIDANG` VALUES ('1.2.', 'Restoran');
INSERT INTO `MASTER_BIDANG` VALUES ('1.3.', 'Hotel');

-- ----------------------------
-- Table structure for MASTER_JABATAN
-- ----------------------------
DROP TABLE IF EXISTS `MASTER_JABATAN`;
CREATE TABLE `MASTER_JABATAN` (
  `JABATAN_ID` int(11) NOT NULL AUTO_INCREMENT,
  `JABATAN_NAMA` varchar(45) NOT NULL,
  `JABATAN_SLUG` varchar(255) NOT NULL,
  `JABATAN_TUGAS` varchar(255) NOT NULL,
  `JABATAN_DESKRIPSI` varchar(255) NOT NULL,
  `LINGKUNGAN_LING_ID` int(11) DEFAULT NULL,
  `BIDANG_ID` varchar(100) DEFAULT NULL,
  `JABATAN_SERTIFIKAT` varchar(100) DEFAULT NULL,
  `JABATAN_JURUSAN` varchar(100) DEFAULT NULL,
  `PENDIDIKAN_ID` varchar(100) DEFAULT NULL,
  `JABATAN_KELAMIN` varchar(2) DEFAULT NULL,
  `JABATAN_SYARAT_LAIN` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`JABATAN_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of MASTER_JABATAN
-- ----------------------------
INSERT INTO `MASTER_JABATAN` VALUES ('1', 'Barista', '', 'membuat berbagai jenis minuman kopi yang di pesan oleh pelanggan.', 'membuat dan menyajikan kopi kepada pelanggan', null, '1.2.', null, null, null, null, 'membuat dan menyajikan kopi kepada pelanggan');
INSERT INTO `MASTER_JABATAN` VALUES ('2', 'Barker', '', '', 'membuat semua jenis roti dan kue', null, '1.2.', null, null, null, null, 'membuat semua jenis roti dan kue');
INSERT INTO `MASTER_JABATAN` VALUES ('3', 'Bartender', '', 'Membuat minuman sesuai dengan order dari tamu sesuai dengan service prosedur  yang ditetapkan dan standard reciepe, Melaksanakan daily inventory, closing dan opening baik minuman maupun peralatan.', 'Membuat minuman sesuai dengan orderan tamu dan harus sesuai dengan standard Perusahaan serta memberikan kepuasan kepada tamu semaksimal mungkin', null, '1.2.', null, null, null, null, 'Membuat minuman sesuai dengan orderan tamu dan harus sesuai dengan standard Perusahaan serta memberikan kepuasan kepada tamu semaksimal mungkin');
INSERT INTO `MASTER_JABATAN` VALUES ('8', 'Captain Waiter', '', 'Cek kehadiran karyawan, cek daftar pesanan, cek persediaan barang, cek kebersihan area restoran, mencatat barang masuk, membimbing karyawan baru, koordinasi dengan supervisor tentang operasional harian, memastikan terlaksananya general cleaning setiap bul', 'wakil supervisor yang membantu supervisor dalam penanganan operasional', null, '1.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('9', 'Cake Decorator', '', 'mempercantik kue agar semakin menarik ', 'menutup kue/ cake dengan bahan penghias atau memberikan hiasan pada kue/ cake', null, '1.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('10', 'Chef', '', '', '', null, '1.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('11', 'Chef De Partie', '', 'mengawasi dan membantu dalam memasak, persiapan dan penyajian makanan di restoran', 'kepala bagian dapur ', null, '1.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('12', 'Commis', '', 'Mendukung eksekutif chef, sous chef, commis chef serta karyawan dapur lainnya dalam produksi pangan, Membantu staf dapur dalam menjaga standar masakan tinggi bagi klien fungsi serta delegasi, Membantu para commis chef dalam produksi makanan yang berbeda u', 'staff dapur ', null, '1.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('13', 'Cook', '', 'turun tangan langsung mengolah makanan', 'Juru Masak', null, '1.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('14', 'Waiter', '', 'Melayani tamu. Bertanggungjawab pada persiapan restoran sebelum dibuka, melengkapi semua perlengkapan yang akan di gunakan dalam operasional, seperti chinawares, silverwares, glasswares, dan lain-lain', 'bagian front liner, mempunyai peran penting dalam operasional restoran dan memberikan kepuasan layanan kepada tamu restoran', null, '1.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('15', 'Bell Boy', '', 'melayani tamu dengan menangani barang barangnya saat check in atau check out mencatat semua barang, koper yang dititipkan baik sementara maupun yang dititipkan lebih dari 24 jam, mengisi daftar pulang, mengirim pesan tamu', 'Petugas pelayanan barang dikantor depan yang mengurus barang bawaan tamu serta tugas lainya pada saat tamu melakukan check-in, check-out atau room change', null, '1.3.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('16', 'Male Cleaners', '', '', '', null, '1.3.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('17', 'Male Service Crew', '', '', '', null, '1.3.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('18', 'Receptionist/FO', '', 'menjawab semua panggilan masuk dan mengarahkan panggilan orang yang tepat atau departemen', 'penerima tamu', null, '1.3.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('19', 'Telephone Operator', '', 'mengoperasikan switchboard dengan benar, menjaga kebersihan swithboard/tempat kerja, melayani sambungan lokal, interlokal, internasional, melayani pengiriman faksimili dari manajemen hotel, mecatat dan menyampaikan pesan dari tamu, membuat laporan sambung', 'kantor depan yang bertanggungjawab atas penanganan sambungan telephone, baik yang masuk maupun keluar hotel', null, '1.3.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('20', 'Swimming Pool Attendant', '', 'menjaga kebersihan kolan renang. baik di area sekitar kolam maupun di dalam kolam renang, serta bertanggung jawab atas peredaran handuk atau pool towel yang dipergunakan tamu, merawat mesin pompa ', 'bagian yang bertugas dan bertanggung jawab menjaga kebersihan kolan renang. baik di area sekitar kolam maupun di dalam kolam renang', null, '1.3.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('21', 'Steward', '', 'requisition, distribution, storing, cleaning & washing, collecting, restocking, inventory dan repair & maintenance terhadap F&B Equipment', 'mengurus alat-alat dapur dan restoran pada suatu hotel', null, '1.3.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('22', 'Greeter', '', '', '', null, '1.3.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('23', 'Florist', '', 'Memeriksa secara teliti atas kamar-kamar yang akan digunakan hari itu berdasarkan Expected Arrival List dan mencatat jumlah kamar yang memerlukan penataan bunga. Menyiapkan rangkaian bunga untuk kamar-kamar, terutama untuk VIP dan yang mendapat catatan kh', 'Bertanggung jawab terhadap penyediaan bunga-bunga dekorasi untuk public area, seperti di lobby, FO counter, restaurant, kamar tamu dan lain-lain', null, '1.3.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('24', 'Floor Supervisor', '', '', '', null, '1.3.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('25', 'Room Attendant', '', '', '', null, '1.3.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('26', 'Laundry Manager', '', '', '', null, '1.3.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('27', 'Laundry Attendant', '', '', '', null, '1.3.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('28', 'Public Area Cleaner', '', '', '', null, '1.3.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('29', 'Facial', '', 'memastikan area kerja bersih, memberikan bimbingan kepada klien tengtang spa, memperkenalkan produk kecantikan untuk klien mendidik mereka tentang kegunaan produk itu, mengarahkan tamu ke lokasi, membuka dan menutup spa pada jam yang tepat, mengelola kebe', 'memberikan saran dan pelayanan kepada tamu untuk meningkatkan kecantikan mereka, memberikan tamu konsultasi kulit, menjelaskan prosedur dan memberikan info lainnya seputar kecantikan ', null, '1.1.', null, null, null, null, 'pengalaman min 2 tahun di bidangnya, mempunyai pengetahuan pengoperasian komputer, good human relations, mengetahui tata krama mengangkat telefon, dapat multitasking, pengetahuan yang bagus terhadap produk kecantikan, keterampilan komunikasi yang baik, gr');
INSERT INTO `MASTER_JABATAN` VALUES ('30', 'Massage', '', 'memastikan area kerja bersih, memberikan bimbingan kepada klien tengtang spa, memperkenalkan produk kecantikan untuk klien mendidik mereka tentang kegunaan produk itu, mengarahkan tamu ke lokasi, membuka dan menutup spa pada jam yang tepat, mengelola kebe', 'memberikan saran dan pelayanan kepada tamu untuk meningkatkan kecantikan mereka, memberikan tamu konsultasi kulit, menjelaskan prosedur dan memberikan info lainnya seputar kecantikan ', null, '1.1.', null, null, null, null, 'pengalaman min 2 tahun di bidangnya, mempunyai pengetahuan pengoperasian komputer, good human relations, mengetahui tata krama mengangkat telefon, dapat multitasking, pengetahuan yang bagus terhadap produk kecantikan, keterampilan komunikasi yang baik, gr');
INSERT INTO `MASTER_JABATAN` VALUES ('31', 'Spa therapist', '', 'memastikan area kerja bersih, memberikan bimbingan kepada klien tengtang spa, memperkenalkan produk kecantikan untuk klien mendidik mereka tentang kegunaan produk itu, mengarahkan tamu ke lokasi, membuka dan menutup spa pada jam yang tepat, mengelola kebe', 'memberikan saran dan pelayanan kepada tamu untuk meningkatkan kecantikan mereka, memberikan tamu konsultasi kulit, menjelaskan prosedur dan memberikan info lainnya seputar kecantikan ', null, '1.1.', null, null, null, null, 'pengalaman min 2 tahun di bidangnya, mempunyai pengetahuan pengoperasian komputer, good human relations, mengetahui tata krama mengangkat telefon, dapat multitasking, pengetahuan yang bagus terhadap produk kecantikan, keterampilan komunikasi yang baik, gr');
INSERT INTO `MASTER_JABATAN` VALUES ('32', 'Waxing', '', 'memastikan area kerja bersih, memberikan bimbingan kepada klien tengtang spa, memperkenalkan produk kecantikan untuk klien mendidik mereka tentang kegunaan produk itu, mengarahkan tamu ke lokasi, membuka dan menutup spa pada jam yang tepat, mengelola kebe', 'memberikan saran dan pelayanan kepada tamu untuk meningkatkan kecantikan mereka, memberikan tamu konsultasi kulit, menjelaskan prosedur dan memberikan info lainnya seputar kecantikan ', null, '1.1.', null, null, null, null, 'pengalaman min 2 tahun di bidangnya, mempunyai pengetahuan pengoperasian komputer, good human relations, mengetahui tata krama mengangkat telefon, dapat multitasking, pengetahuan yang bagus terhadap produk kecantikan, keterampilan komunikasi yang baik, gr');
INSERT INTO `MASTER_JABATAN` VALUES ('33', 'Salesman / Salesgirl', '', 'mempromosikan produk untuk mencapai target', 'mempromosikan produk dan menjualkan produk dilapangan', null, '2.1.', null, null, null, null, 'aktif mencari target, merekap data hasil penjualan, mencari mitra kerja');
INSERT INTO `MASTER_JABATAN` VALUES ('34', 'Assistant Store Manager', '', '', '', null, '2.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('35', 'Food & Sales Assistant', '', '', '', null, '2.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('36', 'Departement Manager', '', '', '', null, '2.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('37', 'In Store Vice Manager', '', 'membantu manager toko', '', null, '2.1.', null, null, null, null, 'mengatur semua fungsi dalam toko berjalan dengan baik dan bertanggung jawab terhadap operasional sehari-hari dalam toko, dan sebagai pengganti manager jika tidak ada ditempat dapat multitasking, kemampuan mengelola waktu dengan baik, mengelola data dengan');
INSERT INTO `MASTER_JABATAN` VALUES ('38', 'Salesman Assistant', '', 'menyususn strategi penjualan, memastikan penjualan dan distribusi produk fokus pada area supervisinya, memastikan seluruh wilayah penugasan tercover 100% serta mengelola penjualan dan ketersediaan /stok produk seluruh areanya, memastikan pengembangan area', '', null, '2.1.', null, null, null, null, 'memiliki kemampuan komputer yang baik (MS Excel) memiliki kemampuan menjual, melakukan negosiasi dan presentasi yang baik, memiliki pengetauan tentang retail, mengetahui tentang channel/segmentation management');
INSERT INTO `MASTER_JABATAN` VALUES ('39', 'Stock Labour', '', '', '', null, '2.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('40', 'Store Cleaner', '', 'membersihkan toko setelah beroperasi', '', null, '2.1.', null, null, null, null, 'teliti dan cekatan dalam menggunakan alat kebersigan serta tepat waktu');
INSERT INTO `MASTER_JABATAN` VALUES ('41', 'Back Store', '', '', '', null, '2.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('42', 'Fashion Assistant', '', 'meng-asist tugas pemotretan para editor dan stylist untuk pemotretan, artikel dan lain-lainnya, mengambil barang-barang pemotretan, memastikan jadwal, booking model', '', null, '2.1.', null, null, null, null, 'mengetahui bidang fashion, merk, mode masa kini, minat konsumen, bentuk tubuh, mempunyai attitude dan dapat mengemukakan pendapatnya pada konsumen secara gamblang');
INSERT INTO `MASTER_JABATAN` VALUES ('43', 'Junior Sales', '', '', '', null, '2.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('44', 'General Building Worker', '', '', '', null, '3.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('45', 'Bridge Construction Engineer', '', '', '', null, '3.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('46', 'Civil Engineering Draftsman', '', '', '', null, '3.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('47', 'Cost Estimator Engineer', '', '', '', null, '3.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('48', 'Dam Construction Engineer', '', '', '', null, '3.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('49', 'Road & Bridge Surveying Technician', '', '', '', null, '3.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('50', 'Road Asphalt Worker', '', '', '', null, '3.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('51', 'Road Construction Engineer', '', '', '', null, '3.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('52', 'Road Pavement Foreman', '', '', '', null, '3.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('53', 'Steed Rods Worker', '', '', '', null, '3.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('54', 'Tunnel Construction Engineer', '', '', '', null, '3.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('55', 'BMS Engineer', '', '', '', null, '3.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('56', 'Duty Engineer', '', '', '', null, '3.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('57', 'Facilities Maintenance Foreman', '', '', '', null, '3.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('58', 'Facilities Maintenance Supervisor', '', '', '', null, '3.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('59', 'Asphalt Mixing Plant Operator', '', '', '', null, '3.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('60', 'Bituman Sprayer Operator', '', '', '', null, '3.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('61', 'Bulldozer Operator', '', '', '', null, '3.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('62', 'Excavator Operator', '', '', '', null, '3.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('63', 'Forklift Operator', '', '', '', null, '3.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('64', 'Heavy Equipment Mechanic', '', '', '', null, '3.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('65', 'Mechanical Drafter & Designer', '', '', '', null, '3.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('66', 'Mechanical Fitter', '', '', '', null, '3.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('67', 'Motor Grader Operator', '', '', '', null, '3.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('68', 'Tower Crane Operator', '', '', '', null, '3.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('69', 'Wheel Crane Operator', '', '', '', null, '3.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('70', 'Wheel Loader Operator', '', '', '', null, '3.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('71', 'Wood Machine Operator', '', '', '', null, '3.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('72', '3D Modeller Operator', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('73', 'Automation Engineer', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('74', 'Automotive Mechanics', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('75', 'CAD Junior Designer', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('76', 'CNC Maintenance Technician', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('77', 'CNC Programmer', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('78', 'Component and Product Designer', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('79', 'Cosimir Robotic Operator', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('80', 'Electrical and Mechanical Car Engine Technici', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('81', 'Electrical Mechanic', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('82', 'Electrical Welder', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('83', 'Executing Mechanic', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('84', 'Gas Welding Operator', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('85', 'Hydraulic Pneumatic Operator', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('86', 'Lathe Machine Operator', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('87', 'Machine Designer', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('88', 'Machinery and Tool Industrial Designer', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('89', 'Maintenance Automotive Foreman', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('90', 'Maintenance Supervisor', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('91', 'Mechanic Technician', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('92', 'Mechanical And Electrical (ME) Engineering Sp', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('93', 'Mechanical Fluida', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('94', 'Milling CNC Operator', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('95', 'Milling Manual Operator', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('96', 'Motorcycle Electro-Mechanic Technician', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('97', 'Plastic Injection Machine Operator', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('98', 'Programmable Logic Controller (PLC) Operator', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('99', 'Press Machine Operator', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('100', 'Press Wheel Operator', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('101', 'Product and Process Analyst', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('102', 'Production Foreman', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('103', 'Production Manager', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('104', 'Production Supervisor', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('105', 'Programmer Supervisor', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('106', 'Scrub Manual Operator', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('107', 'Universal Testing Machine Operator', '', '', '', null, '4.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('108', 'Perawat', '', 'Mengumpulkan, mengalisis dan mengintrepetasi data\r\nMengembangkan rencana tindakan keperawatan\r\nMelaksanakan asuhan keperawatan sesuai dengan konsep-konsep dan prinsip-prinsip ilmu perilaku, sosial budaya, ilmu biomedik\r\nMengevaluasi data permasalahan kepe', '', null, '5.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('109', 'Psikoterapi', '', '', '', null, '5.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('110', 'Caregiver', '', 'memandikan lansia di tempat tidur, melayani BAB dan BAK, membersihkan mulut dan gigi palsu lansia, membantu mencuci rambut di tempat tidur, memotong kuku lansia, membantu berjalan lansia yang lumpuh, memindahkan lansia ke kursi roda dan sebaliknya, memban', 'merawat lansia di rumah atau di panti ', null, '6.1.', null, null, null, null, 'dapat merawat lansia dengan prosedur yang benar');
INSERT INTO `MASTER_JABATAN` VALUES ('111', 'Babysitter', '', '', '', null, '6.1.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('112', 'PLRT', '', 'Merawat dan menyimpan bahan dan peralatan\r\npembersih rumah tangga, Menggunakan dan merawat peralatan rumah, Membersihkan ruang dapur, Membersihkan kamar mandi, Membersihkan dan merapikan tempat tidur, Membersihkan perabot dan asesoris rumah tangga, Merawa', 'kerja di rumah tanggan, Mengembangkan kerja sama dalam lingkungan rumah tangga', null, '6.1.', null, null, null, null, 'Harus ex-Hongkong/Singapura (untuk Hongkong), Sehat jasmani dan rohani\r\n');
INSERT INTO `MASTER_JABATAN` VALUES ('113', 'AC Technician', '', '', '', null, '6.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('114', 'Refrigerator Technician', '', '', '', null, '6.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('115', 'Electronics Technician', '', '', '', null, '6.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('116', 'Mason', '', 'membuat pondasi, memasang batu bata, melakukan pengecoran, pembuatan dak, pembuatan lapisan dinding', 'Pekerjaan spesialisasi batu', null, '6.2.', null, null, null, null, 'Menguasai teknik pemasangan pondasi dan rangka rumah');
INSERT INTO `MASTER_JABATAN` VALUES ('117', 'Carpenter', '', 'Melaksanakan Persyaratan Kesehatan dan Keselamatan Kerja dan Lingkungan (K3L), serta Peraturan Perundang-undangan yang terkait dengan Pelaksanaan Pekerjaan, Melakukan Komunikasi timbal balik di Tempat Kerja, Menggunakan Peralatan manual dan Perlatan Listr', 'Pekerjaan spesialisasi kayu', null, '6.2.', null, null, null, null, 'menguasai teknik mengolah kayu sesuai prosedur');
INSERT INTO `MASTER_JABATAN` VALUES ('118', 'Pipe Fitter', '', 'Menerapkan ketentuan prinsip-prinsip sistem manajemen mutu dan sistem manajemen keselamatan dan kesehatan kerja dan Lingkungan dalam lingkup pekerjaan, menyambungkan pipa pipa', 'Pekerjaan spesialisasi pipa', null, '6.2.', null, null, null, null, 'melakukan FIT-UP sebelum seorng Welder melakukan sebuah rangkaian pengelasan');
INSERT INTO `MASTER_JABATAN` VALUES ('119', 'Blacksmith', '', 'Menerapkan Keselamatan dan Kesehatan Kerja dan Lingkungan ( K3-L), Melaksanakan Pekerjaan Persiapan Lokasi Kerja, Melaksanakan Pekerjaan Pondasi Dangkal, pemotongan besi tulangangan pada pekerjaan beton, mengikat besi pertemuan pada pertemuan tulangan, pe', 'Pekerjaan spesialisasi besi', null, '6.2.', null, null, null, null, 'menguasai teknik perlistrikkan yang baik dan benar sesuai prosedur');
INSERT INTO `MASTER_JABATAN` VALUES ('120', 'Welder', '', 'Menerapkan ketentuan prinsip-prinsip sistem manajemen mutu dan sistem manajemen keselamatan dan kesehatan kerja dan Lingkungan dalam lingkup pekerjaan', 'Pekerjaan spesialisasi pengelasan', null, '6.2.', null, null, null, null, 'menguasai teknik pengelasan yang baik dan benar sesuai prosedur');
INSERT INTO `MASTER_JABATAN` VALUES ('121', 'Painter', '', 'Menerapkan ketentuan prinsip-prinsip sistem manajemen mutu dan sistem manajemen keselamatan dan kesehatan kerja dan Lingkungan dalam lingkup pekerjaan, mengecat dinding menggunakan mesin / manual', 'Pekerjaan spesialisasi pengecatan', null, '6.2.', null, null, null, null, 'menguasai teknik pengecatan yang baik dan benar sesuai prosedur, memiliki pengetahuan tentang coating/ cat');
INSERT INTO `MASTER_JABATAN` VALUES ('122', 'Nelayan', '', 'mengangkat jaring dan mengemas ikan hasil tangkapan', 'Pekerjaan di atas kapal ikan', null, '7.1.', null, null, null, null, 'menguasai teknik memancing dan menjait jaring, mempunyai pengalaman di laut minimal 1 tahun');
INSERT INTO `MASTER_JABATAN` VALUES ('123', 'Cabin Steward', '', '', '', null, '7.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('124', 'Assistant Stateroom Steward', '', '', '', null, '7.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('125', 'Stateroom Steward', '', '', '', null, '7.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('126', 'Cook', '', '', '', null, '7.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('127', 'Cook Helper', '', '', '', null, '7.2.', null, null, null, null, '');
INSERT INTO `MASTER_JABATAN` VALUES ('128', 'Waiter', '', '', '', null, '7.2.', null, null, null, null, '');

-- ----------------------------
-- Table structure for MASTER_JOB_OWNER
-- ----------------------------
DROP TABLE IF EXISTS `MASTER_JOB_OWNER`;
CREATE TABLE `MASTER_JOB_OWNER` (
  `OWNER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `OWNER_NAMA` varchar(45) NOT NULL,
  `WILAYAH_ID` varchar(45) DEFAULT NULL,
  `OWNER_LOGO` varchar(45) NOT NULL,
  `OWNER_NOMOR_TELPHONE` varchar(20) NOT NULL,
  `OWNER_ALAMAT_LENGKAP` varchar(255) NOT NULL,
  `OWNER_WEBSITE` varchar(255) NOT NULL,
  PRIMARY KEY (`OWNER_ID`),
  KEY `WILAYAH_ID` (`WILAYAH_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of MASTER_JOB_OWNER
-- ----------------------------
INSERT INTO `MASTER_JOB_OWNER` VALUES ('1', 'PT. Samsung Electornic', '1.1.21.', '1', '89779', 'Tanjung Priok ', 'www.samsung.com');
INSERT INTO `MASTER_JOB_OWNER` VALUES ('2', 'Pan Gulf Holding', '1.1.', '', '(+966) 13 867 0444', 'P. O. Box - 2473, Al Khobar, Arab Saudi', 'http://www.pangulfholding.com/');
INSERT INTO `MASTER_JOB_OWNER` VALUES ('3', 'Qatar Primary Materials Company', '1.6.', '', '0812345678', 'P.O Box: 22095', 'qpmc.com');
INSERT INTO `MASTER_JOB_OWNER` VALUES ('4', 'Qaryan Steel', '1.1.', '', '0812345678', 'Dammam 2nd Industrial City', 'qaryansteel.com');
INSERT INTO `MASTER_JOB_OWNER` VALUES ('5', 'ASIA NDK CRYSTAL Sdn. Bhd', '2.5.', '', '3434343', 'Shah Alam, Selangor', 'asiandkcrystal.com');
INSERT INTO `MASTER_JOB_OWNER` VALUES ('6', 'OSI OPTOELECTRONICS Sdn. Bhd', '2.5.', '', '0812345678', 'Skudai, Johor, Malaysia', 'osiopto.com');
INSERT INTO `MASTER_JOB_OWNER` VALUES ('7', 'ASJ COMPONENTS (M) Sdn. Bhd.', '2.5.', '', '0812345678', 'Senai, Johor', 'asjcomponent.com');

-- ----------------------------
-- Table structure for MASTER_KLASIFIKASI_DOK
-- ----------------------------
DROP TABLE IF EXISTS `MASTER_KLASIFIKASI_DOK`;
CREATE TABLE `MASTER_KLASIFIKASI_DOK` (
  `KLASIFIKASI_ID` varchar(11) NOT NULL,
  `KLASIFIKASI_NAMA` varchar(100) NOT NULL,
  `GROUP` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of MASTER_KLASIFIKASI_DOK
-- ----------------------------
INSERT INTO `MASTER_KLASIFIKASI_DOK` VALUES ('1.', 'Identitas', null);
INSERT INTO `MASTER_KLASIFIKASI_DOK` VALUES ('2.', 'Medical Record', null);
INSERT INTO `MASTER_KLASIFIKASI_DOK` VALUES ('3.', 'Pendidikan', null);
INSERT INTO `MASTER_KLASIFIKASI_DOK` VALUES ('4.', 'Asuransi', null);
INSERT INTO `MASTER_KLASIFIKASI_DOK` VALUES ('10.', 'Fasilitas PPTKIS', null);
INSERT INTO `MASTER_KLASIFIKASI_DOK` VALUES ('1.1.', 'KTP', null);
INSERT INTO `MASTER_KLASIFIKASI_DOK` VALUES ('1.2.', 'Akta Kelahiran', null);
INSERT INTO `MASTER_KLASIFIKASI_DOK` VALUES ('1.3.', 'Kartu Keluarga', null);
INSERT INTO `MASTER_KLASIFIKASI_DOK` VALUES ('1.4.', 'Surat Izin', null);
INSERT INTO `MASTER_KLASIFIKASI_DOK` VALUES ('1.5.', 'Paspor', null);

-- ----------------------------
-- Table structure for MASTER_KOMPETENSI
-- ----------------------------
DROP TABLE IF EXISTS `MASTER_KOMPETENSI`;
CREATE TABLE `MASTER_KOMPETENSI` (
  `KOMPETENSI_ID` int(11) NOT NULL AUTO_INCREMENT,
  `KOMPETENSI_NAMA` varchar(255) NOT NULL,
  `KOMPETENSI_SLUG` varchar(255) NOT NULL,
  `KOMPETENSI_TIPE` int(11) NOT NULL,
  `BIDANG_ID` varchar(11) NOT NULL,
  PRIMARY KEY (`KOMPETENSI_ID`),
  KEY `BIDANG_ID` (`BIDANG_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of MASTER_KOMPETENSI
-- ----------------------------
INSERT INTO `MASTER_KOMPETENSI` VALUES ('1', 'MENCANGKUL2', 'mencangkul2', '1', '1');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('2', 'werwr', 'werwr', '1', '1');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('3', 'sdfasdf', 'sdfasdf', '1', '1');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('4', 'sdfsdfsf', 'sdfsdfsf', '1', '1');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('5', 'sdfsdfasf', 'sdfsdfasf', '1', '1');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('6', 'sdfsdfsdfsdf', 'sdfsdfsdfsdf', '1', '0');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('7', 'ASFASF', 'asfasf', '1', '1');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('8', 'ASFASF', 'asfasf', '1', '1');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('9', 'Desain Interior', 'desain-interior', '1', '1.');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('10', 'House Keeper', 'house-keeper', '1', '2.');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('11', 'Web Programming', 'web-programming', '2', '4.');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('13', 'COFFE CREATEOR', 'coffe-createor', '2', '2.1.1.');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('14', 'Gambar Bangungan', 'gambar-bangungan', '2', '1.');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('15', 'Desain Exterior Offiecer', 'desain-exterior-offiecer', '2', '1.1.1.');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('16', 'Desain Dapur', 'desain-dapur', '2', '1.1.1.');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('17', 'Desain Dashboard Mobil', 'desain-dashboard-mobil', '2', '1.1.12.');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('23', 'tes', 'tes', '0', '5.');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('24', '', 'n-a', '0', '');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('25', '', 'n-a', '0', '');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('26', '', 'n-a', '0', '');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('27', '', 'n-a', '0', '');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('28', '', 'n-a', '0', '');
INSERT INTO `MASTER_KOMPETENSI` VALUES ('29', '', 'n-a', '0', '');

-- ----------------------------
-- Table structure for MASTER_KONTRAK
-- ----------------------------
DROP TABLE IF EXISTS `MASTER_KONTRAK`;
CREATE TABLE `MASTER_KONTRAK` (
  `KONTRAK_ID` int(11) NOT NULL AUTO_INCREMENT,
  `KONTRAK_NAMA` varchar(255) NOT NULL,
  PRIMARY KEY (`KONTRAK_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of MASTER_KONTRAK
-- ----------------------------
INSERT INTO `MASTER_KONTRAK` VALUES ('1', 'FULL-TIME');

-- ----------------------------
-- Table structure for MASTER_MATAUANG
-- ----------------------------
DROP TABLE IF EXISTS `MASTER_MATAUANG`;
CREATE TABLE `MASTER_MATAUANG` (
  `MATAUANG_ID` int(11) NOT NULL AUTO_INCREMENT,
  `MATAUANG_CAPTION` varchar(255) NOT NULL,
  PRIMARY KEY (`MATAUANG_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of MASTER_MATAUANG
-- ----------------------------
INSERT INTO `MASTER_MATAUANG` VALUES ('1', 'RUPIAH');

-- ----------------------------
-- Table structure for MASTER_PPTKIS
-- ----------------------------
DROP TABLE IF EXISTS `MASTER_PPTKIS`;
CREATE TABLE `MASTER_PPTKIS` (
  `PPTKIS_ID` int(11) NOT NULL AUTO_INCREMENT,
  `PPTKIS_NAMA` varchar(100) DEFAULT NULL,
  `PPTKIS_ALAMAT` varchar(100) DEFAULT NULL,
  `WILAYAH_ID` varchar(100) DEFAULT NULL,
  `PPTKIS_LEGALITAS` varchar(100) DEFAULT NULL,
  `PPTKIS_DES_PENDEK` varchar(100) DEFAULT NULL,
  `PPTKIS_DES_PANJANG` text,
  `PPTKIS_NOMOR_TELPHONE` varchar(100) DEFAULT NULL,
  `PPTKIS_LOGO` varchar(255) DEFAULT NULL,
  `PPTKIS_COVER` varchar(255) DEFAULT NULL,
  `PPTKIS_STRUKTUR_ORGANISASI` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`PPTKIS_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of MASTER_PPTKIS
-- ----------------------------
INSERT INTO `MASTER_PPTKIS` VALUES ('1', 'PT. PRIMA DUTA SEJATI', 'JL.KAYU BESAR DALAM NO 18 RT.08 RW.11 CENGKARENG TIMUR', null, 'KEP. 563/ 245/424.078/2017', 'Prima Duta Sejati Ltd adalah perusahaan pemasok tenaga kerja resmi dengan nomor ijin kerja 717 / MEN', '<style type=\"text/css\"><!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}--></style><span style=\"font-size: 10pt;\" data-sheets-value=\"{&quot;1&quot;:2,&quot;2&quot;:&quot;Perusahaan kami, Prima Duta Sejati Ltd adalah perusahaan pemasok tenaga kerja resmi dengan nomor ijin kerja 717 / MEN / 2006 Prima Duta Sejati Ltd, didirikan pada tahun 1995, dimana beberapa direktur mulai mengeksplorasi bidang ini di luar negeri sampai tahun 1997, setelah 2 tahun pengalaman di luar negeri, direksi merasa sudah saatnya kembali ke Indonesia dengan visi dan misi untuk mendirikan perusahaan pemasok ketenagakerjaan, pada saat itu di bawah lisensi perusahaan lain di Surabaya. Dua tahun kemudian, dengan anugerah Tuhan, Prima Duta Sejat Ltd. didirikan di Surabaya. Pada tahun 2001, perusahaan tersebut dipindahkan ke lokasi yang lebih besar dan lebih baik di kota Gempol, pasuruan di Jawa Timur. Kami telah berada di sini sejak. Pusat pelatihan Prima Duta Sejati Ltd. Berdiri di atas tanah seluas 17.000 m2 dengan total luas bangunan 12.000 m2 yang dapat menampung 1200 orang sekaligus. \\nDi Prima Duta Sejati, pilihan calon pekerja dilakukan dengan sangat hati-hati untuk memastikan kualitas pekerja yang akan ditempatkan di luar negeri. Kami juga memiliki sistem kurikulum yang baik untuk pengajaran bahasa asing yang telah terbukti selama bertahun-tahun. Persentase pekerja kita yang gagal dalam pekerjaan karena ketidakmampuan bahasa kurang dari 5%. Pusat pelatihan terdiri dari 39 kelas dengan teknisi laboratorium bahasa. Ada juga 137 kamar mandi, fasilitas olah raga, 1200 tempat tidur, ruang kantor, dan lainnya. Semua fasilitas ini berkontribusi dalam membantu menciptakan pekerja berkualitas yang ditempatkan oleh Prima Duta Sejati di sektor pembantu rumah tangga, perawat, nelayan, perhotelan dan pekerja industri.\\nDengan total 35 instruktur bersertifikat pemerintah berpengalaman yang mengajarkan keterampilan bahasa kepada pekerja bahasa Kantonis, Inggris, dan Mandarin, dan juga staf administrasi dari 40 orang untuk menangani setiap divisi sesuai dengan negara tujuan. Sejak akhir tahun 1999 sampai 2007, Prima Duta Sejati telah berhasil menempatkan lebih dari 23 ribu pekerja formal dan informal di Jepang, Taiwan, Hong Kong, Singapura, Macau, Aruba dan Malaysia dengan tingkat keberhasilan 95%.\\nPrima Duta Sejati juga bekerja sama dengan PPNI, beberapa akademi Institut Kesehatan untuk merekrut perawat yang berkualitas dan dapat dipercaya. Prima Duta Sejati memiliki fasilitas yang lengkap untuk melatih perawat dengan instruktur bersertifikasi paling banyak dengan pengalaman di luar negeri untuk memastikan kualitas perawat kami terutama ke Taiwan.&quot;}\" data-sheets-userformat=\"{&quot;2&quot;:2110337,&quot;3&quot;:[null,0],&quot;10&quot;:1,&quot;11&quot;:4,&quot;12&quot;:0,&quot;15&quot;:&quot;Arial&quot;,&quot;16&quot;:10,&quot;24&quot;:[null,0,3,0,3]}\"><font face=\"arial\">Perusahaan kami, Prima Duta Sejati Ltd adalah perusahaan pemasok tenaga kerja resmi dengan nomor ijin kerja 717 / MEN / 2006 Prima Duta Sejati Ltd, didirikan pada tahun 1995, dimana beberapa direktur mulai mengeksplorasi bidang ini di luar negeri sampai tahun 1997, setelah 2 tahun pengalaman di luar negeri, direksi merasa sudah saatnya kembali ke Indonesia dengan visi dan misi untuk mendirikan perusahaan pemasok ketenagakerjaan, pada saat itu di bawah lisensi perusahaan lain di Surabaya. Dua tahun kemudian, dengan anugerah Tuhan, Prima Duta Sejat Ltd. didirikan di Surabaya. Pada tahun 2001, perusahaan tersebut dipindahkan ke lokasi yang lebih besar dan lebih baik di kota Gempol, pasuruan di Jawa Timur. Kami telah berada di sini sejak. Pusat pelatihan Prima Duta Sejati Ltd. Berdiri di atas tanah seluas 17.000 m2 dengan total luas bangunan 12.000 m2 yang dapat menampung 1200 orang sekaligus. <br><br>Di Prima Duta Sejati, pilihan calon pekerja dilakukan dengan sangat hati-hati untuk memastikan kualitas pekerja yang akan ditempatkan di luar negeri. Kami juga memiliki sistem kurikulum yang baik untuk pengajaran bahasa asing yang telah terbukti selama bertahun-tahun. Persentase pekerja kita yang gagal dalam pekerjaan karena ketidakmampuan bahasa kurang dari 5%. Pusat pelatihan terdiri dari 39 kelas dengan teknisi laboratorium bahasa. Ada juga 137 kamar mandi, fasilitas olah raga, 1200 tempat tidur, ruang kantor, dan lainnya. Semua fasilitas ini berkontribusi dalam membantu menciptakan pekerja berkualitas yang ditempatkan oleh Prima Duta Sejati di sektor pembantu rumah tangga, perawat, nelayan, perhotelan dan pekerja industri.<br><br>Dengan total 35 instruktur bersertifikat pemerintah berpengalaman yang mengajarkan keterampilan bahasa kepada pekerja bahasa Kantonis, Inggris, dan Mandarin, dan juga staf administrasi dari 40 orang untuk menangani setiap divisi sesuai dengan negara tujuan. Sejak akhir tahun 1999 sampai 2007, Prima Duta Sejati telah berhasil menempatkan lebih dari 23 ribu pekerja formal dan informal di Jepang, Taiwan, Hong Kong, Singapura, Macau, Aruba dan Malaysia dengan tingkat keberhasilan 95%.<br><br>Prima Duta Sejati juga bekerja sama dengan PPNI, beberapa akademi Institut Kesehatan untuk merekrut perawat yang berkualitas dan dapat dipercaya. Prima Duta Sejati memiliki fasilitas yang lengkap untuk melatih perawat dengan instruktur bersertifikasi paling banyak dengan pengalaman di luar negeri untuk memastikan kualitas perawat kami terutama ke Taiwan.</font></span>', '021 55953329', 'PPTKIS_LOGO_c4ca4238a0b923820dcc509a6f75849b.jpg', 'PPTKIS_COVER_c4ca4238a0b923820dcc509a6f75849b.jpg', '');
INSERT INTO `MASTER_PPTKIS` VALUES ('2', 'PT. SANJAYA PUTRA PERKASA', null, null, 'KEP.MEN no 565 tahun 2016', 'PT Sanjaya Putera Perkasa menempatkan Tenaga Kerja ke Taiwan, Hongkong, Malaysia, Singapura', '<div style=\"text-align: left;\"><span style=\"font-family: Arial;\">PT Sanjaya Putera Perkasa adalah Badan Usaha Perseroan yang bergerak dibidang jasa penempatan Tenaga Kerja Indonesia ke Luar Negeri.</span><b><br></b></div><div style=\"text-align: left;\"><span style=\"font-family: Arial;\"><br></span></div><div style=\"text-align: center;\"><b><span style=\"font-family: Arial;\">Arah dan Kebijakan Perusahaan&nbsp;</span></b></div><div><span style=\"font-family: Arial;\">Dalam rangka upaya pelaksanaan kebijakan peruhaan dalam usaha jasa pelayanan penempatan TKI ke Luar Negeri berpedoman pada:</span><div><span style=\"font-family: Arial;\">1. Tenaga Kerja Indonesia yang kami tempatkan bekerja pada sektor pekerjaaan Formal dan Informal</span></div><div><span style=\"font-family: Arial;\">2. Dalam hal penempatan kami berkomitmen meningkatkan kualitas dan kuantitas TKI dari semi terampil menjadi TKI terampil</span></div><div><span style=\"font-family: Arial;\">3. Menjalin kerjasama dengan instansi pemerintah baik pusat maupun di daerah daerah</span></div><div><span style=\"font-family: Arial;\">4. Menjalin kerjasama dengan mitra kerja kami di luar negeri dengan intensif</span></div></div>', null, 'PPTKIS_LOGO_c81e728d9d4c2f636f067f89cc14862c.jpeg', 'PPTKIS_COVER_c81e728d9d4c2f636f067f89cc14862c.jpg', 'PPTKIS_STRUKTUR_ORGANISASI_c81e728d9d4c2f636f067f89cc14862c.png');
INSERT INTO `MASTER_PPTKIS` VALUES ('3', 'PT. FORWARD GLOBAL', 'Jl. Raya Tanjung No 52 – 54 Gempol', null, 'SIUP NOMOR 444 TAHUN 2016', 'Perusahaan penempatan tenaga kerja Indonesia swasta (PPTKIS) ke negara Taiwan', '<span style=\"font-family: Arial;\">PT. FORWARD GLOBAL sebagai perusahaan penempatan tenaga kerja Indonesia swasta (PPTKIS), berdiri sejak tahun 2005, dengan alamat di : Jl. Kayu Besar Dalam No. 18 Cengkareng Jakarta Barat 11730. PT FORWARD GLOBAL  adalah sebuah Perusahaan Pelaksana Penempatan Tenaga Kerja Indonesia Swasta yang menempatkan Tenaga Kerja Indonesia ke Luar Negeri baik di sektor Formal maupun Informal dengan Negara Tujuan Penempatan yaitu TAIWAN.</span><div><span style=\"font-family: Arial;\"><br></span></div><div><div style=\"text-align: center;\"><span style=\"font-family: Arial;\"><b>VISI</b></span></div><div><span style=\"font-family: Arial;\">Pengentasan kemiskinan, pengembangan sumber daya manusia dan meningkatkan taraf hidup masyarakat</span></div><div><span style=\"font-family: Arial;\"><br></span></div><div style=\"text-align: center;\"><span style=\"font-family: Arial;\"><b>MISI</b></span></div><div><span style=\"font-family: Arial;\">1. Mengurangi pengangguran dengan memperluas lapangan kerja ke Luar Negeri.</span></div><div><span style=\"font-family: Arial;\">2. Meningkatkan kualitas kerja.</span></div><div><span style=\"font-family: Arial;\">3. Menciptakan kemampuan profesional dan etos kerja produktif bagi TKI.</span></div><div><span style=\"font-family: Arial;\">4. Meningkatkan perlindungan Tenaga Kerja.</span></div><div><span style=\"font-family: Arial;\">5. Meningkatkan kesejahteraan Tenaga Kerja.</span></div></div>', '098019231', 'PPTKIS_LOGO_eccbc87e4b5ce2fe28308fd9f2a7baf3.png', 'PPTKIS_COVER_eccbc87e4b5ce2fe28308fd9f2a7baf3.jpg', 'PPTKIS_STRUKTUR_ORGANISASI_eccbc87e4b5ce2fe28308fd9f2a7baf3.PNG');
INSERT INTO `MASTER_PPTKIS` VALUES ('4', 'PT. BINAMANDIRI MULIARAHARJA', '', null, '', '', '', '', 'PPTKIS_LOGO_a87ff679a2f3e71d9181a67b7542122c.jpg', 'PPTKIS_COVER_a87ff679a2f3e71d9181a67b7542122c.jpg', 'PPTKIS_STRUKTUR_ORGANISASI_a87ff679a2f3e71d9181a67b7542122c.png');
INSERT INTO `MASTER_PPTKIS` VALUES ('5', 'PT. DINASTY INSAN MANDIRI', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('6', 'PT. TIMURAYA JAYA LESTARI', null, null, 'SIUP', 'PT. TIMURAYA JAYA LESTARI has grown to a large and highly respected man power supplier in Indonesia,', 'PT. TIMURAYA JAYA LESTARI has grown to a large and highly respected man power supplier in Indonesia, which is experienced in placing Indonesian formal and skilled workers in Asia-Pacific and Middle-East countries. Recently we boast an extensive range of modern training facilities, spacious office building, a vast recruitment network and very highly skilled staffs.', null, 'PPTKIS_LOGO_1679091c5a880faf6fb5e6087eb1b2dc.PNG', 'PPTKIS_COVER_1679091c5a880faf6fb5e6087eb1b2dc.jpg', 'PPTKIS_STRUKTUR_ORGANISASI_1679091c5a880faf6fb5e6087eb1b2dc.png');
INSERT INTO `MASTER_PPTKIS` VALUES ('7', 'Karyatama Mitra Sejati', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('8', 'Prima Duta Sejati', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('9', 'Hamparan Karya Insani', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('10', 'Kijang Lombok Raya', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('11', 'Sahara Fajarindo Corp', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('12', 'Citra Catur Utama Karya', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('13', 'Berkat Sukses Makmur Sejahtera', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('14', 'Sampeang Alifid Mandiri', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('15', 'Tiaramas Ronagemilang', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('16', 'Perwita Nusaraya', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('17', 'Haena Duta Cemerlang', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('18', 'Sukamulia Mandiri Agung', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('19', 'Asamulia Indoman Power', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('20', 'Buana Rizqia Duta Selaras', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('21', 'Suma Jaya.', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('22', 'Bandar Laguna', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('23', 'Esdema Mandiri', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('24', 'Bhakti Persada Jaya', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('25', 'Dian Kharisma Mandiri', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('26', 'Asa Jaya', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('27', 'Cipta Rezeki Utama', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('28', 'Dewi Pengayom Bangsa', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('29', 'Lintas Cakrawala Buana', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('30', 'Citra Abdi Nusa', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('31', 'Pansomal Tirtanadi', null, null, null, null, null, null, null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('32', 'PT ANGIN RIBUT', 'BANJARNEGARA', null, null, 'BERGERAK DI BIDANG', 'BERGREAK', '085747818383', null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('33', 'PT ANGIN RIBUT.TBK', 'ASFADF', null, null, 'ASF', 'ASFASF', '085747818383', null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('34', 'ANDRID', 'PT. narid', null, null, 'kdkdk', 'ksksk', '085747818383', null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('35', 'PT. ANDRI RIYADI', 'JAKARATA UTARA', null, null, 'BERGERAK DI BIDANG LAIN LAIN', 'BERGERA', '021 991928', null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('36', 'iqbalung', 'iqbalung', null, null, 'iqbalung', 'iqblung', '085747818383', null, null, null);
INSERT INTO `MASTER_PPTKIS` VALUES ('37', 'ANDRID', 'asf', null, null, 'asdf', 'asdf', 'asf', null, null, null);

-- ----------------------------
-- Table structure for MASTER_STATUS_LAMARAN
-- ----------------------------
DROP TABLE IF EXISTS `MASTER_STATUS_LAMARAN`;
CREATE TABLE `MASTER_STATUS_LAMARAN` (
  `ID` varchar(10) NOT NULL,
  `STATUS` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of MASTER_STATUS_LAMARAN
-- ----------------------------
INSERT INTO `MASTER_STATUS_LAMARAN` VALUES ('1.', 'PENDAFTAR');
INSERT INTO `MASTER_STATUS_LAMARAN` VALUES ('2.', 'CALON');
INSERT INTO `MASTER_STATUS_LAMARAN` VALUES ('3.', 'AKTIF');
INSERT INTO `MASTER_STATUS_LAMARAN` VALUES ('4.', 'PURNA');
INSERT INTO `MASTER_STATUS_LAMARAN` VALUES ('3.1.', 'BELUM KONFIRMASI SAMPAI');
INSERT INTO `MASTER_STATUS_LAMARAN` VALUES ('3.2.', 'AKTIF');
INSERT INTO `MASTER_STATUS_LAMARAN` VALUES ('4.2.', 'PINDAH ');
INSERT INTO `MASTER_STATUS_LAMARAN` VALUES ('4.3.', 'PERPANJANG');
INSERT INTO `MASTER_STATUS_LAMARAN` VALUES ('4.1.', 'BELUM KONFIRMASI SAMPAI');
INSERT INTO `MASTER_STATUS_LAMARAN` VALUES ('4.4.', 'HILANG');
INSERT INTO `MASTER_STATUS_LAMARAN` VALUES ('4.5.', 'TERKENA KASUS');
INSERT INTO `MASTER_STATUS_LAMARAN` VALUES ('1.1.', 'TIDAK DITERIMA');

-- ----------------------------
-- Table structure for MASTER_TPENDIDIKAN
-- ----------------------------
DROP TABLE IF EXISTS `MASTER_TPENDIDIKAN`;
CREATE TABLE `MASTER_TPENDIDIKAN` (
  `PENDIDIKAN_ID` int(2) NOT NULL,
  `PENDIDIKAN_NAMA` varchar(150) NOT NULL,
  PRIMARY KEY (`PENDIDIKAN_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of MASTER_TPENDIDIKAN
-- ----------------------------
INSERT INTO `MASTER_TPENDIDIKAN` VALUES ('1', 'SD');
INSERT INTO `MASTER_TPENDIDIKAN` VALUES ('2', 'SMP');
INSERT INTO `MASTER_TPENDIDIKAN` VALUES ('3', 'SMA/SMK');
INSERT INTO `MASTER_TPENDIDIKAN` VALUES ('4', 'D1');
INSERT INTO `MASTER_TPENDIDIKAN` VALUES ('6', 'D3');
INSERT INTO `MASTER_TPENDIDIKAN` VALUES ('7', 'S1/D4');
INSERT INTO `MASTER_TPENDIDIKAN` VALUES ('9', 'S2');
INSERT INTO `MASTER_TPENDIDIKAN` VALUES ('10', 'S3');

-- ----------------------------
-- Table structure for MASTER_WILAYAH
-- ----------------------------
DROP TABLE IF EXISTS `MASTER_WILAYAH`;
CREATE TABLE `MASTER_WILAYAH` (
  `WILAYAH_ID` varchar(11) NOT NULL,
  `WILAYAH_NAMA` varchar(100) NOT NULL,
  `WILAYAH_DES_PANJANG` varchar(255) NOT NULL,
  `WILAYAH_DES_PENDEK` text NOT NULL,
  `WILAYAH_BENDERA` int(11) NOT NULL,
  `WILAYAH_LAT` int(11) NOT NULL,
  `WILAYAH_LONG` int(11) NOT NULL,
  PRIMARY KEY (`WILAYAH_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of MASTER_WILAYAH
-- ----------------------------
INSERT INTO `MASTER_WILAYAH` VALUES ('', '', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('1.', 'Timur Tengah', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('1.1.', 'Arab Saudi', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('1.2.', 'Bahrain', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('1.3.', 'Oman', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('1.4.', 'UEA', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('1.5.', 'Kuwait', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('1.5.2.1.', 'Alor Setar', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('1.6.', 'Qatar', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.', 'Asia Pasifik', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.10.', 'Bangladesh', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.11.', 'Myanmar', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.12.', 'Nepal', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.13.', 'Tajikistan', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.2.', 'Taiwan', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.3.', 'Macau', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.4.', 'Singapura', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.5.', 'Malaysia', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.5.1.', 'Johor', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.5.1.1.', 'Johor Baru', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.5.2.', 'Kedah', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.5.3.', 'Kelantah', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.5.3.1.', 'Kota Bahru', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.5.4.', 'Melaka', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.5.4.1.', 'Kota Melaka', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.5.5.', 'Negeri Sembilan', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.5.5.1.', 'Seremban', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.5.6.', 'Perak', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.5.6.1', 'Ipoh', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.5.7.', 'Selangor', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.5.7.1.', 'Ahah Alam', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.5.8.', 'Terengganu', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.5.8.1.', 'Kuala Terengganu', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.6.', 'Korea Selatan', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.7.', 'Jepang', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.8.', 'Indonesia', '', '', '0', '0', '0');
INSERT INTO `MASTER_WILAYAH` VALUES ('2.9.', 'Filipina', '', '', '0', '0', '0');

-- ----------------------------
-- Table structure for MINAT_PEKERJA
-- ----------------------------
DROP TABLE IF EXISTS `MINAT_PEKERJA`;
CREATE TABLE `MINAT_PEKERJA` (
  `PEKERJA_ID` int(11) NOT NULL,
  `BIDANG_ID` varchar(45) NOT NULL,
  KEY `PEKERJA_ID` (`PEKERJA_ID`),
  KEY `BIDANG_ID` (`BIDANG_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of MINAT_PEKERJA
-- ----------------------------

-- ----------------------------
-- Table structure for PARTNER_ASURANSI
-- ----------------------------
DROP TABLE IF EXISTS `PARTNER_ASURANSI`;
CREATE TABLE `PARTNER_ASURANSI` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAMA` varchar(255) NOT NULL,
  `PROFILE` varchar(255) DEFAULT NULL,
  `PRODUK_LAYANAN` varchar(255) DEFAULT NULL,
  `TELP` varchar(255) DEFAULT NULL,
  `WEBSITE` varchar(255) DEFAULT NULL,
  `ALAMAT` varchar(255) DEFAULT NULL,
  `WILAYAH_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of PARTNER_ASURANSI
-- ----------------------------
INSERT INTO `PARTNER_ASURANSI` VALUES ('1', 'PT. Asuransi Adira Dinamika', '', '', '021 29667373', null, 'Graha Adira, Lantai 5. Jl. MT. Haryono Kav. 42', null);
INSERT INTO `PARTNER_ASURANSI` VALUES ('2', 'PT. Victoria Insurance', '', '', '', null, 'Jalan Tomang Raya, Kav 33-37 Lantai 3B', null);
INSERT INTO `PARTNER_ASURANSI` VALUES ('3', 'PT. Malacca Trust Wuwungan Insurance', '', '', '', null, 'Chase Plaza 8th Floor, Jl. Jend. Sudirman Kav.21 ', null);
INSERT INTO `PARTNER_ASURANSI` VALUES ('4', 'BPJS', null, null, null, null, null, null);

-- ----------------------------
-- Table structure for PARTNER_BLKLN
-- ----------------------------
DROP TABLE IF EXISTS `PARTNER_BLKLN`;
CREATE TABLE `PARTNER_BLKLN` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAMA` varchar(255) NOT NULL,
  `PROFILE` varchar(255) DEFAULT NULL,
  `ALAMAT` varchar(255) DEFAULT NULL,
  `TELP` varchar(255) DEFAULT NULL,
  `NEGARA` varchar(255) DEFAULT NULL,
  `LEGALITAS` varchar(255) DEFAULT NULL,
  `AKREDITASI` varchar(255) DEFAULT NULL,
  `LAYANAN` varchar(255) DEFAULT NULL,
  `WILAYAH` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of PARTNER_BLKLN
-- ----------------------------
INSERT INTO `PARTNER_BLKLN` VALUES ('1', 'FORWARD GLOBAL', '', '', null, '', null, null, '', null);
INSERT INTO `PARTNER_BLKLN` VALUES ('2', 'LPK PRIMA DUTA SEJATI', '', null, null, '', null, null, null, 'JAWA TIMUR');
INSERT INTO `PARTNER_BLKLN` VALUES ('7', 'WAHANA SUPPLY INDO / WAHANA DANAU INDAH', '', 'Komp Perumahan Taman Indah Kec Pabuaran Karawaci - Tangerang, Telp: 021 6619237', null, 'ASPAC', null, null, '', 'BANTEN');
INSERT INTO `PARTNER_BLKLN` VALUES ('8', 'MANPOWER INDONESIA', '', 'KOMPLEK SENTRA KOSAMBI BLOK H1/G-H Jl RAYA KOSAMBI No: 47 KOSAMBI TIMUR, Telp: 021 55910727', null, 'ASPAC', null, null, '', 'BANTEN');
INSERT INTO `PARTNER_BLKLN` VALUES ('9', 'RAJASA INTANA', '', 'DS SERDANG KULON Rt 01/02 KEC PANONGAN CURUG TANGERANG, Telp: 021 6670741', null, 'ASPAC', null, null, '', 'BANTEN');
INSERT INTO `PARTNER_BLKLN` VALUES ('10', 'ASSANA CITA MITRA BANGSA', '', 'Jl DR SINTANALA GG-DO No: 59 TANGERANG, Telp: 021 55762956', null, 'ASPAC', null, null, '', 'BANTEN');
INSERT INTO `PARTNER_BLKLN` VALUES ('11', 'YONASINDO INTRA PRATAMA', '', 'Jl PEMBANGUNAN III KEL KARANGSARI KEC NEGLASARI TANGERANG, Telp: 021 55769656', null, 'ASPAC', null, null, '', 'BANTEN');
INSERT INTO `PARTNER_BLKLN` VALUES ('12', 'SANG SURYA SENTOSA ABADI', '', 'Jl MOH TOHA (RAYA MAUK KM 2) PABUARAN TUMPENG-TANGERANG, Telp: 021 6241971', null, 'ASPAC', null, null, '', 'BANTEN');
INSERT INTO `PARTNER_BLKLN` VALUES ('13', 'ANTAR BANGSA CITRA DARMAINDO', '', 'Jl Prancis No: 2 Komp Pantai Indah Dadap, Telp: 021 6682215', null, 'ASPAC', null, null, '', 'BANTEN');
INSERT INTO `PARTNER_BLKLN` VALUES ('14', 'DANAMON WAHANA TENAGA KERJA', '', 'Jl Halim Perdana Kusuma No: 121 Kebon Besar, Batu Ceper, Telp: 021 5534728', null, 'ASPAC', null, null, '', 'BANTEN');
INSERT INTO `PARTNER_BLKLN` VALUES ('15', 'SUKMA KARYA SEJATI', '', 'Jl DAAN MOGOT KM 19,4 GG MUSHOLLA Rt 03/02 TANGERANG, Telp: 021 5580235', null, 'ASPAC', null, null, '', 'BANTEN');
INSERT INTO `PARTNER_BLKLN` VALUES ('16', 'BLKLN BARFO MAHDI', '', 'Jl ASEM BARIS RAYA No: 3 KEBON BARU TEBET JAKSEL, Telp: 021 83784444', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('17', 'IFAN MARGATAMA', '', 'Jl BATU AMPAR II GG PUSKESMAS N0 CONDET Jakarta Timur', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('18', 'SALHA PUTERI TUNGGAL', '', 'Jl RD INTEN GG H NASIR No: 32 Rt 04/07 DUREN SAWIT, Jakarta Timur, Telp: 021 8197638', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('19', 'TRI TUNGGAL NUANSA PRIMATAMA', '', 'Jl PULE No: 27 Rt 002 RW 09 CIRACAS, JAKARTA TIMUR', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('20', 'PT PRIMA PERSADA ABADI', '', 'Jl MAN 6 Rt 08/04 KEL DUKUH, KEC KRAMAT JATI, Telp: 021 87781049', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('21', 'BINA INSAN SAKINAH', '', 'WISMA CILIWUNG BLOK G No: 54 BUKIT DURI TANJAKAN', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('22', 'LANSIMA', '', 'Jl Menteng Wadas Timur No: 17-D Jaksel, Telp: 021 8948521', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('23', 'MARBA SAFAR INTISARI', '', 'Jl OTISTA No: 64 JAKARTA, Telp: 021 8511558', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('24', 'NOVENDA KARYA SEJATI', '', 'Jl DAAN MOGOT RAYA KM 12 BLOK 12 B CENGKARENG TIMUR, Telp: 021 5445049', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('25', 'TRITAMA MEGAH ABADI', '', 'Jl BATU AMPAR II/18A CONDET, Telp: 021 8011266', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('26', 'ADI MITRA SELARAS INTL', '', 'Jl Batu Ampar IV No: 35 Condet , Kramat Jati , Jakarta Timur, Telp: 021 87797515', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('27', 'SARI WARt I AGUNG', '', 'Jl PENGADEGAN UTARA Rt 010 RW 02 No: 15 CIKOKO, JAKSEL, Telp: 021 7984963', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('28', 'BUMEN JAYA DUTA PUTRA', '', 'Jl INPRESS No: 47 KP TENGAH CONDET, Telp: 021', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('29', 'JATIM DUTA PEMBANGUNAN', '', 'Jl SUKATANI No: 2 TEGAL ALUR, KALIDERES', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('30', 'MUSAFIR KELANA', '', 'Jl SWADAYA IV Rt 04/10 CAKUNG JAKARTA TIMUR', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('31', 'LAKSANA TERAMPIL', '', 'Jl Laut Arafuru kav 46 No: 3-4 komp Angkatan Laut Duren Sawit, Jakarta Timur', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('32', 'SAFIKA JAYA UTAMA', '', 'Jl Cipinang Muara Raya No: 42A JAKARTA Timur', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('33', 'BUGHSAN LABRINDO', '', 'Jl RAYA KELAPA DUA WETAN No: 17 CIRACAS Jakarta Timur', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('34', 'INDOKARSA GUNA BUANA', '', 'Jl RAYA CONDET No: 29 Rt 05/04 KEL BATU AMPAR JAKARTA TIMUR', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('35', 'GENTA BINA KARYA', '', 'Jl Darma Wanita V No: 10 Rawa Buaya Cengkareng', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('36', 'DWI TUNGGAL JAYA ABADI', '', 'Jl Bambu Apus No: 45', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('37', 'DIAN BAKTI SETIA', '', 'Jl DEMPO No: 2 A Rt 02/07 PEGANGASAAN MENTENG', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('38', 'RAHMAN PRATAMA SEJATI', '', 'Jl Munggang No: 12 Condet, Jakarta Timur', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('39', 'BAHAM PUTRA ABADI', '', 'Jl Pondok Kelapa V BlokB10 No: 9-10', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('40', 'BLKLN PADEMANGAN SEMESTA LESTARI', '', 'Jl Raya Lenteng Agung No: 7 Jakarta Selatan', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('41', 'LIMBA JAYA', '', 'Jl KAYU MANIS No: 7B BALEKAMBANG KRAMATJATI, Jakarta Timur', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('42', 'SATYA BHAKTI INDRAJAYA', '', 'Jl Kamboja Dalam 1A Cijantung', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('43', 'NUSA SINAR PERKASA', '', 'Jl JELAMBAR UTAMA SAKTI I No: 49 JAKARTA BARAT', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('44', 'KARYA SASMITA MANDIRI (KSM)', '', 'Jl TANAH MERDEKA No: 39 Rt 014/04 KEL RAMBUTAN CIRACAS', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('45', 'DJAMIN HARAPAN ABADI', '', 'Jl Betung Raya Pondok Bambu', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('46', 'BANTAL PERKASA SEJAHTERA', '', 'Jl Condet Raya No: 777', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('47', 'AL HIJAZ INDOJAYA', '', 'Jl BUDAYA N0 27 Rt 10/06 BATU AMPAR CONDET', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('48', 'DWI CITRA PUTRA MANDIRI', '', 'Jl Siaga II No: 2 Pasar Minggu, Jakarta Selatan', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('49', 'CEGER SARI BUANA', '', 'Jl PPA No: 24 Ceger', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('50', 'SUMBER INDOJAYA', '', 'Jl Raya Tengah No: 60 , Kramat Jati 13540', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('51', 'ANTAR BANGSA CITRA DARMAINDO', '', 'Jl PLUIT RAYA No: 132 JAKARTA UTARA', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('52', 'RAHANA KARINDO UTAMA', '', 'Jl Olah Raga II / 23', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('53', 'BINTANG SUKMA SEJATI', '', 'Jl Raya Lenteng Agung No: 1 JakSel', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('54', 'KENSUR HUTAMA', '', 'Jl H NAMIN 27 A PONDOK KELAPA JAKARTA TIMUR', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('55', 'RAHAYU SEJAHTERA', '', 'Jl H Samali No: 5 Rt 01 / 01 Pejaten Barat, Pasar Minggu', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('56', 'TISTAMA ARGA RAYA', '', 'Jl WIJAYA TIMUR No: 99A KEBAYORAN BARU', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('57', 'DUMAS LINTAS BENUA', '', 'Jl Kayu Putih Utara 1F No: 69-70', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('58', 'SABIKA ARABINDO', '', 'Jl ASEM BARIS RAYA No: 3 JAKARTA SELATAN', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('59', 'JASA TAMA DANA MANDIRI', '', 'Komp Ruko Pasir Mas Blok B No: 82 dan 8AA', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('60', 'GRAHATAMA INDOKARYA', '', 'Jl MENTANG WADAS TIMUR No: 12 JAKSEL', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('61', 'RESTU PUTRI INDONESIA', '', 'Jl ROBUSTA No: 32 PONDOK KOPI , Jakarta Timur', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('62', 'KALIAN JAYA', '', 'Batu Sari I No: 82 Rt 17 / 02 Batu Ampar, Kramatjati', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('63', 'SUMAJAYA', '', 'Jl Pulo Gebang Raya No: 25 JakTim', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('64', 'ORING JABU JAYA', '', 'Jl INTAN RAYA No: 17 SUMURBATU JAKPUS', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('65', 'ALFINDO MAS BUANA', '', 'Jl Pinawitengan Tengah No: 9A Pondok Bambu Jaktim', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('66', 'AMALINDO LANGGENG', '', 'Jl KOMODOR 33 HALIM PERDANA KUSUMA JAKARTA TIMUR', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('67', 'RESTU BUNDA SEJATI', '', 'Jl MASJID AL BARIYAH No: 19 KP TENGAH KR JATI Jakarta Timur', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('68', 'AMANITAMA BERKAH SEJATI', '', 'Jl RAWA GURIH No: 24 Rt 002 RW 03 CONDET, Jakarta Timur', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('69', 'PUTRA INDO SEJAHTERA', '', 'Jl Pademangan IV Ujung Blok E3 No: 1 Jak-Ut', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('70', 'DWI GUNA JAYA ABADI', '', 'Jl KOMODOR HALIM PERDANA KUSUMA 19A JAKARTA TIMUR', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('71', 'SAFIR AMAL SEJATI', '', 'Jl RAYA TPU PONDOK RANGGON Rt 05/05 No: 45 CIPAYUNG Jakarta Timur', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('72', 'ROSASENA PRIMAJAYA', '', 'Jl RAYA INPRES KP TENGAH No: 71 KRAMAT JATI Jakarta Timur', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('73', 'KHIDMAT EL KASAB', '', 'Jl Cipinang Cempedak IV No: 4A Polonia, JAKARTA Timur', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('74', 'AL-RIZRAH', '', 'Jl SUCI No: 26 SUSUKAN, CIRACAS Jakarta Timur', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('75', 'BHAKTI PERSADA JAYA', '', 'Jl BANTARJATI No: 60 Rt 05/02 CIPAYUNG JAKARTA TIMUR', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('76', 'BAHANA TIMUR MEGAH', '', 'Jl A Rachman 18 - 19 - 20', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('77', 'BINA SETIA', '', 'Jl DEWI SARt IKA 171 A', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('78', 'ERA SUTRA ALAM', '', 'Jl CIPINANG LONTAR II /6 Jakarta Timur', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('79', 'DEFYA MANPOWER', '', 'Jl BUKIT DURI SELATAN No: 5 E KEL BUKIT DURI, KEC TEBET', null, 'ASPAC', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('80', 'HOSANA ADI KREASI', '', 'Jl Kenanga I Rt 07/02 No: 36 Kali Sari', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('81', 'AJI AYAH BUNDA SEJATI', '', 'Jl MASJID AL KHAIRAT No: 35 CONDET', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('82', 'DINI NOER AL QOBA', '', 'Jl CILILITAN KECIL I No: 15 KALIBATA , JAKARTA TIMUR', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('83', 'ARAFAH DUTA JASA', '', 'Jl SMEA VI 2 Rt 08 / 09 Cawang', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('84', 'PUTRA AL IRSHAD MANDIRI', '', 'Jl Condet Raya No: 96 Bale Kambang JAKARTA Timur', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('85', 'YANBU AL BAHAR', '', 'Jl CONDET RAYA No: 54 JAKARTA TIMUR', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('86', 'PUTRA ALWINI', '', 'Jl PERKUTUT No: 19 BUKIT DURI, JAKARTA SELATAN', null, 'Timur Tengah', null, null, '', 'DKI JAKARTA');
INSERT INTO `PARTNER_BLKLN` VALUES ('87', 'YUOMBA BIBA ABADI', '', 'Jl CIANGSANA PABUARAN WETAN Rt 03/06 GUNUNG PUTRI BOGOR', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('88', 'KARYA PESONA SUMBER REJEKI', '', 'Jl PELABUHAN II KM 8 KOTA SUKABUMI', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('89', 'GRAHA AYU KARSA', '', 'Ds Sariwangi No: 83 bandung, Telp: (022) 2017952, Fax: (022) 2010826', null, 'ASPAC', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('90', 'TRIGANDA SWAJAYA', '', 'KampSari Jaya Rt 06/02 BTB 15 Ds Puseur Jaya telukjambe, Krawang, Telp: (0267) 405860, 413950', null, 'ASPAC', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('91', 'BINARAGA PERTIWI', '', 'KP KARAJAN Rt 02/01 No: 79 JOMIN TIMUR KOTA BARU KAB KARAWANG', null, 'ASPAC', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('92', 'PANDU ABDI PERTIWI', '', 'Jl MUDA PARSI No: 100 JATIMAKMUR PD GEDE BEKASI', null, 'ASPAC', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('93', 'LUCKY MITRA ABADI', '', 'Jl RAYA MUSTIKA SARI No: 60 KP BABAKAN MUSTIKA JAYA BEKASI TIMUR', null, 'ASPAC', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('94', 'KUSUMA INDAH', '', 'Jl RAYA KODAU Rt 04/23 JATIRAHAYU PONDOK MELATI BEKASI', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('95', 'FICOTAMA BINA TRAMPIL', '', 'Jl Cemara Raya No: 2 - 4 Jaka Permai , Bekasi 17145', null, 'Timur Tengah/ ASPAC', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('96', 'MUHASATAMA PERDANA', '', 'Jl Tegal garu Cipeundeuy Subang Jabar, Telp: 026 713393', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('97', 'BIDAR TIMUR', '', 'Jl CIKUNIR BULAK Rt 04/12 JAKAMULYA BEKASI', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('98', 'ABUL PRATAMA JAYA', '', 'Jl RAYA KRANGGAN GG CENDRAWASIH No: 3 BEKASI', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('99', 'SAPTA SAGUNA', '', 'Jl MENDUT No: 51 KRANGGAN JATISAMPURNA BEKASI - JAWA BARAT', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('100', 'INTI JAFFARINDO', '', 'Jl WAHANA RAYA Rt 01 / 12, KEL TAPOS, KEC CIMANGGIS, KAB DEPOK', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('101', 'YAYASAN LPTKI', '', 'Jl PENGASINAN RAYA No: 50 RAWA LUMBU BEKASI', null, 'ASPAC', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('102', 'YAYASAN KURNIA BHAKTI INSANI', '', 'Jl Karanggan No: 99, Desa Karanggan, Gunung Putri, Bogor', null, 'ASPAC', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('103', 'BIDAR PUTRA SUKSES', '', 'Jl MUSTIKA JAYA No: 9 Rt 1/7 CIMUNING, BANTAR GEBANG, BEKASI', null, 'ASPAC', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('104', 'AMRI MARGATAMA', '', 'Jl Raya Kranggan Rt 05 / 06 No: 6 Jati Rangga', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('105', 'PUTRA JABUNG PERKASA', '', 'Jl Yayasan Nurul Huda No: 26, Bantar Gebang, Bekasi', null, 'ASPAC', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('106', 'AGESA ASA JAYA', '', 'Jl Pabuaran No: 64 Ciangsana Rt 03 / 06', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('107', 'MARCORIA PUTRA', '', 'Jl JAMBORE No: 20 Rt 01/06 HARJA MUKTI CIAMNGGIS DEPOK', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('108', 'BAMA MAPAN BAHAGIA', '', 'Jl Ciburial No: 10 Ciparigi Bogor Utara, Kedung Halang', null, 'ASPAC', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('109', 'SUMBER KENCANA SEJAHTERA', '', 'Jl Garuda No: 87 kp Kranggan Tengah , Jati Sampurna , Bekasi', null, 'ASPAC', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('110', 'SALMAN PUTRA RAYANA', '', 'Jl RAYA TAPOS Rt 003/01 CIMANGGIS - DEPOK', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('111', 'AVIDA AVIA DUTA', '', 'Jl Raya Hankam No: 37 Pondok Gede, Bekasi', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('112', 'ASSAMI ANANDA MANDIRI', '', 'Jl Hankam Raya No: 7 Jati Sempurna, Bekasi', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('113', 'JAUHARA PERDANA SATU', '', 'Jl KRANGGAN PASAR Rt 003/003 JATISAMPUR KOTA BEKASI', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('114', 'LANSIMA 2', '', 'Jl MASENG RAYA, DESA MASENG, KEC CIJERUK, KAB BOGOR', null, 'ASPAC', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('115', 'BINHASAN MAJU SEJAHTERA', '', 'Jl GAS ALAM RAYA No: 61 CIMANGGIS DEPOK', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('116', 'PUTRI MANDIRI ABADI', '', 'Jl Dr Ratna 69 Hm Idrus I No: 58 Jati Kramat - Jati asih Bekasi 17421', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('117', 'ELKARIM MAKMUR SENTOSA', '', 'Jl KH Masud No: 2 Rt 02 / 05 Ds Tridaya Sakti, Tambun Selatan, Bekasi', null, 'ASPAC', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('118', 'AKBAR ICHTIAR', '', 'Jl R H Udiar No: 1 Rt 08 / 01 kel Jaka Mulya, Cikunir - Bekasi Selatan', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('119', 'YAYASAN MARIKA GITA INSANI (MAGITA)', '', 'Jl H RUIN No: 69 KELAPA DUA CIMANGGIS DEPOK 16951', null, 'ASPAC', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('120', 'GAYUNG MULYA IKIF', '', 'Jl RAYA PARUNG No: 69 BOGOR JAWA BARAT', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('121', 'AMIL FAJAR INTERNASIONAL', '', 'NAGRAK CIANGSANA', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('122', 'TIMURAYA JAYA LESTARI', '', 'Jl MEKAR SARI RAYA No: 5 CIMANGGIS DEPOK', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('123', 'REKSATAMA PRASADA', '', 'Jl KP BABAKAN Rt 03/07 DS DAYEUH CILEUNGSI BOGOR', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('124', 'ARYA DUTA BERSAMA', '', 'Jl Bintara IX No: 7 Rt 01 / 01 Kp Setu Bintara', null, 'ASPAC', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('125', 'MULTI INSAN AMANAH', '', 'Jl HANKAM RAYA No: 131 PONDOK GEDE BEKASI', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('126', 'BARKAHAYU SAFARINDO', '', 'Jl RAYA KRANGGAN No: 51 JATIRANGGON BEKASI', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('127', 'KEMUNING BUNGA SEJATI', '', 'Jl Raya Kilanggan Rt 01 / 08 No: 13', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('128', 'DIAHSARI KARTIKA JAYA', '', 'Jl RAYA SUKABUMI CICURUG SUKABUMI', null, 'Timur Tengah', null, null, '', 'JAWA BARAT');
INSERT INTO `PARTNER_BLKLN` VALUES ('129', 'TEJAMUKTI ABADI', '', 'Jl ANGGREK II SETIA MEKAR TAMBUN BEKASI', null, 'ASPAC', null, null, '', 'JAWA BARAT');

-- ----------------------------
-- Table structure for PARTNER_LK
-- ----------------------------
DROP TABLE IF EXISTS `PARTNER_LK`;
CREATE TABLE `PARTNER_LK` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAMA` varchar(255) NOT NULL,
  `JENIS` varchar(255) DEFAULT NULL,
  `PROFILE` varchar(255) DEFAULT NULL,
  `PRODUK_LAYANAN` varchar(255) DEFAULT NULL,
  `ALAMAT` varchar(255) DEFAULT NULL,
  `TELP` varchar(255) DEFAULT NULL,
  `WILAYAH_ID` int(11) DEFAULT NULL,
  `WEBSITE` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of PARTNER_LK
-- ----------------------------
INSERT INTO `PARTNER_LK` VALUES ('1', 'PT. BANK RAKYAT INDONESIA (PERSERO), Tbk', null, null, null, 'Jl. Jend. Sudirman Kav. 44-46, Jakarta 10210', '(021) 2510244, 2510254, 2510269-264', null, 'www.bri.co.id');
INSERT INTO `PARTNER_LK` VALUES ('2', 'PT. BANK MANDIRI (PERSERO), Tbk', null, null, null, 'Plaza Mandiri, Jl. Gatot Subroto Kav. 36-38, Jakarta 12190', '(021) 5245006, 5245858, 5245849, 52997777', null, 'www.bankmandiri.co.id');
INSERT INTO `PARTNER_LK` VALUES ('3', 'PT. BANK NEGARA INDONESIA (PERSERO), Tbk', null, null, null, 'Jl. Jend. Sudirman Kav. 1, Jakarta 10220', '(021) 2511218-19-20-22-24-25-26-29', null, 'www.bni.co.id');
INSERT INTO `PARTNER_LK` VALUES ('4', 'PT. BANK TABUNGAN NEGARA (PERSERO), Tbk', null, null, null, 'Gedung Menara BTN, Jl. Gajah Mada No. 1, Jakarta 10130', '(021) 2310490, 6336789, 26533555', null, 'www.btn.co.id');
INSERT INTO `PARTNER_LK` VALUES ('5', 'PT. BANK DANAMON INDONESIA, Tbk', null, null, null, 'Menara Bank Danamon, Jl. HR. Rasuna Said Blok C No. 10, Karet Setiabudi, Jakarta Selatan 12940', '(021) 8064?5000', null, 'www.danamon.co.id');
INSERT INTO `PARTNER_LK` VALUES ('6', 'PT. BANK PERMATA, Tbk', null, null, null, 'Gedung World Trade Center (WTC) II, Jl. Jend. Sudirman Kav. 29-31 Jakarta 12920', '(021) 5237788', null, 'www.permatabank.com');
INSERT INTO `PARTNER_LK` VALUES ('7', 'PT. BANK CENTRAL ASIA, Tbk', null, null, null, 'Menara BCA, Grand Indonesia Jl. M.H Thamrin No. 1, Jakarta 10310', '(021) 2358-8000', null, 'www.klikbca.com');
INSERT INTO `PARTNER_LK` VALUES ('8', 'PT. BANK MAYBANK  INDONESIA, Tbk?', null, null, null, 'Gedung Sentral Senayan 3, Lt. 26, Jl. Asia Afrika No. 8, Gelora Bung Karno - Senayan, Jakarta Pusat 10270', '(021) 29228888', null, 'www.maybank.co.id');
INSERT INTO `PARTNER_LK` VALUES ('9', 'PT. PAN INDONESIA BANK, Tbk', null, null, null, 'Panin Bank Centre, Jl. Jend. Sudirman Kav. 1 (Senayan), Jakarta 10270', '(021) 2700545 (10 lines)', null, 'www.panin.co.id');
INSERT INTO `PARTNER_LK` VALUES ('10', 'PT. BANK CIMB NIAGA, Tbk', null, null, null, 'Graha Niaga / Niaga Tower Jl. Jend. Sudirman Kav. 58, Jakarta 12190', '(021) 2505151, 2505252, 2505353', null, 'www.cimbniaga.com');
INSERT INTO `PARTNER_LK` VALUES ('11', 'PT. BANK UOB INDONESIA', null, null, null, 'Gedung UOB Plaza, Jl. M.H. Thamrin No. 10 Jakarta 10230', '(021) 23506000', null, 'www.uob.co.id');
INSERT INTO `PARTNER_LK` VALUES ('12', 'PT. BANK OCBC NISP, Tbk', null, null, null, 'OCBC NISP Tower, Jl. Prof.Dr. Satrio Kav. 25, Jakarta Selatan 12950', '(021) 25533888', null, 'www.ocbcnisp.com');
INSERT INTO `PARTNER_LK` VALUES ('13', 'PT. BANK ARTHA GRAHA INTERNASIONAL, Tbk', null, null, null, 'Gedung Arha Graha, Lt. 5, Jl. Sudirman Kav. 52-53, Senayan, Jakarta 12190', '(021) 5711095, 5152168', null, 'www.arthagraha.com');
INSERT INTO `PARTNER_LK` VALUES ('14', 'PT. BANK BUMI ARTA, Tbk', null, null, null, 'Jl. KH. Wahid Hasyim No. 234, Jakarta 10250', '(021) 2300893, 2300455', null, 'www.bankbba.co.id');
INSERT INTO `PARTNER_LK` VALUES ('15', 'PT BANK HSBC INDONESIA?', null, null, null, 'Gedung WTC 1, Lt. 8-9 Jl. Jendral Sudirman Kav.29-31, Jakarta 12920', '(021) 25545800?', null, 'www.bankekonomi.co.id');
INSERT INTO `PARTNER_LK` VALUES ('16', 'PT. BANK JTRUST INDONESIA, Tbk', null, null, null, 'Gedung Sahid Sudirman Center Lt. 33 Jl. Sudirman No. 86, Jakarta Pusat 10220', '(021) 29261111(HUNTING)', null, 'www.jtrustbank.co.id');
INSERT INTO `PARTNER_LK` VALUES ('17', 'PT. BANK MAYAPADA INTERNATIONAL, Tbk', null, null, null, 'Mayapada Tower - 2nd Floor, Jl. Jend. Sudirman Kav. 28, Jakarta 12920', '(021) 5212288, 5212300', null, 'www.bankmayapada.com');
INSERT INTO `PARTNER_LK` VALUES ('18', 'PT. BANK NUSANTARA PARAHYANGAN, Tbk', null, null, null, 'Jl. Ir. H. Juanda No. 95, Bandung 40132', '(022) 82560100', null, 'www.bankbnp.com');
INSERT INTO `PARTNER_LK` VALUES ('19', 'PT. BANK OF INDIA INDONESIA, Tbk', null, null, null, 'Jl. H. Samanhudi No. 37, Jakarta 10710', '(021) 3808178, 3500007 (HUNTING)', null, 'www.boiindonesia.co.id');
INSERT INTO `PARTNER_LK` VALUES ('20', 'PT. BANK MUAMALAT INDONESIA, Tbk', null, null, null, 'Gedung Muamalat Tower, Jl. Prof. Dr. Satrio Kav. 18, Jakarta 10220?', '(021) 80666000', null, 'www.muamalatbank.com');
INSERT INTO `PARTNER_LK` VALUES ('21', 'PT. BANK MESTIKA DHARMA, Tbk', null, null, null, 'Jl. Zainul Arifin 118, Medan 20153', '(061) 4525800, 4560991-5500', null, 'www.bankmestika.co.id');
INSERT INTO `PARTNER_LK` VALUES ('22', 'PT BANK SHINHAN INDONESIA', null, null, null, 'Ged. International Financial Centre (IFC) Tower 2 Lt. Dasar, Mezz?anine, 30 dan 31 Jl. Jend. Sudirman Kav. 22-23 Jakarta Selatan', '(021) 29751500', null, 'www.shinhan.co.id');
INSERT INTO `PARTNER_LK` VALUES ('23', 'PT. BANK SINARMAS, Tbk', null, null, null, 'Sinarmas Land Plaza, Menara I, Lt. 1 &2 Jl. MH. Thamrin Kav. 51, Jakarta 10350', '(021) 31990101', null, 'www.banksinarmas?.co.id');
INSERT INTO `PARTNER_LK` VALUES ('24', 'PT. BANK MASPION INDONESIA, Tbk', null, null, null, 'Jl. Basuki Rahmat No. 50 - 54, Surabaya', '(031) 5319818, 5456334, 5356123', null, 'www.bankmaspion.co.id');
INSERT INTO `PARTNER_LK` VALUES ('25', 'PT. BANK GANESHA', null, null, null, 'Wisma Hayam Wuruk Lt.1 & 2, Jl. Hayam Wuruk No. 8, Jakarta Pusat', '(021) 29109900', null, 'www.bankganesha.co.id');
INSERT INTO `PARTNER_LK` VALUES ('26', 'PT. BANK ICBC INDONESIA', null, null, null, 'ICBC Tower Lt. 32, Jl. M.H. Thamrin No. 81, Jakarta Pusat', '021-23556000', null, 'www.icbcindo.com');
INSERT INTO `PARTNER_LK` VALUES ('27', 'PT. BANK QNB INDONESIA, Tbk', null, null, null, 'QNB Tower, 18 Parc SCBD Jl. Jend Sudirman Kav. 52-53 Jakarta 12190', '(021) 5155155', null, 'www.qnb.co.id');
INSERT INTO `PARTNER_LK` VALUES ('28', 'PT. BANK WOORI SAUDARA INDONESIA 1906, Tbk', null, null, null, 'Gedung Bank Saudara, Jl. Diponegoro No. 28, Bandung 40115', '(022) 87831906, 8781900', null, 'www.banksaudara.com');
INSERT INTO `PARTNER_LK` VALUES ('29', 'PT. BANK MEGA, Tbk', null, null, null, 'Menara Bank Mega Lt.15, Jl. Kapten Tendean Kav. 12-14 A, Jakarta 12790', '(021) 7917500', null, 'www.bankmega.com');
INSERT INTO `PARTNER_LK` VALUES ('30', 'PT. BANK BNI SYARIAH', null, null, null, 'Gedung Tempo Pavilion 1, Jl. HR Rasuna Said Kav. 11, Jakarta', '(021) 29667946', null, 'www.bnisyariah.co.id');
INSERT INTO `PARTNER_LK` VALUES ('31', 'PT. BANK BUKOPIN, Tbk', null, null, null, 'Jl. MT. Haryono Kav. 50-51, Jakarta 12770', '(021) 7989837, 7988266', null, 'www.bukopin.co.id');
INSERT INTO `PARTNER_LK` VALUES ('32', 'PT. BANK SYARIAH MANDIRI', null, null, null, 'Wisma Mandiri, Jl. M. H. Thamrin No. 5, Jakarta 10340', '(021) 52997755, 2300509, 39839000', null, 'www.syariahmandiri.co.id');
INSERT INTO `PARTNER_LK` VALUES ('33', 'PT. BANK KEB HANA INDONESIA', null, null, null, 'Wisma Mulia Lt. 52, Suite 5201 Jl. Jend. Gatot Subroto No. 42, Jakarta 12170', '(021) 5220222, 5220223', null, 'www.hanabank.co.id');
INSERT INTO `PARTNER_LK` VALUES ('34', 'PT BANK MNC INTERNASIONAL, Tbk', null, null, null, 'Gedung MNC Financial Center, Lt. 6,7,8 Jl. Kebon Sirih Raya No. 27, Jakarta Pusat 10340', '(021) 3919898', null, 'www.mncbank.co.id');
INSERT INTO `PARTNER_LK` VALUES ('35', 'PT. BANK RAKYAT INDONESIA AGRONIAGA, Tbk', null, null, null, 'Gedung BRI Agro, Jl. Warung Jati Barat No. 139, Jakarta Selatan 12740', '(021) 79199980 (Hunting)', null, 'www.bankagro.co.id');
INSERT INTO `PARTNER_LK` VALUES ('36', 'PT. BANK SBI INDONESIA', null, null, null, 'Graha Mandiri, Jl. Imam Bonjol No.61 Lt. 1, Jakarta Pusat 10310', '(021) 39838747, 3805080', null, 'www.sbiindo.com');
INSERT INTO `PARTNER_LK` VALUES ('37', 'PT. BANK MEGA SYARIAH', null, null, null, 'Menara Mega Syariah, Jl. HR Rasuna Said Kav. 19A, Jakarta 12950', '(021) 29852000', null, 'www.megasyariah.co.id');
INSERT INTO `PARTNER_LK` VALUES ('38', 'PT. BANK INDEX SELINDO', null, null, null, 'Plaza Permata Lt. 8 Jl. M. H. Thamrin No. 57 Jakarta Pusat', '(021) 3922328', null, 'www.bankindex.co.id');
INSERT INTO `PARTNER_LK` VALUES ('39', 'PT. BANK MAYORA', null, null, null, 'Gedung Mayora, Jl. Tomang Raya Kav. 21-23, Jakarta 11440', '(021) 5655287-88', null, 'www.bankmayora.com');
INSERT INTO `PARTNER_LK` VALUES ('40', 'PT BANK CHINA CONSTRUCTION BANK INDONESIA, Tbk?', null, null, null, 'Equity Tower Lt. 9, Sudirman Central Business District (SCBD) Jl. Jend. Sudirman, Kav 52-53', '(021) 51401707', null, 'http://idn.ccb.com/');
INSERT INTO `PARTNER_LK` VALUES ('41', 'PT. BANK SUMITOMO MITSUI INDONESIA', null, null, null, 'Menara BTPN Lt.35,36 dan 37 JL.Dr. Ide Anak Agung Gde Agung Kav. 5.5 -5.6, Jakarta Selatan', '(021) 80862500', null, 'www.smbc.co.id');
INSERT INTO `PARTNER_LK` VALUES ('42', 'PT. BANK DBS INDONESIA', null, null, null, 'DBS Bank Tower, Lobby Level Lt 33-37 Ciputra World 1, Jl. Prof. Dr. Satrio Kav 3-5 Jakarta 12940', '(021) 29885000', null, 'www.dbs.com');
INSERT INTO `PARTNER_LK` VALUES ('43', 'PT. BANK RESONA PERDANIA', null, null, null, 'Menara Mulia Lt. 5 & 6, Suite 501 & 601 Jl. Gatot Subroto Kav. 9-11, Jakarta', '(021) 5701958', null, 'www.perdania.co.id');
INSERT INTO `PARTNER_LK` VALUES ('44', 'PT. BANK MIZUHO INDONESIA', null, null, null, 'Sinarmas Land Plaza, Menara 2 Lt. 24, Jl. MH. Thamrin No. 51, Jakarta 10350', '(021) 3925222', null, 'www.mizuhocbk.co.id');
INSERT INTO `PARTNER_LK` VALUES ('45', 'PT. BANK CAPITAL INDONESIA, Tbk', null, null, null, 'Sona Topaz Tower Lt. 12, Jl. Jend. Sudirman Kav. 26, Jakarta 12920', '(021) 2520234, 2520345, 2506768', null, 'www.bankcapital.co.id');
INSERT INTO `PARTNER_LK` VALUES ('46', 'PT. BANK BNP PARIBAS INDONESIA', null, null, null, 'Menara BCA, Lt. 35 Jl. MH. Thamrin No. 1 Jakarta 10310', '(021) 2358626', null, 'www.bnpparibas.co.id');
INSERT INTO `PARTNER_LK` VALUES ('47', 'PT. BANK ANZ INDONESIA', null, null, null, 'ANZ Tower 8th Floor Jl. Jend. Sudirman Kav. 33A, Jakarta', '(021) 5750300', null, 'www.anz.com');
INSERT INTO `PARTNER_LK` VALUES ('48', 'PT. BANK RABOBANK INTERNATIONAL INDONESIA', null, null, null, 'Noble House Jl.Dr. Ide Anak Agung Gde Agung Kav. E 4.2 No. 2 Lantai 30 & 32 Lingkar Mega Kuningan, Jakarta Selatan', '(021) 30021888', null, 'www.rabobank.co.id');
INSERT INTO `PARTNER_LK` VALUES ('49', 'PT. BANK AGRIS, Tbk', null, null, null, 'Wisma GKBI Suites-UG01 Jl. Jendral Sudirman No. 29, Jakarta', '021-57908888', null, 'www.bankagris.co.id');
INSERT INTO `PARTNER_LK` VALUES ('50', 'PT. BANK MAYBANK SYARIAH INDONESIA', null, null, null, 'Sona Topas Tower Lt. 1-3, Jl. Jend. Sudirman Kav. 26, Jakarta 12920', '(021) 2506446', null, 'www.maybanksyariah.co.id');
INSERT INTO `PARTNER_LK` VALUES ('51', 'PT. BANK CTBC INDONESIA', null, null, null, 'Tamara Center Lt. 15-17, Jl. Jend. Sudirman Kav. 24, Jakarta 12920', '(021) 25578787', null, 'www.chinatrust.co.id');
INSERT INTO `PARTNER_LK` VALUES ('52', 'PT. BANK COMMONWEALTH', null, null, null, 'World Trade Centre (WTC) 6, Jl. Jend. Sudirman Kav.29-31, Jakarta 12920', '(021) 25549500', null, 'www.commbank.co.id');
INSERT INTO `PARTNER_LK` VALUES ('53', 'PT. BANK TABUNGAN PENSIUNAN NASIONAL, Tbk', null, null, null, 'SBD Mega Kuningan, Jl. Dr. IAAG Agung Kav. 5,5 - 5,6 Jakarta Selatan 12950', '(021) 30026200', null, 'www.btpn.com');
INSERT INTO `PARTNER_LK` VALUES ('54', 'PT. BANK VICTORIA SYARIAH', null, null, null, 'Gedung The Victoria, Jalan Tomang Raya Kav.3, Jakarta Barat', '(021) 5600467', null, 'www.bankvictoriasyariah.co.id');
INSERT INTO `PARTNER_LK` VALUES ('55', 'PT. BANK BRI SYARIAH', null, null, null, 'Jl. Abdul Muis No. 2-4, Jakarta Pusat', '(021) 3810226', null, 'www.brisyariah.co.id');
INSERT INTO `PARTNER_LK` VALUES ('56', 'PT. BANK JABAR BANTEN SYARIAH', null, null, null, 'Jl. Braga No. 135 Bandung', '022-4202599', null, 'www.bjbsyariah.co.id');
INSERT INTO `PARTNER_LK` VALUES ('57', 'PT. BANK BISNIS INTERNASIONAL', null, null, null, 'Jl. Ir. H. Djuanda No. 137, Bandung', '(022) 2501787, 2511900, 4233458', null, 'www.bankbisnis.com');
INSERT INTO `PARTNER_LK` VALUES ('58', 'PT. BANK ANDARA', null, null, null, 'Gedung Sahid Sudirman Center, Unit A & B Lt. 56 Jl. Jend. Sudirman Kav. 86, Jakarta', '(021) 5260707', null, 'www.bankandara.co.id');
INSERT INTO `PARTNER_LK` VALUES ('59', 'PT. BANK JASA JAKARTA', null, null, null, 'Jl. Tiang Bendera III No. 26-28-30, Jakarta 11230', '(021) 6902611, 6906950', null, 'www.bjj.co.id');
INSERT INTO `PARTNER_LK` VALUES ('60', 'PT. BANK YUDHA BHAKTI, Tbk', null, null, null, 'Gd. Gozco,  Jl. Raya Pasar Minggu Kav.32 Pancoran, Jakarta Selatan', '(021) 29752975', null, 'www.yudhabhakti.co.id');
INSERT INTO `PARTNER_LK` VALUES ('61', 'PT. BANK MITRANIAGA, Tbk', null, null, null, 'Jl. S. Parman Kav. 77 Slipi Lt. Dsr & Lt. 2, Jakarta 11410', '(021) 5481877', null, 'www.bankmitraniaga.co.id');
INSERT INTO `PARTNER_LK` VALUES ('62', 'PT. BANK ROYAL INDONESIA', null, null, null, 'Jl. Suryopranoto No. 52, Jakarta 10130', '(021) 63864472,73,75', null, 'www.royalbank.co.id');
INSERT INTO `PARTNER_LK` VALUES ('63', 'PT. BANK NATIONALNOBU, Tbk', null, null, null, 'Plaza Semanggi Lt. 9, Jl. Jendral Sudirman Kav. 50 Jakarta', '(021) 25535128', null, 'www.nobubank.com');
INSERT INTO `PARTNER_LK` VALUES ('64', 'PT. BANK INA PERDANA, Tbk', null, null, null, 'Wisma BSG, Jl. Abdul Muis No. 40, Jakarta Pusat', '(021) 3859050', null, 'www.bankina.co.id');
INSERT INTO `PARTNER_LK` VALUES ('65', 'PT BANK PANIN DUBAI SYARIAH, Tbk', null, null, null, 'Gd.Panin Life Centre Lt. 3, Jl. Letjend S. Parman Kav 91 Jakarta 11420', '(021) 56956100', null, 'www.paninbanksyariah.co.id');
INSERT INTO `PARTNER_LK` VALUES ('66', 'PT. PRIMA MASTER BANK', null, null, null, 'Jl. Jembatan Merah No. 15-17, Surabaya 60175', '(031) 3531253 (HUNTING)', null, 'www.primamasterbank.co.id');
INSERT INTO `PARTNER_LK` VALUES ('67', 'PT. BANK SYARIAH BUKOPIN', null, null, null, 'Jl. Salemba Raya No. 55, Jakarta', '(021) 2300912', null, 'wwww.syariahbukopin.co.id');
INSERT INTO `PARTNER_LK` VALUES ('68', 'PT. BANK SAHABAT SAMPOERNA', null, null, null, 'Gedung Sampoerna Strategic Square Menara Utara, Lt. Mezzanine Jl. Jend. Sudirman Kav 45 Jakarta', '(021) 57951515', null, 'www.banksampoerna.com');
INSERT INTO `PARTNER_LK` VALUES ('69', 'PT. BANK DINAR INDONESIA, Tbk', null, null, null, 'Jl. Ir. H. Juanda No. 12, Jakarta 10120', '(021) 2312633', null, 'www.bankdinar.co.id');
INSERT INTO `PARTNER_LK` VALUES ('70', 'PT. BANK AMAR INDONESIA', null, null, null, 'Jl. Basuki Rahmad No. 109, Surabaya', '(031) 99015959?', null, 'www.anglomasbank.co.id');
INSERT INTO `PARTNER_LK` VALUES ('71', 'PT. BANK KESEJAHTERAAN EKONOMI', null, null, null, 'Gedung IKP RI, Jl. R.P. Suroso No. 21, Jakarta 10330', '(021) 3100422, 3100448', null, 'www.bankkesejahteraan.co.id');
INSERT INTO `PARTNER_LK` VALUES ('72', 'PT. BANK BCA SYARIAH', null, null, null, 'Jl. Jatinegara Timur No. 72, Jakarta 13310', '(021) 8190072, 8505030, 8505035', null, 'www.bcasyariah.co.id');
INSERT INTO `PARTNER_LK` VALUES ('73', 'PT. BANK ARTOS INDONESIA', null, null, null, 'Jl. Otto Iskandardinata No. 18, Bandung 40171', '(022) 4200202 (Hunting)', null, 'www.bankartos.co.id');
INSERT INTO `PARTNER_LK` VALUES ('74', 'PT. BANK TABUNGAN PENSIUNAN NASIONAL SYARIAH', null, null, null, 'Menara BTPN, Lt. 12 CBD Mega Kuningan, Jl. Dr. Ide Anak Agung Gde Agung Kav. 5.5-5.6 Kel. Kuningan Timur, Jakarta Selatan', '(021) 30026400', null, 'www.btpnsyariah.com');
INSERT INTO `PARTNER_LK` VALUES ('75', 'PT. BANK MULTIARTA SENTOSA', null, null, null, 'Graha Bank MAS Lt. 3, Jl. Setiabudi Selatan Kav. 7-8, Jakarta Selatan', '(021) 5790 6006', null, 'www.bankmas.co.id');
INSERT INTO `PARTNER_LK` VALUES ('76', 'PT. BANK FAMA INTERNASIONAL', null, null, null, 'Jl. Asia Afrika No. 115, Bandung', '(022) 4200808', null, 'www.bankfama.co.id');
INSERT INTO `PARTNER_LK` VALUES ('77', 'PT. BANK MANDIRI TASPEN POS', null, null, null, 'Jl. Melati No. 65, Denpasar', '(0361) 227076, 227887', null, 'www.banksinar.co.id');
INSERT INTO `PARTNER_LK` VALUES ('78', 'PT. BANK VICTORIA INTERNATIONAL, Tbk', null, null, null, 'Panin Tower Lt. 15, 20 & 25, Jl. Asia Afrika Lot.19, Jakarta Selatan 10270', '(021) 72781800', null, 'www.victoriabank.co.id');
INSERT INTO `PARTNER_LK` VALUES ('79', 'PT. BANK HARDA INTERNASIONAL', null, null, null, 'Asean Tower Lt 1 dan 3, Jl. KH. Samanhudi No. 10, Jakarta Pusat', '(021) 3841178, 3841022-23', null, 'www.bankbhi.com');
INSERT INTO `PARTNER_LK` VALUES ('80', 'PT. BPD JAWA BARAT DAN BANTEN, Tbk', null, null, null, 'Jl. Naripan No. 12 - 14, Bandung 40111', '(022) 4234868, 4230223', null, 'www.bankjabar.co.id');
INSERT INTO `PARTNER_LK` VALUES ('81', 'PT. BPD DKI', null, null, null, 'Gd. Prasada Sasana Karya Jl. Suryopranoto No. 8, Jakarta Pusat?', '(021) 2314567 (HUNTING)', null, 'www.bankdki.co.id');
INSERT INTO `PARTNER_LK` VALUES ('82', 'PT. BPD DAERAH ISTIMEWA YOGYAKARTA', null, null, null, 'Jl. Tentara Pelajar No. 7, Yogyakarta', '(0274) 561614', null, 'www.bpddiy.co.id');
INSERT INTO `PARTNER_LK` VALUES ('83', 'PT. BPD JAWA TENGAH', null, null, null, 'Gedung Grinatha Jl. Pemuda No. 142, Semarang, Jawa Tengah 50132', '(024) 3547541, 3554025', null, 'www.bankjateng.co.id');
INSERT INTO `PARTNER_LK` VALUES ('84', 'PT. BPD JAWA TIMUR, Tbk', null, null, null, 'Jl. Basuki Rakhmat No. 98-104, Surabaya', '(031) 5310090-99', null, 'www.bankjatim.co.id');
INSERT INTO `PARTNER_LK` VALUES ('85', 'PT. BPD JAMBI', null, null, null, 'Jl. Jend. A. Yani No. 18, Telanaipura, Jambi', '(0741) 60416, 60665, 62790, 64628', null, 'www.bankjambi.co.id');
INSERT INTO `PARTNER_LK` VALUES ('86', 'PT. BANK ACEH SYARIAH', null, null, null, 'JL. TGK. H. Mohd.Daud Beureueh No.161 Banda Aceh', '(0651) 8016255', null, 'www.bankaceh.co.id');
INSERT INTO `PARTNER_LK` VALUES ('87', 'PT. BPD SUMATERA UTARA', null, null, null, 'Jl. Imam Bonjol No. 18, Medan 20152', '(061) 4155100, 4515100', null, 'www.banksumut.com');
INSERT INTO `PARTNER_LK` VALUES ('88', 'PT. BPD SUMATERA BARAT', null, null, null, 'Jl. Pemuda No. 21, Padang 25117', '(0751) 25055, 31577, 31578', null, 'www.banknagari.co.id');
INSERT INTO `PARTNER_LK` VALUES ('89', 'PT. BPD RIAU KEPRI', null, null, null, 'Menara Dang Merdu BRK,  Jl. Jend. Sudirman No. 462, Kota ?Pekanbaru', '(0761) 47070', null, 'www.bankriau.co.id');
INSERT INTO `PARTNER_LK` VALUES ('90', 'PT. BPD SUMATERA SELATAN DAN BANGKA BELITUNG', null, null, null, 'Jl. Gubernur H. Ahmad Bastari No. 07 Kel. Silaberanti Kec. Seberang Ulu I Jakabaring Palembang', '(0711) 5228080', null, 'www.banksumselbabel.com');
INSERT INTO `PARTNER_LK` VALUES ('91', 'PT. BPD LAMPUNG', null, null, null, 'Jl. Wolter Monginsidi No. 182, Teluk Betung, Bandar Lampung 35215', '(0721) 487175, 482237', null, 'www.banklampung.co.id');
INSERT INTO `PARTNER_LK` VALUES ('92', 'PT. BPD KALIMANTAN SELATAN', null, null, null, 'Jl. Lambung Mangkurat No. 7, Banjarmasin 70111', '(0511) 3350726-28', null, 'www.bankbpdkalsel.co.id');
INSERT INTO `PARTNER_LK` VALUES ('93', 'PT. BPD KALIMANTAN BARAT', null, null, null, 'Jl. Rahadi Oesman No. 10, Pontianak 78117', '(0561) 732148, 734713, 736723', null, 'www.bankkalbar.co.id');
INSERT INTO `PARTNER_LK` VALUES ('94', 'PD. BPD KALIMANTAN TIMUR', null, null, null, 'Jl. Jend. Sudirman No. 33, Samarinda', '(0541) 735500, 739563 - 567', null, 'www.bankkaltim.com');
INSERT INTO `PARTNER_LK` VALUES ('95', 'PT. BPD KALIMANTAN TENGAH', null, null, null, 'Jl. RTA Milono No. 12, Palangka Raya 73111', '(0536) 3226812', null, 'www.bp-kalteng.com');
INSERT INTO `PARTNER_LK` VALUES ('96', 'PT. BPD SULAWESI SELATAN DAN SULAWESI BARAT', null, null, null, 'Jl. Dr. Sam Ratulangi No. 16, Makassar 90125', '(0411) 859171-72-73-74, 859176-181', null, 'www.banksulsel.co.id');
INSERT INTO `PARTNER_LK` VALUES ('97', 'PT. BPD SULAWESI UTARA DAN  GORONTALO?', null, null, null, 'Jl. Sam Ratulangi No. 9, Manado 95111', '(0431) 861759, 851451', null, 'banksulutgo.co.id?');
INSERT INTO `PARTNER_LK` VALUES ('98', 'PT. BPD NUSA TENGGARA BARAT', null, null, null, 'Jl. Pejanggik No. 30, Mataram', '(0370) 632177, 636331, 635332', null, 'www.bankntb.co.id?');
INSERT INTO `PARTNER_LK` VALUES ('99', 'PT. BPD BALI', null, null, null, 'Jl. Raya Puputan Niti Mandala, Renon, Denpasar', '(0361) 223301 - 05', null, 'www.bpdbali.co.id');
INSERT INTO `PARTNER_LK` VALUES ('100', 'PT. BPD NUSA TENGGARA TIMUR', null, null, null, 'Jl. W.J. Lalamentik No. 102, Kupang, Nusa Tenggara Timur, 85000', '(0380) 840555', null, 'www.bpdntt.co.id');
INSERT INTO `PARTNER_LK` VALUES ('101', 'PT. BPD MALUKU DAN MALUKU UTARA', null, null, null, 'Jl. Raya Pattimura 9, Ambon 97124', '(0911) 354214, 353144, 354229, 310696', null, 'www.bankmaluku.co.id');
INSERT INTO `PARTNER_LK` VALUES ('102', 'PT. BPD PAPUA', null, null, null, 'Jl. Ahmad Yani 5-7, Jayapura 99111, Kotak Pos 1536', '(0967) 532011 (hunting)', null, 'www.bankpapua.com');
INSERT INTO `PARTNER_LK` VALUES ('103', 'PT. BPD BENGKULU', null, null, null, 'Jl. Basuki Rachmat 6, Bengkulu', '(0736) 22144, 341170', null, 'www.bankbengkulu.co.id');
INSERT INTO `PARTNER_LK` VALUES ('104', 'PT. BPD SULAWESI TENGAH', null, null, null, 'Jl. St. Hasanuddin No. 20, Palu', '(0451) 421780', null, 'www.sulteng.go.id');
INSERT INTO `PARTNER_LK` VALUES ('105', 'PT. BPD SULAWESI TENGGARA', null, null, null, 'Jl. May. Jend. Sutoyo No. 95, Kendari, Sulawesi Tenggara', '(0401) 3121526, 3122104-194-551, 3123163', null, 'www.banksultra.co.id');
INSERT INTO `PARTNER_LK` VALUES ('106', '?PT BPD BANTEN, Tbk', null, null, null, '?Jl. Sudirman Lingkungan Kemang, Ruko Sembilan No.04, 05 dan 06, Kel. Sumur Pecung, Kec. Serang Banten', '(0254) 791734?', null, '?www.bankbanten.co.id');
INSERT INTO `PARTNER_LK` VALUES ('107', 'CITIBANK, N.A.', null, null, null, 'Citibank Tower 7th Floor, Jl. Jend. Sudirman Kav. 54-55, Jakarta', '(021) 52908327', null, 'www.citibank.co.id');
INSERT INTO `PARTNER_LK` VALUES ('108', 'JP MORGAN CHASE BANK, NA', null, null, null, 'Gedung The Energy Lt. 5 & 6, SCBD Lot 11A, JL. Jend. Sudirman Kav 52-53, Jakarta 12190', '(021) 52918000, 52918750, 52918233', null, 'www.jpmorganchase.com');
INSERT INTO `PARTNER_LK` VALUES ('109', 'BANK OF AMERICA, N.A', null, null, null, 'Gedung Bursa Efek Jakarta, Tower 2, Lt 23, Jl. Sudirman Kav. 52-53, Jakarta', '(021) 29553700', null, 'www.bankofamerica.com');
INSERT INTO `PARTNER_LK` VALUES ('110', 'BANGKOK BANK PCL', null, null, null, 'Jl. MH. Thamrin No. 3, Jakarta', '(021) 2311008', null, 'www.bangkokbank.co.id');
INSERT INTO `PARTNER_LK` VALUES ('111', 'THE HONGKONG & SHANGHAI B.C, LTD', null, null, null, 'World Trade Center, Jl. Jend. Sudirman Kav. 29-31, Jakarta 12920', '(021) 5246222', null, 'www.hsbc.co.id');
INSERT INTO `PARTNER_LK` VALUES ('112', 'THE BANK OF TOKYO-MITSUBISHI UFJ LTD.', null, null, null, 'Gedung Mid Plaza Lt.1-3, Jl. Jend Sudirman Kav. 10-11, Jakarta 10220', '(021) 5706185, 5705177, 5703955', null, 'www.mufg.co.id');
INSERT INTO `PARTNER_LK` VALUES ('113', 'STANDARD CHARTERED BANK', null, null, null, 'Menara Standard Chartered Bank, Jl. Prof. Dr. Satrio No. 164, Jakarta 12950', '(021) 2550000, 579 99988', null, 'www.standardchartered.com');
INSERT INTO `PARTNER_LK` VALUES ('114', 'DEUTSCHE BANK AG', null, null, null, 'Deutsche Bank Building, Jl. Imam Bonjol No. 80, Jakarta', '(021) 29644401', null, 'www.deutsche-bank.co.id/indonesia');
INSERT INTO `PARTNER_LK` VALUES ('115', 'BANK OF CHINA (HONG KONG) LIMITED?', null, null, null, 'Wisma Tamara, Suite 101-201, Jl. Jend. Sudirman Kav. 24, Jakarta', '(021) 5205502', null, 'www.bankofchina.co.id');

-- ----------------------------
-- Table structure for PARTNER_LSP
-- ----------------------------
DROP TABLE IF EXISTS `PARTNER_LSP`;
CREATE TABLE `PARTNER_LSP` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAMA` varchar(255) NOT NULL,
  `PROFILE` varchar(255) DEFAULT NULL,
  `ALAMAT` varchar(255) DEFAULT NULL,
  `TELP` varchar(255) DEFAULT NULL,
  `WILAYAH_ID` int(11) DEFAULT NULL,
  `BIDANG` varchar(255) DEFAULT NULL,
  `JENIS` varchar(255) DEFAULT NULL,
  `LAYANAN` varchar(255) DEFAULT NULL,
  `NO_LISENSI_BNSP` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=801 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of PARTNER_LSP
-- ----------------------------
INSERT INTO `PARTNER_LSP` VALUES ('1', 'TEKNISI OTOMOTIF INDONESIA (TO)', null, 'Jl. Bambu Apus Raya No. 43 RT. 007/RW 03 Kel. Bambu Apus Kec. Cipayung- Jakarta Timur 13890', null, null, null, 'P3', null, 'BNSP-LSP-001-ID');
INSERT INTO `PARTNER_LSP` VALUES ('2', 'TELEMATIKA', null, 'Gedung Fortuna Lt. 4 Jl. Mampang Prapatan No. 96 Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-002-ID');
INSERT INTO `PARTNER_LSP` VALUES ('3', 'TENAGA LABORATORIUM PENGUJI INDONESIA (TELAPI)', null, 'Jl. Kramat Raya No. 53', null, null, null, 'P3', null, 'BNSP-LSP-003-ID');
INSERT INTO `PARTNER_LSP` VALUES ('4', 'LOGAM DAN MESIN INDONESIA', null, 'Wisma PEDE, Jl. MT. Haryono, kav.17, lantai 5, B502, Jakarta Selatan, 12810', null, null, null, 'P3', null, 'BNSP-LSP-004-ID');
INSERT INTO `PARTNER_LSP` VALUES ('5', 'LEMBAGA KEUANGAN MIKRO CERTIF', null, 'Gd. LPPI Lt.3, Jl. Kemang Raya, No 35, Kebayoran Baru, Jakarta Selatan, 12730', null, null, null, 'P3', null, 'BNSP-LSP-005-ID');
INSERT INTO `PARTNER_LSP` VALUES ('6', 'TATALAKSANA RUMAH TANGGA', null, '', null, null, null, 'P3', null, 'BNSP-LSP-006-ID');
INSERT INTO `PARTNER_LSP` VALUES ('7', 'SEKURITI INDONESIA', null, '', null, null, null, 'P3', null, 'BNSP-LSP-007-ID');
INSERT INTO `PARTNER_LSP` VALUES ('8', 'GARMEN', null, 'Jl. Kebon Sirih No. 3D, Lt. 2, Jakarta Pusat', null, null, null, 'P3', null, 'BNSP-LSP-008-ID');
INSERT INTO `PARTNER_LSP` VALUES ('9', 'PARIWISATA', null, 'Wisma Harapan Kita Bidakara Lt. 1 Lobby Area, Kompleks Gedung Jantung Harapan Kita, Jl. Letjen S. Parman, Kav. 87, Slipi, Jakarta, 11420', null, null, null, 'P3', null, 'BNSP-LSP-009-ID');
INSERT INTO `PARTNER_LSP` VALUES ('10', 'LEMBAGA UJI KOMPETENSI (LUK PERDANA)', null, 'Graha Binawan, Jl. Kalibata Raya, No. 25-30, LGA 01, Jakarta, 13630', null, null, null, 'P3', null, 'BNSP-LSP-010-ID');
INSERT INTO `PARTNER_LSP` VALUES ('11', 'MARITIM INDONESIA', null, 'Komplek Duta Mas Fatmawati, Blok C 2/6, Jl. RS. Fatmawati, No.39, Jakarta Selatan, 12150', null, null, null, 'P3', null, 'BNSP-LSP-011-ID');
INSERT INTO `PARTNER_LSP` VALUES ('12', 'PEKERJA DOMESTI PRATAMA', null, 'Jl. Kyai Haji Abdullah Syafe\'i, No. 25B, Casablanca (Lap Ros), Tebet, Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-012-ID');
INSERT INTO `PARTNER_LSP` VALUES ('13', 'MINYAK DAN GAS (PPT MIGAS)', null, 'Jl. Sorogo No.1, Cepu Kab. Blora', null, null, null, 'P3', null, 'BNSP-LSP-013-ID');
INSERT INTO `PARTNER_LSP` VALUES ('14', 'APSI (ADMINISTRASI PROFESIONAL)', null, 'Epicentrum Walk 5th, Floor Suite A510, Jl. H.R Rasuna Said Kuningan, Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-014-ID');
INSERT INTO `PARTNER_LSP` VALUES ('15', 'IATKI (Ikatan Ahli Teknik Kelistrikan Indonesia)', null, 'Jl.Sukasenang V, No. 27, RT 04 RW 15, Kel. Cikutra, Kec. Cibeunying Kidul, Bandung', null, null, null, 'P3', null, 'BNSP-LSP-015-ID');
INSERT INTO `PARTNER_LSP` VALUES ('16', 'COATING INDONESIA', null, 'Jl. Riung Mulia No. 4, Pav. Bandung,40295', null, null, null, 'P3', null, 'BNSP-LSP-016-ID');
INSERT INTO `PARTNER_LSP` VALUES ('17', 'GEOMATIKA', null, 'Gd. Gratia Centre Lt. 1, Jl. Ciputat Raya No. 62, Kebayoran Lama, Jakarta, 12310', null, null, null, 'P3', null, 'BNSP-LSP-017-ID');
INSERT INTO `PARTNER_LSP` VALUES ('18', 'TIK INDONESIA (TEKNOLOGI INFORMASI dan KOMUNIKASI)', null, 'AMD Education Center, Jl. Pucang Anom Timur 23, Lt 2, Surabaya, 60828', null, null, null, 'P3', null, 'BNSP-LSP-018-ID');
INSERT INTO `PARTNER_LSP` VALUES ('19', 'PARIWISATA INDONESIA', null, 'Jl. Gatot Subroto Barat 459 C Denpasar Bali', null, null, null, 'P3', null, 'BNSP-LSP-019-ID');
INSERT INTO `PARTNER_LSP` VALUES ('20', 'PEKERJA DOMESTIK NUSANTARA', null, 'JL.JEMURSARI KAV.203 BLOK D.03 SURABAYA', null, null, null, 'P3', null, 'BNSP-LSP-020-ID');
INSERT INTO `PARTNER_LSP` VALUES ('21', 'COHESPA', null, 'Jl. Manyar Kertoarjo No. 74 Surabaya', null, null, null, 'P3', null, 'BNSP-LSP-021-ID');
INSERT INTO `PARTNER_LSP` VALUES ('22', 'PARIWISATA NUSANTARA', null, 'Jl. DR. Setiabudhi 186, Bandung, 40141', null, null, null, 'P3', null, 'BNSP-LSP-022-ID');
INSERT INTO `PARTNER_LSP` VALUES ('23', 'KECANTIKAN', null, 'Jl. Radio Dalam Raya No. 4, Kebayoran Baru, Jakarta Selata', null, null, null, 'P3', null, 'BNSP-LSP-023-ID');
INSERT INTO `PARTNER_LSP` VALUES ('24', 'LAS', null, 'Gedung Graha Surveyor Indonesia, Jl. Gatot Subroto Kav. 56, Lantai 14, Jakarta Selatan, 12950', null, null, null, 'P3', null, 'BNSP-LSP-024-ID');
INSERT INTO `PARTNER_LSP` VALUES ('25', 'PERHAPI (PERHIMPUNAN AHLI PERTAMBANGAN INDONESIA)', null, 'Jl. Raya Rawa Bambu No.5A Pasar Minggu Jakarta Selatan 12520', null, null, null, 'P3', null, 'BNSP-LSP-025-ID');
INSERT INTO `PARTNER_LSP` VALUES ('26', 'KOPERASI JASA KEUANGAN (KJK)', null, 'Ruko Point Automotif Centre Blok D 11. Jl. Alterbatif Cibubur Harjamukti Depok', null, null, null, 'P3', null, 'BNSP-LSP-026-ID');
INSERT INTO `PARTNER_LSP` VALUES ('27', 'BADAN SERTIFIKASI MANAJEMEN RESIKO (BSMR)', null, 'Gandaria Office 8 Unit D Lt 2, Jl. Sultan Iskandar Muda No. 8, Kebayoran Lama, Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-027-ID');
INSERT INTO `PARTNER_LSP` VALUES ('28', 'LAS ITPI', null, '', null, null, null, 'P3', null, 'BNSP-LSP-028-ID');
INSERT INTO `PARTNER_LSP` VALUES ('29', 'TEKNISI AKUNTANSI (TA)', null, 'Gedung LSP Teknisi Akuntansi, Komplek PTB, Blok I/Q, Rt 006 RW 005, No. 12, Jl. Kelapa Dua Wetan Ciracas, Jakarta Timur', null, null, null, 'P3', null, 'BNSP-LSP-029-ID');
INSERT INTO `PARTNER_LSP` VALUES ('30', 'PERBANKAN (LSPP)', null, 'Mandiri Tower Lt.9, Bapindo Plaza, Jl. Jend.Sudirman Kav 54-55, Jakarta, 121910', null, null, null, 'P3', null, 'BNSP-LSP-030-ID');
INSERT INTO `PARTNER_LSP` VALUES ('31', 'Hotel dan Restoran', null, 'Jalan Tanah Abang 1 No 12 JJ Gambir Jakarta Pusat-10160', null, null, null, 'P3', null, 'BNSP-LSP-031-ID');
INSERT INTO `PARTNER_LSP` VALUES ('32', 'REFRAKSI OPTISI INDONESIA (ROI)', null, 'Ruko Duta Merlin, Blok B No. 15, Jl. Gajah Mada No. 35, Jakarta Pusat', null, null, null, 'P3', null, 'BNSP-LSP-032-ID');
INSERT INTO `PARTNER_LSP` VALUES ('33', 'KERETA API (KA)', null, 'Jl. Gatot Subroto no. 91 C, Bandung', null, null, null, 'P3', null, 'BNSP-LSP-033-ID');
INSERT INTO `PARTNER_LSP` VALUES ('34', 'FURNITUR & KAYU OLAHAN (FURNIKO)', null, 'Jl. Diponegoro No.29, Semarang', null, null, null, 'P3', null, 'BNSP-LSP-034-ID');
INSERT INTO `PARTNER_LSP` VALUES ('35', 'AVIASI INDONESIA', null, 'Ariobimo Sentral.Jalan H.R.Rasuna Said Lt.4.Kav.X-2 No.5.Jakarta 12950.', null, null, null, 'P3', null, 'BNSP-LSP-035-ID');
INSERT INTO `PARTNER_LSP` VALUES ('36', 'LEMBAGA SERTIFIKASI PROFESI TEKNIK LISTRIK', null, 'Komplek Grand Serpong Permai (GSP) Blok N12A Jl. Raya Cisauk-LAPAN (Lembaga Penerbangan dan Antariksa Nasional) Tangerang', null, null, null, 'P3', null, 'BNSP-LSP-036-ID');
INSERT INTO `PARTNER_LSP` VALUES ('37', 'SPA NASIONAL', null, 'Jl. Kalibata Raya No. 25-30, Gd. Binawan Lt. 1 Room 103, Jakarta Timur', null, null, null, 'P3', null, 'BNSP-LSP-037-ID');
INSERT INTO `PARTNER_LSP` VALUES ('38', 'KEHUTANAN INDONESIA', null, 'Gd. Manggala Wanabakti blok VII, Lantai 14, Jl. Gatot Subroto, Senayan, Jakarta', null, null, null, 'P3', null, 'BNSP-LSP-038-ID');
INSERT INTO `PARTNER_LSP` VALUES ('39', 'KELAUTAN DAN PERIKANAN', null, 'Jl. Medan Merdeka Timur no.16 Gedung Mina Bahari 3 Jakarta Pusat', null, null, null, 'P3', null, 'BNSP-LSP-039-ID');
INSERT INTO `PARTNER_LSP` VALUES ('40', 'LRP REGISTER NURSE (RN)', null, 'Jl. Darma Putra I No. 2A , Jakarta Selatan', null, null, null, 'PROFISIENSI', null, 'BNSP-LSP-040-ID');
INSERT INTO `PARTNER_LSP` VALUES ('41', 'JASA PENGELOLA KEUANGAN PRATAMA', null, 'Jl. Supriyadi No. 7, Semarang', null, null, null, 'P3', null, 'BNSP-LSP-041-ID');
INSERT INTO `PARTNER_LSP` VALUES ('42', 'LSK-K3 ICCOSH', null, 'Stikes Binawan Lobi 2, Lantai 2, Jl. Kalibata Raya No. 25-30 Jakarta', null, null, null, 'P3', null, 'BNSP-LSP-042-ID');
INSERT INTO `PARTNER_LSP` VALUES ('43', 'FINANCIAL PLANNING STANDARD BOARD (FPSB) INDONESIA', null, 'Gedung Arthaloka Lt.16 Ruang 1310, Jl. Jend. Sudirman, Kav.2, Jakarta, 10220', null, null, null, 'PROFISIENSI', null, 'BNSP-LSP-043-ID');
INSERT INTO `PARTNER_LSP` VALUES ('44', 'STIKES BAKTI TUNAS HUSADA (BTH) TASIKMALAYA', null, 'Jl. Cilolohan no. 36, Tasikmalaya', null, null, null, 'P1', null, 'BNSP-LSP-044-ID');
INSERT INTO `PARTNER_LSP` VALUES ('45', 'INSTRUKTUR KOMPETEN INDONESIA (IKI)', null, 'Jl. Pengadegan Selatan Raya, No. 3 RT 08/04, Pancoran, Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-045-ID');
INSERT INTO `PARTNER_LSP` VALUES ('46', 'IKATAN PROPERTI MANAGER INDONESIA (IPMI)', null, 'Jl. Cisanggiri I No. 8, Kebayoran Baru, Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-046-ID');
INSERT INTO `PARTNER_LSP` VALUES ('47', 'GEOLOGI PERTAMBANGAN & PANAS BUMI', null, 'Jl. Bojong Raya No. 80, Caringin, Bandung Kulon, Bandung', null, null, null, 'P3', null, 'BNSP-LSP-047-ID');
INSERT INTO `PARTNER_LSP` VALUES ('48', 'TEKSTIL', null, 'Gd. C Lt. 4, STTT, Jl. Jakarta no. 31, Bandung, 40272', null, null, null, 'P3', null, 'BNSP-LSP-048-ID');
INSERT INTO `PARTNER_LSP` VALUES ('49', 'AKADEMI PARIWISATA MAKASAR', null, 'Jl. Gunung Rinjani Kota Mandiri, Tanjung Bunga, Makassar, 90224', null, null, null, 'P1', null, 'BNSP-LSP-049-ID');
INSERT INTO `PARTNER_LSP` VALUES ('50', 'SEKOLAH TINGGI PARIWISATA BANDUNG', null, 'Jl. Dr. Setiabudhi 186, Bandung, 40141', null, null, null, 'P1', null, 'BNSP-LSP-050-ID');
INSERT INTO `PARTNER_LSP` VALUES ('51', 'KENTUCKY FRIED CHICKEN (KFC)', null, 'Jl. Raya Bogor Km. 25, Ciracas, Jakarta Timur', null, null, null, 'P2', null, 'BNSP-LSP-051-ID');
INSERT INTO `PARTNER_LSP` VALUES ('52', 'PEKERJA DOMESTIK INDONESIA', null, 'Ruko Villa Bukit Mas , Jl. Abdul Wahab Siamin, RE, 25, Surabaya', null, null, null, 'P3', null, 'BNSP-LSP-052-ID');
INSERT INTO `PARTNER_LSP` VALUES ('53', 'SEKOLAH TINGGI PARIWISATA NUSA DUA BALI', null, 'Jl. Dharmawangsa, Kampial Nusa Dua Bali', null, null, null, 'P1', null, 'BNSP-LSP-053-ID');
INSERT INTO `PARTNER_LSP` VALUES ('54', 'AKADEMI PARIWISATA MEDAN', null, 'Jl. Rumah Sakit Haji No 12, Medan', null, null, null, 'P1', null, 'BNSP-LSP-054-ID');
INSERT INTO `PARTNER_LSP` VALUES ('55', 'PARIWISATA NASIONAL', null, 'Jl. Bendul Merisi Utara VIII / 23, Surabaya', null, null, null, 'P3', null, 'BNSP-LSP-055-ID');
INSERT INTO `PARTNER_LSP` VALUES ('56', 'MICE (MEETING INCENTIVE CONVENTION EXHIBITION)', null, 'Gd. Permata Cikini Lt. 2 Jl. Pegangsaan Timur No. 7 Jakarta Pusat', null, null, null, 'P3', null, 'BNSP-LSP-056-ID');
INSERT INTO `PARTNER_LSP` VALUES ('57', 'TATALAKSANA KELUARGA INDONESIA', null, '', null, null, null, 'P3', null, 'BNSP-LSP-057-ID');
INSERT INTO `PARTNER_LSP` VALUES ('58', 'AKPINDO STEIN (LSP FIRST PARTY)', null, 'Jl. Raya Kalimalang No. 2A, Jakarta Timur, 13620', null, null, null, 'P1', null, 'BNSP-LSP-058-ID');
INSERT INTO `PARTNER_LSP` VALUES ('59', 'MTKP JAWA BARAT', null, '', null, null, null, 'P3', null, 'BNSP-LSP-059-ID');
INSERT INTO `PARTNER_LSP` VALUES ('60', 'EKSPOR IMPOR INDONESIA', null, 'Jl. LetJen S. Parman No. 112, Grogol, Jakarta Barat', null, null, null, 'P3', null, 'BNSP-LSP-060-ID');
INSERT INTO `PARTNER_LSP` VALUES ('61', 'AIR MINUM INDONESIA', null, 'Jl. Danau Gelinggang No. 68, Bendungan Hilir, Tanah Abang, Jakarta Pusat 10210', null, null, null, 'P3', null, 'BNSP-LSP-061-ID');
INSERT INTO `PARTNER_LSP` VALUES ('62', 'PUPUK KALIMANTAN TIMUR (LSP FIRST PARTY)', null, 'Jl. James Simandjuntak No. 1, Bontang', null, null, null, 'P1', null, 'BNSP-LSP-062-ID');
INSERT INTO `PARTNER_LSP` VALUES ('63', 'MANAJEMEN KEUANGAN', null, 'Jl. Tun Abdul Razak Hertasning Baru Kab. Gowa (EX. Jl. Boulevard, Jascinth I No. 1-2 ( Lt-4), Panakukang Mas, Makasar)', null, null, null, 'P3', null, 'BNSP-LSP-063-ID');
INSERT INTO `PARTNER_LSP` VALUES ('64', 'ATDA (Air Transport Distribution Services & Agencies)', null, 'Pusat Bisnis Thamrin City , Suite 711 A-B, Lt . Jl Thamrin Boulevard Jakarta Pusat -10230', null, null, null, 'P3', null, 'BNSP-LSP-064-ID');
INSERT INTO `PARTNER_LSP` VALUES ('65', 'PEKERJA DOMESTIK KOMPETINDO', null, 'Jl. Jati Makmur Raya No. 8 Pondok Gede Bekasi TELP. 021-84977339 email: kompetindo.lsp@gmail.com fax : 021-84977339', null, null, null, 'P3', null, 'BNSP-LSP-065-ID');
INSERT INTO `PARTNER_LSP` VALUES ('66', 'KONSULTAN PAJAK INDONESIA', null, '', null, null, null, 'P3', null, 'BNSP-LSP-066-ID');
INSERT INTO `PARTNER_LSP` VALUES ('67', 'PUSAT K3', null, 'Jl. Ahmad Yani No. 69-70, Jakarta Pusat', null, null, null, 'P1', null, 'BNSP-LSP-067-ID');
INSERT INTO `PARTNER_LSP` VALUES ('68', 'PARIWISATA WIYATA NUSANTARA', null, 'JL. Kusumanegara 121 Yogyakarta', null, null, null, 'P3', null, 'BNSP-LSP-068-ID');
INSERT INTO `PARTNER_LSP` VALUES ('69', 'PERSEMENAN INDONESIA', null, 'Graha Irama 11th floor, Jl. HR. Rasuna Said, Blok X-Kav 1', null, null, null, 'P3', null, 'BNSP-LSP-069-ID');
INSERT INTO `PARTNER_LSP` VALUES ('70', 'RIMBAWAN INDONESIA (RINO)', null, 'Gd. Manggala Wanabakti, Blok 2/3, Gd. PERSAKI Lt 1, Jl. Gatot Subroto, Jakarta', null, null, null, 'P3', null, 'BNSP-LSP-070-ID');
INSERT INTO `PARTNER_LSP` VALUES ('71', 'PEKERJA DOMESTIK DUTA BANGSA', null, 'Jl. Raya Condet No 1C Jakarta Timur', null, null, null, 'P3', null, 'BNSP-LSP-071-ID');
INSERT INTO `PARTNER_LSP` VALUES ('72', 'KONSULTAN INDUSTRI KECIL DAN MENENGAH', null, 'Jl. Cikini IV No. 15, Jakarta Pusat', null, null, null, 'P3', null, 'BNSP-LSP-072-ID');
INSERT INTO `PARTNER_LSP` VALUES ('73', 'AHLI RIAS PENGANTIN', null, 'Jl. Cempaka Putih Tengah, No.12, Jakarta Pusat', null, null, null, 'P3', null, 'BNSP-LSP-073-ID');
INSERT INTO `PARTNER_LSP` VALUES ('74', 'MIGAS', null, 'Jl. Buncit Raya No. 3B, Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-074-ID');
INSERT INTO `PARTNER_LSP` VALUES ('75', 'ALAS KAKI', null, 'Jl. Sokonandi, No. 9, Yogyakarta, 55166', null, null, null, 'P3', null, 'BNSP-LSP-075-ID');
INSERT INTO `PARTNER_LSP` VALUES ('76', 'PEKERJA DOMESTIK MANDIRI', null, 'Jl. Kalibata Raya, No. 25-30, Gedung Binawan LG.14B, Jakarta Timur', null, null, null, 'P3', null, 'BNSP-LSP-076-ID');
INSERT INTO `PARTNER_LSP` VALUES ('77', 'KLINING SERVIS', null, 'Mutiara Taman Palem, Blok A 9, No. 35, Cengkareng, Jakarta Barat', null, null, null, 'P3', null, 'BNSP-LSP-077-ID');
INSERT INTO `PARTNER_LSP` VALUES ('78', 'ATMI SURAKARTA (LSP FIRST PARTY)', null, 'Politeknik ATMI, Jl. Adisucipto, Po. Box 215, Karang Asem, Laweyan, Surakarta, 57102', null, null, null, 'P1', null, 'BNSP-LSP-078-ID');
INSERT INTO `PARTNER_LSP` VALUES ('79', 'PERTANIAN', null, 'JL. Harsono RM No.3, Gedung D Lantai 7, Kanpus Kementerian Pertanian, Ragunan, Pasar Minggu, Jakarta Selatan', null, null, null, 'P2', null, 'BNSP-LSP-079-ID');
INSERT INTO `PARTNER_LSP` VALUES ('80', 'KOPERASI', null, 'Greenwood Square A3 Jl. Kol. Warsito Sugiarto Semarang 50222', null, null, null, 'P3', null, 'BNSP-LSP-080-ID');
INSERT INTO `PARTNER_LSP` VALUES ('81', 'HOTEL DAN PARIWISATA MEDAN', null, 'Jl. Laksana, No. 68, Medan', null, null, null, 'P3', null, 'BNSP-LSP-081-ID');
INSERT INTO `PARTNER_LSP` VALUES ('82', 'AUDITOR FORENSIK', null, 'Lantai-4 Gedung Barat BPKP, Jl. Pramuka, No. 33, Jakarta Timur', null, null, null, 'P3', null, 'BNSP-LSP-082-ID');
INSERT INTO `PARTNER_LSP` VALUES ('83', 'RIAS PENGANTIN MODIFIKASI DAN MODEREN KATALIA', null, 'Jl. Cempaka Baru VII/1, Jakarta Pusat', null, null, null, 'P3', null, 'BNSP-LSP-083-ID');
INSERT INTO `PARTNER_LSP` VALUES ('84', 'HIMPUNAN AHLI KONSERVASI ENERGI(HAKE)', null, 'Jl. Wibawa Mukti No 1 Jatiasih - Bekasi Area No 10.B SPBU 34-17412 Jatiasih', null, null, null, 'P3', null, 'BNSP-LSP-084-ID');
INSERT INTO `PARTNER_LSP` VALUES ('85', 'JASA BOGA INDONESIA', null, 'Kav. Hankam., Jl. Basoka Raya, Blok I/I No. 10 A, Joglo Kembangan, Jakarta Barat, 11640', null, null, null, 'P3', null, 'BNSP-LSP-085-ID');
INSERT INTO `PARTNER_LSP` VALUES ('86', 'INTALA', null, 'Gedung Asrama B, BBPLKLN, Jl. Guntur Raya, No. 1, Bekasi', null, null, null, 'P3', null, 'BNSP-LSP-086-ID');
INSERT INTO `PARTNER_LSP` VALUES ('87', 'POLITEKNIK AKADEMI PIMPINAN PERUSAHAAN', null, 'Jl. Timbul, No.34, Cipedak, Jagakarsa, Jakarta Selatan', null, null, null, 'P1', null, 'BNSP-LSP-087-ID');
INSERT INTO `PARTNER_LSP` VALUES ('88', 'KRAKATAU STEEL', null, 'Gd. Human Capital Development Center, Jl. Jend. Sudirman, Km. 3, Cilegon', null, null, null, 'P1', null, 'BNSP-LSP-089-ID');
INSERT INTO `PARTNER_LSP` VALUES ('89', 'LSP LKPP', null, 'Komplek Rasuna Epicentrum Jl. Epicentrum Tengah Lot 11B Jakarta Selatan', null, null, null, 'P2', null, 'BNSP-LSP-089-ID');
INSERT INTO `PARTNER_LSP` VALUES ('90', 'SMK SMAK PADANG', null, 'Jl. Alai Pauh V, Kel. Kapolo, Kec. Pauh', null, null, null, 'P1', null, 'BNSP-LSP-090-ID');
INSERT INTO `PARTNER_LSP` VALUES ('91', 'SMAKBO (LSP FIRST PARTY)', null, 'Jl. Binamarga I, Ciheuleut, Baranang Siang, Bogor', null, null, null, 'P1', null, 'BNSP-LSP-091-ID');
INSERT INTO `PARTNER_LSP` VALUES ('92', 'POLITEKNIK AKADEMI KIMIA ANALIS BOGOR', null, 'Jl. Ir. H. Juanda, No. 7, Bogor, 16122', null, null, null, 'P1', null, 'BNSP-LSP-092-ID');
INSERT INTO `PARTNER_LSP` VALUES ('93', 'LOGISTIK INDONESIA', null, 'Gd. PT. Monang Sianipar Abadi, Lt.2, Vicky Sianipar Music Center, Jl. Minangkabau Timur, No. 43, Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-093-ID');
INSERT INTO `PARTNER_LSP` VALUES ('94', 'FASILITATOR PEMBERDAYAAN MASYARAKAT', null, 'Komplek Kalibata Indah, Jl. Jambu Blok U No. 31, Jakarta Selatan, 12750', null, null, null, 'P3', null, 'BNSP-LSP-094-ID');
INSERT INTO `PARTNER_LSP` VALUES ('95', 'GARMINDO PLUS', null, 'Jl. Soekarno Hatta Km. 32, Ds. Harjosari, Kec. Bawen, Semarang', null, null, null, 'P3', null, 'BNSP-LSP-095-ID');
INSERT INTO `PARTNER_LSP` VALUES ('96', 'POLRI', null, 'Puslat Multifungsi POLRI. Cikeas, Gunung Putri, Bogor', null, null, null, 'P3', null, 'BNSP-LSP-096-ID');
INSERT INTO `PARTNER_LSP` VALUES ('97', 'PERTANIAN NASIONAL', null, 'Ruko Singhasari Utama Kav. 11-12, Jl. Kertanegara No. 103 Singosari-Malang 65153', null, null, null, 'P3', null, 'BNSP-LSP-097-ID');
INSERT INTO `PARTNER_LSP` VALUES ('98', 'PIKSI GANESHA BANDUNG', null, '', null, null, null, 'P3', null, 'BNSP-LSP-098-ID');
INSERT INTO `PARTNER_LSP` VALUES ('99', 'LALU LINTAS ANGKUTAN JALAN', null, 'Jl. Raya Setu, Km 3,5, Cibuntu, Cibitung, Bekasi, 17001', null, null, null, 'P3', null, 'BNSP-LSP-099-ID');
INSERT INTO `PARTNER_LSP` VALUES ('100', 'PAMA', null, 'Jl. Rawa Gelam 1, No. 9, Kawasan Industri, Pulogadung, Jakarta Timur', null, null, null, 'P1', null, 'BNSP-LSP-100-ID');
INSERT INTO `PARTNER_LSP` VALUES ('101', 'ALAT BERAT INDONESIA', null, 'Jl. Raya Bekasi, Km. 22, Cakung, Jakarta Timur', null, null, null, 'P3', null, 'BNSP-LSP-101-ID');
INSERT INTO `PARTNER_LSP` VALUES ('102', 'TENAGA TEKNIK INDONESIA', null, 'Jl. Mekar Makmur No. 38 A, Komplek Istana Mekar Wangi, Bandung, 40227', null, null, null, 'P3', null, 'BNSP-LSP-102-ID');
INSERT INTO `PARTNER_LSP` VALUES ('103', 'PRAMUWISATA INDONESIA(PRAMINDO)', null, 'Komp. Graha Mas Pemuda, Blok AC, No. 9, Jl. Pemuda Rawamangun, Jakarta Timur', null, null, null, 'P3', null, 'BNSP-LSP-103-ID');
INSERT INTO `PARTNER_LSP` VALUES ('104', 'PT. VALE INDONESIA', null, 'Training Center DP. 22, Sorowako, Kec. Nuha, Kab. Luwu Timur, Sulawesi Selatan, 92984', null, null, null, 'P1', null, 'BNSP-LSP104-ID');
INSERT INTO `PARTNER_LSP` VALUES ('105', 'ECITB INDONESIA', null, 'Kompleks Kawasan Industri Sekupang, Kav. No. 13, Batam', null, null, null, 'PROFISIENSI', null, 'BNSP-LSP-105-ID');
INSERT INTO `PARTNER_LSP` VALUES ('106', 'POLITEKNIK STTT BANDUNG', null, 'Jl. Jakarta 31, STT Tekstil, Gedung C Lt. 4, Bandung, 40272', null, null, null, 'P1', null, 'BNSP-LSP-106-ID');
INSERT INTO `PARTNER_LSP` VALUES ('107', 'PUSTAKAWAN', null, 'Jl. Medan Merdeka Selatan, No. 11, Jakarta Pusat', null, null, null, 'P3', null, 'BNSP-LSP-107-ID');
INSERT INTO `PARTNER_LSP` VALUES ('108', 'BUMITAMA', null, 'Pundu Learning Centre, PT. Windu Nabatindo Lestari, Ds. Pundu, Kec. Cempaga Hulu, Kab. Kotawaringin Timur', null, null, null, 'P1', null, 'BNSP-LSP-108-ID');
INSERT INTO `PARTNER_LSP` VALUES ('109', 'FAK. TEKNIK UNIVERSITAS NEGERI JAKARTA', null, 'Gedung L Kampus A, Universitas Negeri Jakarta, Jl. Rawamangun Muka, Jakarta Timur', null, null, null, 'P1', null, 'BNSP-LSP-109-ID');
INSERT INTO `PARTNER_LSP` VALUES ('110', 'STP SAHID', null, 'Jl. Kemiri Raya No. 22 Pondok Cabe Tangerang Selatan', null, null, null, 'P1', null, 'BNSP-LSP-110-ID');
INSERT INTO `PARTNER_LSP` VALUES ('111', 'LONDON SCHOOL PUBLIC RELATIONS', null, 'Sudirman Park Campus, Jl. KH. Mas Mansyur, Jakarta Pusat', null, null, null, 'P1', null, 'BNSP-LSP-111-ID');
INSERT INTO `PARTNER_LSP` VALUES ('112', 'LSP TPCC', null, 'JL. GEGERKALONG HILIR NO. 47, BANDUNG', null, null, null, 'P2', null, 'BNSP-LSP-112-ID');
INSERT INTO `PARTNER_LSP` VALUES ('113', 'AAMAI', null, 'Rukan Sentra Pemuda Kav.8, Jl. Pemuda No.61, Jakarta Timur', null, null, null, 'PROFISIENSI', null, 'BNSP-LSP-113-ID');
INSERT INTO `PARTNER_LSP` VALUES ('114', 'SMK SMTI PADANG', null, 'Jl. Ir. Juanda, No. 2, Padang', null, null, null, 'P1', null, 'BNSP-LSP-114-ID');
INSERT INTO `PARTNER_LSP` VALUES ('115', 'USER PLN', null, 'Jl. Letjen S.Parman Kav.27 No.5-6 Slipi, Jakarta Barat 11480', null, null, null, 'P2', null, 'BNSP-LSP-115-ID');
INSERT INTO `PARTNER_LSP` VALUES ('116', 'KOPERASI NUSANTARA', null, 'Graha Widya Bhakti, Jl. Menur Pumpungan, No. 30, Surabaya', null, null, null, 'P3', null, 'BNSP-LSP-116-ID');
INSERT INTO `PARTNER_LSP` VALUES ('117', 'MANAJEMEN WIRAUSAHA DAN PRODUKTIVITAS MERDEKA', null, 'Jl. Terusan Raya Dieng, No. 62-64, Malang', null, null, null, 'P3', null, 'BNSP-LSP-117-ID');
INSERT INTO `PARTNER_LSP` VALUES ('118', 'TENAGA TEKNIK K3 INDONESIA', null, 'Kedungdoro Jaya Building, Jl. Kedungdoro 74-76 / B-19, Surabaya', null, null, null, 'P3', null, 'BNSP-LSP-118-ID');
INSERT INTO `PARTNER_LSP` VALUES ('119', 'POLITEKNIK NEGERI UJUNG PANDANG', null, 'Jl. Perintis Kemerdekaan Km. 10, Tamalanrea, Makassar', null, null, null, 'P1', null, 'BNSP-LSP-119-ID');
INSERT INTO `PARTNER_LSP` VALUES ('120', 'SMK SMTI PONTIANAK', null, 'Jl. Sulawesi Dalam, No. 31, Pontianak', null, null, null, 'P1', null, 'BNSP-LSP-120-ID');
INSERT INTO `PARTNER_LSP` VALUES ('121', 'MANAJEMEN RISIKO', null, 'Gedung Biru Lt 4., Jl. Kapten Tendean No. 1, Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-122-ID');
INSERT INTO `PARTNER_LSP` VALUES ('122', 'KOPI INDONESIA', null, 'JL.RAYA TENGAH NO.18A RT.10/RW.08 GEDONG, PASAR REBO - JAKARTA TIMUR', null, null, null, 'P3', null, 'BNSP-LSP-122-ID');
INSERT INTO `PARTNER_LSP` VALUES ('123', 'SMK SMTI YOGYAKARTA', null, 'Jl. Kusumanegara, No. 3 Yogyakarta', null, null, null, 'P1', null, 'BNSP-LSP-123-ID');
INSERT INTO `PARTNER_LSP` VALUES ('124', 'Akademi Teknik Industri Makasar', null, 'Jl. Sunu, No. 220, Makassar', null, null, null, 'P1', null, 'BNSP-LSP- 124-ID');
INSERT INTO `PARTNER_LSP` VALUES ('125', 'SMK SMTI BANDA ACEH', null, 'Jl. Twk. Hasyim Banta Muda, No.6, Banda Aceh', null, null, null, 'P1', null, 'BNSP-LSP-125-ID');
INSERT INTO `PARTNER_LSP` VALUES ('126', 'PARIWISATA ARCHIPELAGO', null, 'Lt. Dasar Hermes Palace Hotel, Jl. T.Panglima Nyak Makam, Banda Aceh', null, null, null, 'P3', null, 'BNSP-LSP-126-ID');
INSERT INTO `PARTNER_LSP` VALUES ('127', 'ANALIS KIMIA SMK SMAK MAKASSAR', null, 'Jl Urip Sumoharjo Km 4 Kel Pampang Kec Panakkukang Kota Makassar', null, null, null, 'P1', null, 'BNSP-LSP-127-ID');
INSERT INTO `PARTNER_LSP` VALUES ('128', 'HIGIENE INDUSTRI', null, 'Jl. Ahmad Yani 69-70, Cempaka Putih, Jakarta Pusat', null, null, null, 'P3', null, 'BNSP-LSP-128-ID');
INSERT INTO `PARTNER_LSP` VALUES ('129', 'INSPEKTUR MARITIM INDONESIA', null, 'Komplek Garama Citra Hill Blok R No.4, Jl. Yos Soedarso, Batu Ampar, 29432, Batam - Kepulauan Riau', null, null, null, 'P3', null, 'BNSP-LSP-129-ID');
INSERT INTO `PARTNER_LSP` VALUES ('130', 'AKADEMI TEKNOLOGI INDUSTRI PADANG', null, 'Jl. Bunga Pasang Tabing Padang 25171', null, null, null, 'P1', null, 'BNSP-LSP-130-ID');
INSERT INTO `PARTNER_LSP` VALUES ('131', 'PARIWISATA LANCANG KUNING NUSANTARA', null, 'Jl. Arifin Ahmad, Komplek Mega Asri, Blok B/18, Pekanbaru', null, null, null, 'P3', null, 'BNSP-LSP-131-ID');
INSERT INTO `PARTNER_LSP` VALUES ('132', 'INDUSTRI PUPUK INDONESIA', null, 'Gd. Annex, Lt. 1, Kantor Perwakilan Jakarta PT. Pupuk Sriwidjaja, Jl. Taman Anggrek Kemanggisan Jaya, Jakarta Barat, 11480', null, null, null, 'P3', null, 'BNSP-LSP-132-ID');
INSERT INTO `PARTNER_LSP` VALUES ('133', 'K3 INDONESIA', null, 'Jl. Jenderal Ahmad Yani 69-70, Cempaka Putih, Jakarta Pusat', null, null, null, 'P3', null, 'BNSP-LSP-133-ID');
INSERT INTO `PARTNER_LSP` VALUES ('134', 'PEMASARAN', null, 'Segitiga Emas Business Park CBD B01/01 Jl. Prof. Dr. Satrio Kav. 6 Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-134-ID');
INSERT INTO `PARTNER_LSP` VALUES ('135', 'PUBLIC RELATIONS INDONESIA(PRI)', null, 'Jl. Daud 33, Kebayoran Lama, Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-135-ID');
INSERT INTO `PARTNER_LSP` VALUES ('136', 'PARIWISATA BHAKTI PERSADA', null, 'Jl. Sukabumi No. 42 Bandung 40271', null, null, null, 'P3', null, 'BNSP-LSP-136-ID');
INSERT INTO `PARTNER_LSP` VALUES ('137', 'SMKN 10 SURABAYA', null, 'JL.KEPUTIH TEGAL, SUKOLILO - SURABAYA', null, null, null, 'P1', null, 'BNSP-LSP-137-ID');
INSERT INTO `PARTNER_LSP` VALUES ('138', 'LPK HOTEL AND CRUISE INTERNASIONAL', null, 'Jl. Tasbih No. 10 A Singaraja, Bali', null, null, null, 'P1', null, 'BNSP-LSP-138-ID');
INSERT INTO `PARTNER_LSP` VALUES ('139', 'LPK PPKIP JAYAWISATA', null, 'Jl. HOS. Cokroaminoto 63, Ubung, Denpasar', null, null, null, 'P1', null, 'BNSP-LSP-139-ID');
INSERT INTO `PARTNER_LSP` VALUES ('140', 'SEKOLAH PERHOTELAN BALI', null, 'jalan. Tari Kecak no. 12 Denpasar/ Bali', null, null, null, 'P1', null, 'BNSP-LSP-140-ID');
INSERT INTO `PARTNER_LSP` VALUES ('141', 'LPK MONARCH BALI', null, 'Jl. Pandu No. 27, Banjar Dukuh Dalung, Kuta Utara Badung, Bali', null, null, null, 'P1', null, 'BNSP-LSP-141-ID');
INSERT INTO `PARTNER_LSP` VALUES ('142', 'KEAMANAN PANGAN BADAN POM', null, 'Jl. Percetakan Negara No. 23 Gedung F Lantai 2 Jakarta Pusat 10560', null, null, null, 'P2', null, 'BNSP-LSP-142-ID');
INSERT INTO `PARTNER_LSP` VALUES ('143', 'BARISTA INDONESIA', null, 'Rukan Graha Kencana Blok EP Jl. Raya Perjuangan No. 88 Kebun Jeruk Jakarta Barat', null, null, null, 'P3', null, 'BNSP-LSP-143-ID');
INSERT INTO `PARTNER_LSP` VALUES ('144', 'BBLKI SURAKARTA', null, 'Jl. Bhayangkara No. 38 Surakarta', null, null, null, 'P1', null, 'BNSP-LSP-144-ID');
INSERT INTO `PARTNER_LSP` VALUES ('145', 'BBPLKLN-CEVEST', null, 'Jl. Guntur Raya No. 1 Bekasi 17144', null, null, null, 'P1', null, 'BNSP-LSP-145-ID');
INSERT INTO `PARTNER_LSP` VALUES ('146', 'PARIWISATA BALI', null, 'Jl. Kembang Matahari No. 147 Lt. 2 Denpasar', null, null, null, 'P3', null, 'BNSP-LSP-146-ID');
INSERT INTO `PARTNER_LSP` VALUES ('147', 'LP2B GIANYAR', null, 'Jl. Baypass Darma Giri Gianyar Bali', null, null, null, 'P3', null, 'BNSP-LSP-147-ID');
INSERT INTO `PARTNER_LSP` VALUES ('148', 'LPK BALINDO PARADISO', null, 'Jl. Kerthapura VIII No. 21 Denpasar - Bali', null, null, null, 'P3', null, 'BNSP-LSP-148-ID');
INSERT INTO `PARTNER_LSP` VALUES ('149', 'LPK BALI BINA MANDIRI', null, 'Jl. Danau Tondano No. 14 Lelateng Negara - Bali', null, null, null, 'P3', null, 'BNSP-LSP-149-ID');
INSERT INTO `PARTNER_LSP` VALUES ('150', 'SEKOLAH PERHOTELAN INTERNASIONAL', null, 'Jl. Lely 1B Kreneng Denpasar Bali', null, null, null, 'P1', null, 'BNSP-LSP-150-ID');
INSERT INTO `PARTNER_LSP` VALUES ('151', 'PARIWISATA GUNADHARMA UTAMA', null, 'Jl. Lamongan Raya No. 11 Semarang', null, null, null, 'P3', null, 'BNSP-LSP-151-ID');
INSERT INTO `PARTNER_LSP` VALUES ('152', 'INSPEKTOR INDUSTRI MANUFAKTUR', null, 'Jl. Raden Saleh Raya No. 04 Jakarta Pusat', null, null, null, 'P3', null, 'BNSP-LSP-152-ID');
INSERT INTO `PARTNER_LSP` VALUES ('153', 'TRANSPORTASI', null, 'Jl. RA. Kartini No. 16 Cilandak, Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-153-ID');
INSERT INTO `PARTNER_LSP` VALUES ('154', 'BBLKI SERANG', null, 'Jl. Raya Pandeglang Km. 3 Serang', null, null, null, 'P1', null, 'BNSP-LSP-154-ID');
INSERT INTO `PARTNER_LSP` VALUES ('155', 'BBPLKDN Bandung', null, 'Jl. Jend. Gatot Subroto No. 170 Bandung', null, null, null, 'P1', null, 'BNSP-LSP-155-ID');
INSERT INTO `PARTNER_LSP` VALUES ('156', 'PERKOPERASIAN INDONESIA', null, 'Jl. Utan Kayu Raya No. 20 A Jakarta Timur', null, null, null, 'P3', null, 'BNSP-LSP-156-ID');
INSERT INTO `PARTNER_LSP` VALUES ('157', 'OTOMOTIF INDONESIA', null, 'Jl. Kyai Mojo No. 70 Komplek BLPT Lt. 3 Yogyakarta', null, null, null, 'P3', null, 'BNSP-LSP-157-ID');
INSERT INTO `PARTNER_LSP` VALUES ('158', 'PARIWISATA PHINISI', null, 'Jl. Balaikota No.11 A, Makassar', null, null, null, 'P3', null, 'BNSP-LSP-158-ID');
INSERT INTO `PARTNER_LSP` VALUES ('159', 'CREW KAPAL PESIAR DAN KAPAL NIAGA INTERNASIONAL', null, 'Jl. Kebun Bawang VI No. 12 Tanjung Priok, Jakarta Utara', null, null, null, 'P3', null, 'BNSP-LSP-159-ID');
INSERT INTO `PARTNER_LSP` VALUES ('160', 'KELAUTAN', null, 'Sekertarian Gedung Mina Bahari 3 lantai 8, Jl Medan Merdeka timur 16 Jakarta Pusat', null, null, null, 'P3', null, 'BNSP-LSP-160-ID');
INSERT INTO `PARTNER_LSP` VALUES ('161', 'PERHUTANI', null, 'Pusdikbang SDM Jl. Rimba Mulya No. 11 Madiun 63116', null, null, null, 'P2', null, 'BNSP-LSP-161-ID');
INSERT INTO `PARTNER_LSP` VALUES ('162', 'PENANGGULANGAN BENCANA(PB)', null, 'Gedung Graha BNPB Jl. Pramuka Kav. 38, Lt. 15, Jakarta Timur 13120', null, null, null, 'P2', null, 'BNSP-LSP-162-ID');
INSERT INTO `PARTNER_LSP` VALUES ('163', 'PERKEBUNAN DAN HORTIKULTURA INDONESIA', null, 'Gd. Graha BUN Jl. Ciputat Raya Nomor 7, Pondok Pinang Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-163-ID');
INSERT INTO `PARTNER_LSP` VALUES ('164', 'SMKN 2 MAGELANG', null, 'Jl. Ahmad Yani 135 A Magelang', null, null, null, 'P1', null, 'BNSP-LSP-164-ID');
INSERT INTO `PARTNER_LSP` VALUES ('165', 'SMK SMTI BANDAR LAMPUNG', null, 'Jl. Jend. Sudirman No. 43 Rawalaut Bandar Lampung', null, null, null, 'P1', null, 'BNSP-LSP-165-ID');
INSERT INTO `PARTNER_LSP` VALUES ('166', 'PROFESI HUBUNGAN INDUSTRIAL', null, 'Gd. Kementerian Tenaga Kerja dan Transmigrasi Lt. VIII Blok B, Jl. Jend. Gatot Subroto Kav. 51, Jakarta', null, null, null, 'P3', null, 'BNSP-LSP-166-ID');
INSERT INTO `PARTNER_LSP` VALUES ('167', 'PENGEMBANGAN LAS', null, 'Jl. Raya Condet No. 55 Kramat Jati, Jakarta Timur', null, null, null, 'P3', null, 'BNSP-LSP-167-ID');
INSERT INTO `PARTNER_LSP` VALUES ('168', 'PETERNAKAN INDONESIA', null, 'Jl. Tanjung Barat Selatan No. 20 F Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-168-ID');
INSERT INTO `PARTNER_LSP` VALUES ('169', 'SMKN 4 SURAKARTA', null, 'Jl. L.U. Adi Sucipto No. 40 Surakarta', null, null, null, 'P1', null, 'BNSP-LSP-169-ID');
INSERT INTO `PARTNER_LSP` VALUES ('170', 'SMKN 3 KUNINGAN', null, 'Jl. Raya Cirendang-Cigugur Kuningan', null, null, null, 'P1', null, 'BNSP-LSP-170-ID');
INSERT INTO `PARTNER_LSP` VALUES ('171', 'SMKN 3 JEMBER', null, 'Jl. Dr. Subandi No. 31 Jember', null, null, null, 'P1', null, 'BNSP-LSP-171-ID');
INSERT INTO `PARTNER_LSP` VALUES ('172', 'SMKN TEKNOLOGI PLUS PADJADJARAN SUKABUMI', null, 'Jl. Cemerlangn No. 18', null, null, null, 'P1', null, 'BNSP-LSP-172-ID');
INSERT INTO `PARTNER_LSP` VALUES ('173', 'SMK PANGUDI LUHUR MUNTILAN', null, 'Jl. Kartini No. 2 Muntilan Magelang', null, null, null, 'P1', null, 'BNSP-LSP-173-ID');
INSERT INTO `PARTNER_LSP` VALUES ('174', 'SMKN 2 GARUT', null, 'Jl. Suherman No. 90 Kotak Pos 103 Garut', null, null, null, 'P1', null, 'BNSP-LSP-174-ID');
INSERT INTO `PARTNER_LSP` VALUES ('175', 'SMKN 1 PURWOREJO', null, 'Jl. Tentara Pelajar Kotak Pos 127 Purworejo', null, null, null, 'P1', null, 'BNSP-LSP-175-ID');
INSERT INTO `PARTNER_LSP` VALUES ('176', 'SMKN 9 BANDUNG', null, 'Jl. Soekarno Hatta Km. 10 Bandung', null, null, null, 'P1', null, 'BNSP-LSP-176-ID');
INSERT INTO `PARTNER_LSP` VALUES ('177', 'SMKN 3 SUKABUMI', null, 'Jl. Kabandungan No. 86 Sukabumi', null, null, null, 'P1', null, 'BNSP-LSP-177-ID');
INSERT INTO `PARTNER_LSP` VALUES ('178', 'SMKN 3 BOGOR', null, 'Jl. Raya Pajajaran No. 84 Bogor', null, null, null, 'P1', null, 'BNSP-LSP-178-ID');
INSERT INTO `PARTNER_LSP` VALUES ('179', 'SMK WIKRAMA BOGOR', null, 'Jl. Raya Wangun Sindang Sari Bogor Timur, Bogor', null, null, null, 'P1', null, 'BNSP-LSP-179-ID');
INSERT INTO `PARTNER_LSP` VALUES ('180', 'SMKN 1 BANTUL', null, 'Jl. Parangtritis Km. 11 Sabdodadi Bantul', null, null, null, 'P1', null, 'BNSP-LSP-180-ID');
INSERT INTO `PARTNER_LSP` VALUES ('181', 'SMKN 1 MAGELANG', null, 'Jl. Cawang No 2 Kota Magelang', null, null, null, 'P1', null, 'BNSP-LSP-181-ID');
INSERT INTO `PARTNER_LSP` VALUES ('182', 'SMKN 3 BOYOLANGU', null, 'Jl. Ki Mangunsarkoro Tulungagung', null, null, null, 'P1', null, 'BNSP-LSP-182-ID');
INSERT INTO `PARTNER_LSP` VALUES ('183', 'SMKN 2 KEDIRI', null, 'Jl. Veteran 5 Kota Kediri Kediri', null, null, null, 'P1', null, 'BNSP-LSP-183-ID');
INSERT INTO `PARTNER_LSP` VALUES ('184', 'SEMEN INDONESIA GROUP', null, 'Gedung Utama PT Semen Indonesia Lantai 2 Jl. Veteran Gresik - Jawa Timur 61122', null, null, null, 'P2', null, 'BNSP-LSP-184-ID');
INSERT INTO `PARTNER_LSP` VALUES ('185', 'HULU MIGAS', null, 'Gedung City Plaza Lt.9,Jln.Jend.Gatot Subroto no.42 Jakarta 12710', null, null, null, 'P2', null, 'BNSP-LSP-185-ID');
INSERT INTO `PARTNER_LSP` VALUES ('186', 'POLITEKNIK ELEKTRONIKA NEGERI SURABAYA', null, 'Kampus PENS, Gedung TC Lt. 1 Jl. Raya ITS Keputih, Sukolilo, Surabaya 60111', null, null, null, 'P1', null, 'BNSP-LSP-186-ID');
INSERT INTO `PARTNER_LSP` VALUES ('187', 'STIKES FORT DE KOCK', null, 'Jl. Soekarno Hatta, Kel. Manggis Ganting Kec. Mandiangin Kota Selayan Bukittinggi', null, null, null, 'P1', null, 'BNSP-LSP-187-ID');
INSERT INTO `PARTNER_LSP` VALUES ('188', 'JAMINAN MUTU DAN KEAMANAN PANGAN(JMKP)', null, 'Komplek Perniagaan Bukit Cimanggu City Blok C3 No.7', null, null, null, 'P3', null, 'BNSP-LSP-188-ID');
INSERT INTO `PARTNER_LSP` VALUES ('189', 'PARIWISATA BALI INDONESIA (PBI)', null, 'Jl. Dewi Madri X No. 3 Renon Denpasar Bali 80235', null, null, null, 'P3', null, 'BNSP-LSP-189-ID');
INSERT INTO `PARTNER_LSP` VALUES ('190', 'SMKN 7 BANDUNG', null, 'JL. Soekarno-Hatta No 596 Kota Bandung 40286', null, null, null, 'P1', null, 'BNSP-LSP-190-ID');
INSERT INTO `PARTNER_LSP` VALUES ('191', 'SMKN 7 SEMARANG', null, 'JL. Simpang Lima No 1 Semarang', null, null, null, 'P1', null, 'BNSP-LSP-191-ID');
INSERT INTO `PARTNER_LSP` VALUES ('192', 'SMKN 11 BANDUNG', null, 'Jl. Budhi Cilember Bandung 40175', null, null, null, 'P1', null, 'BNSP-LSP-192-ID');
INSERT INTO `PARTNER_LSP` VALUES ('193', 'JASA RAHARJA', null, 'Jl. H.R. Rasuna Said Kav. C-2 Jakarta 12920', null, null, null, 'P3', null, 'BNSP-LSP-193-ID');
INSERT INTO `PARTNER_LSP` VALUES ('194', 'SMKN 2 CIKARANG', null, 'Jl.Fatahilah 1A Cikarang Barat Kabupaten Bekasi', null, null, null, 'P1', null, 'BNSP-LSP-194-ID');
INSERT INTO `PARTNER_LSP` VALUES ('195', 'SMKN 1 KARAWANG', null, 'Jl. Pangkal Perjuangan (By Pass) Karawang 41316', null, null, null, 'P1', null, 'BNSP-LSP-195-ID');
INSERT INTO `PARTNER_LSP` VALUES ('196', 'SMKN 2 SUMEDANG', null, 'Jl. Arif Rakhman Hakim No. 59 Sumedang , Jawa Barat', null, null, null, 'P1', null, 'BNSP-LSP-196-ID');
INSERT INTO `PARTNER_LSP` VALUES ('197', 'POLITEKNIK PERKAPALAN NEGERI SURABAYA', null, 'Jalan Teknik Kimia Kampus ITS Sukolilo Surabaya', null, null, null, 'P1', null, 'BNSP-LSP-197-ID');
INSERT INTO `PARTNER_LSP` VALUES ('198', 'SMKN 2 BOYOLANGU', null, 'JL. KI MANGUNSARKORO VI/ I BOYOLANGU, TULUNGAGUNG', null, null, null, 'P1', null, 'BNSP-LSP-198-ID');
INSERT INTO `PARTNER_LSP` VALUES ('199', 'SMKN 1 CIBADAK', null, 'Jl. Raya Karangtengah No. 691 Karangtengah Cibadak Sukabumi 43155', null, null, null, 'P1', null, 'BNSP-LSP-199-ID');
INSERT INTO `PARTNER_LSP` VALUES ('200', 'DMI HOTEL SCHOOL', null, 'Jl. Drupadi No. 27 Denpasar Bali', null, null, null, 'P1', null, 'BNSP-LSP-200-ID');
INSERT INTO `PARTNER_LSP` VALUES ('201', 'SMKN 1 PACET CIANJUR', null, 'Jl. Hanjawar Pacet No. 25 Pacet Cianjur 43253', null, null, null, 'P1', null, 'BNSP-LSP-201-ID');
INSERT INTO `PARTNER_LSP` VALUES ('202', 'SMKN 1 CIANJUR', null, 'Jl. Siliwangi No. 41 Cianjur 43212', null, null, null, 'P1', null, 'BNSP-LSP-202-ID');
INSERT INTO `PARTNER_LSP` VALUES ('203', 'SMKN 1 POGALAN', null, 'Jalan Tulungagung No 3 Ngetal-Pogalan - Trenggalek', null, null, null, 'P1', null, 'BNSP-LSP-203-ID');
INSERT INTO `PARTNER_LSP` VALUES ('204', 'SMKN 1 SEMARANG', null, 'Jl. Dr. Cipto No. 93 Semarang', null, null, null, 'P1', null, 'BNSP-LSP-204-ID');
INSERT INTO `PARTNER_LSP` VALUES ('205', 'SMKN 1 GARUT', null, 'Jl. Cimanuk No. 309A Kec. Taragong Kidul Garut', null, null, null, 'P1', null, 'BNSP-LSP-205-ID');
INSERT INTO `PARTNER_LSP` VALUES ('206', 'AWAK KAPAL PERIKANAN', null, 'Sapphire Recidence Blok A no.1 Jl. Perintis Kemerdekaan ,Beji-Taman, Pemalang Jawa Tengah', null, null, null, 'P3', null, 'BNSP-LSP-206-ID');
INSERT INTO `PARTNER_LSP` VALUES ('207', 'SMKN 2 SUBANG', null, 'Jl. Wera KM 05 Dangdeur-Subang', null, null, null, 'P1', null, 'BNSP-LSP-207-ID');
INSERT INTO `PARTNER_LSP` VALUES ('208', 'SMKN 6 SURAKARTA', null, 'JL. LU Adi Sucipto No. 38 Surakarta', null, null, null, 'P1', null, 'BNSP-LSP-208-ID');
INSERT INTO `PARTNER_LSP` VALUES ('209', 'SMKN 13 BANDUNG', null, 'Jln. Sidodadi Barat No. 8 Semarang', null, null, null, 'P1', null, 'BNSP-LSP-209-ID');
INSERT INTO `PARTNER_LSP` VALUES ('210', 'SMKN 2 KOTA CIREBON', null, 'Jl. Dr. Cipto Mangunkusumo Cirebon 45131', null, null, null, 'P1', null, 'BNSP-LSP-210-ID');
INSERT INTO `PARTNER_LSP` VALUES ('211', 'PASAR MODAL', null, 'Wisma GKBI Lt.6 Suite 605 Jl Jendral Sudirman Kav.28', null, null, null, 'P3', null, 'BNSP-LSP-211-ID');
INSERT INTO `PARTNER_LSP` VALUES ('212', 'SMKN 6 BANDUNG', null, 'JL. Soekarno-Hatta (Riung Bandung) Kota Bandung 40295', null, null, null, 'P1', null, 'BNSP-LSP-212-ID');
INSERT INTO `PARTNER_LSP` VALUES ('213', 'SMKN 3 KOTA BENGKULU', null, 'Jln. Jati No 42 Sawahlebar Kota Bengkulu', null, null, null, 'P1', null, 'BNSP-LSP-213-ID');
INSERT INTO `PARTNER_LSP` VALUES ('214', 'SMKN 1 SUKABUMI', null, 'JL. Kabandungan No.90 Kota Sukabumi Jawa Barat', null, null, null, 'P1', null, 'BNSP-LSP-214-ID');
INSERT INTO `PARTNER_LSP` VALUES ('215', 'POLITEKNIK POS INDONESIA', null, 'Jl. Terusan Sariasih No. 54 Bandung 40151', null, null, null, 'P1', null, 'BNSP-LSP-215-ID');
INSERT INTO `PARTNER_LSP` VALUES ('216', 'SMKN 1 BENGKULU', null, 'Jl. Jati No. 141 Kel. Padang, Kec. Ratu Agung Kota Bengkulu 38229', null, null, null, 'P1', null, 'BNSP-LSP-216-ID');
INSERT INTO `PARTNER_LSP` VALUES ('217', 'KEUANGAN KOPERASI INDONESIA', null, 'Jl. Gading Bukit Indah Blok A / 3 Kelapa Gading, Jakarta Utara', null, null, null, 'P3', null, 'BNSP-LSP-217-ID');
INSERT INTO `PARTNER_LSP` VALUES ('218', 'ELEKTRONIKA INDONESIA', null, 'Jalan Raya Bogor Km. 29, Jakarta', null, null, null, 'P3', null, 'BNSP-LSP-218-ID');
INSERT INTO `PARTNER_LSP` VALUES ('219', 'ELEKTROTEKNIKA', null, 'Jl. Raya Kebayoran Lama No.37-A', null, null, null, 'P3', null, 'BNSP-LSP-219-ID');
INSERT INTO `PARTNER_LSP` VALUES ('220', 'POLITEKNIK PERTANIAN NEGERI PANGKEP', null, 'Jl. Poros Makassar- Pare Pare KM.83 Mandalle Kab. Pangkep, Sul-Sel 90655', null, null, null, 'P1', null, 'BNSP-LSP-220-ID');
INSERT INTO `PARTNER_LSP` VALUES ('221', 'SMKN 1 KATAPANG', null, 'Jl. Ceuri Terusan Kopo Km. 13,5 Katapang, Kabupaten Bandung', null, null, null, 'P1', null, 'BNSP-LSP-221-ID');
INSERT INTO `PARTNER_LSP` VALUES ('222', 'SMKN 4 MALANG', null, 'Jl. Tanimbar No. 22 Malang 65117', null, null, null, 'P1', null, 'BNSP-LSP-222-ID');
INSERT INTO `PARTNER_LSP` VALUES ('223', 'POLITEKNIK AKA MIGAS PALEMBANG', null, 'Jln. Kebon Jahe Komperta Plaju Palembang', null, null, null, 'P1', null, 'BNSP-LSP-223-ID');
INSERT INTO `PARTNER_LSP` VALUES ('224', 'SMKN 2 TASIKMALAYA', null, 'Jl. Noenoeng Tisnasaputra Kahuripan Tawang, Tasikmalaya', null, null, null, 'P1', null, 'BNSP-LSP-224-ID');
INSERT INTO `PARTNER_LSP` VALUES ('225', 'SMKN 3 BUDURAN SIDOARJO', null, 'Jl. Jenggolo No. 1 c Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-225-ID');
INSERT INTO `PARTNER_LSP` VALUES ('226', 'SMKN 3 MALANG', null, 'Jl. Surabaya No. 1 Malang', null, null, null, 'P1', null, 'BNSP-LSP-226-ID');
INSERT INTO `PARTNER_LSP` VALUES ('227', 'SMKN 2 BENGKULU', null, 'Jl. Batanghari No. 2 Kota Bengkulu 38225', null, null, null, 'P1', null, 'BNSP-LSP-227-ID');
INSERT INTO `PARTNER_LSP` VALUES ('228', 'BATIK', null, 'Ruko Artha Mas No. 12 D Jl. Supriyadi Kav. 23, Semarang', null, null, null, 'P3', null, 'BNSP-LSP-228-ID');
INSERT INTO `PARTNER_LSP` VALUES ('229', 'TELEKOMUNIKASI', null, 'Graha ADPD Jl. Warung Buncit Raya No. 101 Kel. Pejaten Barat Pasar Minggu Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-229-ID');
INSERT INTO `PARTNER_LSP` VALUES ('230', 'SMKN 1 TEMANGGUNG', null, 'Jl. Kadar Maron Temanggung', null, null, null, 'P1', null, 'BNSP-LSP-230-ID');
INSERT INTO `PARTNER_LSP` VALUES ('231', 'SMKN 1 KARANGANYAR KEBUMEN', null, 'Jl. Revolusi 31, Karanganyar Kebumen', null, null, null, 'P1', null, 'BNSP-LSP-231-ID');
INSERT INTO `PARTNER_LSP` VALUES ('232', 'SMKN 1 BAWANG', null, 'Jl. Raya Pucang No. 132 Bawang', null, null, null, 'P1', null, 'BNSP-LSP-232-ID');
INSERT INTO `PARTNER_LSP` VALUES ('233', 'SMKN 2 KEBUMEN', null, 'Jl. Joko SAngkrip Km. 1 Kebumen', null, null, null, 'P1', null, 'BNSP-LSP-233-ID');
INSERT INTO `PARTNER_LSP` VALUES ('234', 'BDI SURABAYA', null, 'JL. Gayung Kebon Sari Dalam 12 Surabaya', null, null, null, 'P1', null, 'BNSP-LSP-234-ID');
INSERT INTO `PARTNER_LSP` VALUES ('235', 'SMKN 1 KEBUMEN', null, 'Jl. Cemara No. 37 Karangsari Kebumen 54351', null, null, null, 'P1', null, 'BNSP-LSP-235-ID');
INSERT INTO `PARTNER_LSP` VALUES ('236', 'SMKN 1 GOMBONG', null, 'Jl. Wilis No.15 Wero Gombong Kab. Kebumen', null, null, null, 'P1', null, 'BNSP-LSP-236-ID');
INSERT INTO `PARTNER_LSP` VALUES ('237', 'TEKSTIL DAN PRODUK TEKSTIL', null, 'Jl. Wartawan 2 No. 15 Bandung Jawa Barat', null, null, null, 'P3', null, 'BNSP-LSP-237-ID');
INSERT INTO `PARTNER_LSP` VALUES ('238', 'ENERGI', null, 'Komplek Grand Galaxy Park Blok RSK 6 No. 10 Bekasi', null, null, null, 'P3', null, 'BNSP-LSP-238-ID');
INSERT INTO `PARTNER_LSP` VALUES ('239', 'SMK SEKESAL', null, 'SMK Farmasi Sekesal Surabaya, Jl. GadungNo. 2 Wonokromo Surabaya', null, null, null, 'P1', null, 'BNSP-LSP-239-ID');
INSERT INTO `PARTNER_LSP` VALUES ('240', 'SMKN 1 BATAM', null, 'Jl. Prof. DR. Hamka No. 1 Tembesi Kecamatan Batu Ajai, Batam', null, null, null, 'P1', null, 'BNSP-LSP-240-ID');
INSERT INTO `PARTNER_LSP` VALUES ('241', 'SMKN 2 MALANG', null, 'Jl. Veteran No. 17 Malang 65145', null, null, null, 'P1', null, 'BNSP-LSP-241-ID');
INSERT INTO `PARTNER_LSP` VALUES ('242', 'SMKN 1 MUNDU', null, 'Jl. Kalijaga Mundupesisir No. 1 Cirebon 45173', null, null, null, 'P1', null, 'BNSP-LSP-242-ID');
INSERT INTO `PARTNER_LSP` VALUES ('243', 'SMKN 1 PURWOSARI', null, 'Jl. Raya Purwosari Purwosari Pasuruan 67162', null, null, null, 'P1', null, 'BNSP-LSP-243-ID');
INSERT INTO `PARTNER_LSP` VALUES ('244', 'Sekolah Tinggi Ilmu Komputer Cipta karya Informatika (STIKOM CKI)', null, 'Jl.Radin Inten II no.8 Duren Sawit Jakarta Timur', null, null, null, 'P1', null, 'BNSP-LSP-244-ID');
INSERT INTO `PARTNER_LSP` VALUES ('245', 'BDI JAKARTA', null, 'Jl. Balai Kimia No. 1A, Pekayon, Pasar Rebo, Jakarta Timur', null, null, null, 'P1', null, 'BNSP-LSP-245-ID');
INSERT INTO `PARTNER_LSP` VALUES ('246', 'STMI JAKARTA', null, 'Jl. Letjen Suprapto No.26, RT.10/RW.5, Cemp. Putih Tim., Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta', null, null, null, 'P1', null, 'BNSP-LSP-246-ID');
INSERT INTO `PARTNER_LSP` VALUES ('247', 'SMKN 1 CIBINONG', null, 'Jl. Karadenan No. 7 Kab. Bogor 13640', null, null, null, 'P1', null, 'BNSP-LSP-247-ID');
INSERT INTO `PARTNER_LSP` VALUES ('248', 'POLITEKNIK NEGERI SEMARANG', null, 'Jl. Prof. Soedarto, SH Tembalang Semarang', null, null, null, 'P1', null, 'BNSP-LSP-248-ID');
INSERT INTO `PARTNER_LSP` VALUES ('249', 'UNIVERSITAS NEGERI SURABAYA', null, 'Jalan Ketintang, Wonokromo, Jawa Timur', null, null, null, 'P1', null, 'BNSP-LSP-249-ID');
INSERT INTO `PARTNER_LSP` VALUES ('250', 'SMKN 2 KOTA PROBOLINGGO', null, 'JL. Mastrip 153 Kota Probolinggo', null, null, null, 'P1', null, 'BNSP-LSP-250-ID');
INSERT INTO `PARTNER_LSP` VALUES ('251', 'SMKN 1 GRATI', null, 'Jl. Raya Ngopak No. 1 Grati', null, null, null, 'P1', null, 'BNSP-LSP-251-ID');
INSERT INTO `PARTNER_LSP` VALUES ('252', 'STTD', null, 'Jl. Raya Setu No. 89 Bekasi 17520', null, null, null, 'P1', null, 'BNSP-LSP-252-ID');
INSERT INTO `PARTNER_LSP` VALUES ('253', 'LOGISTIK INSAN PRIMA', null, 'Perkantoran Pejaten Blok 5 Jl. Pejaten Raya Kav. 2 Jakarta Selatan 12510', null, null, null, 'P3', null, 'BNSP-LSP-253-ID');
INSERT INTO `PARTNER_LSP` VALUES ('254', 'BLK Surabaya', null, 'Jl. Dukuh Menanggal III/29 Surabaya', null, null, null, 'P2', null, 'BNSP-LSP-254-ID');
INSERT INTO `PARTNER_LSP` VALUES ('255', 'BROKER PROPERTI INDONESIA', null, 'JL. Jambu No.32, Gongdangdia Menteng, Jakarta Pusat 10350', null, null, null, 'P3', null, 'BNSP-LSP-255-ID');
INSERT INTO `PARTNER_LSP` VALUES ('256', 'SMKN 1 MALANG', null, 'Jl. Sonokembang / Janti Kotak Pos 108 Malang 65148', null, null, null, 'P1', null, 'BNSP-LSP-256-ID');
INSERT INTO `PARTNER_LSP` VALUES ('257', 'SMKN1 KOTA KEDIRI', null, 'Jln.Veteran No.9 Kediri', null, null, null, 'P1', null, 'BNSP-LSP-257-ID');
INSERT INTO `PARTNER_LSP` VALUES ('258', 'SMKN 1 KALASAN', null, 'Jl. Randugunting Tamanmartani Kalasan, Kec. Sleman, Daerah Istimewa Yogyakarta', null, null, null, 'P1', null, 'BNSP-LSP-258-ID');
INSERT INTO `PARTNER_LSP` VALUES ('259', 'SMKN 2 SURABAYA', null, 'Jl. Tentara Genie Pelajar ( Patua ) No. 26 Sby', null, null, null, 'P1', null, 'BNSP-LSP-259-ID');
INSERT INTO `PARTNER_LSP` VALUES ('260', 'SMKN 6 SURABAYA', null, 'JL. Margorejo, No. 76, Wonocolo, Surabaya 60238', null, null, null, 'P1', null, 'BNSP-LSP-260-ID');
INSERT INTO `PARTNER_LSP` VALUES ('261', 'SMKN 6 SEMARANG', null, 'Jln. Sidodadi Barat No. 8 Semarang', null, null, null, 'P1', null, 'BNSP-LSP-261-ID');
INSERT INTO `PARTNER_LSP` VALUES ('262', 'SMKN 1 SURABAYA', null, 'Jl. SMEA No. 4 Surabaya', null, null, null, 'P1', null, 'BNSP-LSP-262-ID');
INSERT INTO `PARTNER_LSP` VALUES ('263', 'SMKN 1 KOTA BEKASI', null, 'P1', null, null, null, 'P1', null, 'BNSP-LSP-263-ID');
INSERT INTO `PARTNER_LSP` VALUES ('264', 'SMKN 1 PUNGGING', null, 'Jl. Raya Trawas Pungging Kec. Pungging Kab. Mojokerto', null, null, null, 'P1', null, 'BNSP-LSP-264-ID');
INSERT INTO `PARTNER_LSP` VALUES ('265', 'SMKN 1 PASURUAN', null, 'Jl. Veteran No. 11 Kodepos 67122 Pasuruan', null, null, null, 'P1', null, 'BNSP-LSP-265-ID');
INSERT INTO `PARTNER_LSP` VALUES ('266', 'SMKN 2 BUDURAN SIDOARJO', null, 'Jl. Jenggolo No. 2A Siwalanpanji Buduran Sidoarjo JATIM', null, null, null, 'P1', null, 'BNSP-LSP-266-ID');
INSERT INTO `PARTNER_LSP` VALUES ('267', 'SMKN 1 SIDOARJO', null, 'JL.MONGINSIDI-SIDOARJO', null, null, null, 'P1', null, 'BNSP-LSP-267-ID');
INSERT INTO `PARTNER_LSP` VALUES ('268', 'SMK 3 PGRI MALANG', null, 'Jl. Raya Tlogomas IX/29 Malang jawa Timur', null, null, null, 'P1', null, 'BNSP-LSP-268-ID');
INSERT INTO `PARTNER_LSP` VALUES ('269', 'UNIVERSITAS DR. SOETOMO', null, 'Jl. Semolowaru No. 84 Surabaya 60118', null, null, null, 'P1', null, 'BNSP-LSP-269-ID');
INSERT INTO `PARTNER_LSP` VALUES ('270', 'BLKI SINGOSARI', null, 'Jl. Raya Singosari No.1 Singosari Malang', null, null, null, 'P2', null, 'BNSP-LSP-270-ID');
INSERT INTO `PARTNER_LSP` VALUES ('271', 'PARIWISATA ANGING MAMMIRI', null, 'Jl. Jenderal Sudirman No. 23 (Gedung Mulo) Makassar, Sulawesi Selatan', null, null, null, 'P3', null, 'BNSP-LSP-271-ID');
INSERT INTO `PARTNER_LSP` VALUES ('272', 'BALAI PENDIDIKAN DAN PELATIHAN APARATUR (BDA) SUKAMANDI', null, 'Jl. Raya 2 Sukamandi Ciasem 41256 Sukamandi', null, null, null, 'P1', null, 'BNSP-LSP-272-ID');
INSERT INTO `PARTNER_LSP` VALUES ('273', 'BPPP BAYUWANGI', null, 'Jl. Raya Situbondo Km. 17 Tromol Pos 8 Bayuwangi', null, null, null, 'P1', null, 'BNSP-LSP-273-ID');
INSERT INTO `PARTNER_LSP` VALUES ('274', 'SUPM WAIHERU AMBON', null, 'Jln. Laksdya Leo Wattimena KM.16 Waiheru â€“ Ambon, Desa Waiheru, Kecamatan Baguala, Kota Ambon, Provinsi Maluku', null, null, null, 'P1', null, 'BNSP-LSP-274-ID');
INSERT INTO `PARTNER_LSP` VALUES ('275', 'LSP MSDM Indonesia', null, 'Wisma PEDE Lt.5 B508, Jl. MT Haryono Kav.17, Tebet, Pancoran - Jakarta Selatan 12810 â€“ Indonesia.', null, null, null, 'P3', null, 'BNSP-LSP-275-ID');
INSERT INTO `PARTNER_LSP` VALUES ('276', 'TRANSPORTASI DAN LOGISTIK INDONESIA', null, 'Pusat Perkantoran Pulomas 1 Blok 5 Lt. 3 Jl. Jend. Ahmad Yani No. 2, Pulomas Jakarta Timur, 1321', null, null, null, 'P3', null, 'BNSP-LSP-276-ID');
INSERT INTO `PARTNER_LSP` VALUES ('277', 'SMKN 1 JENANGAN PONOROGO', null, 'Jl. Niken Gandini No.98, Kec. Ponorogo, Kabupaten Ponorogo, Jawa Timur 63492', null, null, null, 'P1', null, 'BNSP-LSP-277-ID');
INSERT INTO `PARTNER_LSP` VALUES ('278', 'SMKN 8 SURABAYA', null, 'JL.KAMBOJA NO. 18 SURABAYA', null, null, null, 'P1', null, 'BNSP-LSP-278-ID');
INSERT INTO `PARTNER_LSP` VALUES ('279', 'SMKN 12 SURABAYA', null, 'Jl. Siwalankerto Permai No. 1, Wonocolo, Surabaya', null, null, null, 'P1', null, 'BNSP-LSP-279-ID');
INSERT INTO `PARTNER_LSP` VALUES ('280', 'SMKN 4 YOGYAKARTA', null, 'Jalan Sidikan No.60, Umbulharjo, Daerah Istimewa Yogyakarta 55161', null, null, null, 'P1', null, 'BNSP-LSP-280-ID');
INSERT INTO `PARTNER_LSP` VALUES ('281', 'SMKN 6 YOGYAKARTA', null, 'Jln.Kenari No 4 Yogyakarta', null, null, null, 'P1', null, 'BNSP-LSP-281-ID');
INSERT INTO `PARTNER_LSP` VALUES ('282', 'SMKN 1 TRENGGALEK', null, 'Jl.Brigjen Sutran No.3 Trenggalek', null, null, null, 'P1', null, 'BNSP-LSP-282-ID');
INSERT INTO `PARTNER_LSP` VALUES ('283', 'PT. APAC INTI CORPORA', null, 'Jl. Soekarno Hatta Km. 32, Ds. Harjosari, Kec. Bawen Kab. Semarang, Jawa Tengah - Indonesia', null, null, null, 'P1', null, 'BNSP-LSP-283-ID');
INSERT INTO `PARTNER_LSP` VALUES ('284', 'SMKN 3 KEDIRI', null, 'Jalan Hasanudin No.10, Kediri Jawa Timur 64129', null, null, null, 'P1', null, 'BNSP-LSP-284-ID');
INSERT INTO `PARTNER_LSP` VALUES ('285', 'SMKN 1 BUDURAN SIDOARJO', null, 'Siwalan Panji, Buduran, Sidoarjo, Jawa Timur 61219', null, null, null, 'P1', null, 'BNSP-LSP-285-ID');
INSERT INTO `PARTNER_LSP` VALUES ('286', 'SMK NEGERI 2 MAGETAN', null, 'Jl. Kemasan No. 13, Kec. Magetan', null, null, null, 'P1', null, 'BNSP-LSP-286-ID');
INSERT INTO `PARTNER_LSP` VALUES ('287', 'SMKN 1 BLITAR', null, 'Jl. Kenari No. 30 Kota Blitar Jawa Timur', null, null, null, 'P1', null, 'BNSP-LSP-287-ID');
INSERT INTO `PARTNER_LSP` VALUES ('288', 'SMKN 3 BLITAR', null, 'Jl. Sudanco Supriadi No. 24 Blitar, Kota Blitar 66133', null, null, null, 'P1', null, 'BNSP-LSP-288-ID');
INSERT INTO `PARTNER_LSP` VALUES ('289', 'SMKN 1 JABON', null, 'Jl. Panggreh no. 1', null, null, null, 'P1', null, 'BNSP-LSP-289-ID');
INSERT INTO `PARTNER_LSP` VALUES ('290', 'DANA PENSIUN', null, 'Gedung Arthaloka Lt.16 Jl. Jenderal Sudirman Kav. 2 Jakarta 10220', null, null, null, 'P3', null, 'BNSP-LSP-290-ID');
INSERT INTO `PARTNER_LSP` VALUES ('291', 'POLLITEKNIK NEGERI SAMARINDA', null, 'Jl. Ciptomangunkusumo, Kampus Gunung Lipan, Samarinda, Kaltim (75131)', null, null, null, 'P1', null, 'BNSP-LSP-291-ID');
INSERT INTO `PARTNER_LSP` VALUES ('292', 'POLITEKNIK NEGERI JAKARTA', null, 'Jl. Prof. Dr. G.A Siwabessy, Kampus Baru UI Depok', null, null, null, 'P1', null, 'BNSP-LSP-292-ID');
INSERT INTO `PARTNER_LSP` VALUES ('293', 'PEKERJA DOMESTIK HOKI', null, 'Jl. Condet Raya No. 52A, Kel. Batu Ampar Kec. Kramat Jati Jakarta Timur, INDONESIA 13520', null, null, null, 'P3', null, 'BNSP-LSP-293-ID');
INSERT INTO `PARTNER_LSP` VALUES ('294', 'KOMPUTER', null, 'Kompleks Bekasi Mas Blok D-22 Jl A Yani Bekasi Barat', null, null, null, 'P3', null, 'BNSP-LSP-294-ID');
INSERT INTO `PARTNER_LSP` VALUES ('295', 'STIKI MALANG', null, 'Jln Raya Tidar 101 Malang', null, null, null, 'P1', null, 'BNSP-LSP-295-ID');
INSERT INTO `PARTNER_LSP` VALUES ('296', 'ASNAKES', null, 'JL.KH SAMANHUDI NO.93 SONDAKAN, LAWEYAN SURAKARTA, JAWA TENGAH', null, null, null, 'P3', null, 'BNSP-LSP-296-ID');
INSERT INTO `PARTNER_LSP` VALUES ('297', 'Universitas Islam Indonesia(UII)', null, 'Jl. Kaliurang Km. 14,5 Yogyakarta', null, null, null, 'P1', null, 'BNSP-LSP-297-ID');
INSERT INTO `PARTNER_LSP` VALUES ('298', 'SMKN 1 BOYOLANGU', null, 'JL. KI MANGUNSARKORO VI/3', null, null, null, 'P1', null, 'BNSP-LSP-298-ID');
INSERT INTO `PARTNER_LSP` VALUES ('299', 'SMKN 5 SURABAYA', null, 'Jalan Mayjen Prof. Dr. Moestopo No.167-169, Surabaya', null, null, null, 'P1', null, 'BNSP-LSP-299-ID');
INSERT INTO `PARTNER_LSP` VALUES ('300', 'SMKN 2 KOTA SERANG', null, 'Jl. KH. Abdul Fatah Hasan, No. 89, Cipare, Kec. Serang, Banten', null, null, null, 'P1', null, 'BNSP-LSP-300-ID');
INSERT INTO `PARTNER_LSP` VALUES ('301', 'SMK PGRI 1 TULUNGAGUNG', null, 'Jl. PJ. Sudirman VII / 1 Tulungagung 66219', null, null, null, 'P1', null, 'BNSP-LSP-301-ID');
INSERT INTO `PARTNER_LSP` VALUES ('302', 'SMK SORE TULUNGAGUNG', null, 'JL. MASTRIP NO 100 BOYOLANGU, TULUNGAGUNG 66235', null, null, null, 'P1', null, 'BNSP-LSP-302-ID');
INSERT INTO `PARTNER_LSP` VALUES ('303', 'SMKN 1 BONDOWOSO', null, 'JL. HOS Cokroaminoto, Kademangan Kulon, Kec. Bondowoso, 68217', null, null, null, 'P1', null, 'BNSP-LSP-303-ID');
INSERT INTO `PARTNER_LSP` VALUES ('304', 'P2KGK JAKARTA PUSAT', null, 'Jl. Budi Utomo No. 3 Jakarta Pusat', null, null, null, 'P2', null, 'BNSP-LSP-304-ID');
INSERT INTO `PARTNER_LSP` VALUES ('305', 'SMKN 5 JEMBER', null, 'Jalan Brawijaya No. 55, Jubung, Sukorambi, Jawa Timur', null, null, null, 'P1', null, 'BNSP-LSP-305-ID');
INSERT INTO `PARTNER_LSP` VALUES ('306', 'SMKN 2 BONDOWOSO', null, 'Jl. Ahmad Yani No.48, Kec. Bondowoso, Bondowoso, Jawa Timur 68214', null, null, null, 'P1', null, 'BNSP-LSP-306-ID');
INSERT INTO `PARTNER_LSP` VALUES ('307', 'SMKN 1 BANYUWANGI', null, 'Jl. Wijaya Kusuma No.46, Mojopanggung, Giri, Kec. Banyuwangi, Jawa Timur', null, null, null, 'P1', null, 'BNSP-LSP-307-ID');
INSERT INTO `PARTNER_LSP` VALUES ('308', 'SMKN 1 GLAGAH BANYUWANGI', null, 'Jl Kuntulan No 1, Glagah, Kec. Banyuwangi, Jawa Timur', null, null, null, 'P1', null, 'BNSP-LSP-308-ID');
INSERT INTO `PARTNER_LSP` VALUES ('309', 'SMK PGRI 1 NGAWI', null, 'Jl. Rajawali No. 32 NGAWI', null, null, null, 'P1', null, 'BNSP-LSP-309-ID');
INSERT INTO `PARTNER_LSP` VALUES ('310', 'LEMBAGA PENDIDIKAN PERKEBUNAN', null, 'Jl. LPP No. 1 Yogyakarta 55222', null, null, null, 'P1', null, 'BNSP-LSP-310-ID');
INSERT INTO `PARTNER_LSP` VALUES ('311', 'SMKN 1 PURWOKERTO', null, 'Jl. DR. Soeparno, Kec. Banyumas, Jawa Tengah 53111', null, null, null, 'P1', null, 'BNSP-LSP-311-ID');
INSERT INTO `PARTNER_LSP` VALUES ('312', 'SMKN 1 TUBAN', null, 'Jl. Mastrip 2, Kec. Tuban, Jawa Timur', null, null, null, 'P1', null, 'BNSP-LSP-312-ID');
INSERT INTO `PARTNER_LSP` VALUES ('313', 'SMKN PGRI 2 PONOROGO', null, 'Jl. Soekarno hatta Kertosari Babaadan Ponorogo', null, null, null, 'P1', null, 'BNSP-LSP-313-ID');
INSERT INTO `PARTNER_LSP` VALUES ('314', 'SMKN 1 CERME GRESIK', null, 'Jl. Jurit, Kec., Cerme, Jawa Timur', null, null, null, 'P1', null, 'BNSP-LSP-314-ID');
INSERT INTO `PARTNER_LSP` VALUES ('315', 'SMKN 2 TUBAN', null, 'JL. Prof. Moch. Yamin, SH No. 106 Tuban', null, null, null, 'P1', null, 'BNSP-LSP-315-ID');
INSERT INTO `PARTNER_LSP` VALUES ('316', 'SMK MUHAMMADIYAH 5 BABAT LAMONGAN', null, 'Jl. Rumah Sakit No. 15 - 17 Babat', null, null, null, 'P1', null, 'BNSP-LSP-316-ID');
INSERT INTO `PARTNER_LSP` VALUES ('317', 'INFORMATIKA', null, 'Ruko Sektor 1 E, Jl. Raya Kelapa Sawit BD 12/12, CBD Gading Serpong, Tengerang', null, null, null, 'P3', null, 'BNSP-LSP-317-ID');
INSERT INTO `PARTNER_LSP` VALUES ('318', 'SMK PGRI WLINGI', null, 'Jalan. Jendral Sudirman No. 86 Wlingi - Kab. Blitar', null, null, null, 'P1', null, 'BNSP-LSP-318-ID');
INSERT INTO `PARTNER_LSP` VALUES ('319', 'SMK ISLAM 1 BLITAR', null, 'Jl. Musi No. 6 Blitar 66117', null, null, null, 'P1', null, 'BNSP-LSP-319-ID');
INSERT INTO `PARTNER_LSP` VALUES ('320', 'P2KGK JAKARTA BARAT', null, 'Jl. Kerajinan No.42, Jakarta Barat 11140', null, null, null, 'P2', null, 'BNSP-LSP-320-ID');
INSERT INTO `PARTNER_LSP` VALUES ('321', 'SMKN 3 PATI', null, 'Jalan Kol. Sunandar No. 108, Kec. Pati, Kec. Pati, Jawa Tengah 59112', null, null, null, 'P1', null, 'BNSP-LSP-321-ID');
INSERT INTO `PARTNER_LSP` VALUES ('322', 'SMKN 1 WONOREJO', null, 'Jl.PP Al Yasini Kluwut Wonorejo Pasuruan', null, null, null, 'P1', null, 'BNSP-LSP-322-ID');
INSERT INTO `PARTNER_LSP` VALUES ('323', 'SMK PGRI 1 GRESIK', null, 'Jl. Dr. Sutomo No. 46 Gresik, 61119', null, null, null, 'P1', null, 'BNSP-LSP-323-ID');
INSERT INTO `PARTNER_LSP` VALUES ('324', 'STP JAKARTA', null, 'Jl. AUP No. 1 Pasar Minggu Jakarta Selatan 12520', null, null, null, 'P1', null, 'BNSP-LSP-324-ID');
INSERT INTO `PARTNER_LSP` VALUES ('325', 'SMKN 2 WONOSARI', null, 'Jl . Veteran Wonosari Gunungkidul', null, null, null, 'P1', null, 'BNSP-LSP-325-ID');
INSERT INTO `PARTNER_LSP` VALUES ('326', 'BALAI PENDIDIKAN DAN PELATIHAN PERIKANAN AMBON', null, 'Jl. Martha Alfons â€“ Poka Teluk Ambon, Ambon', null, null, null, 'P1', null, 'BNSP-LSP-326-ID');
INSERT INTO `PARTNER_LSP` VALUES ('327', 'SMKN WINONGAN PASURUAN', null, 'Jl. Raya Bandaran Winongan Kab. Pasuruan', null, null, null, 'P1', null, 'BNSP-LSP-327-ID');
INSERT INTO `PARTNER_LSP` VALUES ('328', 'SMKN 1 NGASEM KABUPATEN KEDIRI', null, 'Jl. Thotok Kerot Ds. Sumberejo Kec. Ngasem Kab. Kediri', null, null, null, 'P1', null, 'BNSP-LSP-328-ID');
INSERT INTO `PARTNER_LSP` VALUES ('329', 'SMKN 1 BANDUNG TULUNGAGUNG', null, 'Ds. Bantengan Kec. Bandung, Tulungagung', null, null, null, 'P1', null, 'BNSP-LSP-329-ID');
INSERT INTO `PARTNER_LSP` VALUES ('330', 'SMKN 1 REJOTANGAN', null, 'Jl. Raya Buntaran, Rejotangan Tulungagung', null, null, null, 'P1', null, 'BNSP-LSP-330-ID');
INSERT INTO `PARTNER_LSP` VALUES ('331', 'PT. PERTAMINA', null, 'Maritime Training Center Jl. Pemuda No. 44 Rawamangun, Jakarta Timur 13220', null, null, null, 'P2', null, 'BNSP-LSP-331-ID');
INSERT INTO `PARTNER_LSP` VALUES ('332', 'PT. PAL', null, 'Gd. Divisi Bin Org & SDM PT. PAL INDONESIA, JL. Ujung Surabaya', null, null, null, 'P2', null, 'BNSP-LSP-332-ID');
INSERT INTO `PARTNER_LSP` VALUES ('333', 'PARIWISATA BUNAKEN INDONESIA', null, 'Jl. Sarapung No. 29 Manado', null, null, null, 'P3', null, 'BNSP-LSP-333-ID');
INSERT INTO `PARTNER_LSP` VALUES ('334', 'DENTAL ASISTEN INDONESIA', null, 'Jl. Bendungan Jatiluhur No. 130 Kel. Bendungan Hilir, Kec. Tanah Abang Jakarta Pusat 10210', null, null, null, 'P3', null, 'BNSP-LSP-334-ID');
INSERT INTO `PARTNER_LSP` VALUES ('335', 'SMK KATHOLIK SANTO MIKAEL SURAKARTA', null, 'Jl. Mojo No. 1Karangasem, Laweyan Surakarta 57145', null, null, null, 'P1', null, 'BNSP-LSP-335-ID');
INSERT INTO `PARTNER_LSP` VALUES ('336', 'SMKN 1 REMBANG', null, 'Jl. Gajah Mada No. 1 Rembang', null, null, null, 'P1', null, 'BNSP-LSP-336-ID');
INSERT INTO `PARTNER_LSP` VALUES ('337', 'SMKN 2 KENDAL', null, 'Jl. Raya Soekarno â€“ Hatta, Bungangin, Kendal, 51314', null, null, null, 'P1', null, 'BNSP-LSP-337-ID');
INSERT INTO `PARTNER_LSP` VALUES ('338', 'SMKN TUTUR', null, 'Jl. Raya Tutur No. 14 Tutur Pasuruan', null, null, null, 'P1', null, 'BNSP-LSP-338-ID');
INSERT INTO `PARTNER_LSP` VALUES ('339', 'SMKN 1 AMPEL GADING', null, 'Jl. Raya Ujunggede (Pantura), Ampelgading, Pemalang', null, null, null, 'P1', null, 'BNSP-LSP-339-ID');
INSERT INTO `PARTNER_LSP` VALUES ('340', 'SMKN 3 PEKALONGAN', null, 'Jl. P. Kemerdekaan No.30, Pekalongan Bar., Kota Pekalongan', null, null, null, 'P1', null, 'BNSP-LSP-340-ID');
INSERT INTO `PARTNER_LSP` VALUES ('341', 'SMK MIGAS CEPU', null, 'Jl. Diponegoro No. 53, Cepu, Kec. Blora Kota', null, null, null, 'P1', null, 'BNSP-LSP-341-ID');
INSERT INTO `PARTNER_LSP` VALUES ('342', 'SMK SMTI MAKASSAR', null, 'JALAN PAJJAIANG NO 18 A MAKASSAR', null, null, null, 'P1', null, 'BNSP-LSP-342-ID');
INSERT INTO `PARTNER_LSP` VALUES ('343', 'SMKN 3 YOGYAKARTA', null, 'JL. RW. MONGINSIDI NO.2 YOGYAKARTA', null, null, null, 'P1', null, 'BNSP-LSP-343-ID');
INSERT INTO `PARTNER_LSP` VALUES ('344', 'SMK MUHAMMADIYAH PEKALONGAN', null, 'Jalan AMD Kramatsari No.1, Kota Pekalongan', null, null, null, 'P1', null, 'BNSP-LSP-344-ID');
INSERT INTO `PARTNER_LSP` VALUES ('345', 'SMKN 1 PEKALONGAN', null, 'Jl. Angkatan 66 No. 90, Kramatsari, Pekalongan Barat, Kota Pekalongan', null, null, null, 'P1', null, 'BNSP-LSP-345-ID');
INSERT INTO `PARTNER_LSP` VALUES ('346', 'UNIVERSITAS AIRLANGGA', null, 'Kampus C Mulyorejo Surabaya 60115', null, null, null, 'P1', null, 'BNSP-LSP-346-ID');
INSERT INTO `PARTNER_LSP` VALUES ('347', 'TELECOMUNICATION INDONESIA', null, 'Jl. Gegerkalong Hilir No. 47 Bandung 40152', null, null, null, 'P3', null, 'BNSP-LSP-347-ID');
INSERT INTO `PARTNER_LSP` VALUES ('348', 'TRANSPORTASI DARAT', null, 'JL.PRAMUKA NO.1 KEL.MARGAJAYA BEKASI SELATAN', null, null, null, 'P3', null, 'BNSP-LSP-348-ID');
INSERT INTO `PARTNER_LSP` VALUES ('349', 'TEKNISI OTOMOTIF PROFESIONAL INDONESIA - LSP TOP', null, 'Jl.WR.Supratman No.70 Kampung Utan Kel.Cempaka Putih Tangerang Selatan 15412', null, null, null, 'P3', null, 'BNSP-LSP-349-ID');
INSERT INTO `PARTNER_LSP` VALUES ('350', 'CHEMSIGN', null, 'Grand Slipi Tower, Lt. 21Suite A Jl. Letjen S. Parman Kav. 22-24, Jakarta Barat 11480', null, null, null, 'P1', null, 'BNSP-LSP-350-ID');
INSERT INTO `PARTNER_LSP` VALUES ('351', 'POLITEKNIK NEGERI SRIWIJAYA', null, 'Jl. Srijayanegara Bukit Besar Palembang', null, null, null, 'P1', null, 'BNSP-LSP-351-ID');
INSERT INTO `PARTNER_LSP` VALUES ('352', 'SMKN 1 PACITAN', null, 'Jl. Letjend. Suprapto No. 53 Pacitan', null, null, null, 'P1', null, 'BNSP-LSP-352-ID');
INSERT INTO `PARTNER_LSP` VALUES ('353', 'SMKN NGULING', null, 'Jl. Dr. Soetomo No. 69 Nguling Pasuruan', null, null, null, 'P1', null, 'BNSP-LSP-353-ID');
INSERT INTO `PARTNER_LSP` VALUES ('354', 'SMKN 2 SUKOREJO PASURUAN', null, 'Jl. Raya Sukorejo - Bangil Km. 02 Sukorejo', null, null, null, 'P1', null, 'BNSP-LSP-354-ID');
INSERT INTO `PARTNER_LSP` VALUES ('355', 'SMK PGRI 3 TANGGUL', null, 'Jl. Semboro 79 Tanggul, Jember', null, null, null, 'P1', null, 'BNSP-LSP-355-ID');
INSERT INTO `PARTNER_LSP` VALUES ('356', 'SMKN 1 GEMPOL', null, 'Jl. Dau Darmorejoâ€“ Kepulungan,Gempol- Pasuruan 67155', null, null, null, 'P1', null, 'BNSP-LSP-356-ID');
INSERT INTO `PARTNER_LSP` VALUES ('357', 'SMKN 4 MADIUN', null, 'Jl. Mastrip No.27, Taman, Kota Madiun 63139', null, null, null, 'P1', null, 'BNSP-LSP-357-ID');
INSERT INTO `PARTNER_LSP` VALUES ('358', 'SMKN 1 NGANJUK', null, 'Jl. Dr. Soetomo No. 61 C Nganjuk', null, null, null, 'P1', null, 'BNSP-LSP-358-ID');
INSERT INTO `PARTNER_LSP` VALUES ('359', 'SMKN GUDO JOMBANG', null, 'Jl. Pawiyatan no. 06 Gudo Jombang kode pos 61463', null, null, null, 'P1', null, 'BNSP-LSP-359-ID');
INSERT INTO `PARTNER_LSP` VALUES ('360', 'SMKN 1 CIREBON', null, 'Jl. Perjuangan Cirebon', null, null, null, 'P1', null, 'BNSP-LSP-360-ID');
INSERT INTO `PARTNER_LSP` VALUES ('361', 'SMKN 1 BANGIL', null, 'Jl. Tongkol 3 Bangil Pasuruan', null, null, null, 'P1', null, 'BNSP-LSP-361-ID');
INSERT INTO `PARTNER_LSP` VALUES ('362', 'SMKN 1 LOSARANG INDRAMAYU', null, 'Jl. Raya Pantura Losarang, Indramayu 45253', null, null, null, 'P1', null, 'BNSP-LSP-362-ID');
INSERT INTO `PARTNER_LSP` VALUES ('363', 'SMKN 1 KEDAWUNG', null, 'Jl. Tuparev No. 12 Cirebon', null, null, null, 'P1', null, 'BNSP-LSP-363-ID');
INSERT INTO `PARTNER_LSP` VALUES ('364', 'INIXINDO', null, 'Permata Senayan E2-E5, Tentara Pelajar 5 Jakarta 12210', null, null, null, 'P1', null, 'BNSP-LSP-364-ID');
INSERT INTO `PARTNER_LSP` VALUES ('365', 'SMKN 1 SUKOREJO KAB. PASURUAN', null, 'Jalan Sumbergareng Kecamatan Sukorejo Kabupaten Pasuruan Kode Pos 67161', null, null, null, 'P1', null, 'BNSP-LSP-365-ID');
INSERT INTO `PARTNER_LSP` VALUES ('366', 'SMKN REMBANG PASURUAN', null, 'Jl. Raya Rembang, Rembang Pasuruan 67152', null, null, null, 'P1', null, 'BNSP-LSP-366-ID');
INSERT INTO `PARTNER_LSP` VALUES ('367', 'BALAI PENGEMBANGAN INDUSTRI PERSEPATUAN INDONESIA', null, 'Komp. Pasar Wisata, Kedensari, Tanggulangin, Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-367-ID');
INSERT INTO `PARTNER_LSP` VALUES ('368', 'SMKN 1JOMBANG', null, 'Jl. Dr. Sutomo 15, Jombang', null, null, null, 'P1', null, 'BNSP-LSP-368-ID');
INSERT INTO `PARTNER_LSP` VALUES ('369', 'SMKN 1 BEJI PASURUAN', null, 'Jl. Wicaksono No. 22B Gununggangsir Beji', null, null, null, 'P1', null, 'BNSP-LSP-369-ID');
INSERT INTO `PARTNER_LSP` VALUES ('370', 'SMKN 1 SIDAYU', null, 'jl. raya wadeng, kecamatan sidayu, kabupaten gresik, prov jawa timur', null, null, null, 'P1', null, 'BNSP-LSP-370-ID');
INSERT INTO `PARTNER_LSP` VALUES ('371', 'SMKN 1 BLORA', null, 'Jl. Gatot Subroto Km. 4,1 Blora 58252', null, null, null, 'P1', null, 'BNSP-LSP-311-ID');
INSERT INTO `PARTNER_LSP` VALUES ('372', 'SMKN MOJOAGUNG', null, 'Jl. Veteran Mojoagung Jombang 61482', null, null, null, 'P1', null, 'BNSP-LSP-372-ID');
INSERT INTO `PARTNER_LSP` VALUES ('373', 'SMKN 2 PATI', null, 'Jalan Gembong Km.4 Rendole Pati - Jateng 59163', null, null, null, 'P1', null, 'BNSP-LSP-373-ID');
INSERT INTO `PARTNER_LSP` VALUES ('374', 'SMKN 5 MALANG', null, 'Jl. Ikan Piranha, Kec. Lowokwaru, Kota Malang, 65142', null, null, null, 'P1', null, 'BNSP-LSP-374-ID');
INSERT INTO `PARTNER_LSP` VALUES ('375', 'SMKN 12 MALANG', null, 'Jl. Pahlawan, Balearjosari, Malang', null, null, null, 'P1', null, 'BNSP-LSP-375-ID');
INSERT INTO `PARTNER_LSP` VALUES ('376', 'SMKN NU MAâ€™ARIF KUDUS', null, 'Jl. Jepara Prambatan Lor 679 Kaliwungu Kudus', null, null, null, 'P1', null, 'BNSP-LSP-376-ID');
INSERT INTO `PARTNER_LSP` VALUES ('377', 'SMK WALISONGO 2 GEMPOL', null, 'Jl Cempaka Putih no 8 Gempol Pasuruan', null, null, null, 'P1', null, 'BNSP-LSP-377-ID');
INSERT INTO `PARTNER_LSP` VALUES ('378', 'SMKN 2 YOGYAKARTA', null, 'Jl. AM Sangaji 47 Yogyakarta 55233', null, null, null, 'P1', null, 'BNSP-LSP-378-ID');
INSERT INTO `PARTNER_LSP` VALUES ('379', 'SMKN 2 JOMBANG', null, 'Jl. Dr. Sutomo No. 15 Jombang', null, null, null, 'P1', null, 'BNSP-LSP-379-ID');
INSERT INTO `PARTNER_LSP` VALUES ('380', 'SMK MUHAMMADIYAH 1 KEPANJEN', null, 'Jl. K. H. Ahmad Dahlan No. 34, Kepanjen, Malang', null, null, null, 'P1', null, 'BNSP-LSP-380-ID');
INSERT INTO `PARTNER_LSP` VALUES ('381', 'SPA TIRTA NIRWANA INDONESIA', null, 'Grand ITC Permata Hijau Blok Saphire No. 7', null, null, null, 'P3', null, 'BNSP-LSP-381-ID');
INSERT INTO `PARTNER_LSP` VALUES ('382', 'TENAGA KERJA DKI', null, 'Gedung Disnakertrans DKI Lt. IV Jl. Prapatan No. 52 Jakarta', null, null, null, 'P1', null, 'BNSP-LSP-382-ID');
INSERT INTO `PARTNER_LSP` VALUES ('383', 'POLITEKNIK NEGERI MALANG', null, 'Jl. Soekarno Hatta 09 Malang 65144', null, null, null, 'P1', null, 'BNSP-LSP-383-ID');
INSERT INTO `PARTNER_LSP` VALUES ('384', 'UNIVERSITAS MERCUBUANA', null, 'Jl. Meruya Selatan No.1, Kembangan, Jakarta Barat. 11650', null, null, null, 'P1', null, 'BNSP-LSP-384-ID');
INSERT INTO `PARTNER_LSP` VALUES ('385', 'BALAI PENDIDIKAN & PELATIHAN PERIKANAN BITUNG (BPP AERTEMBAGA SULTRA)', null, 'Jl. Tandurusa, Kel.Aertembaga II, Kec. Aertembaga, Kota Bitung Sulawesi Utara', null, null, null, 'P1', null, 'BNSP-LSP-385-ID');
INSERT INTO `PARTNER_LSP` VALUES ('386', 'BALAI PENDIDIKAN & PELATIHAN PERIKANAN MEDAN (BPPP MEDAN)', null, 'Kel. Nelayan Indah, Kec. Medan Labuhan, Medan', null, null, null, 'P2', null, 'BNSP-LSP-386-ID');
INSERT INTO `PARTNER_LSP` VALUES ('387', 'INDUSTRI MINUMAN', null, 'Jl. Pulo Lentut No. 3 Kawasan Industri Pulo Gadung Jakarta', null, null, null, 'P1', null, 'BNSP-LSP-387-ID');
INSERT INTO `PARTNER_LSP` VALUES ('388', 'SMK IDHOTUN NASYIIN KALITENGAH', null, 'Jl. Raya Sugiwarsa No. 3 Kalitengah, Lamongan', null, null, null, 'P1', null, 'BNSP-LSP-388-ID');
INSERT INTO `PARTNER_LSP` VALUES ('389', 'SMKN 1 JEMBER', null, 'Jl. Jambu No. 17 Jember', null, null, null, 'P1', null, 'BNSP-LSP-389-ID');
INSERT INTO `PARTNER_LSP` VALUES ('390', 'SMKN 2 JEMBER', null, 'Jl. Tawangmangu 59, Tegal Gede, Sumbersari, Kab. Jember 68126', null, null, null, 'P1', null, 'BNSP-LSP-390-ID');
INSERT INTO `PARTNER_LSP` VALUES ('391', 'SMKN 4 JEMBER', null, 'Jl. Kartini No. 1, Jember Lor, Patrang, Kab. Jember 68118', null, null, null, 'P1', null, 'BNSP-LSP-391-ID');
INSERT INTO `PARTNER_LSP` VALUES ('392', 'SMKN 7 JEMBER', null, 'Jl. P.B. Sudirman No. 16 Sumberbaru Jember', null, null, null, 'P1', null, 'BNSP-LSP-392-ID');
INSERT INTO `PARTNER_LSP` VALUES ('393', 'SMKN 8 JEMBER', null, 'Jl. Semboro - Paleran, Sidomekar, Semboro, Kabupaten Jember', null, null, null, 'P1', null, 'BNSP-LSP-393-ID');
INSERT INTO `PARTNER_LSP` VALUES ('394', 'SMKN 2 LUMAJANG', null, 'Jl. Gajah Mada Lumajang', null, null, null, 'P1', null, 'BNSP-LSP-394-ID');
INSERT INTO `PARTNER_LSP` VALUES ('395', 'SMK TRISAKTI', null, 'Desa Mojorejo, Modo, Kab. Lamongan 62275', null, null, null, 'P1', null, 'BNSP-LSP-395-ID');
INSERT INTO `PARTNER_LSP` VALUES ('396', 'SMKN 1 KALITENGAH', null, 'Jl. Mahkota No. 280, Dibee, Kalitengah, Kab. Lamongan 62255', null, null, null, 'P1', null, 'BNSP-LSP-396-ID');
INSERT INTO `PARTNER_LSP` VALUES ('397', 'SMKN 1 BRONDONG', null, 'Jl. Raya Tlogoretno Brondong â€“ Lamongan, Tlogoretno, Brondong, Kab. Lamongan 62263', null, null, null, 'P1', null, 'BNSP-LSP-397-ID');
INSERT INTO `PARTNER_LSP` VALUES ('398', 'SMK AL-AZHAR GRESIK', null, 'Jl.Raya Menganti Krajan 474 menganti-gresik', null, null, null, 'P1', null, 'BNSP-LSP-398-ID');
INSERT INTO `PARTNER_LSP` VALUES ('399', 'SMK PGRI 1 LAMONGAN', null, 'Jl. Simpang Jaksa Agung Suprapto No. 8 Sukorejo, Lamongan, Kab. Lamongan 62217', null, null, null, 'P1', null, 'BNSP-LSP-399-ID');
INSERT INTO `PARTNER_LSP` VALUES ('400', 'SMK ASSA\'ADAH GRESIK', null, 'Jl. Raya Bungah No.1, Bungah, Kec. Gresik, Kabupaten Gresik', null, null, null, 'P1', null, 'BNSP-LSP-400-ID');
INSERT INTO `PARTNER_LSP` VALUES ('401', 'SMK DWIJA BAHKTI 1 JOMBANG', null, 'Jl. Kusuma Bangsa No. 74, RT 17, Sengon, Jombang', null, null, null, 'P1', null, 'BNSP-LSP-401-ID');
INSERT INTO `PARTNER_LSP` VALUES ('402', 'SMK SUNAN GIRI', null, 'JL. Raya Menganti, Menganti, Gresik', null, null, null, 'P1', null, 'BNSP-LSP-402-ID');
INSERT INTO `PARTNER_LSP` VALUES ('403', 'SMK PESANTREN SABILIL MUTTAQIEN 1 ( PSM 1 ) KEDUNGGALAR', null, 'Jl. Slamet Riyadi 56 Kedunggalar Ngawi 63254', null, null, null, 'P1', null, 'BNSP-LSP-403-ID');
INSERT INTO `PARTNER_LSP` VALUES ('404', 'SMKN 1 GEGER', null, 'Jl. Raya Nglandang, Nglandang, Geger, Kab. Madiun 63171', null, null, null, 'P1', null, 'BNSP-LSP-404-ID');
INSERT INTO `PARTNER_LSP` VALUES ('405', 'SMKN 1 KASREMAN', null, 'JL. Raya Ngawi - Caruban, Km. 06, Kec. Ngawi', null, null, null, 'P1', null, 'BNSP-LSP-405-ID');
INSERT INTO `PARTNER_LSP` VALUES ('406', 'SMKN PUSPO', null, 'Jalan Raya Puspo 05 Puspo - Pasuruan', null, null, null, 'P1', null, 'BNSP-LSP-406-ID');
INSERT INTO `PARTNER_LSP` VALUES ('407', 'SMKN 8 MALANG', null, 'JL. Teluk Pacitan, Arjosari, Blimbing, Kota Malang 65126', null, null, null, 'P1', null, 'BNSP-LSP-407-ID');
INSERT INTO `PARTNER_LSP` VALUES ('408', 'SMK AHMAD YANI SUKORAME LAMONGAN', null, 'Jl. Raya Sukorame â€“ Kabuh, Sukorame, Sukorame, Kab. Lamongan 62276', null, null, null, 'P1', null, 'BNSP-LSP-408-ID');
INSERT INTO `PARTNER_LSP` VALUES ('409', 'SMK MUHAMMADIYAH 7 KEDUNGPRING', null, 'Jl. Kh. Rowi No. 5, Kandangrejo, Kedungpring, Kab. Lamongan 62272', null, null, null, 'P1', null, 'BNSP-LSP-409-ID');
INSERT INTO `PARTNER_LSP` VALUES ('410', 'SMKN 1 LUMAJANG', null, 'Jl. HOS. Cokroaminoto 161, RT 001 / 017, Tompokersan, Kec. Lumajang', null, null, null, 'P1', null, 'BNSP-LSP-410-ID');
INSERT INTO `PARTNER_LSP` VALUES ('411', 'SMK PATRIA BABAT LAMONGAN', null, 'Jl. Jombang No. 4 Babat, Kab. Lamongan 62271', null, null, null, 'P1', null, 'BNSP-LSP-411-ID');
INSERT INTO `PARTNER_LSP` VALUES ('412', 'POLITEKNIK NEGERI MANADO', null, 'Kampus Desa Buha Kecamatan Mapanget Kota Manado - Prop. Sulawesi Utara', null, null, null, 'P1', null, 'BNSP-LSP-412-ID');
INSERT INTO `PARTNER_LSP` VALUES ('413', 'SMK MA\'ARIF NU DRIYOREJO', null, 'Jl Randegansari, Driyorejo, Kab. Gresik 61177', null, null, null, 'P1', null, 'BNSP-LSP-413-ID');
INSERT INTO `PARTNER_LSP` VALUES ('414', 'SMK TEKNOLOGI BALUNG', null, 'Jl. Rambipuji No.33, Balung Lor, Balung, Kab. Jember 68161', null, null, null, 'P1', null, 'BNSP-LSP-414-ID');
INSERT INTO `PARTNER_LSP` VALUES ('415', 'SMKN 3 JOMBANG', null, 'JL. Pattimura no. 6 Jombang Jawa timur', null, null, null, 'P1', null, 'BNSP-LSP-415-ID');
INSERT INTO `PARTNER_LSP` VALUES ('416', 'BADAK LNG', null, 'Badak LNG Learning Center PT. Badak NGL, Bontang, Kalimantan Timur', null, null, null, 'P1', null, 'BNSP-LSP-416-ID');
INSERT INTO `PARTNER_LSP` VALUES ('417', 'SMK TEXMACO SEMARANG', null, 'Jl. Raya Mangkang KM.16 Mangkang Kulon Tugu Semarang', null, null, null, 'P1', null, 'BNSP-LSP-417-ID');
INSERT INTO `PARTNER_LSP` VALUES ('418', 'SMKN 1 SARIREJO LAMONGAN', null, 'Gempoltukmloko, Sarirejo, Kab. Lamongan 62281', null, null, null, 'P1', null, 'BNSP-LSP-418-ID');
INSERT INTO `PARTNER_LSP` VALUES ('419', 'SMKN 11 MALANG', null, 'Jl. Pelabuhan Bakahuni No. 1, Bakalan Krajan, Sukun, Kota Malang 65148', null, null, null, 'P1', null, 'BNSP-LSP-419-ID');
INSERT INTO `PARTNER_LSP` VALUES ('420', 'SMKN 1 SAMBENG LAMONGAN', null, 'Jl. Raya Pasarlegi Sambeng, Sambeng, Kab. Lamongan 62284', null, null, null, 'P1', null, 'BNSP-LSP-420-ID');
INSERT INTO `PARTNER_LSP` VALUES ('421', 'BDI DENPASAR', null, 'Jl. WR. Supratman No. 302 Denpasar, Bali', null, null, null, 'P1', null, 'BNSP-LSP-421-ID');
INSERT INTO `PARTNER_LSP` VALUES ('422', 'POWERS', null, 'Jl. Pramuka Raya No. 14 Jakarta Timur', null, null, null, 'P1', null, 'BNSP-LSP-422-ID');
INSERT INTO `PARTNER_LSP` VALUES ('423', 'KESEHATAN HEWAN(KH)', null, 'Gedung PKBSi Jln Harsono RM no 10 Ragunan Pasar Minggu Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-423-ID');
INSERT INTO `PARTNER_LSP` VALUES ('424', 'SMKN 7 KOTA MALANG', null, 'Jl. Satsui Tubun IV, Malang 65419', null, null, null, 'P1', null, 'BNSP-LSP-424-ID');
INSERT INTO `PARTNER_LSP` VALUES ('425', 'SMK WACHID HASYIM SURABAYA', null, 'Jl. Sidotopo Wetan Baru No. 37 Surabaya 60128', null, null, null, 'P1', null, 'BNSP-LSP-425-ID');
INSERT INTO `PARTNER_LSP` VALUES ('426', 'SMK SUNAN DRAJAT LAMONGAN', null, 'Jl. Mayang Madu, Banjarwati, Paciran 62264 Lamongan', null, null, null, 'P1', null, 'BNSP-LSP-426-ID');
INSERT INTO `PARTNER_LSP` VALUES ('427', 'SMK PAWYATAN DAHA 3 KEDIRI', null, 'Jl. Slamet Riyadi No. 66 Kediri', null, null, null, 'P1', null, 'BNSP-LSP-427-ID');
INSERT INTO `PARTNER_LSP` VALUES ('428', 'SMK NASIONAL MALANG', null, 'Jl. Raya Langsep No. 43 , Bareng Klajen Kota Malang', null, null, null, 'P1', null, 'BNSP-LSP-428-ID');
INSERT INTO `PARTNER_LSP` VALUES ('429', 'SMK PGRI 1 NGANJUK', null, 'Jl. Barito No. 112 Begadung, Nganjuk', null, null, null, 'P1', null, 'BNSP-LSP-429-ID');
INSERT INTO `PARTNER_LSP` VALUES ('430', 'ATKP SURABAYA', null, 'Jl. Jemur Andayani 1 No. 73 Wonocolo Surabaya', null, null, null, 'P1', null, 'BNSP-LSP-430-ID');
INSERT INTO `PARTNER_LSP` VALUES ('431', 'SMKN 1 DEPOK SLEMAN', null, 'Ringroad Utara, Maguwoharjo, Depok Sleman, Yogyakarta 55282', null, null, null, 'P1', null, 'BNSP-LSP-431-ID');
INSERT INTO `PARTNER_LSP` VALUES ('432', 'SMK NU 1 KARANGGENENG', null, 'JL. Raya Simo Sungelebek, Karanggeneng, 62254, Kec. Lamongan', null, null, null, 'P1', null, 'BNSP-LSP-432-ID');
INSERT INTO `PARTNER_LSP` VALUES ('433', 'SMK NU LAMONGAN', null, 'Jl. Veteran No.55 A, Jetis, Kec. Lamongan, Kabupaten Lamongan, Jawa Timur', null, null, null, 'P1', null, 'BNSP-LSP-433-ID');
INSERT INTO `PARTNER_LSP` VALUES ('434', 'SMK NU 2 KEDUNGPRING LAMONGAN', null, 'Jl. Pramuka No. 3 Blawirejo 62272, Kedungpring, Kabupaten Lamongan, Jawa Timur', null, null, null, 'P1', null, 'BNSP-LSP-434-ID');
INSERT INTO `PARTNER_LSP` VALUES ('435', 'SMK WACHID HASYIM GLAGAH LAMONGAN', null, 'Glagah, Kabupaten Lamongan, Jawa Timur 62292', null, null, null, 'P1', null, 'BNSP-LSP-435-ID');
INSERT INTO `PARTNER_LSP` VALUES ('436', 'SMKN 5 YOGYAKARTA', null, 'Jl. Kenari No. 71, Daerah Istimewa Yogyakarta', null, null, null, 'P1', null, 'BNSP-LSP-436-ID');
INSERT INTO `PARTNER_LSP` VALUES ('437', 'SMK PGRI 1 KEDIRI', null, 'Jl. Himalaya 6 Sukorame, Mojoroto, Kota Kediri 64114', null, null, null, 'P1', null, 'BNSP-LSP-437-ID');
INSERT INTO `PARTNER_LSP` VALUES ('438', 'SMK KESEHATAN BHAKTI WIYATA KEDIRI', null, 'Jl. KH. Wahid Hasyim No. 65 Kediri', null, null, null, 'P1', null, 'BNSP-LSP-438-ID');
INSERT INTO `PARTNER_LSP` VALUES ('439', 'SMK PRIMA HUSADA KEDIRI', null, 'Jl. Beku I Desa Semen, Semen , Kediri', null, null, null, 'P1', null, 'BNSP-LSP-439-ID');
INSERT INTO `PARTNER_LSP` VALUES ('440', 'SMK PGRI 2 KEDIRI', null, 'Jalan KH. Abdul Karim No. 05', null, null, null, 'P1', null, 'BNSP-LSP-440-ID');
INSERT INTO `PARTNER_LSP` VALUES ('441', 'SMK AL KAUTSAR KERTOSONO', null, 'Jl. Supriyadi No. 61 Kertosono, Nganjuk', null, null, null, 'P1', null, 'BNSP-LSP-441-ID');
INSERT INTO `PARTNER_LSP` VALUES ('442', 'SMKN 1 MAJALENGKA', null, 'Jl. Raya Tonjong-Pinangraja No.55, Cicenang, Majalengka', null, null, null, 'P1', null, 'BNSP-LSP-442-ID');
INSERT INTO `PARTNER_LSP` VALUES ('443', 'SMK MUHAMMADIYAH 1 LAMONGAN', null, 'Jl. Veteran No 51 Lamongan', null, null, null, 'P1', null, 'BNSP-LSP-443-ID');
INSERT INTO `PARTNER_LSP` VALUES ('444', 'FASILITATOR, INSTRUKTUR DAN TENAGA KEPELATIHAN(FITK)', null, 'Jl. Rawa Buntu Selatan E1/ No 34 BSD', null, null, null, 'P1', null, 'BNSP-LSP-444-ID');
INSERT INTO `PARTNER_LSP` VALUES ('445', 'AKUAKULTUR INDONESIA', null, 'Jl. Dewi Sartika IV No 70 Semarang', null, null, null, 'P3', null, 'BNSP-LSP-445-ID');
INSERT INTO `PARTNER_LSP` VALUES ('446', 'AGRIBISNIS AMBISSI', null, 'Gedung Alumni IPB Lantai 2, Ruang 208 Jl. Raya Pajajaran No. 54 Bogor 16143', null, null, null, 'P3', null, 'BNSP-LSP-446-ID');
INSERT INTO `PARTNER_LSP` VALUES ('447', 'BALAI DIKLAT INDUSTRI YOGYAKARTA', null, 'Jl. Gedongkuning 140 Yogyakarta 55171', null, null, null, 'P1', null, 'BNSP-LSP-447-ID');
INSERT INTO `PARTNER_LSP` VALUES ('448', 'BALAI DIKLAT INDUSTRI PADANG', null, 'Jl. Bungo Pasang Tabing Padang', null, null, null, 'P1', null, 'BNSP-LSP-448-ID');
INSERT INTO `PARTNER_LSP` VALUES ('449', 'BALAI PENDIDIKAN DAN PELATIHAN TRANSPORTASI DARAT BALI', null, 'Jl. Batuyang No. 109X Batu Bulan Suka Wati Gianyar Bali', null, null, null, 'P1', null, 'BNSP-LSP-449-ID');
INSERT INTO `PARTNER_LSP` VALUES ('450', 'BALAI PENDIDIKAN DAN PELATIHAN PERIKANAN TEGAL', null, 'Jl. Martoloyo Po. Box. 22 Tegal', null, null, null, 'P1', null, 'BNSP-LSP-450-ID');
INSERT INTO `PARTNER_LSP` VALUES ('451', 'SMKN 1 PARON', null, 'Jl. Raya Gentong, Paron, Ngawi', null, null, null, 'P1', null, 'BNSP-LSP-451-ID');
INSERT INTO `PARTNER_LSP` VALUES ('452', 'PERTANIAN ORGANIK', null, 'Gedung Dirjen Hortikultura Jl. AUP No. 3 Pasar Minggu, Jakarta Selatan 12520', null, null, null, 'P3', null, 'BNSP-LSP-452-ID');
INSERT INTO `PARTNER_LSP` VALUES ('453', 'BONGKAR MUAT INDONESIA', null, 'Jl. Swasembada Timur XI No..25 Tanjung-Priok. Jakarta-Utara 14320', null, null, null, 'P3', null, 'BNSP-LSP-453-ID');
INSERT INTO `PARTNER_LSP` VALUES ('454', 'PARIWISATA BALI INTERNASIONAL', null, 'Jl. Tari Kecak No. 12, Gatot Subroto Timur, Denpasar , Bali 80239', null, null, null, 'P3', null, 'BNSP-LSP-454-ID');
INSERT INTO `PARTNER_LSP` VALUES ('455', 'KEPELATIHAN DAN INSTRUKTUR NASIONAL', null, 'JL. Bintaro Utama Sektor 3A blok DD 1 No. 71 Bintaro Jaya Tangerang Selatan', null, null, null, 'P3', null, 'BNSP-LSP-455-ID');
INSERT INTO `PARTNER_LSP` VALUES ('456', 'TEKNIK OPERASIONAL BANGUNAN GEDUNG', null, 'Soveregin Plaza Floor B, 2, Tb Simatupang, Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-456-ID');
INSERT INTO `PARTNER_LSP` VALUES ('457', 'PUSDIKLAT KEKAYAAN NEGARA DAN PERIMBANGAN KEUANGAN', null, 'Jl. Bintaro Utama Sektor V Bintaro Jaya, Tangerang Selatan 15223', null, null, null, 'P2', null, 'BNSP-LSP-457-ID');
INSERT INTO `PARTNER_LSP` VALUES ('458', 'K3 OSHE INDONESIA', null, 'JL. Robusta III-A Blok U1 No.18, Pondok Kopi, Jakarta Timur', null, null, null, 'P3', null, 'BNSP-LSP-458-ID');
INSERT INTO `PARTNER_LSP` VALUES ('459', 'ASURANSI SYARIAH', null, 'Rumah AAJI Lt. 4 Jl. Talang Betutu No. 17 Kebon Melati, Tanaha Abang, Jakarta 10230', null, null, null, 'P3', null, 'BNSP-LSP-459-ID');
INSERT INTO `PARTNER_LSP` VALUES ('460', 'SMK PARAMITHA', null, 'Kompleks Depdagri No.68 Curug, Pondok Kelapa , Jl.Raya Kalimalang Jakarta Timur', null, null, null, 'P1', null, 'BNSP-LSP-460-ID');
INSERT INTO `PARTNER_LSP` VALUES ('461', 'PERMODALAN NASIONAL MADANI', null, 'Gedung Arthaloka Lt.2 Jl. Jendral Sudirman Kav.2 Jakarta 10220, Indonesia', null, null, null, 'P2', null, 'BNSP-LSP-461-ID');
INSERT INTO `PARTNER_LSP` VALUES ('462', 'ELEKTRONIKA NASIONAL', null, 'Jalan Jagir Wonokromo No. 100 Kompleks Pertokoan Mangga Dua Blok A7 No. 1 Lt. 1 , Surabaya 60244', null, null, null, 'P3', null, 'BNSP-LSP-462-ID');
INSERT INTO `PARTNER_LSP` VALUES ('463', 'SMK TELKOM SANDHY PURWOKERTO', null, 'Jl. DI. Panjaitan No. 128 Purwokerto', null, null, null, 'P1', null, 'BNSP-LSP-463-ID');
INSERT INTO `PARTNER_LSP` VALUES ('464', 'SMKN 3 PURWOKERTO', null, 'Jl. A. Yani No. 70 Purwokerto', null, null, null, 'P1', null, 'BNSP-LSP-464-ID');
INSERT INTO `PARTNER_LSP` VALUES ('465', 'SMK PGRI 1 MEJAYAN', null, 'Jl. Kolonel Marhadi No. 25 Mejayan', null, null, null, 'P1', null, 'BNSP-LSP-465-ID');
INSERT INTO `PARTNER_LSP` VALUES ('466', 'SMK CANDA BHIRAWA PARE', null, 'Jl. Panglima Besar Sudirman No.68, Pare, Kediri', null, null, null, 'P1', null, 'BNSP-LSP-466-ID');
INSERT INTO `PARTNER_LSP` VALUES ('467', 'SMK PGRI 6 NGAWI', null, 'Jalan Raya Klitikm KM. 05 Ngawi Jawa Timur', null, null, null, 'P1', null, 'BNSP-LSP-467-IDE');
INSERT INTO `PARTNER_LSP` VALUES ('468', 'SMKN 1 SINGOSARI', null, 'Jl. Raya Mondoroko No 03 Banjararum, Singosari, Kab. Malang', null, null, null, 'P1', null, 'BNSP-LSP-468-ID');
INSERT INTO `PARTNER_LSP` VALUES ('469', 'SMKN 1 CIMAHI', null, 'Jl.Mahar Martanegara No.48 Kota CIMAHI', null, null, null, 'P1', null, 'BNSP-LSP-469-ID');
INSERT INTO `PARTNER_LSP` VALUES ('470', 'SMKN 4 SEMARANG', null, 'Jl. Pandanaran II/7, Mugassari, Semarang Selatan, Kota Semarang 50241', null, null, null, 'P1', null, 'BNSP-LSP-470-ID');
INSERT INTO `PARTNER_LSP` VALUES ('471', 'SMK PLUS NU SIDOARJO', null, 'Jl. Monginsidi Kav DPR, Perum Bluru Permai Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-471-ID');
INSERT INTO `PARTNER_LSP` VALUES ('472', 'POLITEKNIK ATK YOGYAKARTA', null, 'Jl. Ringroad Selatan, Panggungharjo, Sewon, Bantul, Yogyakarta', null, null, null, 'P1', null, 'BNSP-LSP-472-ID');
INSERT INTO `PARTNER_LSP` VALUES ('473', 'SMK BAKTI INDONESIA MEDIKA JOMBANG', null, 'Jl. Kemuning no.57A Candimulyo Jombang', null, null, null, 'P1', null, 'BNSP-LSP-473-ID');
INSERT INTO `PARTNER_LSP` VALUES ('474', 'SMK YPM 1 TAMAN SIDOARJO', null, 'Jl. Ngelom 86 Taman Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-474-ID');
INSERT INTO `PARTNER_LSP` VALUES ('475', 'SMK SEPULUH NOPEMBER SIDOARJO', null, 'Jl. Siwalanpanji, Buduran Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-475-ID');
INSERT INTO `PARTNER_LSP` VALUES ('476', 'SMKN 1 NGAWI', null, 'Jl. Teuku Umar no. 10 Ngawi', null, null, null, 'P1', null, 'BNSP-LSP-476-ID');
INSERT INTO `PARTNER_LSP` VALUES ('477', 'SMK KESEHATAN BIM NGAWI', null, 'Jl.Raya Ngawi Madiun Km.05 Ngawi', null, null, null, 'P1', null, 'BNSP-LSP-477-ID');
INSERT INTO `PARTNER_LSP` VALUES ('478', 'SMK TARUNA JAYA GRESIK', null, 'Jl. Arif Rahman Hakim 86 A, Gresik', null, null, null, 'P1', null, 'BNSP-LSP-478-ID');
INSERT INTO `PARTNER_LSP` VALUES ('479', 'SMKN 1 DUDUK SAMPEYAN GRESIK', null, 'Jl. Desa Sumari, Duduksampeyan, Gresik', null, null, null, 'P1', null, 'BNSP-LSP-479-ID');
INSERT INTO `PARTNER_LSP` VALUES ('480', 'SMKN 5 MADIUN', null, 'Jl. Merak 5 Madiun, Nambangan Kidul, Manguharjo, Kota Madiun 63128', null, null, null, 'P1', null, 'BNSP-LSP-480-ID');
INSERT INTO `PARTNER_LSP` VALUES ('481', 'SMKN 1 KUPANG', null, 'Jl. Prof.Dr. W.Z. Yohanes Kupang', null, null, null, 'P1', null, 'BNSP-LSP-481-ID');
INSERT INTO `PARTNER_LSP` VALUES ('482', 'SMK YPM 8 SIDOARJO', null, 'Jalan Raya Sarirogo No.481, Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-482-ID');
INSERT INTO `PARTNER_LSP` VALUES ('483', 'SMK MUHAMMADIYAH 1 GRESIK', null, 'Jl. Raya Bungah Km. 17 Bungah Gresik', null, null, null, 'P1', null, 'BNSP-LSP-483-ID');
INSERT INTO `PARTNER_LSP` VALUES ('484', 'PROTEKSI KEBAKARAN', null, '\"Suncity Square H-20, Jl. M. Hasibuan Margajaya Bekasi Repp. Office Jakarta : Gedung Menara Kuningan 9/N Jl. HR. Rasuna Said Kav. X-7 Kuningan Jakarta Selatan\"', null, null, null, 'P3', null, 'BNSP-LSP-484-ID');
INSERT INTO `PARTNER_LSP` VALUES ('485', 'GRAFIKA PURA BARUTAMA', null, 'Jl. Kresna Jati Wetan No. 77 Kudus', null, null, null, 'P3', null, 'BNSP-LSP-485-ID');
INSERT INTO `PARTNER_LSP` VALUES ('486', 'PERASURANSIAN INDONESIA', null, 'Graha APPARINDO, Rukan Sudirman Park, Blok C-25 Jl. KH. Mas Mansyur Kav. 35, Jakarta Pusat 10220', null, null, null, 'P3', null, 'BNSP-LSP-486-ID');
INSERT INTO `PARTNER_LSP` VALUES ('487', 'SMK YPM 2 TAMAN', null, 'Jl. Raya Ngelom 86 Sepanjang Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-487-ID');
INSERT INTO `PARTNER_LSP` VALUES ('488', 'SMK ANALIS KESEHATAN JEMBER', null, 'Jl. Kaca Piring No.23, Gebang, Patrang, Jember', null, null, null, 'P1', null, 'BNSP-LSP-488-ID');
INSERT INTO `PARTNER_LSP` VALUES ('489', 'SMK YPM 3 TAMAN SIDOARJO', null, 'Jl. Raya Ngelom No.86, Taman, Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-489-ID');
INSERT INTO `PARTNER_LSP` VALUES ('490', 'SMK ANTARTIKA 1 SIDOARJO', null, 'Jalan Raya Siwalan Panji, Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-490-ID');
INSERT INTO `PARTNER_LSP` VALUES ('491', 'SMKN 13 KOTA MALANG', null, 'Perumahan Villa Bukit Tidar, Blok A2 No 13, Jl. Villa Bukit Tidar, Lowokwaru, Malang', null, null, null, 'P1', null, 'BNSP-LSP-491-ID');
INSERT INTO `PARTNER_LSP` VALUES ('492', 'SMK BERLIAN NUSANTARA MAGETAN', null, 'JL. Ngariboyo-Kawedannan, Mojopurno, Ngariboyo, Magetan', null, null, null, 'P1', null, 'BNSP-LSP-492-ID');
INSERT INTO `PARTNER_LSP` VALUES ('493', 'SMK BHAKTI MULIA PARE', null, 'Jl. MATAHARI NO 1 PUHREJO-TULUNGREJO-PARE-KAB. KEDIRI', null, null, null, 'P1', null, 'BNSP-LSP-493-ID');
INSERT INTO `PARTNER_LSP` VALUES ('494', 'SMK ANTARTIKA 2 SIDOARJO', null, 'Jl. Siwalanpanji Kec. Buduran Sidoarjo 61252', null, null, null, 'P1', null, 'BNSP-LSP-494-ID');
INSERT INTO `PARTNER_LSP` VALUES ('495', 'KEUANGAN SYARIAH', null, 'Kantor Pusat Masyarakat Wkonomi Syariah Ruang # 103 Jl. Tebet Dalam IV E No. 70, Tebet, Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-495-ID');
INSERT INTO `PARTNER_LSP` VALUES ('496', 'POLITEKNIK NEGERI JEMBER', null, 'Jalan Mastrip, Tegal Gede, Sumbersari, Jember', null, null, null, 'P1', null, 'BNSP-LSP-496-ID');
INSERT INTO `PARTNER_LSP` VALUES ('497', 'SMK SENTOSA DHARMA', null, 'Jl. Ade Irma Suryani Nasution 42.A, Sumbang, Bojonegoro', null, null, null, 'P1', null, 'BNSP-LSP-497-ID');
INSERT INTO `PARTNER_LSP` VALUES ('498', 'SMKN 9 MALANG', null, 'Jl. Sampurna Cemorokandang, Kedungkandang, Kota Malang 65138', null, null, null, 'P1', null, 'BNSP-LSP-498-ID');
INSERT INTO `PARTNER_LSP` VALUES ('499', 'SMKN 2 LAMONGAN', null, 'Jl. Veteran No. 7A Banjamendalan, Lamongan 62212', null, null, null, 'P1', null, 'BNSP-LSP-499-ID');
INSERT INTO `PARTNER_LSP` VALUES ('500', 'SMK TRISAKTI NGAWI', null, 'JL. Kenari, No. 7A, Beran, Ngawi', null, null, null, 'P1', null, 'BNSP-LSP-500-ID');
INSERT INTO `PARTNER_LSP` VALUES ('501', 'SMKN 2 JIWAN', null, 'JL. RAYA SOLO NO.07 JIWAN KAB.MADIUN', null, null, null, 'P1', null, 'BNSP-LSP-501-ID');
INSERT INTO `PARTNER_LSP` VALUES ('502', 'SMKN 1 WONOASRI', null, 'JL. P. Sudirman No. 1 Purwosari Wonoasri Kab. Madiun', null, null, null, 'P1', null, 'BNSP-LSP-502-ID');
INSERT INTO `PARTNER_LSP` VALUES ('503', 'SMK KRIAN 1', null, 'Jl. Raya Sidoarjo Katerungan, Krian, Sidoarjo 61262', null, null, null, 'P1', null, 'BNSP-LSP-503-ID');
INSERT INTO `PARTNER_LSP` VALUES ('504', 'LINGKUNGAN HIDUP INDONESIA (LHI)', null, 'Jl. Urip Sumohardjo No. 100, Yogyakarta', null, null, null, 'P3', null, 'BNSP-LSP-504-ID');
INSERT INTO `PARTNER_LSP` VALUES ('505', 'SMK KARTINI BATAM', null, 'Jl. Budi Kemuliaan No. 1 Seraya Komplek Baloi View, Batu Batam', null, null, null, 'P1', null, 'BNSP-LSP-505-ID');
INSERT INTO `PARTNER_LSP` VALUES ('506', 'CLEANING SERVICE NUSANTARA', null, 'Jl. Bunga Maya 16, Malang', null, null, null, 'P3', null, 'BNSP-LSP-506-ID');
INSERT INTO `PARTNER_LSP` VALUES ('507', 'STMIK BUMIGORA MATARAM', null, 'Jl. Ismail Marzuki Mataram', null, null, null, 'P1', null, 'BNSP-LSP-507-ID');
INSERT INTO `PARTNER_LSP` VALUES ('508', 'AUDITOR HUKUM INDONESIA', null, 'Ged. Sarinah Lantai 11, JL. MH. Thamrin No.11 Jakarta Pusat 10350', null, null, null, 'P3', null, 'BNSP-LSP-508-ID');
INSERT INTO `PARTNER_LSP` VALUES ('509', 'LEMBAGA UJI KOMPETENSI SDM APARATUR LHK', null, 'Gd. Manggala Wanabakti Blok VII Lt. 4 Jl. Gatot Subroto Jakarta 10270', null, null, null, 'P3', null, 'BNSP-LSP-509-ID');
INSERT INTO `PARTNER_LSP` VALUES ('510', 'TRANSPORTASI INDONESIA', null, 'Jl. A. Yani 268 Surabaya', null, null, null, 'P3', null, 'BNSP-LSP-510-ID');
INSERT INTO `PARTNER_LSP` VALUES ('511', 'PENGACARA INDONESIA', null, 'Maspion Plaza Lt. 7 Jl. Gunung Sahari Kaveling 18, Jakarta Utara 14420', null, null, null, 'P3', null, 'BNSP-LSP-511-ID');
INSERT INTO `PARTNER_LSP` VALUES ('512', 'LPK TRIUTAMA SISTEM INDONESIA (TRUST)', null, 'Jl. Manyar Jaya V A-24, Surabaya', null, null, null, 'P1', null, 'BNSP-LSP-512-ID');
INSERT INTO `PARTNER_LSP` VALUES ('513', 'SMK AL HUDA KOTA KEDIRI', null, 'Jalan Masjid Al Huda No. 196, Kediri', null, null, null, 'P1', null, 'BNSP-LSP-513-ID');
INSERT INTO `PARTNER_LSP` VALUES ('514', 'POLITEKNIK NEGERI FAK-FAK', null, 'Jl. TPA Imam Bonjol Atas, Air Merah, Kel. Wagom Fakfak, Papua Barat.', null, null, null, 'P1', null, 'BNSP-LSP-514-ID');
INSERT INTO `PARTNER_LSP` VALUES ('515', 'POLITEKNIK NEGERI BALI', null, 'Jln Bukit Jimbaran, Kuta Selatan, Badung, Bali', null, null, null, 'P1', null, 'BNSP-LSP-515-ID');
INSERT INTO `PARTNER_LSP` VALUES ('516', 'MSDM UNIVERSAL', null, 'Jl. Bukit Darmo Raya 1 Graha Famili, Surabaya', null, null, null, 'P3', null, 'BNSP-LSP-516-ID');
INSERT INTO `PARTNER_LSP` VALUES ('517', 'ENTERPRENEURSHIP CIPUTRA', null, 'Universitas Ciputra Town, Citraland Surabaya', null, null, null, 'P3', null, 'BNSP-LSP-517-ID');
INSERT INTO `PARTNER_LSP` VALUES ('518', 'UNIVERSITAS DHYANA PURA', null, 'Jl. Raya Padang Luwih, Tegaljaya,, Dalung,, Kuta Utara, Bali', null, null, null, 'P1', null, 'BNSP-LSP-518-ID');
INSERT INTO `PARTNER_LSP` VALUES ('519', 'UNISBA', null, 'Jl. Tamansari No. 24 Bandung', null, null, null, 'P1', null, 'BNSP-LSP-519-ID');
INSERT INTO `PARTNER_LSP` VALUES ('520', 'BBPLK MEDAN', null, 'Jl. Jenderal Gatot Subroto Km. 7,8 Medan', null, null, null, 'P1', null, 'BNSP-LSP-520-ID');
INSERT INTO `PARTNER_LSP` VALUES ('521', 'SMK WIYATA HUSADA', null, 'Jl. Kenanga No. 300 Bulukerto Kec. Bumiaji Kota Batu.', null, null, null, 'P1', null, 'BNSP-LSP-521-ID');
INSERT INTO `PARTNER_LSP` VALUES ('522', 'PARIWISATA RAFFLESIA', null, 'Jl. Jend. Sudirman no.29 Rawa Laut Engga, Bandar Lampung', null, null, null, 'P3', null, 'BNSP-LSP-522-ID');
INSERT INTO `PARTNER_LSP` VALUES ('523', 'PARIWISATA FLORES', null, 'Jalan Gajah Mada No. 71 Maumere, Flores NTT', null, null, null, 'P3', null, 'BNSP-LSP-523-ID');
INSERT INTO `PARTNER_LSP` VALUES ('524', 'PARIWISATA , AESTETIKA & SPA (PARAS)', null, 'Jl. Raya Dukuh Kupang No. 157B Surabaya', null, null, null, 'P3', null, 'BNSP-LSP-524-ID');
INSERT INTO `PARTNER_LSP` VALUES ('525', 'STIE DWIPA WACANA JAKARTA', null, 'Jl. Pegangsaan Timur No. 1 menteng Cikini, Jakarta Pusat', null, null, null, 'P1', null, 'BNSP-LSP-525-ID');
INSERT INTO `PARTNER_LSP` VALUES ('526', 'PUSAT PENGEMBANGAN DAN PEMBERDAYAAN PENDIDIK DAN TENAGA KEPENDIDIKAN PERTANIAN (VEDCA) CIANJUR', null, 'Jl. Raya Jangari KM. 14 Sukajadi, Karangtengah Cianjur 43202', null, null, null, 'P1', null, 'BNSP-LSP-526-ID');
INSERT INTO `PARTNER_LSP` VALUES ('527', 'SMK 01 DIPONEGORO', null, 'Jl.Pahlawan No. 186 Purwojati â€“ Dukuh Dempok â€“ Wuluhan Jember Kode Pos 68162', null, null, null, 'P1', null, 'BNSP-LSP-527-ID');
INSERT INTO `PARTNER_LSP` VALUES ('528', 'SMK NURIS JEMBER', null, 'Jl. Pangandaran No. 48, Antirogo, Jember - Jatim.', null, null, null, 'P1', null, 'BNSP-LSP-528-ID');
INSERT INTO `PARTNER_LSP` VALUES ('529', 'SMK 1 PANCASILA', null, 'Jl. Ronggolawe No.5, Ambulu, Kab. Jember 68172', null, null, null, 'P1', null, 'BNSP-LSP-529-ID');
INSERT INTO `PARTNER_LSP` VALUES ('530', 'SMK PEMUDA', null, 'Jl. Raya Kemasan, Krian - Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-530-ID');
INSERT INTO `PARTNER_LSP` VALUES ('531', 'SMK MUHAMMADIYAH 2 NGAWI', null, 'Jl. Mantingan - Sine 0 Km, Mantingan, MANTINGAN, KAB. NGAWI 63257', null, null, null, 'P1', null, 'BNSP-LSP-531-ID');
INSERT INTO `PARTNER_LSP` VALUES ('532', 'SMK NAGARA NGAWI', null, 'Jalan Raya Kedunggalar - Jogorogo, Begal Kec.Kedunggalar - Kab. Ngawi, KEDUNGGALAR, KAB. NGAWI 63254', null, null, null, 'P1', null, 'BNSP-LSP-532-ID');
INSERT INTO `PARTNER_LSP` VALUES ('533', 'SMK YPM 4 TAMAN', null, 'Jl. Raya Bringin Bendo D1 Taman, Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-533-ID');
INSERT INTO `PARTNER_LSP` VALUES ('534', 'SMK SENOPATI', null, 'Jl. Senopati No. 2 Betro Sedati, Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-534-ID');
INSERT INTO `PARTNER_LSP` VALUES ('535', 'SMK DIPONEGORO SIDOARJO', null, 'Jl. Raden Patah No. 78 Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-535-ID');
INSERT INTO `PARTNER_LSP` VALUES ('536', 'SMK PGRI 1 JOMBANG', null, 'Jalan Pattimura V No.75, Kec. Jombang', null, null, null, 'P1', null, 'BNSP-LSP-536-ID');
INSERT INTO `PARTNER_LSP` VALUES ('537', 'SMK NU GRESIK', null, 'Jl. KH.Abdul Karim No 60 Gresik', null, null, null, 'P1', null, 'BNSP-LSP-537-ID');
INSERT INTO `PARTNER_LSP` VALUES ('538', 'SMK MAARIF NU BENJENG GRESIK', null, 'Jl. Raya Benjeng No.414, Benjeng, Gresik', null, null, null, 'P1', null, 'BNSP-LSP-538-ID');
INSERT INTO `PARTNER_LSP` VALUES ('539', 'SMK YPI DARUSSALAM 1 CERME', null, 'Jl. Raya Pasar No. 03, Cerme Lor, Cerme, Kab. Gresik 61171', null, null, null, 'P1', null, 'BNSP-LSP-539-ID');
INSERT INTO `PARTNER_LSP` VALUES ('540', 'SMK MITRA SEHAT MANDIRI SIDOARJO', null, 'Jl. Ki Hajar Dewantara 200 Krian 61262', null, null, null, 'P1', null, 'BNSP-LSP-540-ID');
INSERT INTO `PARTNER_LSP` VALUES ('541', 'SMK YAPALIS KRIAN', null, 'Jl. Kyai Mojo No. 18 Jerukgamping Krian Siodarjo 61262', null, null, null, 'P1', null, 'BNSP-LSP-541-ID');
INSERT INTO `PARTNER_LSP` VALUES ('542', 'SMK KRIAN 2 SIDOARJO', null, 'Jl. Raya Sidoarjo Krian, Des. Katerungan, Sidoarjo.', null, null, null, 'P1', null, 'BNSP-LSP-542-ID');
INSERT INTO `PARTNER_LSP` VALUES ('543', 'SMK PGRI 1 SIDOARJO', null, 'Jl. Dr. Wahidin No. 130b Sekardangan, Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-543-ID');
INSERT INTO `PARTNER_LSP` VALUES ('544', 'SMKN 3 BATU', null, 'Jl. Terusan Metro, Sumberejo, Kota Batu, Malang', null, null, null, 'P1', null, 'BNSP-LSP-544-ID');
INSERT INTO `PARTNER_LSP` VALUES ('545', 'SMK PGRI 2 SIDOARJO', null, 'Jl. Jenggolo Gang III no. 61 Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-545-ID');
INSERT INTO `PARTNER_LSP` VALUES ('546', 'SMK ISLAM 1 DURENAN', null, 'Jl. Raya Kendalrejo Durenan Trenggalek', null, null, null, 'P1', null, 'BNSP-LSP-546-ID');
INSERT INTO `PARTNER_LSP` VALUES ('547', 'PARIWISATA KOMODO FLORES', null, 'Jl. Frans Nala, Gd. BLK Nakertrans Manggarai Barat Labuan Bajo, Flores', null, null, null, 'P1', null, 'BNSP-LSP-547-ID');
INSERT INTO `PARTNER_LSP` VALUES ('548', 'POLITEKNIK NEGERI BATAM', null, 'Porkway, Batam Center. Batam 29461', null, null, null, 'P1', null, 'BNSP-LSP-548-ID');
INSERT INTO `PARTNER_LSP` VALUES ('549', 'SEKOLAH TINGGI MULTIMEDIA', null, 'Jl. Magelang Km. 6 Yogyakarta 55284', null, null, null, 'P1', null, 'BNSP-LSP-549-ID');
INSERT INTO `PARTNER_LSP` VALUES ('550', 'POLITEKNIK NEGERI LAMPUNG', null, 'Jl. Soekarno â€“ Hatta No. 10 Rajabasa, Bandar Lampung 35144', null, null, null, 'P1', null, 'BNSP-LSP-550-ID');
INSERT INTO `PARTNER_LSP` VALUES ('551', 'SMKN 2 ENDE', null, 'Jl. Anggrek Km. 3 Ende', null, null, null, 'P1', null, 'BNSP-LSP-551-ID');
INSERT INTO `PARTNER_LSP` VALUES ('552', 'POLITEKNIK NEGERI PADANG', null, 'Kampus Limau Manis, Limau Manis, Pauh, Kota Padang, Sumatera Barat', null, null, null, 'P1', null, 'BNSP-LSP-552-ID');
INSERT INTO `PARTNER_LSP` VALUES ('553', 'TENAGA KERJA KONSTRUKSI LUAR NEGERI NUSANTARA', null, 'Komplek Pertokoan Mangga Dua Blok A7/1 Lt.3 Jalan Jagir Wonokromo 100 Surabaya', null, null, null, 'P3', null, 'BNSP-LSP-553-ID');
INSERT INTO `PARTNER_LSP` VALUES ('554', 'BLPT SUMATERA BARAT', null, 'Jl. M. Yunus Lubuk Lintah, Kuranji Padang 25152', null, null, null, 'P1', null, 'BNSP-LSP-554-ID');
INSERT INTO `PARTNER_LSP` VALUES ('555', 'SMKN 3 MAGELANG', null, 'Jl. Pierre Tendean No. 1 Magelang', null, null, null, 'P1', null, 'BNSP-LSP-555-ID');
INSERT INTO `PARTNER_LSP` VALUES ('556', 'UNIVERSITAS SARJANAWIYATA TAMAN SISWA', null, 'Jl. Kusumanegara No. 121 Yogyakarta 55165', null, null, null, 'P1', null, 'BNSP-LSP-556-ID');
INSERT INTO `PARTNER_LSP` VALUES ('557', 'UNTAG SURABAYA', null, 'Gd. Untag Student & Enterpreneurship Center Lt. 1. Jl. Manyar Untag Surabaya', null, null, null, 'P1', null, 'BNSP-LSP-557-ID');
INSERT INTO `PARTNER_LSP` VALUES ('558', 'UNIVERSITAS WIJAYA PUTRA', null, 'Gedung A Kampus I UWP Jl. Raya Benowo No. 1-3 Surabaya 60197', null, null, null, 'P1', null, 'BNSP-LSP-558-ID');
INSERT INTO `PARTNER_LSP` VALUES ('559', 'SMK SEMEN GRESIK', null, 'Jl. Arif Rahman Hakim Gresik No.90, Pekauman, Gresik', null, null, null, 'P1', null, 'BNSP-LSP-559-ID');
INSERT INTO `PARTNER_LSP` VALUES ('560', 'SEKOLAH TINGGI PARIWISATA TRISAKTI', null, 'Jl. IKPN Bintaro Tanah Kusir, Jakarta 12330', null, null, null, 'P1', null, 'BNSP-LSP-560-ID');
INSERT INTO `PARTNER_LSP` VALUES ('561', 'PEMANDU WISATA NUSANTARA', null, 'Jl Margorejo Indah A 940 Surabaya', null, null, null, 'P3', null, 'BNSP-LSP-561-ID');
INSERT INTO `PARTNER_LSP` VALUES ('562', 'SUPM TEGAL', null, 'Jl. Martoloyo PO. BOX 22 Tegal', null, null, null, 'P1', null, 'BNSP-LSP-562-ID');
INSERT INTO `PARTNER_LSP` VALUES ('563', 'SMKN 1 LAMONGAN', null, 'Jl. Jenderal Sudirman No. 84 Lamongan', null, null, null, 'P1', null, 'BNSP-LSP-563-ID');
INSERT INTO `PARTNER_LSP` VALUES ('564', 'POLITEKNIK CALTEX RIAU', null, 'Kampus Politeknik Caltex Riau R-212, Jl. Umban Sari 1, Rumbai Pekanbaru 28265', null, null, null, 'P1', null, 'BNSP-LSP-564-ID');
INSERT INTO `PARTNER_LSP` VALUES ('565', 'SMKN 1 PURWODADI GROBOGAN', null, 'Jl. P. Diponegoro No. 24, Purwodadi', null, null, null, 'P1', null, 'BNSP-LSP-565-ID');
INSERT INTO `PARTNER_LSP` VALUES ('566', 'SMKN 1 KENDAL', null, 'Jl. Soekarno Hatta Km. 3 Kendal', null, null, null, 'P1', null, 'BNSP-LSP-566-ID');
INSERT INTO `PARTNER_LSP` VALUES ('567', 'SMK DARMA SISWA SIDOARJO', null, 'Jl. Kusuma 9-11, 14, 22 Berbek Waru, Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-567-ID');
INSERT INTO `PARTNER_LSP` VALUES ('568', 'SMK PERSATUAN 1 TULANGAN', null, 'Jl. Raya Kepadangan No. 36 Tulangan Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-568-ID');
INSERT INTO `PARTNER_LSP` VALUES ('569', 'SMK KESEHATAN ADITAPA MADIUN', null, 'Jl. Serayu Timur No. 159 Kota Madiun', null, null, null, 'P1', null, 'BNSP-LSP-569-ID');
INSERT INTO `PARTNER_LSP` VALUES ('570', 'HUBUNGAN INDUSTRIAL INDONESIA', null, 'Gedung Permata Kuningan Lt. 10 Jl. Kuningan Mulia Kav. 9C, Guntur Setiabudi, Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-570-ID');
INSERT INTO `PARTNER_LSP` VALUES ('571', 'UNIVERSITAS NAROTAMA', null, 'Jl. Arif Rahman Hakim No. 51 Surabaya', null, null, null, 'P1', null, 'BNSP-LSP-571-ID');
INSERT INTO `PARTNER_LSP` VALUES ('572', 'KJK NASIONAL', null, 'Jl. Merak No. 34 Peguyangan Denpasar Utara', null, null, null, 'P2', null, 'BNSP-LSP-572-ID');
INSERT INTO `PARTNER_LSP` VALUES ('573', 'SMK PGRI 1 PORONG SIDOARJO', null, 'Jl. Kenongo Kel. Gedang Porong Kab. Sidoarjo.', null, null, null, 'P1', null, 'BNSP-LSP-573-ID');
INSERT INTO `PARTNER_LSP` VALUES ('574', 'SMK ISLAM PANGGUL', null, 'Jl. Raya Panggul Trenggalek', null, null, null, 'P1', null, 'BNSP-LSP-574-ID');
INSERT INTO `PARTNER_LSP` VALUES ('575', 'SMK PEMBANGUNAN JAYA', null, 'Jl. Palapa Raya No. 2 Pasar Minggu, Jakarta Selatan', null, null, null, 'P1', null, 'BNSP-LSP-575-ID');
INSERT INTO `PARTNER_LSP` VALUES ('576', 'LPK SAKASAKTI', null, 'Jl. Matahari I No. 42 Lt. 2, Bumi Malaka Asri III, Duren Sawit, Jakarta Timur', null, null, null, 'P1', null, 'BNSP-LSP-576-ID');
INSERT INTO `PARTNER_LSP` VALUES ('577', 'PT. MITRA ADIPERKASA', null, 'Sahid Sudirman Center, Lt. 25 Jl. Jend. Sudirman Kav. 86, Jakarta Pusat', null, null, null, 'P2', null, 'BNSP-LSP-577-ID');
INSERT INTO `PARTNER_LSP` VALUES ('578', 'SMK MAâ€™ARIF NU PRAMBON', null, 'Jl. Diponegoro No. 122 Prambon, Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-578-ID');
INSERT INTO `PARTNER_LSP` VALUES ('579', 'SMK YPM 7 TARIK SIDOARJO', null, 'Jl. Raya Kemuning Tarik No. 01 Tarik Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-579-ID');
INSERT INTO `PARTNER_LSP` VALUES ('580', 'BLK AGROBISNIS DAN INDUSTRI KABUPATEN GIANYAR', null, 'Jl. Legong Keraton No. 99X Temesi, Gianyar', null, null, null, 'P1', null, 'BNSP-LSP-580-ID');
INSERT INTO `PARTNER_LSP` VALUES ('581', 'SEKOLAH TINGGI TEKNIK ATLAS NUSANTARA', null, 'Jl. Teluk Pacitan No 14 Arjosari, Malang, 65126', null, null, null, 'P1', null, 'BNSP-LSP-581-ID');
INSERT INTO `PARTNER_LSP` VALUES ('582', 'UNIVERSITAS WIDYAGAMA', null, 'Jl. Borobudur 35 Malang', null, null, null, 'P1', null, 'BNSP-LSP-582-ID');
INSERT INTO `PARTNER_LSP` VALUES ('583', 'STMIK ASIA', null, 'Jl. Soekarno-Hatta, Rembuksari No. 1A Malang', null, null, null, 'P1', null, 'BNSP-LSP-583-ID');
INSERT INTO `PARTNER_LSP` VALUES ('584', 'UNIVERSITAS TELKOM', null, 'Jl. Telekomunikasi No. 01, Terusan Buah Batu, Bandung', null, null, null, 'P1', null, 'BNSP-LSP-584-ID');
INSERT INTO `PARTNER_LSP` VALUES ('585', 'POLITEKNIK LPP', null, 'Jl. LPP No 1A Balapan Yogyakarta', null, null, null, 'P1', null, 'BNSP-LSP-585-ID');
INSERT INTO `PARTNER_LSP` VALUES ('586', 'SMK PENERBANGAN SIDOARJO', null, 'Jl. Abdul Rahman No. 49 Sedati Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-586-ID');
INSERT INTO `PARTNER_LSP` VALUES ('587', 'SMK PGRI 3 SIDOARJO', null, 'Jl. Dr. Wahidin No.130-B, Sekardangan, Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-587-ID');
INSERT INTO `PARTNER_LSP` VALUES ('588', 'SMK PERSATUAN 2 TULANGAN', null, 'Jl. Raya Desa Kepadangan No. 36 Tulangan Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-588-ID');
INSERT INTO `PARTNER_LSP` VALUES ('589', 'POLITEKNIK LP3I', null, 'Gedung Sentra Kramat Jl. Kramat Raya No. 7-9 Senen, Jakarta Pusat', null, null, null, 'P1', null, 'BNSP-LSP-589-ID');
INSERT INTO `PARTNER_LSP` VALUES ('590', 'SMKN 10 MALANG', null, 'Jalan Raya Tlogowaru Kedungkandang, Malang', null, null, null, 'P1', null, 'BNSP-LSP-590-ID');
INSERT INTO `PARTNER_LSP` VALUES ('591', 'ARTHA DYAN INTERNATIONAL COLLEGE', null, 'Jl. Nangka Selatan No.66, Denpasar - Bali', null, null, null, 'P1', null, 'BNSP-LSP-591-ID');
INSERT INTO `PARTNER_LSP` VALUES ('592', 'UNIVERSITAS INTERNASIONAL BATAM', null, 'Jl. Gajah Mada, Baloi Sei Ladi, Batam, Kepulauan Riau', null, null, null, 'P1', null, 'BNSP-LSP-592-ID');
INSERT INTO `PARTNER_LSP` VALUES ('593', 'SMKN 4 PEKANBARU', null, 'Jl. Purwadadi - Panam Kec. Tampan, Pekanbaru', null, null, null, 'P1', null, 'BNSP-LSP-593-ID');
INSERT INTO `PARTNER_LSP` VALUES ('594', 'SMKN 1 PEKANBARU', null, 'Jl. Semeru No. 16 Pekanbaru', null, null, null, 'P1', null, 'BNSP-LSP-594-ID');
INSERT INTO `PARTNER_LSP` VALUES ('595', 'SMKN 1 PASIR PENYU', null, 'Jl. Jendral Sudirman, Air Molek Indragiri Hulu, Riau', null, null, null, 'P1', null, 'BNSP-LSP-595-ID');
INSERT INTO `PARTNER_LSP` VALUES ('596', 'SMKN 3 PEKANBARU', null, 'Jl. Dr. Sutomo No. 110 Pekanbaru', null, null, null, 'P1', null, 'BNSP-LSP-596-ID');
INSERT INTO `PARTNER_LSP` VALUES ('597', 'SMKN 2 PEKANBARU', null, 'Jl. Pattimura No. 14 Pekanbaru', null, null, null, 'P1', null, 'BNSP-LSP-597-ID');
INSERT INTO `PARTNER_LSP` VALUES ('598', 'SMK YPM 5 SUKODONO', null, 'Jalan Raya Panjunan No. 45, Sukodono, Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-598-ID');
INSERT INTO `PARTNER_LSP` VALUES ('599', 'SMK TRISAKTI TULANGAN', null, 'Jl. Raya Kepadangan No. 187 Tulangan, Kota Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-599-ID');
INSERT INTO `PARTNER_LSP` VALUES ('600', 'SMK ISLAM KREMBUNG', null, 'Jl. Raya Rejeni â€“ Krembung Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-600-ID');
INSERT INTO `PARTNER_LSP` VALUES ('601', 'INFORMATIKA INDONESIA', null, 'Aula Lt. 3 Eltibiz, Jl. Cilik Riwut Km 1,5 No.04 Palangkaraya', null, null, null, 'P3', null, 'BNSP-LSP-601-ID');
INSERT INTO `PARTNER_LSP` VALUES ('602', 'PARIWISATA JAKARTA RAYA', null, 'Jl. Cipete Raya No. 13 Jakarta Selatan', null, null, null, 'P2', null, 'BNSP-LSP-602-ID');
INSERT INTO `PARTNER_LSP` VALUES ('603', 'SMKN 3 KUPANG', null, 'Jl. S.K. Lerik Walikota , Kupang', null, null, null, 'P1', null, 'BNSP-LSP-603-ID');
INSERT INTO `PARTNER_LSP` VALUES ('604', 'PELATIH OLAH RAGA', null, 'Jl. Tenggilis Utara VI No. 14 Surabaya 60292', null, null, null, 'P1', null, 'BNSP-LSP-604-ID');
INSERT INTO `PARTNER_LSP` VALUES ('605', 'PUSAT PENDIDIKAN MAARIF JTM', null, 'Jl. Tunggul Ametung 99 Candirenggo, Singosari Kab. Malang', null, null, null, 'P2', null, 'BNSP-LSP-605-ID');
INSERT INTO `PARTNER_LSP` VALUES ('606', 'STMIK IKMI CIREBON', null, 'Jl. Perjuangan No. 10 B Majasem Kota Cirebon', null, null, null, 'P1', null, 'BNSP-LSP-606-ID');
INSERT INTO `PARTNER_LSP` VALUES ('607', 'STMIK BALIKPAPAN', null, 'Jl. AMD Manunggal 09 RT 35 Damai Bahagia Balikpapan', null, null, null, 'P1', null, 'BNSP-LSP-607-ID');
INSERT INTO `PARTNER_LSP` VALUES ('608', 'SMK PAWYATAN DAHA 1 KEDIRI', null, 'Jl. Slamet Riyadi No. 66 Kediri 64124', null, null, null, 'P1', null, 'BNSP-LSP-608-ID');
INSERT INTO `PARTNER_LSP` VALUES ('609', 'SMKN 1 KARANGANYAR NGAWI', null, 'Jl. Raya Gendingan Karanganyar, Ngawi', null, null, null, 'P1', null, 'BNSP-LSP-609-ID');
INSERT INTO `PARTNER_LSP` VALUES ('610', 'SMK AIRLANGGA SIDOARJO', null, 'Jl. Tenis V Magersari (Komplek GOR Sidoarjo) Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-610-ID');
INSERT INTO `PARTNER_LSP` VALUES ('611', 'INSPECTOR INDONESIA', null, 'Graha Sucofindo â€“ Gedung B Jl. Raya Pasar Minggu Kav. 34 Jakarta 12780', null, null, null, 'P3', null, 'BNSP-LSP-611-ID');
INSERT INTO `PARTNER_LSP` VALUES ('612', 'LSP K3 Konstruksi', null, 'Jl. Raya Lenteng Agung No. 37E Lenteng Agung Jagakarsa Jakarta Selatan 12610', null, null, null, 'P3', null, 'BNSP-LSP-612-ID');
INSERT INTO `PARTNER_LSP` VALUES ('613', 'BADAN PENGEMBANGAN SUMBER DAYA MANUSIA ENERGI DAN SUMBER DAYA MINERAL (BPSDM ESDM)', null, 'Gd. Badan Pengembangan Sumber Daya Manusia Energi dan Sumber Daya Mineral Jl. Gatot Subroto Kav. 49 Jakarta Selatan', null, null, null, 'P2', null, 'BNSP-LSP-613-ID');
INSERT INTO `PARTNER_LSP` VALUES ('614', 'SMK SATRIA BHAKTI NGANJUK', null, 'Jl. Panglima Sudirman VI Nganjuk 64412', null, null, null, 'P1', null, 'BNSP-LSP-614-ID');
INSERT INTO `PARTNER_LSP` VALUES ('615', 'SMK NEGERI DARUL ULUM MUNCAR', null, 'Jl. KH. Askandar Km. 2 Wringin Putih Muncar Banyuwangi, Jawa Timur', null, null, null, 'P1', null, 'BNSP-LSP-615-ID');
INSERT INTO `PARTNER_LSP` VALUES ('616', 'LIBERTY INTERNATIONAL COLLEGE', null, 'Jl. Rajawali No. 99 Beng, Gianyar , Bali', null, null, null, 'P2', null, 'BNSP-LSP-616-ID');
INSERT INTO `PARTNER_LSP` VALUES ('617', 'SMK PERIKANAN DAN KELAUTAN PUGER', null, 'Jl. Achmad Yani Puger, Jember', null, null, null, 'P1', null, 'BNSP-LSP-617-ID');
INSERT INTO `PARTNER_LSP` VALUES ('618', 'BALAI DIKLAT INDUSTRI MAKASSAR', null, 'Jl. Perintis Kemerdekaan Km. 17 , Makassar', null, null, null, 'P2', null, 'BNSP-LSP-618-ID');
INSERT INTO `PARTNER_LSP` VALUES ('619', 'LPK ELIZABETH INTERNATIONAL', null, 'Jl. Kebo Iwa No. 12 B, Gianyar Bali', null, null, null, 'P1', null, 'BNSP-LSP-619-ID');
INSERT INTO `PARTNER_LSP` VALUES ('620', 'SMKN 2 DEPOK SLEMAN', null, 'Mrican Caturtunggal, Depok Sleman Yogyakarta 55281', null, null, null, 'P1', null, 'BNSP-LSP-620-ID');
INSERT INTO `PARTNER_LSP` VALUES ('621', 'SMK MAMBAUL ULUM BATA-BATA', null, 'Jl. KHR. Abd. Majid Komplek PP Mambaul Ulum Bata-Bata Panaan Palengaan', null, null, null, 'P1', null, 'BNSP-LSP-621-ID');
INSERT INTO `PARTNER_LSP` VALUES ('622', 'SMKN 6 MALANG', null, 'Jl. Ki Ageng Gribig No.28, Madyopuro, Kedungkandang, Kota Malang 65139', null, null, null, 'P1', null, 'BNSP-LSP-622-ID');
INSERT INTO `PARTNER_LSP` VALUES ('623', 'SUPM PONTIANAK', null, '', null, null, null, 'P1', null, 'BNSP-LSP-623-ID');
INSERT INTO `PARTNER_LSP` VALUES ('624', 'KECANTIKAN ESCRINS', null, 'Jl. Ade Irma Suryani No. 27 Semarang', null, null, null, 'P1', null, 'BNSP-LSP-624-ID');
INSERT INTO `PARTNER_LSP` VALUES ('625', 'POLITEKNIK KELAUTAN & PERIKANAN BITUNG', null, 'Jl. Tandurasa Kotak Pos 12/BTG, Bitung Sulawesi Utara', null, null, null, 'P1', null, 'BNSP-LSP-625-ID');
INSERT INTO `PARTNER_LSP` VALUES ('626', 'SMKN 6 JEMBER', null, '', null, null, null, 'P1', null, 'BNSP-LSP-626-ID');
INSERT INTO `PARTNER_LSP` VALUES ('627', 'P2KGK JAKARTA SELATAN', null, 'Jl. Camat Gabun II Lenteng Agung, Jagakarsa, Jakarta Selatan', null, null, null, 'P2', null, 'BNSP-LSP-627-ID');
INSERT INTO `PARTNER_LSP` VALUES ('628', 'LPK MITRA KALYANA SEJAHTERA', null, 'Jl. Batununggal Abadi 2 No. 72 Bandung 40267', null, null, null, 'P1', null, 'BNSP-LSP-628-ID');
INSERT INTO `PARTNER_LSP` VALUES ('629', 'STTNAS YOGYAKARTA', null, 'Jl. Babarsari Caturtunggal , Depok , Sleman, Yogyakarta 55281', null, null, null, 'P1', null, 'BNSP-LSP-629-ID');
INSERT INTO `PARTNER_LSP` VALUES ('630', 'SMK ISLAM 2 DURENAN TRENGGALEK', null, 'Jl. Raya Kendalrejo, Durenan Trenggalek', null, null, null, 'P1', null, 'BNSP-LSP-630-ID');
INSERT INTO `PARTNER_LSP` VALUES ('631', 'SMK MAâ€™ARIF SUDIMORO PACITAN', null, 'Jl. Raya Sudimoro No. 10 Pacitan', null, null, null, 'P1', null, 'BNSP-LSP-631-ID');
INSERT INTO `PARTNER_LSP` VALUES ('632', 'SMK PGRI JATISARI KARAWANG', null, 'Jl. Raya Sukamaju, Jatisari, Karawang 41374', null, null, null, 'P1', null, 'BNSP-LSP-632-ID');
INSERT INTO `PARTNER_LSP` VALUES ('633', 'POLITEKNIK KELAUTAN & PERIKANAN SIDOARJO', null, 'Jl. Raya Buncitan Kotak Pos 1 Sedati Sidoarjo', null, null, null, 'P1', null, 'BNSP-LSP-633-ID');
INSERT INTO `PARTNER_LSP` VALUES ('634', 'AKADEMI ANALIS KESEHATAN 17 AGUSTUS 1945 SEMARANG (LSP ANALIS 17)', null, 'Jl. Jend. Sudirman No. 350 Semarang', null, null, null, 'P1', null, 'BNSP-LSP-634-ID');
INSERT INTO `PARTNER_LSP` VALUES ('635', 'POLITEKNIK NEGERI MEDAN', null, 'Jl. Almamater No. 1, Kampus USU Medan 20155', null, null, null, 'P1', null, 'BNSP-LSP-635-ID');
INSERT INTO `PARTNER_LSP` VALUES ('636', 'PUSDIKLAT SDM LHK', null, 'Jl. Mayjen Ishak Juarsa Gunung Batu Bogor 16118', null, null, null, 'P1', null, 'BNSP-LSP-636-ID');
INSERT INTO `PARTNER_LSP` VALUES ('637', 'TENAGA KESEHATAN', null, 'Gedung dr. Suwardjono Surjaningrat, Lantai 8 Ruang 806 Jl. Hang Jebat III Blok F3, Kebayoran Baru, Jakarta 12120', null, null, null, 'P1', null, 'BNSP-LSP-637-ID');
INSERT INTO `PARTNER_LSP` VALUES ('638', 'SMKN 1 MOJOANYAR', null, 'Jl. Dusun Wonoayu RT 02 / RW 01, Desa Kepuhanyar, Mojoanyar, Mojokerto', null, null, null, 'P1', null, 'BNSP-LSP-638-ID');
INSERT INTO `PARTNER_LSP` VALUES ('639', 'SMK KARYA NASIONAL KUNINGAN', null, 'Jl. Cirendang - Cigugur, Cirendang, Kec. Kuningan, Kabupaten Kuningan, Jawa Barat 45518', null, null, null, 'P1', null, 'BNSP-LSP-639-ID');
INSERT INTO `PARTNER_LSP` VALUES ('640', 'SMK AL MUFTI PURWADADI', null, 'Jl. Jaenal Mufti, Purwadadi, Wanakerta, Belendung, Subang, Kabupaten Subang 41261', null, null, null, 'P1', null, 'BNSP-LSP-640-ID');
INSERT INTO `PARTNER_LSP` VALUES ('641', 'SMK RADEN RAHMAT MOJOSARI', null, 'Jl. Hasanudin No. 79, Mojosari, Mojokerto', null, null, null, 'P1', null, 'BNSP-LSP-641-ID');
INSERT INTO `PARTNER_LSP` VALUES ('642', 'LINGKUNGAN HIDUP', null, 'Jl. Danau Toba No. 103, Bendungan Hilir Jakarta Pusat', null, null, null, 'P3', null, 'BNSP-LSP-642-ID');
INSERT INTO `PARTNER_LSP` VALUES ('643', 'SMKN 1 TUREN', null, 'Jl. Panglima Sudirman No. 41, Turen, Malang', null, null, null, 'P1', null, 'BNSP-LSP-643-ID');
INSERT INTO `PARTNER_LSP` VALUES ('644', 'SMKN 1 DOKO', null, 'Jl. Pahlawan, Desa Resapombo, Kec. Doko, Resapombo, Doko, Blitar 66186', null, null, null, 'P1', null, 'BNSP-LSP-644-ID');
INSERT INTO `PARTNER_LSP` VALUES ('645', 'POLITEKNIK NEGERI LHOKSEUMAWE', null, 'Jl. Banda Aceh-Medan Km. 280,3, Buketrata, Mesjid Punteut, Blang Mangat, Kota Lhokseumawe, Aceh 24301', null, null, null, 'P1', null, 'BNSP-LSP-645-ID');
INSERT INTO `PARTNER_LSP` VALUES ('646', 'TRAINER INDONESIA', null, 'Menara 165, Lantai 24, Jl. TB. Simatupang Kav. 1, Cilandak, Jakarta Selatan 12560', null, null, null, 'P3', null, 'BNSP-LSP-646-ID');
INSERT INTO `PARTNER_LSP` VALUES ('647', 'SMKN 2 DEPOK', null, 'Jl. Abdul Wahab Pintu 2 Telaga Golf, Sawangan Lama, Sawangan, Kota Depok 16511', null, null, null, 'P1', null, 'BNSP-LSP-647-ID');
INSERT INTO `PARTNER_LSP` VALUES ('648', 'MSDM GLOBAL', null, 'Jl. Klampis Indah I/38 Blok H 19 Surabaya 60117', null, null, null, 'P2', null, 'BNSP-LSP-648-ID');
INSERT INTO `PARTNER_LSP` VALUES ('649', 'MSDM BRILLIANT', null, 'Kompleks Perkantoran Citra Grand Amsterdam Blok B No. 2 Sambiroto, Semarang', null, null, null, 'P3', null, 'BNSP-LSP-649-ID');
INSERT INTO `PARTNER_LSP` VALUES ('650', 'SMKN 2 PAMEKASAN', null, 'Jl. Proppo 161 Pamekasan 69316', null, null, null, 'P1', null, 'BNSP-LSP-650-ID');
INSERT INTO `PARTNER_LSP` VALUES ('651', 'SMKN 1 TLANAKAN', null, 'Jl. Raya Tlanakan No. 9, Tlanakan, Kec. Pamekasan, Kabupaten Pamekasan 69371', null, null, null, 'P1', null, 'BNSP-LSP-651-ID');
INSERT INTO `PARTNER_LSP` VALUES ('652', 'PERDAGANGAN RITEL', null, 'Gedung Java Design Centre, Lt. 4, Jl. Imam Bonjol 154 â€“ 160 Semarang', null, null, null, 'P2', null, 'BNSP-LSP-652-ID');
INSERT INTO `PARTNER_LSP` VALUES ('653', 'PT. PEGADAIAN', null, 'Jl. Kramat Raya 162 Jakarta Pusat', null, null, null, 'P2', null, 'BNSP-LSP-653-ID');
INSERT INTO `PARTNER_LSP` VALUES ('654', 'PT. FREEPORT INDONESIA', null, 'Technical Training and Accreditation Building Mile 68 Tembagapura - Papua.', null, null, null, 'P2', null, 'BNSP-LSP-654-ID');
INSERT INTO `PARTNER_LSP` VALUES ('655', 'SMKN 1 TAMBAKBOYO', null, 'Jalan Raya Sawir No. 9 Sawir, Tambakboyo, Tuban 62352', null, null, null, 'P1', null, 'BNSP-LSP-655-ID');
INSERT INTO `PARTNER_LSP` VALUES ('656', 'ADMINISTRASI PERKANTORAN INDONESIA', null, 'Graha Kadin Kota Bandung Jl. Talaga Bodas No. 31 Bandung â€“ Indonesia', null, null, null, 'P1', null, 'BNSP-LSP-656-ID');
INSERT INTO `PARTNER_LSP` VALUES ('657', 'UNIVERSITAS KANJURUHAN MALANG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-657-ID');
INSERT INTO `PARTNER_LSP` VALUES ('658', 'JAKARTA INTERNATIONAL HOTELS SCHOOL (JIHS)', null, 'Jl. Jend. Sudirman Kav. 52-53 Lot. 21 Jakarta Selatan. 12190', null, null, null, 'P1', null, 'BNSP-LSP-658-ID');
INSERT INTO `PARTNER_LSP` VALUES ('659', 'PUSAT PENGEMBANGAN DAN PEMBERDAYAAN PENDIDIK DAN TENAGA KEPENDIDIKAN BIDANG BANGUNAN DAN LISTRIK (P4TK BBL)', null, 'Jl Setia Budi No 75, Helvetia-Medan 20124', null, null, null, 'P1', null, 'BNSP-LSP-659-ID');
INSERT INTO `PARTNER_LSP` VALUES ('660', 'LEMBAGA PENGEMBANGAN DAN PEMBERDAYAAN PENDIDIK DAN TENAGA KEPENDIDIKAN KELAUTAN PERIKANAN TEKNOLOGI INFORMASI DAN KOMUNIKASI ( LPPPTK KPTK)', null, 'Jl. Diklat No. 30 Dusun Tambung Batu, Desa Pacellekkang Kec. Pattallassang, Kabupaten Gowa Sulawesi Selatan 92171', null, null, null, 'P1', null, 'BNSP-LSP-660-ID');
INSERT INTO `PARTNER_LSP` VALUES ('661', 'PUSAT PENGEMBANGAN DAN PEMBERDAYAAN PENDIDIK DAN TENAGA KEPENDIDIKAN BIDANG MESIN DAN TEKNIK INDUSTRI (P4TK BMTI)', null, 'Jln. Pesantren Km 2, Cimahi 40513', null, null, null, 'P1', null, 'BNSP-LSP-661-ID');
INSERT INTO `PARTNER_LSP` VALUES ('662', 'PUSAT PENGEMBANGAN DAN PEMBERDAYAAN PENDIDIK DAN TENAGA KEPENDIDIKAN PERTANIAN (VEDCA) (P4TK PERTANIAN (VEDCA))', null, 'Jl. Raya Jangari Km. 14 Sukajadi - Karangtengah Cianjur', null, null, null, 'P1', null, 'BNSP-LSP-662-ID');
INSERT INTO `PARTNER_LSP` VALUES ('663', 'DINAS PENDIDIKAN PROVINSI JAWA TIMUR', null, 'Jl. Gentengkali No. 33 Surabaya 60275', null, null, null, 'P1', null, 'BNSP-LSP-663-ID');
INSERT INTO `PARTNER_LSP` VALUES ('664', 'LEMBAGA PENGKAJIAN PANGAN, OBAT DAN KOSMETIKA MAJELIS ULAMA INDONESIA (LPPOM MUI)', null, 'Gedung Global Halal Center Jl. Pemuda No. 5 Kota Bogor 16161', null, null, null, 'P3', null, 'BNSP-LSP-664-ID');
INSERT INTO `PARTNER_LSP` VALUES ('665', 'SMK BOEDI OETOMO CILACAP', null, 'Jl. Bali Timur No. 100, Kebon Manis, Cilacap Utara, Kab. Cilacap 53235', null, null, null, 'P1', null, 'BNSP-LSP-665-ID');
INSERT INTO `PARTNER_LSP` VALUES ('666', 'POLITEKNIK NEGERI AMBON', null, 'Jl. Ir. M. Putu Lera Wailela Rumah Tiga, Ambon', null, null, null, 'P1', null, 'BNSP-LSP-666-ID');
INSERT INTO `PARTNER_LSP` VALUES ('667', 'SMKN 1 JUWIRING', null, 'Mrisen, Juwiring, Klaten', null, null, null, 'P1', null, 'BNSP-LSP-667-ID');
INSERT INTO `PARTNER_LSP` VALUES ('668', 'SMKN 4 KLATEN', null, 'Jl. Mataram No. 5 Belang Wetan, Klaten Utara, Klaten', null, null, null, 'P1', null, 'BNSP-LSP-668-ID');
INSERT INTO `PARTNER_LSP` VALUES ('669', 'SMK BINA KARYA 1 KARAWANG', null, 'Jl. Pangkal Perjuangan (By Pass) Tanjung Pura Karawang 41316', null, null, null, 'P1', null, 'BNSP-LSP-669-ID');
INSERT INTO `PARTNER_LSP` VALUES ('670', 'SMK TRI MITRA KARAWANG', null, 'Jl. By Pass Jomin â€“ Jomin Barat Kota Baru â€“ Karawang', null, null, null, 'P1', null, 'BNSP-LSP-670-ID');
INSERT INTO `PARTNER_LSP` VALUES ('671', 'POLITEKNIK NEGERI MEDIA KREATIF', null, 'Jl. Srengseng Sawah Raya, Jagakarsa, Jakarta Selatan 12640', null, null, null, 'P1', null, 'BNSP-LSP-671-ID');
INSERT INTO `PARTNER_LSP` VALUES ('672', 'SMK MUHAMMADIYAH 1 PLAYEN', null, 'Jl. Wonosari -Yogya KM.3 Logandeng Playen Gunung Kidul DIY', null, null, null, 'P1', null, 'BNSP-LSP-672-ID');
INSERT INTO `PARTNER_LSP` VALUES ('673', 'SMKN 1 CILACAP', null, 'Jl. Budi Utomo No. 10 Cilacap Kode Pos 53212', null, null, null, 'P1', null, 'BNSP-LSP-673-ID');
INSERT INTO `PARTNER_LSP` VALUES ('674', 'SMKN 1 KLUNGKUNG BALI', null, 'Jalan Subali II, Banjar Siku Desa Kamasan, Klungkung, Bali', null, null, null, 'P1', null, 'BNSP-LSP-674-ID');
INSERT INTO `PARTNER_LSP` VALUES ('675', 'SMKN 1 WONOSARI', null, 'Jl. Veteran Wonosari Gunung kidul', null, null, null, 'P1', null, 'BNSP-LSP-675-ID');
INSERT INTO `PARTNER_LSP` VALUES ('676', 'SMKN 1 BOJONEGORO', null, 'Jl. Panglima Polim 50 Bojonegoro', null, null, null, 'P1', null, 'BNSP-LSP-676-ID');
INSERT INTO `PARTNER_LSP` VALUES ('677', 'SMK MUHAMMADIYAH 1 SUKOHARJO', null, 'Jl. Anggrek No, 2 Sukoharjo 57511 Jawa Tengah', null, null, null, 'P1', null, 'BNSP-LSP-677-ID');
INSERT INTO `PARTNER_LSP` VALUES ('678', 'SMKN 3 SURAKARTA', null, 'Jl. Brigjen Sudiarto No. 34 Surakarta', null, null, null, 'P1', null, 'BNSP-LSP-678-ID');
INSERT INTO `PARTNER_LSP` VALUES ('679', 'SMKN 5 DENPASAR', null, 'Jl. Ratna No.17, Sumerta Kauh, Denpasar Tim., Kota Denpasar, Bali 80236', null, null, null, 'P1', null, 'BNSP-LSP-679-ID');
INSERT INTO `PARTNER_LSP` VALUES ('680', 'PEKERJA DOMESTIK PERAWATAN BINA MULIA', null, 'Jl. Tebet Timur dalam II No.29 Jakarta Selatan', null, null, null, 'P3', null, 'BNSP-LSP-680-ID');
INSERT INTO `PARTNER_LSP` VALUES ('681', 'SMKN 3 JAMBI', null, '', null, null, null, 'P1', null, 'BNSP-LSP-681-ID');
INSERT INTO `PARTNER_LSP` VALUES ('682', 'SEKOLAH TINGGI ILMU PELAYARAN', null, 'Jalan Marunda Makmur, Cilincing, Jakarta Utara .', null, null, null, 'P1', null, 'BNSP-LSP-682-ID');
INSERT INTO `PARTNER_LSP` VALUES ('683', 'BALAI PENDIDIKAN DAN PELATIHAN ILMU PELAYARAN TANGERANG', null, 'Jl. Raya Karang Serang No. 1 Sukadiri Tangerang Banten', null, null, null, 'P1', null, 'BNSP-LSP-683-ID');
INSERT INTO `PARTNER_LSP` VALUES ('684', 'POLITEKNIK ILMU PELAYARAN MAKASSAR', null, 'Jl. Tentara Pelajar No. 173 Makassar.', null, null, null, 'P1', null, 'BNSP-LSP-684-ID');
INSERT INTO `PARTNER_LSP` VALUES ('685', 'SMKN 1 SINGARAJA', null, 'JL. Pramuka, No. 6, Singaraja, 81113, Banjar Bali, Kec. Buleleng, Kabupaten Buleleng, Bali 81113', null, null, null, 'P1', null, 'BNSP-LSP-685-ID');
INSERT INTO `PARTNER_LSP` VALUES ('686', 'SMKN 1 KEMLAGI', null, 'Jl. Pakutomo No. 01, Ds. Mojogebang, Kemlagi Mojokerto', null, null, null, 'P1', null, 'BNSP-LSP-686-ID');
INSERT INTO `PARTNER_LSP` VALUES ('687', 'MIGAS RIAU INDONESIA', null, 'Jl. Teuku Umar D-37, Duri, Riau', null, null, null, 'P3', null, 'BNSP-LSP-687-ID');
INSERT INTO `PARTNER_LSP` VALUES ('688', 'KAPAL PESIAR HARAPAN MULYA', null, 'Jl. Gatot Subroto Barat 459 Denpasar, Bali', null, null, null, 'P3', null, 'BNSP-LSP-688-ID');
INSERT INTO `PARTNER_LSP` VALUES ('689', 'GEOSPASIAL', null, 'Gedung Piccadilly Lt. 2-D 8, Jl. Mampang Prapatan Raya No. 39, Jakarta 12790', null, null, null, 'P1', null, 'BNSP-LSP-689-ID');
INSERT INTO `PARTNER_LSP` VALUES ('690', 'PUSAT PENGEMBANGAN DAN PEMBERDAYAAN PENDIDIK DAN TENAGA KEPENDIDIKAN BIDANG SENI DAN BUDAYA ( P4TK SENI DAN BUDAYA)', null, 'Jl. Kaliurang Km. 12,5 Klidon, Sukoharjo, Ngaglik, Sleman, Daerah Istimewa Yogyakarta 55581', null, null, null, 'P1', null, 'BNSP-LSP-690-ID');
INSERT INTO `PARTNER_LSP` VALUES ('691', 'PUSAT PENGEMBANGAN DAN PEMBERDAYAAN PENDIDIK DAN TENAGA KEPENDIDIKAN BIDANG BISNIS DAN PARIWISATA ( P4TK BISNIS DAN PARIWISATA)', null, 'Jl. Raya Parung Km. 22 â€“ 23 Bojongsari Baru, Bojongsari Kota Depok', null, null, null, 'P1', null, 'BNSP-LSP-691-ID');
INSERT INTO `PARTNER_LSP` VALUES ('692', 'PUSAT PENGEMBANGAN DAN PEMBERDAYAAN PENDIDIK DAN TENAGA KEPENDIDIKAN BIDANG OTOMOTIF DAN ELEKTRONIKA ( P4TK BOE)', null, 'Jl. Teluk Mandar Tromol Pos No. 5 Arjosari, Blimbing, Kota Malang', null, null, null, 'P1', null, 'BNSP-LSP-692-ID');
INSERT INTO `PARTNER_LSP` VALUES ('693', 'UPT PELATIHAN KERJA WONOJATI', null, '', null, null, null, 'P3', null, 'BNSP-LSP-693-ID');
INSERT INTO `PARTNER_LSP` VALUES ('694', 'SMK NASIONAL DAWAR BLANDONG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-694-ID');
INSERT INTO `PARTNER_LSP` VALUES ('695', 'SMKN 1 KOTA BIMA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-695-ID');
INSERT INTO `PARTNER_LSP` VALUES ('696', 'SMKN 2 KOTA BIMA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-696-ID');
INSERT INTO `PARTNER_LSP` VALUES ('697', 'JAMINAN DAN ASURANSI KESEHATAN INDONESIA', null, '', null, null, null, 'P3', null, 'BNSP-LSP-697-ID');
INSERT INTO `PARTNER_LSP` VALUES ('698', 'BBPLK BANDUNG', null, '', null, null, null, 'P3', null, 'BNSP-LSP-698-ID');
INSERT INTO `PARTNER_LSP` VALUES ('699', 'SMKN 2 BUNGORO', null, '', null, null, null, 'P1', null, 'BNSP-LSP-699-ID');
INSERT INTO `PARTNER_LSP` VALUES ('700', 'UNIVERSITAS UDAYANA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-700-ID');
INSERT INTO `PARTNER_LSP` VALUES ('701', 'ESR ASTRA INTERNATIONAL', null, '', null, null, null, 'P3', null, 'BNSP-LSP-701-ID');
INSERT INTO `PARTNER_LSP` VALUES ('702', 'POLITEKNIK ILMU PELAYARAN SEMARANG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-702-ID');
INSERT INTO `PARTNER_LSP` VALUES ('703', 'PENEMPATAN DAN PERLUASAN KESEMPATAN KERJA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-703-ID');
INSERT INTO `PARTNER_LSP` VALUES ('704', 'BBPLK SERANG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-704-ID');
INSERT INTO `PARTNER_LSP` VALUES ('705', 'UNIVERSITAS GUNADARMA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-705-ID');
INSERT INTO `PARTNER_LSP` VALUES ('706', 'SMK PGRI 3 DENPASAR', null, '', null, null, null, 'P1', null, 'BNSP-LSP-706-ID');
INSERT INTO `PARTNER_LSP` VALUES ('707', 'BALAI PENDIDKAN DAN PELATIHAN PENERBANGAN PALEMBANG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-707-ID');
INSERT INTO `PARTNER_LSP` VALUES ('708', 'POLITEKNIK PELAYARAN SURABAYA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-708-ID');
INSERT INTO `PARTNER_LSP` VALUES ('709', 'BALAI PENDIDKAN DAN PELATIHAN PELAYARAN PADANG PARIAMAN', null, '', null, null, null, 'P1', null, 'BNSP-LSP-709-ID');
INSERT INTO `PARTNER_LSP` VALUES ('710', 'LALU LINTAS ANGKUTAN SUNGAI, DANAU DAN PENYEBERANGAN PALEMBANG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-710-ID');
INSERT INTO `PARTNER_LSP` VALUES ('711', 'UNIVERSITAS MERDEKA MALANG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-711-ID');
INSERT INTO `PARTNER_LSP` VALUES ('712', 'BBPLK SEMARANG', null, '', null, null, null, 'P3', null, 'BNSP-LSP-712-ID');
INSERT INTO `PARTNER_LSP` VALUES ('713', 'STIE AUB SURAKARTA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-713-ID');
INSERT INTO `PARTNER_LSP` VALUES ('714', 'STMIK AUB SURAKARTA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-714-ID');
INSERT INTO `PARTNER_LSP` VALUES ('715', 'FAKULTAS TEKNOLOGI INFORMASI UNISKA (LSP FTI UNISKA)', null, '', null, null, null, 'P1', null, 'BNSP-LSP-715-ID');
INSERT INTO `PARTNER_LSP` VALUES ('716', 'UNIVERSITAS AHMAD DAHLAN', null, '', null, null, null, 'P1', null, 'BNSP-LSP-716-ID');
INSERT INTO `PARTNER_LSP` VALUES ('717', 'STIE TUNAS NUSANTARA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-717-ID');
INSERT INTO `PARTNER_LSP` VALUES ('718', 'PARIWISATA BINA KOMPETENSI', null, '', null, null, null, 'P1', null, 'BNSP-LSP-718-ID');
INSERT INTO `PARTNER_LSP` VALUES ('719', 'LPK THE HOTEL INTERNATIONAL', null, '', null, null, null, 'P3', null, 'BNSP-LSP-719-ID');
INSERT INTO `PARTNER_LSP` VALUES ('720', 'POLITEKNIK NEGERI BANYUWANGI', null, '', null, null, null, 'P1', null, 'BNSP-LSP-720-ID');
INSERT INTO `PARTNER_LSP` VALUES ('721', 'BBPLK BEKASI', null, '', null, null, null, 'P3', null, 'BNSP-LSP-721-ID');
INSERT INTO `PARTNER_LSP` VALUES ('722', 'BALAI PENDIDIKAN DAN PELATIHAN ILMU PELAYARAN MALAHAYATI ACEH (LSP BP2IP MALAHAYATI ACEH)', null, '', null, null, null, 'P1', null, 'BNSP-LSP-722-ID');
INSERT INTO `PARTNER_LSP` VALUES ('723', 'MINYAK, GAS DAN PANAS BUMI APMI', null, '', null, null, null, 'P3', null, 'BNSP-LSP-723-ID');
INSERT INTO `PARTNER_LSP` VALUES ('724', 'ESQ LEADERSHIP LEARNING CENTRE', null, '', null, null, null, 'P2', null, 'BNSP-LSP-724-ID');
INSERT INTO `PARTNER_LSP` VALUES ('725', 'BLK SURAKARTA', null, '', null, null, null, 'P3', null, 'BNSP-LSP-725-ID');
INSERT INTO `PARTNER_LSP` VALUES ('726', 'POLITEKNIK MARITIM NEGERI INDONESIA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-726-ID');
INSERT INTO `PARTNER_LSP` VALUES ('727', 'SMK MUHAMMADIYAH BUNGORO', null, '', null, null, null, 'P1', null, 'BNSP-LSP-727-ID');
INSERT INTO `PARTNER_LSP` VALUES ('728', 'SMKN 2 BOGOR', null, '', null, null, null, 'P1', null, 'BNSP-LSP-728-ID');
INSERT INTO `PARTNER_LSP` VALUES ('729', 'SMKN 2 SUNGAI PENUH', null, '', null, null, null, 'P1', null, 'BNSP-LSP-729-ID');
INSERT INTO `PARTNER_LSP` VALUES ('730', 'BALAI PENDIDIKAN DAN PELATIHAN PENERBANGAN CURUG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-730-ID');
INSERT INTO `PARTNER_LSP` VALUES ('731', 'AKADEMI TEKNIK KESELAMATAN PENERBANGAN MAKASSAR', null, '', null, null, null, 'P1', null, 'BNSP-LSP-731-ID');
INSERT INTO `PARTNER_LSP` VALUES ('732', 'PARIWISATA NUGRAHA INTERNASIONAL', null, '', null, null, null, 'P1', null, 'BNSP-LSP-732-ID');
INSERT INTO `PARTNER_LSP` VALUES ('733', 'SMKN 1 KARANG PUCUNG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-733-ID');
INSERT INTO `PARTNER_LSP` VALUES ('734', 'SMK PUTRA JAYA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-734-ID');
INSERT INTO `PARTNER_LSP` VALUES ('735', 'SMK SWASTA PENCAWAN MEDAN', null, '', null, null, null, 'P1', null, 'BNSP-LSP-735-ID');
INSERT INTO `PARTNER_LSP` VALUES ('736', 'SMKN 2 WONOGIRI', null, '', null, null, null, 'P1', null, 'BNSP-LSP-736-ID');
INSERT INTO `PARTNER_LSP` VALUES ('737', 'SMKN 7 SURAKARTA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-737-ID');
INSERT INTO `PARTNER_LSP` VALUES ('738', 'SMKN 1 SEWON', null, '', null, null, null, 'P1', null, 'BNSP-LSP-738-ID');
INSERT INTO `PARTNER_LSP` VALUES ('739', 'SMKN 2 KRAKSAAN PROBOLINGGO', null, '', null, null, null, 'P1', null, 'BNSP-LSP-739-ID');
INSERT INTO `PARTNER_LSP` VALUES ('740', 'SEKOLAH TELEKOMUNIKASI ELEKTRO DAN INFORMATIKA (STEI) ITB', null, '', null, null, null, 'P1', null, 'BNSP-LSP-740-ID');
INSERT INTO `PARTNER_LSP` VALUES ('741', 'ANIMASI SINEMATOGRAFI DESAIN DAN INFORMATIKA (ANIMEDIA)', null, '', null, null, null, 'P1', null, 'BNSP-LSP-741-ID');
INSERT INTO `PARTNER_LSP` VALUES ('742', 'SMKN 8 BANDUNG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-742-ID');
INSERT INTO `PARTNER_LSP` VALUES ('743', 'ENERGI TERBARUKAN', null, '', null, null, null, 'P3', null, 'BNSP-LSP-743-ID');
INSERT INTO `PARTNER_LSP` VALUES ('744', 'DEWAN SYARIAH NASIONAL MAJELIS ULAMA INDONESIA (DSN MUI)', null, '', null, null, null, 'P2', null, 'BNSP-LSP-744-ID');
INSERT INTO `PARTNER_LSP` VALUES ('745', 'HATA PRIMA MANDIRI', null, '', null, null, null, 'P2', null, 'BNSP-LSP-745-ID');
INSERT INTO `PARTNER_LSP` VALUES ('746', 'STKIP TULUNG AGUNG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-746-ID');
INSERT INTO `PARTNER_LSP` VALUES ('747', 'SMKN 1 ADIWERNA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-747-ID');
INSERT INTO `PARTNER_LSP` VALUES ('748', 'SMKN 1 BANDUNG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-748-ID');
INSERT INTO `PARTNER_LSP` VALUES ('749', 'SMKN 1 MAGETAN', null, '', null, null, null, 'P1', null, 'BNSP-LSP-749-ID');
INSERT INTO `PARTNER_LSP` VALUES ('750', 'SMKN 2 PASURUAN', null, '', null, null, null, 'P1', null, 'BNSP-LSP-750-ID');
INSERT INTO `PARTNER_LSP` VALUES ('751', 'SMKN 3 SURABAYA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-751-ID');
INSERT INTO `PARTNER_LSP` VALUES ('752', 'SMKN 2 SINGOSARI MALANG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-752-ID');
INSERT INTO `PARTNER_LSP` VALUES ('753', 'K3 MANDIRI', null, '', null, null, null, 'P2', null, 'BNSP-LSP-753-ID');
INSERT INTO `PARTNER_LSP` VALUES ('754', 'SMKN 1 BOYOLALI', null, '', null, null, null, 'P1', null, 'BNSP-LSP-754-ID');
INSERT INTO `PARTNER_LSP` VALUES ('755', 'SMKN 1 MOJOSONGO', null, '', null, null, null, 'P1', null, 'BNSP-LSP-755-ID');
INSERT INTO `PARTNER_LSP` VALUES ('756', 'SMKN 2 KARAWANG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-756-ID');
INSERT INTO `PARTNER_LSP` VALUES ('757', 'SMKN 1 DENPASAR', null, '', null, null, null, 'P1', null, 'BNSP-LSP-757-ID');
INSERT INTO `PARTNER_LSP` VALUES ('758', 'SMK SARASWATI 3 TABANAN', null, '', null, null, null, 'P1', null, 'BNSP-LSP-758-ID');
INSERT INTO `PARTNER_LSP` VALUES ('759', 'SMKN 2 LAHAT', null, '', null, null, null, 'P1', null, 'BNSP-LSP-759-ID');
INSERT INTO `PARTNER_LSP` VALUES ('760', 'SMKN 1 LAHAT', null, '', null, null, null, 'P1', null, 'BNSP-LSP-760-ID');
INSERT INTO `PARTNER_LSP` VALUES ('761', 'SMKN 1 KEDUNGWUNI', null, '', null, null, null, 'P1', null, 'BNSP-LSP-761-ID');
INSERT INTO `PARTNER_LSP` VALUES ('762', 'SMK MUHAMMADIYAH KAJEN', null, '', null, null, null, 'P1', null, 'BNSP-LSP-762-ID');
INSERT INTO `PARTNER_LSP` VALUES ('763', 'SMKN 1 JETIS', null, '', null, null, null, 'P1', null, 'BNSP-LSP-763-ID');
INSERT INTO `PARTNER_LSP` VALUES ('764', 'SMKN 1 KARANGANYAR', null, '', null, null, null, 'P1', null, 'BNSP-LSP-764-ID');
INSERT INTO `PARTNER_LSP` VALUES ('765', 'SMKN 1 PUNGGELAN', null, '', null, null, null, 'P1', null, 'BNSP-LSP-765-ID');
INSERT INTO `PARTNER_LSP` VALUES ('766', 'SMKN 1 BADEGAN', null, '', null, null, null, 'P1', null, 'BNSP-LSP-766-ID');
INSERT INTO `PARTNER_LSP` VALUES ('767', 'SMKN 1 SLAHUNG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-767-ID');
INSERT INTO `PARTNER_LSP` VALUES ('768', 'SMKN 1 BANGKALAN', null, '', null, null, null, 'P1', null, 'BNSP-LSP-768-ID');
INSERT INTO `PARTNER_LSP` VALUES ('769', 'SMK COKROAMINOTO 1 BANJARNEGARA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-769-ID');
INSERT INTO `PARTNER_LSP` VALUES ('770', 'SMKN 3 MAKASSAR', null, '', null, null, null, 'P1', null, 'BNSP-LSP-770-ID');
INSERT INTO `PARTNER_LSP` VALUES ('771', 'SMKN 1 WANAREJA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-771-ID');
INSERT INTO `PARTNER_LSP` VALUES ('772', 'SMKN NUSAWUNGU', null, '', null, null, null, 'P1', null, 'BNSP-LSP-772-ID');
INSERT INTO `PARTNER_LSP` VALUES ('773', 'SMKN 2 PEKALONGAN', null, '', null, null, null, 'P1', null, 'BNSP-LSP-773-ID');
INSERT INTO `PARTNER_LSP` VALUES ('774', 'SMKN 2 CILACAP', null, '', null, null, null, 'P1', null, 'BNSP-LSP-774-ID');
INSERT INTO `PARTNER_LSP` VALUES ('775', 'SMK YPWKS CILEGON', null, '', null, null, null, 'P1', null, 'BNSP-LSP-775-ID');
INSERT INTO `PARTNER_LSP` VALUES ('776', 'SMKN 1 SUBANG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-776-ID');
INSERT INTO `PARTNER_LSP` VALUES ('777', 'SMKN 1 BANDAR LAMPUNG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-777-ID');
INSERT INTO `PARTNER_LSP` VALUES ('778', 'SMK WIDYA PRAJA UNGARAN', null, '', null, null, null, 'P1', null, 'BNSP-LSP-778-ID');
INSERT INTO `PARTNER_LSP` VALUES ('779', 'SMKN 1 BUNGORO', null, '', null, null, null, 'P1', null, 'BNSP-LSP-779-ID');
INSERT INTO `PARTNER_LSP` VALUES ('780', 'SMKN 2 SOMBA OPU', null, '', null, null, null, 'P1', null, 'BNSP-LSP-780-ID');
INSERT INTO `PARTNER_LSP` VALUES ('781', 'SMKN 3 PAMEKASAN', null, '', null, null, null, 'P1', null, 'BNSP-LSP-781-ID');
INSERT INTO `PARTNER_LSP` VALUES ('782', 'SMKN 2 BANJARBARU', null, '', null, null, null, 'P1', null, 'BNSP-LSP-782-ID');
INSERT INTO `PARTNER_LSP` VALUES ('783', 'SMK SWASTA TELADAN MEDAN', null, '', null, null, null, 'P1', null, 'BNSP-LSP-783-ID');
INSERT INTO `PARTNER_LSP` VALUES ('784', 'SMKN 2 LUBUK BASUNG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-784-ID');
INSERT INTO `PARTNER_LSP` VALUES ('785', 'UNIVERSITAS PANCA SAKTI TEGAL', null, '', null, null, null, 'P1', null, 'BNSP-LSP-785-ID');
INSERT INTO `PARTNER_LSP` VALUES ('786', 'LINGKUNGAN HIDUP - INKALINDO', null, '', null, null, null, 'P3', null, 'BNSP-LSP-786-ID');
INSERT INTO `PARTNER_LSP` VALUES ('787', 'UNIVERSITAS INDONESIA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-787-ID');
INSERT INTO `PARTNER_LSP` VALUES ('788', 'SMKN 2 SEMARANG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-788-ID');
INSERT INTO `PARTNER_LSP` VALUES ('789', 'HOSPITALITY CAKRAWALA INDONESIA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-789-ID');
INSERT INTO `PARTNER_LSP` VALUES ('790', 'BALAI DIKLAT INDUSTRI MEDAN', null, '', null, null, null, 'P1', null, 'BNSP-LSP-790-ID');
INSERT INTO `PARTNER_LSP` VALUES ('791', 'POLITEKNIK TEKNOLOGI KIMIA INDUSTRI (PTKI) MEDAN', null, '', null, null, null, 'P1', null, 'BNSP-LSP-791-ID');
INSERT INTO `PARTNER_LSP` VALUES ('792', 'DOMPET DHUAFA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-792-ID');
INSERT INTO `PARTNER_LSP` VALUES ('793', 'SMKN 3 PALEMBANG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-793-ID');
INSERT INTO `PARTNER_LSP` VALUES ('794', 'SMKN 4 PALEMBANG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-794-ID');
INSERT INTO `PARTNER_LSP` VALUES ('795', 'SMKN 1 KOTA PROBOLINGGO', null, '', null, null, null, 'P1', null, 'BNSP-LSP-795-ID');
INSERT INTO `PARTNER_LSP` VALUES ('796', 'SMK MUHAMMADIYAH MUNGKID', null, '', null, null, null, 'P1', null, 'BNSP-LSP-796-ID');
INSERT INTO `PARTNER_LSP` VALUES ('797', 'SMKN 1 METRO', null, '', null, null, null, 'P1', null, 'BNSP-LSP-797-ID');
INSERT INTO `PARTNER_LSP` VALUES ('798', 'SMK MUHAMMADIYAH 1 NGANJUK', null, '', null, null, null, 'P1', null, 'BNSP-LSP-798-ID');
INSERT INTO `PARTNER_LSP` VALUES ('799', 'SMKN 2 PADANG', null, '', null, null, null, 'P1', null, 'BNSP-LSP-799-ID');
INSERT INTO `PARTNER_LSP` VALUES ('800', 'SMKN 7 YOGYAKARTA', null, '', null, null, null, 'P1', null, 'BNSP-LSP-800-ID');

-- ----------------------------
-- Table structure for PARTNER_SARKES
-- ----------------------------
DROP TABLE IF EXISTS `PARTNER_SARKES`;
CREATE TABLE `PARTNER_SARKES` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAMA` varchar(255) NOT NULL,
  `PROFILE` varchar(255) DEFAULT NULL,
  `AKREDITASI` varchar(255) DEFAULT NULL,
  `LAYANAN` varchar(255) DEFAULT NULL,
  `TELP` varchar(255) DEFAULT NULL,
  `ALAMAT` varchar(255) DEFAULT NULL,
  `WILAYAH_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of PARTNER_SARKES
-- ----------------------------
INSERT INTO `PARTNER_SARKES` VALUES ('1', 'PERMATA INDAH MEDICAL CENTRE', '', null, null, '021 6680843', 'Perumahan Taman Permata Indah II Blok E No. 8 Kel. Penjaringan Kec. Penjaringan', null);
INSERT INTO `PARTNER_SARKES` VALUES ('2', 'ROSELA INDAH MEDICAL CENTRE', '', null, null, '021 5643405', 'Jl. Rosela Raya No. 185 Kel. Wijaya Kusuma Kec. Grogol Petamburan', null);
INSERT INTO `PARTNER_SARKES` VALUES ('3', 'Klinik Spesialis Medan Medical Center', '', null, null, null, 'Sumatera Utara - Medan', null);
INSERT INTO `PARTNER_SARKES` VALUES ('4', 'Klinik Spesialis Anugerah Ibu', '', null, null, null, 'Sumatera Utara - Medan', null);
INSERT INTO `PARTNER_SARKES` VALUES ('5', 'RSUP Adam Malik', '', null, null, null, 'Sumatera Utara - Medan', null);
INSERT INTO `PARTNER_SARKES` VALUES ('6', 'RSU Imelda Pekerja Indonesia', '', null, null, null, 'Sumatera Utara - Medan', null);
INSERT INTO `PARTNER_SARKES` VALUES ('7', 'Klinik Global Health', '', null, null, null, 'Sumatera Utara - Medan', null);
INSERT INTO `PARTNER_SARKES` VALUES ('8', 'RSUD Pirngadi', '', null, null, null, 'Sumatera Utara - Medan', null);
INSERT INTO `PARTNER_SARKES` VALUES ('9', 'RSUP M. Djamil', '', null, null, null, 'Padang', null);
INSERT INTO `PARTNER_SARKES` VALUES ('10', 'BP dan Lab. Cendana Husada', '', null, null, null, 'Pekanbaru', null);
INSERT INTO `PARTNER_SARKES` VALUES ('11', 'Lab. Klinik Medilab', '', null, null, null, 'Kepulauan Riau', null);
INSERT INTO `PARTNER_SARKES` VALUES ('12', 'RSUD Dr H. Abdul Moeloek', '', null, null, null, 'Lampung - Bandar Lampung', null);
INSERT INTO `PARTNER_SARKES` VALUES ('13', 'RS Jiwa Daerah', '', null, null, null, 'Lampung - Bandar Lampung', null);
INSERT INTO `PARTNER_SARKES` VALUES ('14', 'Klinik Amanah Medika Pura, Jakarta', '', null, null, null, 'Jakarta', null);
INSERT INTO `PARTNER_SARKES` VALUES ('15', 'Insani Medical Centre, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('16', 'Nur Huda Medical Centre, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('17', 'Al Hikmah Medical Centre, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('18', 'Amalia Medical Centre, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('19', 'Salamat Medical Centre, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('20', 'Rayhan Medical Centre, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('21', 'Haninah Medical Centre, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('22', 'An Nur Medical Centre, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('23', 'Hidayah Medical Centre, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('24', 'Tihama Medical Centre, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('25', 'Assa’adah Medical Centre, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('26', 'Satria Medical Center, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('27', 'Bakhtir Medical Center, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('28', 'Puri Medika Medical Check Up Center, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('29', 'Rosela Indah medical Center, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('30', 'Setu Medical Center, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('31', 'Avida Medical Center, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('32', 'RSUP Persahabatan MC, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('33', 'Azzahra Medical Centre, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('34', 'Permata Indah Medical Centre, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('35', 'Medikal Haji Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('36', 'Ar Ridha Medical Centre, Jakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('37', 'Laboratorium Klinik Utama Medicore, Bandung, Jawa Barat', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('38', 'RSUD Waled, Cirebon, Jawa Barat', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('39', 'Klinik Prof. UFA, Bekasi, Jawa Barat', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('40', 'Sa’adah Bina Medika, Cirebon, Jawa Barat', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('41', 'Lab. Klinik An Nur Cilacap, Jawa Tengah', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('42', 'Lab. Klinik An Nur Purwokerto, Jawa Tengah', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('43', 'Lab. Klinik Imam Bonjol, Semarang, Jawa Tengah', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('44', 'RS Islam Surakarta, Jawa Tengah', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('45', 'Lab. Klinik Budi Sehat, Surakarta, Jawa Tengah', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('46', 'Keluarga Sehat Hospital, Pati, Jawa Tengah', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('47', 'Lab. Klinik Centrum, Semarang, Jawa Tengah', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('48', 'Lab. Klinik Ultra Medika, Semarang, Jawa Tengah', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('49', 'Lab. Klinik Permata, Semarang, Jawa Tengah', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('50', 'RS Mardi Rahayu, Kudus, Jawa Tengah', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('51', 'RSI Sunan Kudus, Kudus, Jawa Tengah', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('52', 'RSUD Prof. Dr. Margono Soekarjo, Purwokerto, Jawa Tengah', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('53', 'An Nur Medical Centre, Yogyakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('54', 'Lab. Klinik Ultra Mediak, Yogyakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('55', 'RSU PKU Muhammadiyah, DI Yogyakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('56', 'Klinik Spesialis Anugrerah Ibu, Yogyakarta', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('57', 'Higina Medical Centre, Malang, Jawa Timur', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('58', 'LKS Ultra Medica, Ponorogo, Jawa Timur', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('59', 'LKS Ultra Medica Kediri, Jawa Timur', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('60', 'Klinik Panglima Sudirman, Malang, Jawa Timur', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('61', 'Lab. Klinik As Shafa, Sidoarjo, Surabaya', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('62', 'Central Medical, Surabaya, Jawa Timur', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('63', 'Lab. Klinik Karya Nusantara Medica, Malang, Jawa Timur', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('64', 'Citra Medical Centre, Surabaya, Jawa Timur', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('65', 'Lab. Klinik Ultra Medika, Surabaya, Jawa Timur', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('66', 'Safira Medical Centre, Malang, Jawa Timur', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('67', 'Klinik Satria Medika Sakti MCU, Surabaya, Jawa Timur', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('68', 'Klinik Rahmat Sejahtera, Malang, Jawa Timur', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('69', 'Lab. Klinik Alumni Agung, Mataram, Nusa Tenggara Barat', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('70', 'Mataram Medical Centre, Mataram, Nusa Tenggara Barat', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('71', 'Citra Medical Centre, Mataram, Nusa Tenggara Barat', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('72', 'RSU Provinsi Nusa Tenggara Barat', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('73', 'Lab. Klinik Rayhana, Mataram, Nusa Tenggara Barat', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('74', 'Lab. Klinik Nugraha, Mataram, Nusa Tenggara Barat', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('75', 'Klinik Spesialis Anugerah Ibu, Mataram, Nusa Tenggara Barat', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('76', 'Klinik Global Medika, Mataram, Nusa Tenggara Barat', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('77', 'Lab. Klinik Citra, Kupang, Nusa pTenggara Timur', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('78', 'Lab. Klinik Cendana, Kupang, Nusa Tenggara Timur', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('79', 'Klinik Lacasino, Makassar', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('80', 'RSUP Sanglah, Denpasar', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('81', 'RSUD DR. Zainoel Abidin, Nangroe Aceh Darussalam', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('82', 'Balai Besar Labkes, Palembang', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('83', 'RSUD Kandaouw, Manado', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('84', 'RSUD Soedarso, Pontianak', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('85', 'RSU Antonius, Pontianak', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('86', 'RSUD Nunukan, Kalimantan Timur', '', null, null, null, null, null);
INSERT INTO `PARTNER_SARKES` VALUES ('87', 'RSUD Ulin Banjarmasin, Kalimantan Selatan', '', null, null, null, null, null);

-- ----------------------------
-- Table structure for PENGGUNA
-- ----------------------------
DROP TABLE IF EXISTS `PENGGUNA`;
CREATE TABLE `PENGGUNA` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAMA` varchar(255) NOT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `PHOTO` varchar(100) DEFAULT NULL,
  `COVER` varchar(255) DEFAULT NULL,
  `NO_KTP` varchar(50) NOT NULL,
  `NEGARA` varchar(100) DEFAULT NULL,
  `ALAMAT_TINGGAL` varchar(255) DEFAULT NULL,
  `WILAYAH_ID_TINGGAL` varchar(255) DEFAULT NULL,
  `ALAMAT_KTP` varchar(255) NOT NULL,
  `WILAYAH_ID_KTP` varchar(20) DEFAULT NULL,
  `TEMPAT_LAHIR` varchar(100) DEFAULT NULL,
  `TANGGAL_LAHIR` date DEFAULT NULL,
  `NO_TELP` varchar(20) DEFAULT NULL,
  `JENIS_KELAMIN` varchar(50) DEFAULT NULL,
  `USERGROUP_ID` int(2) DEFAULT NULL,
  `DESKRIPSI` varchar(255) DEFAULT NULL,
  `DATE_CREATED` datetime DEFAULT NULL,
  `DATE_KONFIRMED` datetime DEFAULT NULL,
  `LAST_UPDATED` datetime DEFAULT NULL,
  `PASSWORD` varchar(32) DEFAULT NULL,
  `UID` varchar(32) DEFAULT NULL,
  `ACTIVE` int(1) DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of PENGGUNA
-- ----------------------------
INSERT INTO `PENGGUNA` VALUES ('1', 'Admin Koyoku ', 'info@koyoku.com', null, null, '', null, null, null, '', null, null, null, null, null, '1', null, null, null, null, 'ae3300daf13ef25fa1787dbb1a01a126', null, '1');
INSERT INTO `PENGGUNA` VALUES ('9', 'tes', '', null, null, '', null, null, null, '', null, null, null, null, null, null, null, null, null, null, 'ae3300daf13ef25fa1787dbb1a01a126', null, '0');

-- ----------------------------
-- Table structure for PENGGUNA_AGENCY
-- ----------------------------
DROP TABLE IF EXISTS `PENGGUNA_AGENCY`;
CREATE TABLE `PENGGUNA_AGENCY` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PENGGUNA_ID` int(11) NOT NULL,
  `SATKER_ID` varchar(11) NOT NULL,
  `AGENCY_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `SATUAN_ID` (`SATKER_ID`),
  KEY `USER_ID` (`PENGGUNA_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of PENGGUNA_AGENCY
-- ----------------------------

-- ----------------------------
-- Table structure for PENGGUNA_BLKLN
-- ----------------------------
DROP TABLE IF EXISTS `PENGGUNA_BLKLN`;
CREATE TABLE `PENGGUNA_BLKLN` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PENGGUNA_ID` int(11) NOT NULL,
  `SATKER_ID` varchar(11) NOT NULL,
  `BLKLN_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `SATUAN_ID` (`SATKER_ID`),
  KEY `USER_ID` (`PENGGUNA_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of PENGGUNA_BLKLN
-- ----------------------------

-- ----------------------------
-- Table structure for PENGGUNA_DOKUMEN
-- ----------------------------
DROP TABLE IF EXISTS `PENGGUNA_DOKUMEN`;
CREATE TABLE `PENGGUNA_DOKUMEN` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PEKERJA_ID` int(11) NOT NULL,
  `DOKUMEN_NAMA` varchar(255) NOT NULL,
  `DOKUMEN_DESKRIPSI` varchar(255) DEFAULT NULL,
  `DOKUMEN_ID` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of PENGGUNA_DOKUMEN
-- ----------------------------

-- ----------------------------
-- Table structure for PENGGUNA_JOB_OWNER
-- ----------------------------
DROP TABLE IF EXISTS `PENGGUNA_JOB_OWNER`;
CREATE TABLE `PENGGUNA_JOB_OWNER` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PENGGUNA_ID` int(11) NOT NULL,
  `SATKER_ID` varchar(11) NOT NULL,
  `JOB_OWNER_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `SATUAN_ID` (`SATKER_ID`),
  KEY `USER_ID` (`PENGGUNA_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of PENGGUNA_JOB_OWNER
-- ----------------------------

-- ----------------------------
-- Table structure for PENGGUNA_PPTKIS
-- ----------------------------
DROP TABLE IF EXISTS `PENGGUNA_PPTKIS`;
CREATE TABLE `PENGGUNA_PPTKIS` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PENGGUNA_ID` int(11) NOT NULL,
  `SATKER_ID` varchar(11) NOT NULL,
  `PPTKIS_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `SATUAN_ID` (`SATKER_ID`),
  KEY `USER_ID` (`PENGGUNA_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of PENGGUNA_PPTKIS
-- ----------------------------

-- ----------------------------
-- Table structure for PPTKIS_FASILITAS
-- ----------------------------
DROP TABLE IF EXISTS `PPTKIS_FASILITAS`;
CREATE TABLE `PPTKIS_FASILITAS` (
  `FASILITAS_ID` int(11) NOT NULL AUTO_INCREMENT,
  `PPTKIS_ID` int(11) NOT NULL,
  `FASILITAS_NAMA` varchar(255) NOT NULL,
  `FASILITAS_DESKRIPSI` text,
  `DOKUMEN_ID` int(11) DEFAULT '0',
  PRIMARY KEY (`FASILITAS_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of PPTKIS_FASILITAS
-- ----------------------------

-- ----------------------------
-- Table structure for PPTKIS_PARTNER
-- ----------------------------
DROP TABLE IF EXISTS `PPTKIS_PARTNER`;
CREATE TABLE `PPTKIS_PARTNER` (
  `PPTKIS_PARTNER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `PPTKIS_ID` int(11) NOT NULL,
  `PARTNER_ID` int(11) NOT NULL,
  `TIPE` int(11) NOT NULL,
  PRIMARY KEY (`PPTKIS_PARTNER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of PPTKIS_PARTNER
-- ----------------------------

-- ----------------------------
-- Table structure for RIW_DIKLAT
-- ----------------------------
DROP TABLE IF EXISTS `RIW_DIKLAT`;
CREATE TABLE `RIW_DIKLAT` (
  `NONFORMAL_ID` int(11) NOT NULL AUTO_INCREMENT,
  `NONFORMAL_PENDIDIKAN` varchar(45) NOT NULL,
  `NONFORMAL_LEMBAGA` varchar(45) NOT NULL,
  `NONFORMAL_SERT` varchar(45) NOT NULL,
  `NONFORMAL_SERT_NO` int(11) NOT NULL,
  `NONFORMAL_SERT_TIMETYPE` date NOT NULL,
  `START` date NOT NULL,
  `END` date NOT NULL,
  `PEKERJA_ID` int(11) NOT NULL,
  PRIMARY KEY (`NONFORMAL_ID`),
  KEY `PEKERJA_ID` (`PEKERJA_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of RIW_DIKLAT
-- ----------------------------

-- ----------------------------
-- Table structure for RIW_KELUARGA
-- ----------------------------
DROP TABLE IF EXISTS `RIW_KELUARGA`;
CREATE TABLE `RIW_KELUARGA` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `HUBUNGAN` varchar(50) DEFAULT NULL,
  `NAMA` varchar(100) DEFAULT NULL,
  `NO_TELEPHON` varchar(20) DEFAULT NULL,
  `ALAMAT` varchar(100) DEFAULT NULL,
  `TEMPAT_LAHIR` varchar(100) DEFAULT NULL,
  `TANGGAL_LAHIR` date DEFAULT NULL,
  `PENGGUNA_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of RIW_KELUARGA
-- ----------------------------

-- ----------------------------
-- Table structure for RIW_KERJA
-- ----------------------------
DROP TABLE IF EXISTS `RIW_KERJA`;
CREATE TABLE `RIW_KERJA` (
  `PENGALAMAN_ID` int(11) NOT NULL AUTO_INCREMENT,
  `POSISI` varchar(45) NOT NULL,
  `PERUSAHAAN` varchar(45) NOT NULL,
  `START_DATE` date NOT NULL,
  `END_DATE` date NOT NULL,
  `FUNGSI_PEKERJAAN` varchar(45) NOT NULL,
  `TUGAS` varchar(255) NOT NULL,
  `PEKERJA_ID` int(11) NOT NULL,
  `INDUSTRI_PEKERJAAN` int(11) NOT NULL,
  `LAMARAN_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`PENGALAMAN_ID`),
  KEY `PEKERJA_ID` (`PEKERJA_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of RIW_KERJA
-- ----------------------------

-- ----------------------------
-- Table structure for RIW_PENDIDIKAN
-- ----------------------------
DROP TABLE IF EXISTS `RIW_PENDIDIKAN`;
CREATE TABLE `RIW_PENDIDIKAN` (
  `FORMAL_ID` int(11) NOT NULL AUTO_INCREMENT,
  `ID_PEKERJA` int(11) NOT NULL,
  `TPENDIDIKAN_ID` int(11) NOT NULL,
  `FORMAL_JURUSAN` varchar(45) NOT NULL,
  `FORMAL_START` date NOT NULL,
  `FORMAL_END` date NOT NULL,
  `NAMA_INSTANSI` varchar(100) DEFAULT NULL,
  `NILAI` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`FORMAL_ID`),
  KEY `ID_PEKERJA` (`ID_PEKERJA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of RIW_PENDIDIKAN
-- ----------------------------

-- ----------------------------
-- Table structure for RIW_PENDIDIKAN_INFORMAL
-- ----------------------------
DROP TABLE IF EXISTS `RIW_PENDIDIKAN_INFORMAL`;
CREATE TABLE `RIW_PENDIDIKAN_INFORMAL` (
  `INFORMAL_ID` int(100) NOT NULL AUTO_INCREMENT,
  `PENGGUNA_ID` varchar(100) DEFAULT NULL,
  `BLKLN_ID` varchar(100) DEFAULT NULL,
  `INSTANSI_NAMA` varchar(100) DEFAULT NULL,
  `PELATIHAN_NAMA` varchar(100) DEFAULT NULL,
  `INFORMAL_START` date DEFAULT NULL,
  `INFORMAL_END` date DEFAULT NULL,
  `INFORMAL_NILAI` varchar(100) DEFAULT NULL,
  `INFORMAL_URAIAN` varchar(100) DEFAULT NULL,
  `LAMARAN_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`INFORMAL_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of RIW_PENDIDIKAN_INFORMAL
-- ----------------------------

-- ----------------------------
-- Table structure for SATUAN_KERJA
-- ----------------------------
DROP TABLE IF EXISTS `SATUAN_KERJA`;
CREATE TABLE `SATUAN_KERJA` (
  `SATKER_ID` varchar(255) NOT NULL,
  `PPTKIS_ID` int(11) NOT NULL,
  `SATKER_TIPE` int(11) NOT NULL,
  `SATKER_NAMA` varchar(255) NOT NULL,
  `SATKER_TELP` varchar(25) DEFAULT NULL,
  `SATKER_ALAMAT` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`SATKER_ID`),
  KEY `AGEN_ID` (`PPTKIS_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of SATUAN_KERJA
-- ----------------------------

-- ----------------------------
-- Table structure for SUB_BIDANG
-- ----------------------------
DROP TABLE IF EXISTS `SUB_BIDANG`;
CREATE TABLE `SUB_BIDANG` (
  `SUB_ID` int(11) NOT NULL,
  `SUB_NAMA` int(11) NOT NULL,
  `BIDANG_ID` int(11) NOT NULL,
  PRIMARY KEY (`SUB_ID`),
  KEY `BIDANG_ID` (`BIDANG_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of SUB_BIDANG
-- ----------------------------

-- ----------------------------
-- Table structure for USERGROUP
-- ----------------------------
DROP TABLE IF EXISTS `USERGROUP`;
CREATE TABLE `USERGROUP` (
  `ID` int(3) NOT NULL AUTO_INCREMENT,
  `USERGROUP` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of USERGROUP
-- ----------------------------
INSERT INTO `USERGROUP` VALUES ('1', 'Superadmin');
INSERT INTO `USERGROUP` VALUES ('2', 'PPTKIS');
INSERT INTO `USERGROUP` VALUES ('3', 'Rekruiter');
INSERT INTO `USERGROUP` VALUES ('4', 'Pekerja');
INSERT INTO `USERGROUP` VALUES ('5', 'Agency');
INSERT INTO `USERGROUP` VALUES ('6', 'Job Owner');
INSERT INTO `USERGROUP` VALUES ('7', 'BLKLN');
INSERT INTO `USERGROUP` VALUES ('8', 'Sarana Kesehatan');
INSERT INTO `USERGROUP` VALUES ('9', 'Asuransi');
INSERT INTO `USERGROUP` VALUES ('10', 'Lembaga Keuganan');
INSERT INTO `USERGROUP` VALUES ('11', 'Lembaga Sertifikasi Kompetensi');
