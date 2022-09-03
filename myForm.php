<?php 

date_default_timezone_set("Asia/Kolkata");
$time=date("h:i a");
$date= date("Y/m/d") ;
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
$ipAddress = getenv("REMOTE_ADDR");
// echo $phone;
// echo $email;
$email_subject = "New Form submission";
$email_body = "<b>You have received a new message from Gurukul PG</b><br> from the user $name.\n <br> phone: $phone \n ip:\n <br>$ipAddress \n time: $time \n <br> mail: $email \n   
<section style='width: 100%; height:400px;background-color: rgb(255, 255, 255); padding: 20px;margin:0; box-sizing: border-box;'>
<article style='margin: auto;'>
   <div style='width: 100%; background-color: rgb(246, 240, 240);text-align: center; padding: 15px 0;border-bottom: 2px solid rgb(211, 211, 211);'>
   <h1 style='color: teal; font-size:35px;text-align: center;padding: 10px;'>Gurukul PG</h1>
   </div>
   <br>
   <div style='display:flex;flex-direction:column;justify-content: center;align-items: center; '>
   <div style='width: 100%;'>
     <h1 style='color: teal; font-size:27px;text-align: center;padding: 10px;'>You Have Got A Lead From Your Website</h1>
   <div/>  
     <div style=' padding: 16px;border-radius: 10px;border: 2px dashed gainsboro;'>
         <p style='margin:  10px; color: rgb(163, 162, 162);font-size: 18px; '><span style='color: teal;'>Name:</span> $name</p>
       
         <p style='margin:  10px; color: rgb(163, 162, 162);font-size: 18px;'><span style='color: teal;'>Email:</span> $email</p>
       
         <p style='margin:  10px; color: rgb(163, 162, 162);font-size: 18px;'><span style='color: teal;'>Phone Number:</span> $phone</p>
       
         <p style='margin:  10px; color: rgb(163, 162, 162);font-size: 18px;'><span style='color: teal;'>IP Address:</span> $ipAddress</p>
       
         <p style='margin:  10px; color: rgb(163, 162, 162);font-size: 18px;'><span style='color: teal;'>Date:</span> $date</p>
       
         <p style='margin:  10px; color: rgb(163, 162, 162);font-size: 18px;'><span style='color: teal;'>Time:</span> $time</p>
       
         <p style='margin:  10px; color: rgb(163, 162, 162);font-size: 18px;'><span style='color: teal;'>Message:</span><br> $message</p>
       
     </div>
   </div>
   
</article>
</section> ";
// echo $email_from.$email_subject.$email_body;

// $to = "invoice@gurukulpg.in";
$to = "japneet8208@gmail.com";

$headers = 'Content-type: text/html; charset=UTF-8' . "\r\n";
$headers .= "From: invoice@gurukulpg.in" . "\r\n";
mail($to,$email_subject,$email_body,$headers);

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
  integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
  crossorigin="anonymous" referrerpolicy="no-referrer" />

  <title>Thankyou For Contacting Gurukul PG</title>
  <style>
    #actionContainer {
      width: 100vw;
      height: 100vh;
      background: url(./img/pexels-steve-johnson-1781710-2.jpg) center center/cover no-repeat;
      display: grid;
      place-items: center;
    }

    .FormResult {
      max-width: 800px;
      background-color: white;
      padding: 20px;
      box-shadow: var(--dark-shadow);
      border-top: 14px solid teal;
      margin: 10px;
    }
    .FormResult img{
      margin-bottom: 15px;
    }
    p{
      color: #333;
    }
    .detailsForm{
      margin: 20px;
      display: flex;
    }
    .detailsForm>div{
      margin: 4px;
      background-color: rgb(241, 241, 241);
      padding: 20px;
      border-radius: 10px;

    }
    .detailsForm h4{
      font-size: 18px;
      color: teal;
      margin-bottom: 4px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .detailsForm p{
      color: rgb(116, 115, 115);
      margin-bottom: 2px;
    }
    .detail-category{
      color: teal;
    }
    .detailsMessage{
      width: 60%;
    }
    .detailsinfo{
      width: 40%;
      height: fit-content;
    }
    .actionContacts{
      padding: 10px;
    }
    .actionContacts p{
      display: flex;
      align-items: center;
      color: teal;
      margin-bottom: 10px;
    }
    .actionContacts i{
      font-size: 20px;
      margin-right: 10px;
    }
    .actionFooter{
      display: flex;
      justify-content: space-between;
      position: relative;
    }    
    .actionFooter a{
     transition: 0.3s all linear;
     border: 2px solid teal;
     background-color: teal;
     padding:8px 20px;
     font-size:14px;
     color:white;
     position: absolute;
     bottom: 0;
     right: 0;
     height: 35px;

    }
    .actionFooter a:hover{
      background-color: transparent;
      color: teal;
    }
    @media screen and (max-width:800px) {
      .detailsForm{
        flex-direction: column;
      }
      .detailsMessage{
      width: 100%;
    }
    .detailsinfo{
      width: 100%;
      height: fit-content;
    }
    .actionFooter{
      flex-direction: column;
    }
    .actionFooter a{
      position: relative;
      text-align: center;
    }
    }
  </style>
</head>
<body>
  <section id="actionContainer">
    <article class="FormResult">

      <div style="display:flex; flex-direction:column;justify-content: center; align-items: center;text-align: center;">
        <img width="100px" src="./img/logo.png" alt="">
        <h2 style="margin:5px; font-size:27px;color:teal">Message Sent <i class="fa-sharp fa-solid fa-circle-check" style="font-size:20px ;"></i></h2>
        <p>Your message has been sent successfully, We hope to respond you within 24 Hours. You can aslo chat with us on
          <a style="color: rgb(6, 164, 6);" href="">Whatsapp</a> or directly call us on the contact numbers given below</p>
        <p style="color:teal;margin:2px; margin-top:5px;"> <?php echo $date ?></p>
        <p style="color:teal;margin:2px;text-transform:uppercase;"> <?php echo $time ?></p>

      </div>
     <div class="detailsForm">
      <div class="detailsinfo">
        <h4>Your Details</h4>
        <p><span class="detail-category">Name :</span> <?php echo $name ?></p>
        <p><span class="detail-category">Email:</span> <?php echo $email ?></p>
        <p><span class="detail-category">Phone Number:</span> <?php echo $phone ?></p>
      </div>
      <div class="detailsMessage">
        <h4>Your Message</h4>
        <p><?php echo $message ?></p>
      </div>
     </div>

     <div class="actionFooter">
      <div class="actionContacts">
        <p><i class="fa-solid fa-phone"></i> 9313565406, 9212002599</p>
        <p><i class="fa-solid fa-envelope"></i> info@gurukulpg.in</p>
        <p style="max-width: 300px; font-size: 14px;"><i class="fa-solid fa-location-dot"></i>A-38,39,40, Old Pankha Road, Opp Metro Pillar No.641, Uttam Nagar East, New Delhi, Delhi 110059</p>
       </div>
       <a href="" ><i class="fa-brands fa-whatsapp"></i> &nbsp; Click To Chat</a>
     </div>
    
    </article>
  </section>

</body>

</html>

