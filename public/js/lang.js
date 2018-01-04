var lang = document.getElementById('lang');
$(document).ready( function() {
  if(lang.checked == false) arabize();
});

lang.onchange = ()=>{
  if(lang.checked == false) arabize();
  else englishize();
}
function arabize(){
  $('html').attr('dir','rtl');
  $('html').attr('lang','ar');
  $('#sessionName').text('إسم الغرفة');
  $('#print').text('طباعة');
  $('#downloadMessages').text('تحميل الرسائل');
  $('#downloadLinks').text('تحميل الروابط');
  $('#title').text('غرفة النقاش');
  $('#whoIsOnline').attr("placeholder",'المتواجدين الأن');
  $('#handle').attr("placeholder", 'الإسم:');
  $('#message').attr("placeholder", "الرسالة:");
  $('#send').text('إرسال');
  $('#shareLinks').text('مشاركة');
  $('#footer').text('هذه الصفحة عبارة عن صفحة تفاعلية ');
}
function englishize(){
  $('html').attr('dir','ltr');
  $('html').attr('lang','en');
  $('#sessionName').text('Session Name');
  $('#print').text('print');
  $('#downloadMessages').text('download Messages');
  $('#downloadLinks').text('download links');
  $('#title').text('Discussion Room');
  $('#whoIsOnline').attr("placeholder",'who is online');
  $('#handle').attr("placeholder", 'handle');
  $('#message').attr("placeholder", 'message');
  $('#send').text('send');
  $('#shareLinks').text('Share');
  $('#footer').text('This is collaborative information seeking new proposed interface');
}
