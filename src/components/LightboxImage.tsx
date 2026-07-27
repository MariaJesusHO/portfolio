'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function LightboxImage({
  src,
  alt,
  width,
  height,
  caption,
  containerClassName = '',
}: {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  containerClassName?: string
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <figure>
        <div
          className={`overflow-hidden rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow cursor-zoom-in ${containerClassName}`}
          onClick={() => setOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setOpen(true)}
          aria-label={`View full size: ${alt}`}
        >
          <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto" />
        </div>
        {caption && (
          <figcaption className="mt-2 text-xs text-neutral-400 text-center">
            {caption}
          </figcaption>
        )}
      </figure>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-start justify-center overflow-y-auto p-6 pt-10 cursor-zoom-out"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full my-4 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-8 right-0 text-white/60 hover:text-white text-sm font-medium transition-colors"
            >
              ✕ Close
            </button>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            {caption && (
              <p className="mt-3 text-sm text-neutral-400 text-center">{caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
