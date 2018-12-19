
function savedMoney (name, age, ageOfRetirement, monthlyIncome, savePercentage) {

  var ageOfRetirement=65;
  var safedMoney;

  if (age>=ageOfRetirement) {
    console.log(`Calculate your past memories mate!`);
    return;

  } else {
    yearsToRetirement = ageOfRetirement-age;
    saving = (monthlyIncome*savePercentage/100)*12;
    savedMoney = yearsToRetirement * saving;
  }

  console.log(`${name} has saved ${savedMoney} so far.`);
}

savedMoney(`Kostas`, 58, 65, 2000, 5);


//// kostas:

function saveMoneyCalculator (age, ageOfRetirement, monthlyIncome, savePercentage) {

  var yearsRemaining = ageOfRetirement - age;

  if (age >= ageOfRetirement) {

      return `Calculate your past memories mate!`;
      }

    return monthlyIncome * (savePercentage / 100) * 12 * yearsRemaining;
}

var firstExample = saveMoneyCalculator (40, 65, 2000, 10);
console.log( firstExample);
