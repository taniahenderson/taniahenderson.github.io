<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $fname = $_POST["fname"];
	$lname = $_POST["lname"];
    $email = $_POST["email"];
    $username = $_POST["username"];
	$reasons = $_POST["reasons"];
	$message = $_POST["message"];

    // Display the submitted data
    echo "First name: " . $fname . "<br>";
	echo "Last name: " . $lname . "<br>";
    echo "Email address: " . $email . "<br>";
    echo "Username: " . $username . "<br>";
	echo "Reason for contact: " . $reasons . "<br>";
	echo "Message: " . $message . "<br>";
	
	
	$target_dir = "uploads/";
	$target_file = $target_dir . basename($_FILES["uploadfile"]["name"]);
	$uploadOk = 1;
	$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

	if (isset($_POST["submit"])) {
		$check = getimagesize($_FILES["uploadfile"]["tmp_name"]);
		if ($check !== false) {
			$uploadOk = 1;
		}
		else {
			echo "File not an image.";
			$uploadOk = 0;
		}
	}

	if ($_FILES["uploadfile"]["size"] > 8000000) {
		echo "Sorry, your file is too large. Maximum file size: 8MB";
		$uploadOk - 0;
	}

	if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg") {
		echo "Sorry, only JPG, JPEG & PNG files are allowed.";
		$uploadOk = 0;
	}

	if (move_uploaded_file($_FILES["uploadfile"]["tmp_name"], "uploads/" . $fileName)) {
		echo "Your file was uploaded successfully.";
	} 
	else {
		echo "Error: There was an issue uploading your file.";
	} 
	else {
		echo "Error: " . $_FILES["uploadfile"]["error"];
	}


}
?>