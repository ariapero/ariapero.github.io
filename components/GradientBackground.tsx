import React, { useEffect, useRef } from 'react';
import { createNoise3D } from 'simplex-noise';

const GradientBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasARef = useRef<HTMLCanvasElement>(null);
  const canvasBRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasARef.current || !canvasBRef.current) return;

    const circleCount = 150;
    const circlePropCount = 8;
    const circlePropsLength = circleCount * circlePropCount;
    const baseSpeed = 0.1;
    const rangeSpeed = 1;
    const baseTTL = 150;
    const rangeTTL = 200;
    const baseRadius = 100;
    const rangeRadius = 200;
    const rangeHue = 60;
    const xOff = 0.0015;
    const yOff = 0.0015;
    const zOff = 0.0015;
    // const backgroundColor = 'hsla(0,0%,5%,1)';
    const backgroundColor = 'hsla(183, 42%, 40%,1)';

    const canvasA = canvasARef.current;
    const canvasB = canvasBRef.current;
    const ctxA = canvasA.getContext('2d')!;
    const ctxB = canvasB.getContext('2d')!;
    let circleProps: Float32Array;
    // let noise3D: typeof createNoise3D;
    const noise3D = createNoise3D();
    let baseHue: number;

    const initCircles = () => {
        circleProps = new Float32Array(circlePropsLength);
        // simplex = new SimplexNoise();
        const noise3D = createNoise3D();
        baseHue = 220;

        for (let i = 0; i < circlePropsLength; i += circlePropCount) {
        initCircle(i);
        }
    };

    const initCircle = (i: number) => {
        let x = Math.random() * canvasA.width;
        let y = Math.random() * canvasA.height;
        let n = noise3D(x * xOff, y * yOff, baseHue * zOff);
        // let n = noise3D({ x: x * xOff, y: y * yOff, z: baseHue * zOff });
        let t = Math.random() * Math.PI * 2;
        let speed = baseSpeed + Math.random() * rangeSpeed;
        let vx = speed * Math.cos(t);
        let vy = speed * Math.sin(t);
        let life = 0;
        let ttl = baseTTL + Math.random() * rangeTTL;
        let radius = baseRadius + Math.random() * rangeRadius;
        let hue = baseHue + n * rangeHue;

        circleProps.set([x, y, vx, vy, life, ttl, radius, hue], i);
    };

    const updateCircles = () => {
      baseHue++;

      for (let i = 0; i < circlePropsLength; i += circlePropCount) {
        updateCircle(i);
      }
    };

    const updateCircle = (i: number) => {
      let [x, y, vx, vy, life, ttl, radius, hue] = circleProps.slice(i, i + circlePropCount);

      drawCircle(x, y, life, ttl, radius, hue);

      life++;

      circleProps[i] = x + vx;
      circleProps[i + 1] = y + vy;
      circleProps[i + 4] = life;

      if (checkBounds(x, y, radius) || life > ttl) {
        initCircle(i);
      }
    };

    const drawCircle = (x: number, y: number, life: number, ttl: number, radius: number, hue: number) => {
      ctxA.save();
      ctxA.fillStyle = `hsla(${hue},60%,30%,${fadeInOut(life, ttl)})`;
      ctxA.beginPath();
      ctxA.arc(x, y, radius, 0, Math.PI * 2);
      ctxA.fill();
      ctxA.closePath();
      ctxA.restore();
    };

    const checkBounds = (x: number, y: number, radius: number) => {
      return (
        x < -radius ||
        x > canvasA.width + radius ||
        y < -radius ||
        y > canvasA.height + radius
      );
    };

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      
      canvasA.width = innerWidth;
      canvasA.height = innerHeight;

      ctxA.drawImage(canvasB, 0, 0);

      canvasB.width = innerWidth;
      canvasB.height = innerHeight;
      
      ctxB.drawImage(canvasA, 0, 0);
    };

    const render = () => {
      ctxB.save();
      ctxB.filter = 'blur(50px)';
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();
    };

    const draw = () => {
      ctxA.clearRect(0, 0, canvasA.width, canvasA.height);
      ctxB.fillStyle = backgroundColor;
      ctxB.fillRect(0, 0, canvasB.width, canvasB.height);
      updateCircles();
      render();
      requestAnimationFrame(draw);
    };

    const fadeInOut = (t: number, m: number) => {
      let hm = 0.5 * m;
      return Math.abs((t + hm) % m - hm) / hm;
    };

    resize();
    initCircles();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div ref={containerRef} className="content--canvas z-0" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      <canvas ref={canvasARef} style={{ display: 'none' }} />
      <canvas ref={canvasBRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>
  );
};

export default GradientBackground;