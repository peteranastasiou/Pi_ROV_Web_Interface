<?php
$dat = $_POST['name'];
echo "$dat";
echo "->";
echo shell_exec("echo $dat > output");
echo shell_exec("echo $dat > /dev/shm/mjpeg/user_annotate.txt");
