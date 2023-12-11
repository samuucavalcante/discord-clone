'use client'

import { UploadDropzone } from '@/lib/uploadthing'
import '@uploadthing/react/styles.css'
import { X } from 'lucide-react'
import Image from 'next/image'

type ErrorParams = { message: string }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ClientUploadCompleteParams = any

type FileUploadProps = {
  onChange(url?: string): void
  value: string
  endpoint: 'messageFile' | 'serverImage'
}

export function FileUpload({ endpoint, onChange, value }: FileUploadProps) {
  const onClientUploadComplete = async (res: ClientUploadCompleteParams) => {
    onChange(res?.[0].url)
  }

  const onUploadError = async (error: ErrorParams) => {
    console.log(error)
  }

  const fileType = value?.split('.').pop()
  if (value && fileType !== 'pdf') {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="Upload" className="rounded-full" />
        <button
          onClick={() => onChange('')}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    )
  }

  return (
    <UploadDropzone
      onClientUploadComplete={onClientUploadComplete}
      endpoint={endpoint}
      onUploadError={onUploadError}
    />
  )
}
