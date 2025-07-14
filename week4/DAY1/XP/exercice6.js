<!DOCTYPE html>
<html>
<head>
  <title>Self Invoking Function Example</title>
</head>
<body>

<div id="fortune"></div>

<script>
(function (numberOfChildren, partnersName, geoLocation, jobTitle.){
    const sentence = `you will be a ${jobTitle} in ${geoLocation} and married to ${partnersName} with ${numberOfChildren}`;
    document.getElementById("Fortune").textContent = sentence;
})(3, "Alice", "Casablanca", "Teacher");
</script>

</body>
</html>

(function (numberOfChildren, partnersName, geoLocation, jobTitle.){
    const sentence = `you will be a ${jobTitle} in ${geoLocation} and married to ${partnersName} with ${numberOfChildren}`;
    document.getElementById("Fortune").textContent = sentence;
})(3, "Alice", "Casablanca", "Teacher");