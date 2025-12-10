<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Dinamik Tablo</title>
    <style>
        table, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 8px;
            text-align: center;
        }
    </style>
</head>
<body>

<h2>Tablo Oluştur</h2>

<form method="post">
    Satır Sayısı: <input type="number" name="satir" required><br><br>
    Sütun Sayısı: <input type="number" name="sutun" required><br><br>
    <input type="submit" value="Oluştur">
</form>

<br>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $satir = $_POST["satir"];
    $sutun = $_POST["sutun"];

    echo "<table>";

    for ($i = 0; $i < $satir; $i++) {
        echo "<tr>";
        for ($j = 0; $j < $sutun; $j++) {
            $rastgele = rand(1, 100);
            echo "<td>$rastgele</td>";
        }
        echo "</tr>";
    }

    echo "</table>";
}
?>

</body>
</html>
