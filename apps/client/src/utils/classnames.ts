type ClassName = undefined | null | string | { [key: string]: boolean }

export function cn(...classNames: ClassName[]) {
  const classes: string[] = [];

  classNames.forEach(className => {
    if (className == null) return;

    if (typeof  className === 'string') {
      if (className.trim() === '') return;
      return classes.push(className)
    };

    Object.keys(className).forEach((key) => {
      if (key !== '' && key.trim() !== '' && className[key]) {
        classes.push(key)
      }
    })
  })

  return classes.join(' ')
}