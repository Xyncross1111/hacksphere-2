"use client";
import { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import html2canvas from "html2canvas";
import { motion } from "framer-motion";

interface CanvasSize {
  width: number;
  height: number;
}

export default function DigitalSwag() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [participantName, setParticipantName] = useState("Your Name");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [canvasSize, setCanvasSize] = useState<CanvasSize>({ width: 1080, height: 1920 });
  const imgRef = useRef<fabric.Image | null>(null);

  useEffect(() => {
    const updateCanvasSize = () => {
      const screenHeight = window.innerHeight * 0.8;
      const aspectRatio = 1080 / 1920;
      const newWidth = screenHeight * aspectRatio;
      setCanvasSize({ width: newWidth, height: screenHeight });
    };
    updateCanvasSize();
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: "#ffffff",
      width: canvasSize.width,
      selection: false,
      height: canvasSize.height,
    });

    setCanvas(fabricCanvas);

    return () => {
      fabricCanvas.dispose();
    };
  }, [canvasSize]);

  useEffect(() => {
    if (!canvas) return;
    const image = new Image();
    image.src = "/assets/images/swag/template_bg.png";
    image.onload = () => {
      const fabricImage = new fabric.FabricImage(image);
      fabricImage.scaleToWidth(canvasSize.width);
      fabricImage.scaleToHeight(canvasSize.height);
      fabricImage.set({
        selectable: false,
        evented: false,
      });
      canvas.add(fabricImage);
      setImageLoaded(true);
      canvas.renderAll();
    };
    // Load The Placeholder background image
    const placeholderImage = new Image();
    placeholderImage.src = "/assets/images/swag/place_holder.webp";
    placeholderImage.onload = () => {
      const fabricImg = new fabric.FabricImage(placeholderImage);

      // Calculate image dimensions based on percentages
      const imageWidthPercent = 71; // 70% of canvas width
      const scale = (canvasSize.width * (imageWidthPercent / 100)) / placeholderImage.width;

      // Position at center by default (50% of width, 45% of height)
      const leftPercent = 50;
      const topPercent = 41.3;

      // Convert percentages to actual pixel values for fabric.js
      const centerX = canvasSize.width * (leftPercent / 100);
      const centerY = canvasSize.height * (topPercent / 100);

      // Set image properties
      fabricImg.set({
        left: centerX,
        top: centerY,
        originX: "center",
        originY: "center",
        scaleX: scale,
        scaleY: scale,
      });

      // Store reference and add to canvas
      imgRef.current = fabricImg;
      canvas.backgroundImage = fabricImg;
      canvas.renderAll();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas]);

  useEffect(() => {
    if (!canvas) return;
    if (!imageLoaded) return;
    const leftPercent = 14.5;
    const topPercent = 63;
    const fontPercentage = 65 / 1000;
    const canvasLeft = canvasSize.width * (leftPercent / 100);
    const canvasTop = canvasSize.height * (topPercent / 100);

    // Add neon-glow name text
    const text = new fabric.Text(participantName, {
      left: canvasLeft,
      top: canvasTop,
      fontSize: canvasSize.width * fontPercentage,
      fill: "#FFFFFF",
      fontFamily: "Segoe UI",
      textAlign: "center",
      fontWeight: "bold",
      selectable: false,
      evented: false,
    });
    canvas.add(text);
    canvas.bringObjectToFront(text);
    canvas.renderAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas, imageLoaded]);

  useEffect(() => {
    if (canvas) {
      const textObj = canvas.getObjects().find((obj) => obj.type === "text");
      if (textObj) {
        textObj.set({ text: participantName });
        canvas.bringObjectToFront(textObj);
        canvas.renderAll();
      }
    }
  }, [canvas, participantName]);

  // Handle Image Upload - Modified for centered square image
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0 && canvas) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = new Image();
        if (typeof event.target?.result === 'string') {
          img.src = event.target.result;
        }

        img.onload = () => {
          // Remove existing image if any
          if (imgRef.current) {
            canvas.remove(imgRef.current);
          }

          if (img.naturalHeight > img.naturalWidth) {
            img.height = img.naturalWidth;
            img.width = img.naturalWidth;
          } else {
            img.height = img.naturalHeight;
            img.width = img.naturalHeight;
          }

          const fabricImg = new fabric.FabricImage(img);

          // Calculate image dimensions based on percentages
          const imageWidthPercent = 70; // 70% of canvas width
          const scale =
            (canvasSize.width * (imageWidthPercent / 100)) / img.width;

          // Position at center by default (50% of width, 45% of height)
          const leftPercent = 50;
          const topPercent = 41.3;

          // Convert percentages to actual pixel values for fabric.js
          const centerX = canvasSize.width * (leftPercent / 100);
          const centerY = canvasSize.height * (topPercent / 100);

          // Set image properties
          fabricImg.set({
            left: centerX,
            top: centerY,
            originX: "center",
            originY: "center",
            scaleX: scale,
            scaleY: scale,
          });

          // Store reference and add to canvas
          imgRef.current = fabricImg;
          canvas.backgroundImage = fabricImg;
          canvas.renderAll();
        };
      };

      reader.readAsDataURL(file);
    }
  };

  // Download as PNG
  const downloadImage = () => {
    if (canvasRef.current) {
      html2canvas(canvasRef.current).then((canvasImg) => {
        const link = document.createElement("a");
        const name = participantName || "digital_swag";
        link.download = `${name}.png`;
        link.href = canvasImg.toDataURL("image/png");
        link.click();
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 items-center justify-center min-h-screen overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="star absolute h-1 w-1 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 5 + 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      <div
        className={`relative border-[2px] shadow-2xl rounded-lg overflow-hidden backdrop-blur-lg bg-opacity-30`}
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
          borderImage: "linear-gradient(45deg, #ff6ec4, #7873f5, #1fd1f9) 1",
        }}
      >
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>

      <div className="mt-6 w-full max-w-md p-6 rounded-xl shadow-xl bg-black/50 backdrop-blur-lg text-white border border-blue-500 space-y-4">
  <h2 className="text-center text-2xl font-orbitron tracking-wide text-blue-400">
    Customize Your Swag 🚀
  </h2>

  {/* Name Input */}
  <input
    type="text"
    value={participantName}
    onChange={(e) => setParticipantName(e.target.value)}
    placeholder="Enter your name"
    className="w-full p-3 border border-blue-400 rounded-md bg-black/60 text-blue-300 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
  />

  {/* Image Upload */}
  <label className="w-full bg-gradient-to-r border-2 border-blue-500 text-white py-2 rounded-md shadow-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200">
    <input
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
      className="hidden"
    />
    <p><span className="text-xl">📸</span> Upload Your Image</p>
  </label>

  {/* Download Button */}
  <button
    onClick={downloadImage}
    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md shadow-lg hover:scale-105 transition-transform duration-200"
  >
    Download Your Swag
  </button>
</div>

    </div>
  );
}
