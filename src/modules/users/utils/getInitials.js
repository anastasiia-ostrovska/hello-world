const getInitials = (fullName) => {
  if (typeof fullName !== 'string') return '';

  return fullName
    .split(' ')
    .filter(Boolean) // remove empty spaces
    .map((name) => name[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
};

export default getInitials;
