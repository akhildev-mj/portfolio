"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

export function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mouseIsMoving = useRef<boolean>(false);
  const { theme } = useTheme();

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current = [];
      canvasRef.current.width = canvasContainerRef.current.clientWidth;
      canvasRef.current.height = canvasContainerRef.current.clientHeight;
      initCanvas();
    }
  };

  // Update the initCanvas function to create more dynamic particles
  const initCanvas = () => {
    if (canvasRef.current && context.current) {
      const isDarkMode = theme === "dark";

      for (let i = 0; i < quantity; i++) {
        const x = Math.floor(Math.random() * canvasRef.current.width);
        const y = Math.floor(Math.random() * canvasRef.current.height);
        const radius = Math.random() * 2 + 0.5;
        const speed = Math.random() * 0.5 + 0.2;

        // Generate colors based on theme with more variety
        const hue = isDarkMode
          ? Math.floor(Math.random() * 60) + 220
          : // blues/purples for dark mode
            Math.floor(Math.random() * 60) + 280; // purples/pinks for light mode

        const saturation = Math.floor(Math.random() * 30) + 70;
        const lightness = isDarkMode
          ? Math.floor(Math.random() * 20) + 70
          : Math.floor(Math.random() * 20) + 60;
        const a = Math.random() * 0.5 + 0.1;

        circles.current.push({
          x,
          y,
          radius,
          originalRadius: radius,
          color: `hsla(${hue}, ${saturation}%, ${lightness}%, ${a})`,
          originalColor: `hsla(${hue}, ${saturation}%, ${lightness}%, ${a})`,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
        });
      }
      animate();
    }
  };

  // Update the animate function for smoother interactions
  const animate = () => {
    if (canvasRef.current && context.current) {
      context.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );

      circles.current.forEach((circle) => {
        // Move circles with smoother motion
        circle.x += circle.vx;
        circle.y += circle.vy;

        // Bounce off edges with damping
        if (circle.x < 0 || circle.x > canvasRef.current!.width) {
          circle.vx *= -0.95;
          circle.x = circle.x < 0 ? 0 : canvasRef.current!.width;
        }
        if (circle.y < 0 || circle.y > canvasRef.current!.height) {
          circle.vy *= -0.95;
          circle.y = circle.y < 0 ? 0 : canvasRef.current!.height;
        }

        // Mouse interaction with smoother transitions
        if (mouseIsMoving.current) {
          const dx = mousePosition.current.x - circle.x;
          const dy = mousePosition.current.y - circle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            const angle = Math.atan2(dy, dx);
            const force = (maxDistance - distance) / maxDistance;
            const easedForce = force * force * (3 - 2 * force); // Smoothing easing function

            circle.vx -= (Math.cos(angle) * easedForce) / (staticity * 0.8);
            circle.vy -= (Math.sin(angle) * easedForce) / (staticity * 0.8);

            // Increase size and change color on hover with smooth transition
            circle.radius = circle.originalRadius * (1 + easedForce * 2);

            // Extract color components for smoother transition
            const parts = circle.originalColor.match(
              /hsla$$(\d+),\s*(\d+)%,\s*(\d+)%,\s*([.\d]+)$$/
            );
            if (parts) {
              const h = Number.parseInt(parts[1]);
              const s = Number.parseInt(parts[2]);
              const l = Number.parseInt(parts[3]);
              const a = Number.parseFloat(parts[4]);

              // Shift hue slightly and increase brightness
              const newH = (h + 10) % 360;
              const newL = Math.min(l + 15, 90);
              const newA = Math.min(a + force * 0.5, 0.9);

              circle.color = `hsla(${newH}, ${s}%, ${newL}%, ${newA})`;
            }
          } else {
            // Gradually return to original state
            circle.radius = circle.radius * 0.95 + circle.originalRadius * 0.05;
            circle.color =
              circle.color === circle.originalColor
                ? circle.originalColor
                : circle.originalColor; // In a real implementation, we'd interpolate colors
          }
        } else {
          // Return to original state when mouse isn't moving
          circle.radius = circle.radius * 0.98 + circle.originalRadius * 0.02;
          circle.color = circle.originalColor;
        }

        // Draw circle with a subtle glow effect
        context.current!.beginPath();
        context.current!.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        context.current!.fillStyle = circle.color;
        context.current!.fill();

        // Optional: Add subtle glow
        if (circle.radius > 1.2) {
          context.current!.beginPath();
          context.current!.arc(
            circle.x,
            circle.y,
            circle.radius * 1.5,
            0,
            Math.PI * 2
          );
          context.current!.fillStyle = circle.color.replace(
            /[^,]+(?=\))/,
            "0.1"
          );
          context.current!.fill();
        }
      });

      requestAnimationFrame(animate);
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect();
      mousePosition.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
      mouseIsMoving.current = true;

      // Reset the staticity counter
      setTimeout(() => {
        mouseIsMoving.current = false;
      }, 100);
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
      resizeCanvas();
    }

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Refresh particles when theme changes
  useEffect(() => {
    if (context.current && canvasRef.current) {
      circles.current = [];
      context.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      initCanvas();
    }
  }, [theme, refresh]);

  return (
    <div ref={canvasContainerRef} className={`particles ${className}`}>
      <canvas ref={canvasRef} />
    </div>
  );
}
