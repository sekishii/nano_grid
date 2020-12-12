$(function(){
    $('#topOnOff').click(function(){
        $('#topToolbarMenu').toggle();

    });


    $('#rightOnOff').click(function(){
        $('#rightToolbarMenu').toggle();

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