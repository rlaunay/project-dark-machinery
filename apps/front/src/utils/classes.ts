type ClassName = undefined | null | string | { [key: string]: boolean }

export function cn(...classNames: ClassName[]) {
  const classes: string[] = [];

  classNames.forEach(className => {
    if (className == null) {
      return;
    }

    if (typeof  className === 'string') {
      return classes.push(className)
    };

    Object.keys(className).forEach((key) => {
      if (className[key]) {
        classes.push(key)
      }
    })
  })

  return classes.join(' ')
}