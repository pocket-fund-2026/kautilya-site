"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import type React from "react"
import { annotate } from "rough-notation"
import { type RoughAnnotation } from "rough-notation/lib/model"

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket"

interface HighlighterProps {
  children: React.ReactNode
  action?: AnnotationAction
  color?: string
  strokeWidth?: number
  animationDuration?: number
  iterations?: number
  padding?: number
  multiline?: boolean
  isView?: boolean
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const [isInView, setIsInView] = useState(!isView)

  // Manual visibility detection. We avoid motion's `useInView` here because
  // on client-side route re-entries the element is often already on screen
  // before the IntersectionObserver attaches, and with `once: true` the
  // observer never fires — leaving the annotation permanently hidden after
  // the first page load.
  useEffect(() => {
    if (!isView) return
    const el = elementRef.current
    if (!el) return

    // If the element is already in the viewport at mount, show immediately.
    const rect = el.getBoundingClientRect()
    const verticalMargin = window.innerHeight * 0.1
    if (rect.top < window.innerHeight - verticalMargin && rect.bottom > verticalMargin) {
      setIsInView(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsInView(true)
          io.disconnect()
        }
      },
      { rootMargin: "-10%" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [isView])

  const shouldShow = !isView || isInView

  useLayoutEffect(() => {
    const element = elementRef.current
    let annotation: RoughAnnotation | null = null
    let resizeObserver: ResizeObserver | null = null

    if (shouldShow && element) {
      const annotationConfig = {
        type: action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      }

      const currentAnnotation = annotate(element, annotationConfig)
      annotation = currentAnnotation
      currentAnnotation.show()

      resizeObserver = new ResizeObserver(() => {
        currentAnnotation.hide()
        currentAnnotation.show()
      })

      resizeObserver.observe(element)
      resizeObserver.observe(document.body)
    }

    return () => {
      annotation?.remove()
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
    }
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ])

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  )
}
