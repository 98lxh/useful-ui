function cls(...args: Array<string | undefined>) {
  const length = args.length
  const classes: string[] = []

  for (let i = 0; i < length; i++) {
    const className = args[i]
    if (!className) continue
    classes.push(className)
  }

  return [...new Set(classes)].join(' ')
}

export default cls
