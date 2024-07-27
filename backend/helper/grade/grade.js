const GradeFunction = require("./function")
const GradeConst = require("./const")

function generateContent(generated) {
  try {
      // check point food or beverage
      let point, calculate, check
      switch (generated.type) {
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
          energy: 0,
          saturated_fatty: 0,
          sugar: 0,
          salt: 0,
          protein: 0,
          fibres: 0,
          fruit_vegetable_legumes: 0,
      }

      // sum all nutrition
      generated.ingredient.forEach(elm => {
          let elmNutrition = elm.nutrition

          allNutrition.energy += elmNutrition.energy || 0
          allNutrition.saturated_fatty += elmNutrition.saturated_fatty || 0
          allNutrition.sugar += elmNutrition.sugar || 0
          allNutrition.salt += elmNutrition.salt || 0
          allNutrition.protein += elmNutrition.protein || 0
          allNutrition.fibres += elmNutrition.fibres || 0
      })
      allNutrition["fruit_vegetable_legumes"] = generated.fruit_vegetable_legumes || 0

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