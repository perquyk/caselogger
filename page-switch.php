<?php
if (isset($_GET['page'])) {
        switch ($_GET['page']){
           case 'install':
                include('form_install.php');
                break;
            case 'repair':
                include('form_repair.php');
                break;
            case 'RFoG_Install':
                include('form_RFoG_Install.php');
                break;
            case 'repair_dynq':
                include('form_repair_dynq.php');
                break;
            case 'unhappydrop':
                include('form_proj_unhappy.php');
                break;
            case 'gsx':
                include('form_gsx.php');
                break;
            case 'extra':
                include('extra.php');
                break;
            case 'test':
                include('login.php');
                break;
            case 'psvka':
                include('form_psvKA.php');
                break;
            case 'cfn':
                include('form_cfn.php');
                break;
            case 'ipcalc':
                include('ipcalc.php');
                break;
        }
} else {
include('changelog.php');
}