'use client'

import { useState, type FormEvent } from 'react'
import { Paperclip } from 'lucide-react'
import { FormField, pillButton } from '@/components/form-field'

export function CareersForm() {
  const [files, setFiles] = useState<string[]>([])
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = `Model application from ${data.get('name') || data.get('email')}`
    const body = [
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Email: ${data.get('email')}`,
      '',
      `${data.get('message')}`,
      files.length ? `\nPortfolio files to attach: ${files.join(', ')}` : '',
    ].join('\n')
    window.location.href = `mailto:hr@themodelfuture.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <h2 className="text-2xl text-foreground">Apply Now</h2>
      <FormField label="Name" name="name" autoComplete="name" />
      <FormField label="Phone" name="phone" type="tel" autoComplete="tel" />
      <FormField label="Email*" name="email" type="email" required autoComplete="email" />
      <FormField label="Message" name="message" multiline />

      <div className="flex items-center justify-between gap-4">
        <label className="inline-flex cursor-pointer items-center gap-1 text-base text-foreground hover:underline">
          <Paperclip className="size-4" aria-hidden="true" />
          Attach Portfolio
          <input
            type="file"
            multiple
            accept="image/*,.pdf"
            className="sr-only"
            onChange={(e) => setFiles(Array.from(e.target.files ?? []).map((f) => f.name))}
          />
        </label>
        <span className="text-xs text-muted-foreground">{`Attachments (${files.length})`}</span>
      </div>

      <button type="submit" className={`${pillButton} w-full`}>
        Submit Application
      </button>

      {sent && (
        <p role="status" className="text-center text-sm text-muted-foreground">
          Your email app has opened with your application. Please attach your portfolio photos there and press send.
        </p>
      )}
    </form>
  )
}
