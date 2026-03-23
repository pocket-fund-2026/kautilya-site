"use client"

import { useEffect, useRef, useCallback } from "react"
import { useInView } from "motion/react"

interface NumberTickerProps {
  value: number
  startValue?: number
  delay?: number
  duration?: number
  decimalPlaces?: number
  prefix?: string
  suffix?: string
  className?: string
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export function NumberTicker({
  value,
  startValue = 0,
  delay = 0,
  duration = 1.6,
  decimalPlaces = 0,
  prefix = "",
  suffix = "",
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)
  const isInView = useInView(ref, { once: true, margin: "0px" })

  const format = useCallback(
    (n: number) =>
      prefix +
      Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      }).format(Number(n.toFixed(decimalPlaces))) +
      suffix,
    [decimalPlaces, prefix, suffix],
  )

  useEffect(() => {
    if (!isInView || hasAnimated.current || !ref.current) return
    hasAnimated.current = true

    const el = ref.current
    const from = startValue
    const to = value
    const durationMs = duration * 1000

    let start: number | null = null
    let frame: number

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = easeOutExpo(progress)
      const current = from + (to - from) * eased

      el.textContent = format(current)

      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
    }

    const timer = setTimeout(() => {
      frame = requestAnimationFrame(step)
    }, delay * 1000)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(frame)
    }
  }, [isInView, value, startValue, delay, duration, format])

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-block", fontVariantNumeric: "tabular-nums" }}
    >
      {format(startValue)}
    </span>
  )
}
