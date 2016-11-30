$(function(){
    var evaluationView = {
        init: function () {
            this.render(0.6);
        },
        render: function (num) {
            var roundRight  = $('.roundRight');
            var roundLeft   = $('.roundLeft');
            var fraction    = $('.fraction');
            var roundInner  = $('.roundInner');
            var roundText   = $('.roundText .percentage');
            var roundNum    = num * 360; // 分数转换圆周
            var changNumR   = 0;
            var changNumL   = 0;
            var times = setInterval(function () {
                changNumR += 2;
                if (changNumR >= 360) {
                    roundLeft.hide();
                    roundInner.hide();
                    clearInterval(times);
                    return;
                } else if (changNumR > 180 && changNumR <= roundNum) {
                    changNumL = changNumR - 180;
                    roundRight.hide();
                    roundInner.show();
                    roundLeft.css({
                        '-webkit-transform': 'rotate(' + changNumL + 'deg)',
                        'transform': 'rotate(' + changNumL + 'deg)'
                    });
                } else if (changNumR > roundNum || roundNum === 0) {
                    clearInterval(times);
                    return;
                } else if (changNumR <= 180 && changNumR > 0) {
                    roundRight.css({
                        '-webkit-transform': 'rotate(' + changNumR + 'deg)',
                        'transform': 'rotate(' + changNumR + 'deg)'
                    });
                }
                // roundText.text('(' + Math.round(changNumR / 3.6) + '%好评)');
                // fraction.text('(' + (changNumR / 72).toFixed(1) + '分)');
            }, 10);
            fraction.text('(' + scoreAvg + '分)');
            roundText.text('(' + goodRate * 100 + '%好评)');
        }

    }

    evaluationView.init();
})
