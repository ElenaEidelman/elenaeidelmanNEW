<?php 
    header('Access-Control-Allow-Origin: *'); 
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
    
    // Get the posted data.

    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata))
        {
        // Extract the data.
        $request = json_decode($postdata);
        $to = 'marlen8088@gmail.com';
        $subject = "elenaeidelman web sait: ".$request->subject;
        $name = $request->name;
        $text = $request->text;
        $email = $request->email;
        $message = "name: ".$name."\n"."email: ".$email."\n"."message: ".$text;
        $headers = "From: developermail.net@gmail.com\r\n";
        if (mail($to, $subject, $message, $headers)) {
            echo "SUCCESS";
        } else {
            echo "ERROR";
        }
        
        }
    else{
        echo '!isset';
    }
?>