const truncateNames = (name, maxLength) =>
  name.length >= maxLength ? `${name.slice(0, maxLength)}...` : name

export { truncateNames }
