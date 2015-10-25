<?php

include '../assets/php/connect.php';

// echo "Search \n";

$query = $_POST['search_querry'];
$query = new MongoRegex("/^".$_POST['search_querry']."/i");

// $x =  $_POST['search_x'];

$collection = $db->art_user;
$collection2 = $db->art_troupe;

$test_querry = array( 
      "name" => $query
   );

$test_querry2 = array( 
      "troupe_name" => $query
   );
   
$cursor = $collection->find($test_querry);
$cursor2 = $collection2->find($test_querry2);
 
 foreach ($cursor as $document) {
      echo "<h3><a href='artist.php/&artist=" . $document["username"] . "'>" . $document["name"] . "</a><small> ".$document["username"]."</small></h3><br>";
   }

   foreach ($cursor2 as $document2) {      
      echo "<h3><a href='troupe.php/&troupe=" . $document2["troupe_name"] . "'>" . $document2["troupe_name"] . "</a><small> ".$document2["troupe_admin"]."</small></h3><br>";
   }
   
?>