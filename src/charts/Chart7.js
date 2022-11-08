const Chart7 =(value)=>{
    var options = {
        chart: {
          height: 300,
          type: 'radialBar',
          toolbar: {
            show: false
          }
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
              enabled: true,
              delay: 150
          },
          dynamicAnimation: {
              enabled: true,
              speed: 350
          }
      },
        plotOptions: {
          radialBar: {
            //startAngle: -135,
            //endAngle: 225,
             hollow: {
              margin: 0,
              size: '80%',
              background: 'transparent',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                color: 'rgba(0, 169, 255, 0.85)',
                opacity: 0.65
              }
            },
            track: {
              background: '#e8edff',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: 0,
                top: -3,
                left: 0,
                blur: 4,
                color: 'rgba(0, 169, 255, 0.85)',
                opacity: 0.65
              }
            },
            dataLabels: { 
              showOn: 'always',
              name: {
                offsetY: -20,
                show: true,
                color: '#212529',
                fontSize: '16px'
              },
              value: {
                // formatter: function (val) {
                //           return val + "%";
                //       },
                formater : value,
                color: '#212529',
                fontSize: '35px',
                show: true,
                offsetY: 10,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#3461ff'],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        colors: ["#3461ff"],
        series: [value],
        stroke: {
          lineCap: 'round',
          //dashArray: 4
        },
        labels: ['Total Traffic'],
        responsive: [
            {
              breakpoint: 1281,
              options: {
                chart: {
                    height: 280,
                }
              }
            }
          ],
    
      }
    return options

}
export default Chart7