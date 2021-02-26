function calculate() {
  let members = document.getElementsByName('member');
  let vehicleType = document.getElementById('type').value;
  let hours = document.getElementById('hours').value;

  if (hours == '' || hours == '0') {
    alert('Please input the hours.');
    return;
  }

  let isMember;

  for (let i = 0; i < members.length; i++) {
    if (members[i].checked) {
      isMember = members[i].value == 'yes' ? true : false;
      break;
    }
  }

  let firstHourFee = vehicleType == 'car' ? 2000 : 1000;
  let nextHourFee = 1000;

  let totalFee = firstHourFee + (hours - 1) * nextHourFee;

  let discountedFee = isMember ? totalFee * 0.8 : totalFee;

  let text = document.getElementById('text');

  text.innerText = `You need to pay Rp ${discountedFee}.`;
}
