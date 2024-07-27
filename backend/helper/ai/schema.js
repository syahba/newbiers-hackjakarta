const ingredientNutrition = {
  "description": "buat list ingredient dasar untuk membuat sebuah raw {{name}} dan berikan takaran pasti untuk setiap ingredient nya serta menghitung persentase fruit, vegetables dan legumes dari ingredient serta menentukan type food atau beverage",
  "type": "object",
  "properties": {
    "type": {
      "description": '{{name}} termasuk dalam food atau beverage hanya bisa memiliki value "food" dan "beverage" aja',
      "type": "string",
      "enum": ["food", "beverage"]
    },
    "ingredient": {
      "description": "buat list ingredient dasar untuk membuat sebuah raw {{name}} dan berikan takaran pasti untuk setiap ingredient nya",
      "type": "array",
      "items": {
        "description": "List of Ingredients in English",
        "type": "object",
        "properties": {
          "name": {
            "description": "name of ingredients",
            "type": "string"
          },
          "measurements": {
            "description": "measurements of ingredients",
            "type": "string"
          }
        },
        "required": [
          "name",
          "measurements"
        ]
      }
    },
    "nutrition": {
      "description": "jangan ada field tambahan",
      "type": "object",
      "properties": {
        "energy": {
          "description": "energy of ingredients in (KJ/100g)",
          "type": "number"
        },
        "saturated_fatty": {
          "description": "saturated fatty of ingredients in (g/100g)",
          "type": "number"
        },
        "sugar": {
          "description": "sugar of ingredients in (g/100g)",
          "type": "number"
        },
        "salt": {
          "description": "salt of ingredients in (g/100g)",
          "type": "number"
        },
        "protein": {
          "description": "protein of ingredients in (g/100g)",
          "type": "number"
        },
        "fibres": {
          "description": "fibers of ingredients in (g/100g)",
          "type": "number"
        },
        "fruit_vegetable_legumes": {
          "description": "persentase dari gabungan fruit, vegetables dan legumes dari ingredient dalam satuan (%)",
          "type": "number",
        },
      },
      "required": [
        "energy",
        "saturated_fatty",
        "sugar",
        "salt",
        "protein",
        "fibres",
        "fruit_vegetable_legumes"
      ]
    }
  },
  "required": [
    "type",
    "ingredient",
    "nutrition"
  ]
}

const nutrition = {
  "description": "berikan perkiraan nutrition berdasarkan {{ingredients}} ",
  "type": "object",
  "properties": {
    "nutrition": {
      "description": "dont add field and answer with english",
      "type": "object",
      "properties": {
        "energy": {
          "description": "energy of ingredients in (KJ/100g)",
          "type": "number"
        },
        "saturated_fatty": {
          "description": "saturated fatty of ingredients in (g/100g)",
          "type": "number"
        },
        "sugar": {
          "description": "sugar of ingredients in (g/100g)",
          "type": "number"
        },
        "salt": {
          "description": "salt of ingredients in (g/100g)",
          "type": "number"
        },
        "protein": {
          "description": "protein of ingredients in (g/100g)",
          "type": "number"
        },
        "fibres": {
          "description": "fibers of ingredients in (g/100g)",
          "type": "number"
        },
        "fruit_vegetable_legumes": {
          "description": "persentase dari gabungan fruit, vegetables dan legumes dari ingredient dalam satuan (%)",
          "type": "number",
        },
      },
      "required": [
        "energy",
        "saturated_fatty",
        "sugar",
        "salt",
        "protein",
        "fibres",
        "fruit_vegetable_legumes"
      ]
    }
  },
  "required": [
    "nutrition",
  ]
}



module.exports = {
  ingredientNutrition,
  nutrition
}