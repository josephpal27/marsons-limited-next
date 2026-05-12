<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$symbol = isset($_GET['symbol']) ? preg_replace('/[^A-Z.]/', '', strtoupper($_GET['symbol'])) : 'MARSONS.BO';

$url = "https://query1.finance.yahoo.com/v8/finance/chart/" . $symbol;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($response === false || $httpCode !== 200) {
    http_response_code(500);
    echo json_encode(["error" => "Failed to fetch", "code" => $httpCode]);
    exit;
}

echo $response;
?>