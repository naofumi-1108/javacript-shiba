<html>
<span id="output"></span>
<script>
var Omikuji=['小吉','大吉','中吉','吉','凶','大凶'];
var Ran=Math.random()*Omikuji.length;
var Kekka=Omikuji[Ran];
document.getElementById("output").innerHTML=Ran
</script>
</html>
