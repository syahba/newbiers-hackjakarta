const GradeFunction = require("./function")
const GradeConst = require("./const")

function generateContent(type, nutrition) {
  try {
      // check point food or beverage
      let point, calculate, check
      switch (type) {
          case "food":
              point = GradeConst.POINTS_FOOD
              calculate = GradeFunction.calculatePointFood
              check = GradeFunction.checkGradeFood
              break;
          case "beverage":
              point = GradeConst.POINTS_BEVERAGE
              calculate = GradeFunction.calculatePointBeverage
              check = GradeFunction.checkGradeBeverage
              break;
          default:
              console.error("error: generated failed, not valid")
              throw new Error("generated failed, not valid");
      }

      const allNutrition = {
          energy: nutrition.energy || 0,
          saturated_fatty: nutrition.saturated_fatty || 0,
          sugar: nutrition.sugar || 0,
          salt: nutrition.salt || 0,
          protein: nutrition.protein || 0,
          fibres: nutrition.fibres || 0,
          fruit_vegetable_legumes: nutrition.fruit_vegetable_legumes || 0,
      }

      let allPoint = {
          energy: 0,
          saturated_fatty: 0,
          sugar: 0,
          salt: 0,
          protein: 0,
          fibres: 0,
          fruit_vegetable_legumes: 0,
      }

      // calculate point
      for (const key in allPoint) {
          for (let i = 0; i < point[key].length; i++) {
              if (allNutrition[key] <= point[key][i]) {
                  allPoint[key] = i
                  break;
              }
          }
      } 

      const score = calculate(allPoint)
      return {
        score: score,
        grade: check(score)
      };
  }
  catch (err) {
      throw err;
  }

}

module.exports = {
  generateContent
};