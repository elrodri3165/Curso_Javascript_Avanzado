<?php

$id = $_GET['id'];
$action = $_GET['action'];

if($action == 'revisar'){
    sleep(5);
    echo 'Este producto se encuentra en stock, puede finalizar la compra con el botón';
    die;
}


if($action == 'finalizar'){
    sleep(1);
    echo 'Usted compró el producto '.$id;
    echo '<a class="btn btn-primary" href="checkout.html">Ir al checkout</a>';
    die;
}
    
