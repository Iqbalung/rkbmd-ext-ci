<?php
class GetLanguage {

    function initialize() {
        $this->CI =& get_instance();
        $this->CI->load->helper('language');
        $this->CI->load->library('Session');
        $lang =  $this->CI->session->userdata('language');
        if($lang==""){
            $lang = "id";
        }
        $this->CI->lang->load($lang);
    }
}

?>