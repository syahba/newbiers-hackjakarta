const { GoogleGenerativeAI } = require("@google/generative-ai");
const JSONSchema = require("./schema")
const Function = require("../function")

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function generateIngredientNutrition(name) {
  console.time("AI.generateIngredientNutrition")
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  // untuk menentukan schema yang dipakai
  const schema = {...JSONSchema.ingredientNutrition}
  schema.description = Function.schemaReplacer({name}, schema.description)

  // prompt
  const input = `Follow JSON schema.<JSONSchema>${JSON.stringify(
      schema
    )}</JSONSchema>`;
  
  // configure chat ai
  const chat = model.startChat({
      history: [],
      generationConfig: {
          temperature: 0,
          topP: 0,
          topK: 0,
      }
  });

  try {
      const result = await chat.sendMessage(input);
      // console.log(result.response.text())
      const res =result.response.text()
        .replace("```json", "")
        .replace("```", "")
      return JSON.parse(res);
  } catch (error) {
      console.error("Error sending message:", error);
      throw error;
  } finally {
      console.timeEnd("AI.generateIngredientNutrition")
  }
}

async function generateNutrition(ingredients) {
  console.time("AI.generateNutrition")
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  // untuk menentukan schema yang dipakai
  const schema = {...JSONSchema.nutrition}
  schema.description = Function.schemaReplacer({
    ingredients: Function.ingredientsParser(ingredients)
  }, schema.description)

  // prompt
  const input = `Follow JSON schema.<JSONSchema>${JSON.stringify(
      schema
    )}</JSONSchema>`;
  
  // configure chat ai
  const chat = model.startChat({
      history: [],
      generationConfig: {
        temperature: 0,
        topP: 0,
        topK: 0,
      }
  });

  try {
      const result = await chat.sendMessage(input);
      const res = result.response.text()
        .replace("```json", "")
        .replace("```", "")
      return JSON.parse(res);
  } catch (error) {
      console.error("Error sending message:", error);
      throw error;
  } finally {
      console.timeEnd("AI.generateNutrition")
  }
}


module.exports = {
  generateIngredientNutrition,
  generateNutrition
};