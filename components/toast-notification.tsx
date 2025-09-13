"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaCheck, FaExclamationTriangle, FaInfoCircle, FaTimes } from "react-icons/fa"

interface Toast {
  id: string
  type: "success" | "error" | "info"
  message: string
  duration?: number
}

interface ToastNotificationProps {
  toast: Toast
  onRemove: (id: string) => void
}

const toastIcons = {
  success: FaCheck,
  error: FaExclamationTriangle,
  info: FaInfoCircle,
}

const toastColors = {
  success: "bg-green-500/20 text-green-400 border-green-500/30",
  error: "bg-red-500/20 text-red-400 border-red-500/30",
  info: "bg-blue-500/20 text-blue-400 border-blue-500/30",
}

export function ToastNotification({ toast, onRemove }: ToastNotificationProps) {
  const [isVisible, setIsVisible] = useState(true)
  const IconComponent = toastIcons[toast.type]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => onRemove(toast.id), 300)
    }, toast.duration || 5000)

    return () => clearTimeout(timer)
  }, [toast.id, toast.duration, onRemove])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className={`flex items-center space-x-3 p-4 rounded-lg border backdrop-blur-md ${toastColors[toast.type]} max-w-sm`}
        >
          <IconComponent className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm flex-1">{toast.message}</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setIsVisible(false)
              setTimeout(() => onRemove(toast.id), 300)
            }}
            className="text-current hover:opacity-70 transition-opacity"
          >
            <FaTimes className="h-4 w-4" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prev) => [...prev, { ...toast, id }])
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  // Expose addToast globally for easy access
  useEffect(() => {
    ;(window as any).showToast = addToast
  }, [])

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <ToastNotification key={toast.id} toast={toast} onRemove={removeToast} />
      ))}
    </div>
  )
}
