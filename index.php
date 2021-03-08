<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lazy Loading Intersection Observer</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
    <style>
        .itemElement {
            height:200px;
            background-color: green; 
            margin-bottom: 15px;            
        }

        .element{
            transform: translateX(0);
            opacity: 1;
            transition: transform 0.4s, opacity 0.4s;
        }

        .element.not-visible {
            transform: translateX(50px);
            opacity:0;
        }
    </style>

</head>
<body>
    <div class="container">
        <h1 class="text-center">Intersection Observer</h1>
        <div class="elements"></div>   
    </div>
    <script src="./observer.js"></script>
</body>
</html>