function calculatePointFood(payload) {
  let N = 0, P = 0

  N += payload.energy + payload.saturated_fatty + payload.sugar + payload.salt
  if (N >= 11) {
      P += payload.fibres + payload.fruit_vegetable_legumes
  } else {
      P += payload.protein + payload.fibres + payload.fruit_vegetable_legumes
  }

  return N - P
}

function calculatePointBeverage(payload) {
  let N = 0, P = 0

  N += payload.energy + payload.saturated_fatty + payload.sugar + payload.salt
  P += payload.protein + payload.fibres + payload.fruit_vegetable_legumes

  return N - P
}

function checkGradeFood(point) {
  let grade

  if (point <= 0) {
      grade = 'A'
  } else if (point <= 2) {
      grade = 'B'
  } else if (point <= 10) {
      grade = 'E'
  } else if (point <= 18) {
      grade = 'D'
  } else if (point <= 9999999) {
      grade = 'E'
  }

  return grade
}

function checkGradeBeverage(point) {
  let grade

  if (point <= 0) {
      grade = 'A'
  } else if (point <= 2) {
      grade = 'B'
  } else if (point <= 6) {
      grade = 'C'
  } else if (point <= 9) {
      grade = 'D'
  } else if (point <= 9999999) {
      grade = 'E'
  }

  return grade
}

module.exports = {
  calculatePointFood,
  calculatePointBeverage,
  checkGradeFood,
  checkGradeBeverage
};