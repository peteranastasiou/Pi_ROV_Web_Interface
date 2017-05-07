<?php
$dat = $_POST['name'];
echo "$dat";
echo shell_exec("echo $dat > /dev/shm/mjpeg/user_annotate.txt");
