import { useEffect } from "react"

export function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void,
  active = true
) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    if (active) {
      document.addEventListener("mousedown", handleClick)
    }

    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [ref, callback, active])
}
