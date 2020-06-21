<?php
session_start();
?>
<script language="JavaScript" type="text/javascript"><!--
	function placeFocus() {
	  if (document.forms.length > 0) {
		  var field = document.forms[0];
		  for (i = 0; i < field.length; i++) {
			if ((field.elements[i].type == "text") || (field.elements[i].type == "textarea") || (field.elements[i].type.toString().charAt(0) == "s")) {
				document.forms[0].elements[i].focus();
				break;
             }
          }
       }
	}
// -->
</script>
<html>
<head>
<title>Form for testing verifyimg.php</title>
</head>
<body onload="placeFocus();">
<?php
if (isset($_SERVER["PHP_SELF"]))
	$sThisScript = $_SERVER["PHP_SELF"];
elseif (isset($HTTP_SERVER_VARS["PHP_SELF"]))
	$sThisScript = $HTTP_SERVER_VARS["PHP_SELF"];
else
    die("No PHP_SELF defined");

$bCompare = false;
if (isset($_POST["compare"]))
    $bCompare = true;
elseif (isset($HTTP_POST_VARS["compare"]))
    $bCompare = true;

if ($bCompare)
{
    if (isset($_SESSION["VerifyImgString"]))
        $sVerifyImgString = $_SESSION["VerifyImgString"];
    elseif (isset($HTTP_SESSION_VARS["VerifyImgString"]))
        $sVerifyImgString = $HTTP_SESSION_VARS["VerifyImgString"];
	else
		die("No VerifyImgString found in session");
	if (isset($_POST["verify_input"]))
		$sInput = $_POST["verify_input"];
	elseif (isset($HTTP_POST_VARS["verify_input"]))
		$sInput = $HTTP_POST_VARS["verify_input"];
	else
		die("No input found");
	if ($sVerifyImgString === $sInput)
		echo "<p>Your input was correct!</p>";
	else
		echo "<p>Your input did not match the image.</p>";
	echo "<p><a href=\"$sThisScript\">Try again</a>.</p>";
}
else
{
?>
	<p>This form demonstrates the use of verifyimg.php.</p>
	<p>
	For full information and support, visit
	<a href="http://www.tectite.com/">www.tectite.com</a>
	</p>
    <form name="TestVerify" method="post" action="<?php
                echo $sThisScript; ?>">
    <input type="hidden" name="compare" value="1" />
    <table border="0">
        <tr>
            <td colspan="2"><p>Enter the characters you see in the image:</p>
        <tr>
            <td><input type="text" name="verify_input" maxlength="6" />
            <td><img src="verifyimg.php" alt="Verification" />
		<tr>
			<td colspan="2"><input type="submit" value="submit" />
    </table>
    </form>
<?php
}
?>
</body>
</html>

