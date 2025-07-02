<?php
// Allow requests from any origin (for testing or if frontend is on a different domain)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize form inputs
    $name    = filter_var(trim($_POST["name"] ?? ""), FILTER_SANITIZE_STRING);
    $phone   = filter_var(trim($_POST["phone"] ?? ""), FILTER_SANITIZE_STRING);
    $email   = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $message = filter_var(trim($_POST["message"] ?? ""), FILTER_SANITIZE_STRING);

    // Basic validation
    if (empty($name) || empty($phone) || empty($email) || empty($message)) {
        echo json_encode(["success" => false, "message" => "Please fill in all required fields."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Invalid email address."]);
        exit;
    }

    // Email details
    $to      = "support@dadson.us"; // ✅ Replace with your own email
    $subject = "Dadson Transport Enquiry";
    $body    = "You have received a new message:\n\n"
             . "Name: $name\n"
             . "Phone: $phone\n"
             . "Email: $email\n"
             . "Message:\n$message\n";

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "From: Dadson Transport <no-replyar@dadson.us>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}
?>
