<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Caselogger</title>


    <link rel="stylesheet" href="styles.css"> <!-- Custom Styles -->
    <link rel="icon" type="image/x-icon" href="img/favicon.ico">

    <!-- bootstrap icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="css/bootstrap.css">
</head>
<body class="bg-body">
    <nav class="navbar navbar-expand-lg bg-body-secondary">
    <?php include('navbar.php');?>
    </nav>

    <div class="container-md mt-4 p-3 border bg-body-tertiary rounded">
    <?php include('page-switch.php');?>
    </div>

    
    <script src="script.js"></script>
    <!-- bootstrap + popper -->
    <script src="js/bootstrap.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
