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
  $('#sessionName').text('إسم الغرفة');
  $('#print').text('طباعة');
  $('#downloadMessages').text('تحميل الرسائل');
  $('#downloadLinks').text('تحميل الروابط');
  $('#exitButton').attr('title','إنهاء الجلسة');
  $('#title').text('غرفة النقاش');
  $('#whoIsOnline').attr("placeholder",'المتواجدين الأن');
  $('#handle').attr("placeholder", 'الإسم:');
  $('#message').attr("placeholder", "الرسالة:");
  $('#send').text('إرسال');
  $('#shareLinks').text('مشاركة');
  $('#footer').text('هذه الصفحة عبارة عن صفحة تفاعلية ');
}
function englishize(){

  $('html').attr('lang','en');
  $('#sessionName').text('Session Name');
  $('#print').text('Print');
  $('#downloadMessages').text('Download Messages');
  $('#downloadLinks').text('Download Links');
  $('#exitButton').attr('title','Close the session');
  $('#title').text('Discussion Room');
  $('#whoIsOnline').attr("placeholder",'Who Is Online');
  $('#handle').attr("placeholder", 'Handle');
  $('#message').attr("placeholder", 'Message');
  $('#send').text('send');
  $('#shareLinks').text('Share');
  $('#footer').text('This is collaborative information seeking new proposed interface');
}
