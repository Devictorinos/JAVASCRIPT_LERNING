<?php

$a = new stdClass();
$a->amounts = 150;

header("Content-Type: application/json");
echo json_encode($a);
