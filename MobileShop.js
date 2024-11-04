 var divs = new Array();
    divs[0] = "errFirst";
    divs[1] = "errLast";
    divs[2] = "errEmail";
    divs[3] = "errUid";
    divs[4] = "errPassword";
    divs[5] = "errConfirm";
    function validate()
	{
      var inputs = new Array();
      inputs[0] = document.getElementById('first').value;
      inputs[1] = document.getElementById('last').value;
      inputs[2] = document.getElementById('email').value;
      inputs[3] = document.getElementById('uid').value;
      inputs[4] = document.getElementById('password').value;
      inputs[5] = document.getElementById('confirm').value;
      var errors = new Array();
      errors[0] = "<span style='color:red'>Please enter your first name!</span>";
      errors[1] = "<span style='color:red'>Please enter your last name!</span>";
      errors[2] = "<span style='color:red'>Please enter your email!</span>";
      errors[3] = "<span style='color:red'>Please enter your user id!</span>";
      errors[4] = "<span style='color:red'>Please enter your password!</span>";
      errors[5] = "<span style='color:red'>Please confirm your password!</span>";
      for (i in inputs)
      {
        var errMessage = errors[i];
        var div = divs[i];
        if (inputs[i] == "")
        	document.getElementById(div).innerHTML = errMessage;
        else if (i==2)
        {
          var atpos=inputs[i].indexOf("@");
          var dotpos=inputs[i].lastIndexOf(".");
          if (atpos<1 || dotpos<atpos+2 || dotpos+2>=inputs[i].length)
        	document.getElementById('errEmail').innerHTML = "<span style='color: red'>Enter a valid email address!</span>";
          else
        	document.getElementById(div).innerHTML = "OK!";
        }
        else if (i==5)
        {
          var first = document.getElementById('password').value;
          var second = document.getElementById('confirm').value;
          if (second != first)
        	document.getElementById('errConfirm').innerHTML = "<span style='color: red'>Your passwords don't match!</span>";
          else
       		document.getElementById(div).innerHTML = "OK!";
        }
        else
        	document.getElementById(div).innerHTML = "OK!";
       }
     }
        function finalValidate()
        {
          var count = 0;
          for(i=0;i<6;i++)
          {
            var div = divs[i];
            if(document.getElementById(div).innerHTML == "OK!")
            count = count + 1;
          }
          if(count == 6)
          	document.getElementById("errFinal").innerHTML = "All the data you entered is correct!!!";
        }
		
		
//Size
mysiz=document.getElementById("siz");
mypric=document.getElementById("price");

mysiz.onchange=function()
{
   "use strict";
    mypric=0.1;
}
		

//add to cart
let carts=document.querySelectorAll(".cartBTN");

let product=
[
 {
	Device:"Samsung Z fold2",
	Color:"Bronze",
	Size:"256GB",
    Price:"$1999",
    inCart:"0"	
 }
]

function cartNumber()
{
	let productNumber= localStorage.getItem("cartNumber");
	cartNumber.parseInt(productNumber);
	localStorage.setItem("cartNumber",1);
}  

for(let i=0; i<carts.length;i++)
{
	carts[i].addEventListener("click" ,()=>
	{
		cartNumber();
	})
}

		
		
//Links_Foldable
		function openZF2() {
        window.open("https://www.gsmarena.com/samsung_galaxy_z_fold2_5g-10342.php");
        }
	    function openMXS() {
        window.open("https://www.gsmarena.com/huawei_mate_xs-10098.php");
        }
		function openW() {
        window.open("https://www.gsmarena.com/lg_wing_5g-10442.php");
        }
		function openF() {
        window.open("https://www.gsmarena.com/samsung_galaxy_z_flip-10054.php");
        }
		function openD() {
        window.open("https://www.gsmarena.com/microsoft_surface_duo-10365.php");
        }
//Links_Samsung
		function openN20U() {
        window.open("https://www.gsmarena.com/samsung_galaxy_note20_ultra-10355.php");
        }
	    function openN20() {
        window.open("https://www.gsmarena.com/samsung_galaxy_note20-10338.php");
        }
		function openS20U() {
        window.open("https://www.gsmarena.com/samsung_galaxy_s20_ultra_5g-10040.php");
        }
		function openS20P() {
        window.open("https://www.gsmarena.com/samsung_galaxy_s20+-10080.php");
        }
		function openS20FE() {
        window.open("https://www.gsmarena.com/samsung_galaxy_s20_fe-10428.php");
        }
		function openN10P() {
        window.open("https://www.gsmarena.com/samsung_galaxy_note10+-9732.php");
        }
	    function openA71() {
        window.open("https://www.gsmarena.com/samsung_galaxy_a71-9995.php");
        }
		function openM51() {
        window.open("https://www.gsmarena.com/samsung_galaxy_m51-10148.php");
        }
		function openM31() {
        window.open("https://www.gsmarena.com/samsung_galaxy_m31-10079.php");
        }
		function openA21S() {
        window.open("https://www.gsmarena.com/samsung_galaxy_a21s-10239.php");
        }
