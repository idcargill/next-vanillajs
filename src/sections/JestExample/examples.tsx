type mockObject = {
  name: string;
};

export const getName = (obj: mockObject): string => {
  if (obj?.name) {
    return obj.name;
  }
  return 'name not found';
};
