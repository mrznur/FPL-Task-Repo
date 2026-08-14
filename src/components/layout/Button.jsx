function Button({ children, className = '', href, variant = 'light', type = 'button', ...props }) {
  const styles = {
    light: 'rounded-md bg-white text-black hover:bg-accent hover:text-white',
    accent: 'bg-accent text-white hover:bg-white hover:text-black',
    outline: 'border border-current bg-transparent text-white hover:bg-white hover:text-black',
  }
  const classes = `inline-flex min-h-11 items-center justify-center gap-3 px-4 py-2 text-base font-black uppercase tracking-tight transition-colors duration-200 ${styles[variant]} ${className}`

  if (href) return <a href={href} className={classes} {...props}>{children}</a>
  return <button type={type} className={classes} {...props}>{children}</button>
}

export default Button
