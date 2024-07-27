function schemaReplacer(payload, target) {
  for (let [key, value] of Object.entries(payload)) {
      target = target.replace(`{{${key}}}`, value)
  }
  return target
}

module.exports = {
  schemaReplacer,
};