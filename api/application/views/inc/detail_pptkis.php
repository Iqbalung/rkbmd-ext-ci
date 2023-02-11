<script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
<script src="https://www.amcharts.com/lib/3/serial.js"></script>
<script src="https://www.amcharts.com/lib/3/pie.js"></script>
<script src="https://www.amcharts.com/lib/3/plugins/export/export.min.js"></script>
<link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all" />
<script src="https://www.amcharts.com/lib/3/themes/light.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.debug.js"></script>
<style>
#chartdiv {
  width: 100%;
  height: 500px;
}

#piediv {
  width: 100%;
  height: 400px;
  padding: none;

}

.amcharts-pie-tick {
  display: none;
}

.amcharts-pie-label {
  display: none;
}



materialize.min.css:6


</style>
 <script type="text/javascript" src="<?php echo base_url() ?>api/loader.js"></script>
<script type="text/javascript">
       

      google.charts.load('visualization', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(drawChart);
     

      function drawChart() {
        $.ajax({
                type: "POST",
                url: "http://localhost/koyoku/api/index.php/pptkis/get_orgsatker",
                success: function(result){
                    var result = JSON.parse(result);
                        result = result.items;
                    if ((emp_count = result.length) > 0) {

                     
                      var data = new google.visualization.DataTable();
                      console.log(result[1].res_pegawai[0].ID);
                      data.addColumn('string', 'Name');
                      data.addColumn('string', 'Manager');
                      data.addColumn('string', 'Project');
                      data.addColumn('string', 'Director');

                      for (i = 0; i < emp_count; i++) {
                          data.setCell(i, 0, result[i].SATKER_ID);
                          data.setCell(i, 1, result[i].PPTKIS_ID);
                
                      }
                      
                      var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
                      chart.draw(data, { allowHtml: true });

                    }
                },
                error: function(error){
                    alert(error);
                }
            });
      }
     
   </script>
<script>

var chart = AmCharts.makeChart("chartdiv", {
  "type": "serial",
  "theme": "light",
  "marginRight": 70,
  "dataProvider": [{
    "country": "2013",
    "visits": 3025,
    "color": "#FF0F00"
  }, {
    "country": "2014",
    "visits": 1882,
    "color": "#FF6600"
  }, {
    "country": "2015",
    "visits": 1809,
    "color": "#FF9E01"
  }, {
    "country": "2016",
    "visits": 1322,
    "color": "#FCD202"
  }, {
    "country": "2017",
    "visits": 1122,
    "color": "#F8FF01"
  }],
  "valueAxes": [{
    "axisAlpha": 0,
    "position": "left",
    "title": "Visitors from country"
  }],
  "startDuration": 1,
  "graphs": [{
    "balloonText": "<b>[[category]]: [[value]]</b>",
    "fillColorsField": "color",
    "fillAlphas": 0.9,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "visits"
  }],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "country",
  "categoryAxis": {
    "gridPosition": "start",
    "labelRotation": 45
  },
  "export": {
    "enabled": true
  }

});


amtest = function (data){
  var chart2 = AmCharts.makeChart( "piediv", {
  "type": "pie",
  "theme": "none",
  "valueField": "data",
  "titleField": "name",
  "addClassNames": true,
  "dataProvider" : data,
  "legend":{
    "position":"bottom",
    "marginRight":100,
    "autoMargins":false
  },
   "balloon":{
   "fixedPosition":true
  },
  "export": {
    "enabled": true
  }
} );


}


$.ajax({
    type: 'POST',
    url: "http://localhost/koyoku/api/index.php/publik_pptkis/get_jk",
    data: {
       PPTKIS_ID : '<?php echo $this->uri->segment(2) ?>'
    },
    dataType: 'json',
    context: document.body,
    global: false,
    async: true,
    success: function(data) {
        amtest(data.data);
    }
});




</script>


<main class="grey lighten-4">
  <?php 
      foreach ($detailpptkis as $key) {
  ?>
  <div class="row">
    <div class="container white">
      <div class="row ">
        <div class="col s12">
        <?php if($key->PPTKIS_COVER==""){
        
        ?>
        <div style="margin:0;padding:20px 0;width:100%;height:200px;background-image:url('http://www.shankerdevcampus.edu.np/media_uploads/image/png/1485233888-No-Images.png');background-size: cover; background-attachment: fixed;
        background-position: center; ">

        <?php
        }else{
          ?>
        <div style="margin:0;padding:20px 0;width:100%;height:200px;background-image:url(<?php echo base_url() ?>api/uploads/pptkis/<?php echo $key->PPTKIS_COVER; ?>);background-size: cover; background-attachment: fixed;
        background-position: center; ">

          <?php
        }
        ?>
          
          <center>
            <div style="margin:10px 0;width:100px;height:100px;border-radius:100px;background-image:url(<?php echo base_url() ?>api/uploads/pptkis/<?php echo $key->PPTKIS_LOGO; ?>);background-size: cover;">
            </div>
          <span style="margin:5px 0;font-size:20px;font-weight:bold;color:#fff;"><?php echo $key->PPTKIS_NAMA; ?></span><br></center>
          </div>
        </div>
    <div class="col s8">
      <ul class="tabs">
        <li class="tab col m2"><a class=" red-text" href="#test1">Profil</a></li>
        <li class="tab col m4 "><a class=" red-text" class="active" href="#test2">Struktur Organisasi</a></li>
        <li class="tab col m3 "><a class=" red-text" href="#test3">Anggota</a></li>
        <li class="tab col m3 "><a class=" red-text" href="#test4">Fasilitas</a></li>
      </ul>
    <div id="test1" class="col s12"> 
      <br><br>
        <strong>Deskripsi Singkat</strong>  <hr><br>
          <?php echo $key->PPTKIS_DES_PENDEK; ?>
          <?php echo $key->PPTKIS_DES_PANJANG; ?>
        <br>
    </div>
    
    <div id="test2" onload="json()" class="col s12"><div id="chart_div"></div></div>
    <div id="test3" class="col s12">
    <div class="row">
    <div class="col s4">
      <ul class="collection">
        <li class="collection-item">Jabatan Terpopuler</li> 
          <?php 
            foreach ($jabatanpopuler as $key) {
          ?>
          <li style="font-size: 10px" class="collection-item"><?php echo $key->JABATAN_NAMA ?>  (<?php echo $key->JML ?>)</li>
          <?php  } ?>         
      </ul>  
    </div>
    <?php
    foreach ($totaltki as $key) { 
    ?>
    <div class="col s2">
      <div class="card"> 
        <div class="card-content red">
          <span style="font-size: 20px" class="tiny white-text"><?php echo $key['JML']?></span>
        </div>
        <div class="card-action red darken-4">
          <span style="font-size: 10px" class="tiny white-text"><?php echo $key['STATUS']?></span>
        </div>
      </div>
    </div> 
    <?php  } ?>
    <?php
    foreach ($total as $key) { 
      if($key['ID']=="1."){
        $color = "yellow";
      }else if($key['ID']=="2."){
        $color = "yellow";
      }else if($key['ID']=="3."){
        $color = "blue";
      }else if($key['ID']=="4."){
        $color = "teal";
      }
      ?>
      <div class="col s2">
        <div class="card ">  
          <div class="card-content <?php echo $color ?>">
            <span style="font-size: 20px" class="tiny white-text"><?php echo $key['JML']?></span>
          </div>
          <div class="card-action <?php echo $color ?> darken-4">
            <span style="font-size: 10px" class="tiny white-text"><?php echo $key['STATUS']?></span>
          </div>
        </div>
      </div>
    <?php  } ?>
   
    </div>
    
    <div class="row">
      <div class="col s12">
        <div id="piediv"></div>
      </div>
    </div>
  </div>
  <div id="test4" class="col s12">
  <?php foreach ($detailfasilitas as $key2) { 
      if($key2->FASILITAS_NAMA==""){
                echo "Belum Tersedia Informasi";
              }else{

      ?>
    <div id="test4" class="col s6">
     <?php echo $key2->FASILITAS_NAMA ?>
      <img style="width:100%;height:200px" src="<?php echo base_url() ?>api/uploads/pptkis/fasilitas/<?php echo $key2->DOKUMEN_NAMA_GENERATE; ?>" />
       <br><br><br>
    </div>
  <?php  }

  } ?>
  </ol>
  </div>
  </div>
    <div class="col s4">
      <ul class="collection with-header">
        <li class="collection-header"><b>Alamat</b></li>
          <?php foreach ($satuan as $key3) { 
            if($key3->SATKER_NAMA==""){
              echo "Belum Tersedia Informasi";
            }else{

          ?>

            <li style="font-size: 10px" class="collection-item ">
            <div>
              <span class="title"><b><?php echo $key3->SATKER_NAMA ?></b></span>
              <div>
             <i style="font-size: 16px" class="tiny material-icons circle first-content">location_on</i> <?php echo $key3->SATKER_ALAMAT ?>            
             </div>
             
            </div>
            <p style="font-size: 16px"><i style="font-size: 16px" class="tiny material-icons circle first-content">call</i> <?php echo $key3->SATKER_TELP ?>
            </p>
        </li>
        <?php
            }
        } ?>
        </li>
      </ul>
    </ul>
  </div>
  </div>
  <?php  } ?>   
</main>