const Const = require("./const")

function schemaReplacer(payload, target) {
  for (let [key, value] of Object.entries(payload)) {
      target = target.replace(`{{${key}}}`, value)
  }
  return target
}

function getGrade(grade, type) {
  const gradeData = Const.GRADES[grade] 
  
  return {
    grade: grade,
    title: gradeData.title,
    description: gradeData.description[type],

    color: gradeData.color,
    image: gradeData.image,
    url: gradeData.url
  }
}

module.exports = {
  schemaReplacer,
  getGrade,
};