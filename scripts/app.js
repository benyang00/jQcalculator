function init() {
  //Basic Calculator
  $('#basic-calc').click(function() {
    var textBox1 = $('#basic-num-1');
    var num1 = textBox1.val();
    var textBox2 = $('#basic-num-2');
    var num2 = textBox2.val();
    var operator = $('#basic-operation').val();
    $('#basic-answer-alert').text(eval(num1 + " " + operator + " " + num2));
  });
  //Trip Cost Calculator
  $('#trip-calc').click(function() {
    var miles = $('#trip-distance').val();
    var mpg = $('#trip-mpg').val();
    var cost = $('#trip-cost').val();
    var speed = $('#trip-speed').val();
    if (speed <= 60) {
      $('#trip-answer-alert').text('$' + Math.round(eval(miles / mpg * cost)),2); //ISSUE with rounding to 2dp
    } else if (speed > 60) {
      $('#trip-answer-alert').text('$' + Math.round(eval(miles / (mpg - (speed - 60) * 2) * cost)),2);
    }
  });
  //BMI Calculator
  $('#bmi-calc').click(function() {
    var mass = $('#bmi-mass').val();
    var height = $('#bmi-height').val();
    var wtLbs = mass * 2.20462; //convert kg to lbs
    var htInches = height * 39.3701; //convert m to in
    $('#bmi-answer-alert').text(eval(wtLbs / (htInches * htInches) * 703));
    //( Weight in Pounds / ( Height in inches x Height in inches ) ) x 703
    // console.log(wtLbs);
    // console.log(htInches);
  });
}
window.addEventListener('load', init, false);
