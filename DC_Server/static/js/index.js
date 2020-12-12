$(function(){
    $('#topOnOff').click(function(){
        $('#topToolbarMenu').toggle();

    });


    $('#graphOnOff').click(function(){
        $('#graphGrid').toggle();

    });

    $(".radio").change(function(){
      
      // alert($(this).prop('id'));
      $('.radio[checked="checked"]').prop('checked', false);
      $('.radio[checked="checked"]').removeAttr('checked');
      $(this).prop('checked', true);
      $(this).attr('checked', 'checked');
      // alert($('.radio[checked="checked"]').prop('id'));

      // alert($('#radio1').prop('checked'));
      if ($('#radio1').prop('checked')) {
        $('.hkcheck').removeAttr('disabled');
      } else {
        $('.hkcheck').prop('checked', false);
        $('.hkcheck').attr('checked', false);
        $('.hkcheck').attr('disabled', true);
      }

      // alert($('#radio2').prop('checked'));
      if ($('#radio2').prop('checked')) {
        $('#select1').removeAttr('disabled');
        $('#button1').removeAttr('disabled');
      } else {
        $('#select1').attr('disabled', true);
        $('#button1').attr('disabled', true);
      }

    });

    // $("#radio2").change((function() {
    //   if ($("#radio1").prop('checked')) {

    //   }
    //   $('#radio1')



    $('#label1').change(function(){
      console.log($(this).prop('checked'));
      if ($(this).prop('checked')) {
        // $('.accshow').css('overflow', 'visible');
        $('.accshow').css('display', 'block');
        // $('.accshow').css('opacity', 1);
      } else {
        // $('.accshow').css('overflow', 'hidden');
        $('.accshow').css('display', 'none');
        // $('.accshow').css('opacity', 0);
      }
    });

    $('#label2').change(function(){
      // console.log($(this).prop('checked'));
      // if ($(this).prop('checked')) {
      //   $('.accshow').css('overflow', 'visible');
      //   $('.accshow').css('visibility', 'visible');
      //   $('.accshow').css('opacity', 1);
      // } else {
      //   $('.accshow').css('overflow', 'hidden');
      //   $('.accshow').css('visibility', 'hidden');
      //   $('.accshow').css('opacity', 0);
      // }
    });

    
    var chart1 = c3.generate({
        bindto: '#chart1',
        size: { width: 190, height: 170 }, // グラフ描画領域のサイズ
        data: {
          columns: [
            ['データ1', 30, 26, 18, 6],
          ],
          type: 'spline',
          labels: true // それぞれの点に数値を表示
        },
        axis: {
          x: {
            label: {
              text: '電力',
              position: 'outer-middle'
            },
            tick: {
                values: [10, 20, 30, 40, 50]
              }
          },
          y: {
            label: {
              text: '運搬',
              position: 'outer-middle'
            },
            tick: {
                values: [10, 20, 30, 40, 50]
            },
          }
        }
    });

    


    var chart = c3.generate({
        bindto: '#chart',
        size: { width: 300, height: 200 }, // グラフ描画領域のサイズ
        data: {
          columns: [
            ['データ1', 30, 200, 100, 400, 150, 250],
            ['データ2', 50, 20, 10, 40, 15, 25]
          ],
          labels: true // それぞれの点に数値を表示
        },
        axis: {
          x: {
            label: {
              text: 'X軸',
              position: 'outer-middle'
            }
          },
          y: {
            label: {
              text: 'Y軸',
              position: 'outer-middle'
            }
          }
        }
    });
});
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