//Links_Apple
		function open12PM() {
        window.open("https://www.gsmarena.com/apple_iphone_12_pro_max-10237.php");
        }
	    function open12P() {
        window.open("https://www.gsmarena.com/apple_iphone_12_pro-10508.php");
        }
		function open12() {
        window.open("https://www.gsmarena.com/apple_iphone_12-10509.php");
        }
		function open11PM() {
        window.open("https://www.gsmarena.com/apple_iphone_11_pro_max-9846.php");
        }
		function open11P() {
        window.open("https://www.gsmarena.com/apple_iphone_11_pro-9847.php");
        }
		function open11() {
        window.open("https://www.gsmarena.com/apple_iphone_11-9848.php");
        }
	    function openXR() {
        window.open("https://www.gsmarena.com/apple_iphone_xr-9320.php");
        }
		function openXSM() {
        window.open("https://www.gsmarena.com/apple_iphone_xs_max-9319.php");
        }
		function openXS() {
        window.open("https://www.gsmarena.com/apple_iphone_xs-9318.php");
        }
		function openSE() {
        window.open("https://www.gsmarena.com/apple_iphone_se_(2020)-10170.php");
        }
//Links_Huawei
		function openM40P() {
        window.open("https://www.gsmarena.com/huawei_mate_40_pro-10528.php");
        }
	    function openP40P() {
        window.open("https://www.gsmarena.com/huawei_p40_pro-10152.php");
        }
		function openN7P() {
        window.open("https://www.gsmarena.com/huawei_nova_7_pro_5g-10203.php");
        }
		function openN5T() {
        window.open("https://www.gsmarena.com/huawei_nova_5t-9803.php");
        }
		function openY9A() {
        window.open("https://www.gsmarena.com/huawei_y9a-10429.php");
        }
//Links_OnePlus
		function open8T() {
        window.open("https://www.gsmarena.com/oneplus_8t-10420.php");
        }
	    function open8P() {
        window.open("https://www.gsmarena.com/oneplus_8_pro-9919.php");
        }
		function open7T() {
        window.open("https://www.gsmarena.com/oneplus_7t-9816.php");
        }
		function open7P() {
        window.open("https://www.gsmarena.com/oneplus_7_pro-9689.php");
        }
		function openN() {
        window.open("https://www.gsmarena.com/oneplus_nord-10289.php");
        }
//Links_Oppo
		function openX2() {
        window.open("https://www.gsmarena.com/oppo_find_x2_pro-9529.php");
        }
	    function openR4P() {
        window.open("https://www.gsmarena.com/oppo_reno4_pro-10327.php");
        }
		function openR4() {
        window.open("https://www.gsmarena.com/oppo_reno4-10348.php");
        }
		function openA93() {
        window.open("https://www.gsmarena.com/oppo_a93-10431.php");
        }
		function openA73() {
        window.open("https://www.gsmarena.com/oppo_a73-10489.php");
        }
//Links_Xiaomi
		function openM11() {
        window.open("https://www.gsmarena.com/xiaomi_mi_11-10656.php");
        }
	    function openM10T() {
        window.open("https://www.gsmarena.com/xiaomi_mi_10t_5g-10473.php");
        }
		function openN10L() {
        window.open("https://www.gsmarena.com/xiaomi_mi_note_10_lite-10183.php");
        }
		function openN9P() {
        window.open("https://www.gsmarena.com/xiaomi_redmi_note_9_pro-10217.php");
        }
		function open9() {
        window.open("https://www.gsmarena.com/xiaomi_redmi_9-10233.php");
        }
//Links_Realme
		function openX3() {
        window.open("https://www.gsmarena.com/realme_x3_superzoom-10250.php");
        }
	    function openR7P() {
        window.open("https://www.gsmarena.com/realme_7_pro-10400.php");
        }
		function openR7() {
        window.open("https://www.gsmarena.com/realme_7_(asia)-10416.php");
        }
		function open6I() {
        window.open("https://www.gsmarena.com/realme_6i-10130.php");
        }
		function openC17() {
        window.open("https://www.gsmarena.com/realme_c17-10439.php");
        }
//Links_Nokia
		function openN9() {
        window.open("https://www.gsmarena.com/nokia_9_pureview-8867.php");
        }
	    function open8() {
        window.open("https://www.gsmarena.com/nokia_8_3_5g-10142.php");
        }
		function open7() {
        window.open("https://www.gsmarena.com/nokia_7_3-10468.php");
        }
		function open5() {
        window.open("https://www.gsmarena.com/nokia_5_3-10117.php");
        }
		function open1() {
        window.open("https://www.gsmarena.com/nokia_1_plus-9538.php");
        }				