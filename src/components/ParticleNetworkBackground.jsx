import { useEffect, useRef } from "react";

import "./ParticleNetworkBackground.css";

const MAX_PARTICLES = 125;
const PARTICLE_AREA = 18000;
const CONNECTION_DISTANCE = 140;
const POINTER_RADIUS = 125;
const FRAME_INTERVAL = 1000 / 30;

export default function ParticleNetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    const pointer = { x: 0, y: 0, active: false };
    let particles = [];
    let width = 0;
    let height = 0;
    let particleColor = "230, 230, 240";
    let reducedMotion = motionPreference.matches;
    let frameId = 0;
    let timeoutId = 0;

    const cancelAnimation = () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(frameId);
      timeoutId = 0;
      frameId = 0;
    };

    const render = (advance) => {
      context.clearRect(0, 0, width, height);

      if (advance) {
        particles.forEach((particle) => {
          particle.vx += particle.driftX;
          particle.vy += particle.driftY;

          if (pointer.active) {
            const dx = particle.x - pointer.x;
            const dy = particle.y - pointer.y;
            const distance = Math.hypot(dx, dy);

            if (distance > 0 && distance < POINTER_RADIUS) {
              const strength = (1 - distance / POINTER_RADIUS) * 0.035;
              particle.vx += (dx / distance) * strength;
              particle.vy += (dy / distance) * strength;
            }
          }

          particle.vx *= 0.985;
          particle.vy *= 0.985;
          particle.vx = Math.max(-0.25, Math.min(0.25, particle.vx));
          particle.vy = Math.max(-0.25, Math.min(0.25, particle.vy));
          particle.x = (particle.x + particle.vx + width) % width;
          particle.y = (particle.y + particle.vy + height) % height;
        });
      }

      context.fillStyle = `rgba(${particleColor}, 0.36)`;
      context.strokeStyle = `rgba(${particleColor}, 0.12)`;
      context.lineWidth = 0.65;

      particles.forEach((particle, index) => {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();

        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
            const opacity = 0.1 * (1 - Math.sqrt(distanceSquared) / CONNECTION_DISTANCE);
            context.strokeStyle = `rgba(${particleColor}, ${opacity})`;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      });
    };

    const animate = () => {
      frameId = 0;

      if (document.hidden || reducedMotion) return;

      render(true);
      timeoutId = window.setTimeout(() => {
        timeoutId = 0;
        frameId = window.requestAnimationFrame(animate);
      }, FRAME_INTERVAL);
    };

    const startAnimation = () => {
      if (document.hidden || reducedMotion || timeoutId || frameId) return;
      frameId = window.requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.min(MAX_PARTICLES, Math.max(20, Math.round((width * height) / PARTICLE_AREA)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        driftX: (Math.random() - 0.5) * 0.002,
        driftY: (Math.random() - 0.5) * 0.002,
        radius: 0.8 + Math.random() * 0.5,
      }));

      render(false);
    };

    const updateParticleColor = () => {
      const color = window.getComputedStyle(root).getPropertyValue("--particle-color").trim();
      if (color) particleColor = color;
      render(false);
    };

    const handlePointerMove = (event) => {
      if (event.pointerType === "touch") return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimation();
      } else {
        render(false);
        startAnimation();
      }
    };

    const handleMotionPreferenceChange = (event) => {
      reducedMotion = event.matches;
      cancelAnimation();
      render(false);
      startAnimation();
    };

    const themeObserver = new MutationObserver(updateParticleColor);
    themeObserver.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionPreference.addEventListener("change", handleMotionPreferenceChange);

    updateParticleColor();
    resizeCanvas();
    startAnimation();

    return () => {
      cancelAnimation();
      themeObserver.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionPreference.removeEventListener("change", handleMotionPreferenceChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-network-background" aria-hidden="true" />;
}
