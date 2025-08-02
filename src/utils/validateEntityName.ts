export function validateEntityName(name: string): string | true {
  if (!name) {
    return 'Название не может быть пустым';
  }
  if (!/^[A-Za-z0-9]+$/.test(name)) {
    return 'Название должно содержать только английские буквы и цифры';
  }
  if (!/^[A-Z][A-Za-z0-9]*$/.test(name)) {
    return 'Название должно быть в формате PascalCase (например, MyWidget)';
  }
  return true;
}