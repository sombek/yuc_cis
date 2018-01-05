var lang = document.getElementById('lang');
$(document).ready( function() {
  if(lang.checked == false) arabize();
  else englishize();
});

lang.onchange = ()=>{
  if(lang.checked == false) arabize();
  else englishize();
}
function arabize(){
  $('html').attr('lang','ar');

  //inside Sidebar
  $('#settingsSidebar').text('خصائص جانبية');
  $('#languageOption').text('اللغة : ');
  $('#setupButton').text('إعدادات : ');
  $('#setupButtonText').text('إعدادات');
  //Navbar buttons
  //$('#sessionName').text('إسم الغرفة');
  $('#options').text('خصائص');
  $('#print').text('طباعة');
  $('#downloadMessages').text('تحميل الرسائل');
  $('#downloadLinks').text('تحميل الروابط');
  $('#exitButton').attr('title','إنهاء الجلسة');
  // content
  $('#title').text('غرفة النقاش');
  $('#whoIsOnlineText').attr("placeholder",'المتواجدين الأن');
  $('#handle').attr("placeholder", 'الإسم:');
  $('#messageInput').attr("placeholder", "الرسالة:");
  $('#sendMessageButton').text('إرسال');
  $('#shareLinksButton ').text('مشاركة');
  //footer
  $('#footer').html('هذه الصفحة عبارة عن واجهة مستخدم مبتكرة لزيادة فعالية البحث التفاعلي <br> © جميع الحقوق محفوظة 2018');
}
function englishize(){

  $('html').attr('lang','en');
  //inside Sidebar
  $('#settingsSidebar').text('Sidebar Options');
  $('#languageOption').text('Language : ');
  $('#setupButton').text('Options : ');
  $('#setupButtonText').text('Options');
  //Navbar buttons
  //$('#sessionName').text('Session Name');
  $('#options').text('Options');
  $('#print').text('Print');
  $('#downloadMessages').text('Download Messages');
  $('#downloadLinks').text('Download Links');
  $('#exitButton').attr('title','Close The Session');
  // content
  $('#title').text('Discussion Room');
  $('#whoIsOnlineText').attr("placeholder",'Who Is Online');
  $('#handle').attr("placeholder", 'Handle');
  $('#messageInput').attr("placeholder", 'Write Your Message');
  $('#sendMessageButton').text('Send');
  $('#shareLinksButton').text('Share');
  //footer
  $('#footer').html('This is a collaborative information seeking new proposed interface<br> © All Rights Reserved 2018');
}

document.getElementById("overlayDiv").style.display = "none";
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("overlayDiv").style.backgroundColor = "rgba(0,0,0,0.8)";
    document.getElementById("overlayDiv").style.display = "";
    document.getElementById("mySidenav").style.width = "250px";

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("overlayDiv").style.display = "none";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("overlayDiv").style.backgroundColor = "rgba(0,0,0,0)";
}
