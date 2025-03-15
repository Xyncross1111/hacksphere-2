"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from 'framer-motion';
import { Canvas, FabricImage, Text } from "fabric"
import html2canvas from "html2canvas"

interface CanvasSize {
  width: number;
  height: number;
}

export default function DigitalSwag() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [canvas, setCanvas] = useState<Canvas | null>(null)
  const [participantName, setParticipantName] = useState<string>("Your Name")
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)
  const [canvasSize, setCanvasSize] = useState<CanvasSize>({ width: 1080, height: 1920 })
  const imgRef = useRef<FabricImage | null>(null)

  useEffect(() => {
    const updateCanvasSize = (): void => {
      const screenHeight = window.innerHeight * 0.8
      const aspectRatio = 1080 / 1920
      const newWidth = screenHeight * aspectRatio
      setCanvasSize({ width: newWidth, height: screenHeight })
    }
    updateCanvasSize()
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    const fabricCanvas = new Canvas(canvasRef.current, {
      backgroundColor: "#ffffff",
      width: canvasSize.width,
      height: canvasSize.height,
    })

    setCanvas(fabricCanvas)

    return () => {
      fabricCanvas.dispose()
    }
  }, [canvasSize])

  useEffect(() => {
    if (!canvas) return
    const image = new Image()
    image.src = "data/template.png"
    image.onload = () => {
      const fabricImage = new FabricImage(image)
      fabricImage.scaleToWidth(canvasSize.width)
      fabricImage.scaleToHeight(canvasSize.height)
      fabricImage.set({
        selectable: false,
        evented: false,
      })
      canvas.add(fabricImage)
      setImageLoaded(true)
      canvas.renderAll()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas])

  useEffect(() => {
    if (!canvas) return
    if (!imageLoaded) return
    const leftPercent = 14.5
    const topPercent = 63
    const fontPercentage = 65 / 1000
    const canvasLeft = canvasSize.width * (leftPercent / 100)
    const canvasTop = canvasSize.height * (topPercent / 100)

    // Add neon-glow name text
    const text = new Text(participantName, {
      left: canvasLeft,
      top: canvasTop,
      fontSize: canvasSize.width * fontPercentage,
      fill: "#FFFFFF",
      fontFamily: "Segoe UI",
      textAlign: "center",
      fontWeight: "bold",
      selectable: false,
      evented: false,
    })
    canvas.add(text)
    canvas.bringObjectToFront(text)
    canvas.renderAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas, imageLoaded])

  useEffect(() => {
    if (canvas) {
      const textObj = canvas.getObjects().find((obj) => obj.type === "text") as Text | undefined
      if (textObj) {
        textObj.set({ text: participantName })
        canvas.bringObjectToFront(textObj)
        canvas.renderAll()
      }
    }
  }, [canvas, participantName])

  // Handle Image Upload - Modified for centered square image
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length > 0 && canvas) {
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.onload = (event: ProgressEvent<FileReader>) => {
        const img = new Image()
        img.src = event.target?.result as string

        img.onload = () => {
          // Remove existing image if any
          if (imgRef.current) {
            canvas.remove(imgRef.current)
          }

          if (img.naturalHeight > img.naturalWidth) {
            img.height = img.naturalWidth
            img.width = img.naturalWidth
          } else {
            img.height = img.naturalHeight
            img.width = img.naturalHeight
          }

          const fabricImg = new FabricImage(img)

          // Calculate image dimensions based on percentages
          const imageWidthPercent = 68 // 68% of canvas width
          const scale = (canvasSize.width * (imageWidthPercent / 100)) / img.width

          // Position at center by default (50% of width, 45% of height)
          const leftPercent = 50
          const topPercent = 41.3

          // Convert percentages to actual pixel values for fabric.js
          const centerX = canvasSize.width * (leftPercent / 100)
          const centerY = canvasSize.height * (topPercent / 100)

          // Set image properties
          fabricImg.set({
            left: centerX,
            top: centerY,
            originX: "center",
            originY: "center",
            scaleX: scale,
            scaleY: scale,
          })

          // Store reference and add to canvas
          imgRef.current = fabricImg
          canvas.backgroundImage = fabricImg
          canvas.renderAll()
        }
      }

      reader.readAsDataURL(file)
    }
  }

  // Download as PNG
  const downloadImage = (): void => {
    if (canvasRef.current) {
      html2canvas(canvasRef.current).then((canvasImg) => {
        const link = document.createElement("a")
        const name = participantName || "digital_swag"
        link.download = `${name}.png`
        link.href = canvasImg.toDataURL("image/png")
        link.click()
      })
    }
  }

  const starPositions = Array(20).fill(0).map(() => ({
    x: Math.random() * 100, // Use percentage instead of absolute pixels
    y: Math.random() * 100,
    duration: Math.random() * 5 + 5
  }));

  return (
    <section className="py-20 space-gradient relative overflow-hidden">

      <div className="absolute inset-0">
        {starPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="star"
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`
            }}
          />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-center min-h-screen overflow-hidden relative">
        {/* Canvas Container */}
        <div
          className={`relative border-[3px] border-blue-400 shadow-2xl rounded-lg overflow-hidden backdrop-blur-lg bg-opacity-30`}
          style={{ width: canvasSize.width, height: canvasSize.height }}
        >
          <canvas ref={canvasRef} className="w-full h-full"></canvas>
        </div>

        {/* Control Panel */}
        <div className="mt-6 px-16 w-full max-w-md p-6 rounded-xl shadow-xl bg-black/50 backdrop-blur-lg text-white border border-blue-500">
          <h2 className="text-center text-2xl font-orbitron tracking-wide text-blue-400">Customize Your Swag 🚀</h2>

          {/* Name Input */}
          <input
            type="text"
            value={participantName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setParticipantName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-3 mt-4 border border-blue-400 rounded-md bg-black/60 text-blue-300 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Image Upload */}
          <label className="mt-4 block text-center text-blue-300 cursor-pointer hover:text-blue-500">
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />📸 Upload Your Image
          </label>

          {/* Download Button */}
          <button
            onClick={downloadImage}
            className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Download Your Swag
          </button>
        </div>
      </div>
    </section>
  )
}