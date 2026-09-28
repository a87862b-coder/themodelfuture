import { useId } from 'react'

export const pillButton =
  'inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90'

type FormFieldProps = {
  label: string
  name: string
  type?: string
  required?: boolean
  multiline?: boolean
  autoComplete?: string
}

export function FormField({ label, name, type = 'text', required, multiline, autoComplete }: FormFieldProps) {
  const id = useId()
  const fieldClass =
    'peer w-full border-b-4 border-input bg-muted px-4 pb-3 pt-7 text-base text-foreground outline-none transition-colors focus:border-primary'

  return (
    <div className="relative">
      {multiline ? (
        <textarea id={id} name={name} rows={5} required={required} placeholder=" " className={fieldClass} />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder=" "
          className={fieldClass}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-5 text-sm text-foreground transition-all peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  )
}
