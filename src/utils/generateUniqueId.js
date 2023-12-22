export function generateUniqueId() {
  return "_" + Math.random().toString(36).substring(2, 11);
}
