import React, { useEffect, useRef } from 'react';

const PipelineBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasARef = useRef<HTMLCanvasElement>(null);
  const canvasBRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasARef.current || !canvasBRef.current) return;

    const pipeCount = 30;
    const pipePropCount = 8;
    const pipePropsLength = pipeCount * pipePropCount;
    const turnCount = 8;
    const turnAmount = (360 / turnCount) * (Math.PI / 180);
    const turnChanceRange = 58;
    const baseSpeed = 0.5;
    const rangeSpeed = 1;
    const baseTTL = 100;
    const rangeTTL = 300;
    const baseWidth = 2;
    const rangeWidth = 4;
    const baseHue = 180;
    const rangeHue = 60;
    const backgroundColor = 'hsla(150,80%,1%,1)';

    const canvasA = canvasARef.current;
    const canvasB = canvasBRef.current;
    const ctxA = canvasA.getContext('2d')!;
    const ctxB = canvasB.getContext('2d')!;
    let center: number[] = [];
    let tick = 0;
    let pipeProps: Float32Array;

    const initPipes = () => {
      pipeProps = new Float32Array(pipePropsLength);
      for (let i = 0; i < pipePropsLength; i += pipePropCount) {
        initPipe(i);
      }
    };

    const initPipe = (i: number) => {
      let x = Math.random() * canvasA.width;
      let y = center[1];
      let direction = (Math.round(Math.random()) ? Math.PI / 2 : Math.PI * 2 - Math.PI / 2);
      let speed = baseSpeed + Math.random() * rangeSpeed;
      let life = 0;
      let ttl = baseTTL + Math.random() * rangeTTL;
      let width = baseWidth + Math.random() * rangeWidth;
      let hue = baseHue + Math.random() * rangeHue;

      pipeProps.set([x, y, direction, speed, life, ttl, width, hue], i);
    };

    const updatePipes = () => {
      tick++;
      for (let i = 0; i < pipePropsLength; i += pipePropCount) {
        updatePipe(i);
      }
    };

    const updatePipe = (i: number) => {
      let [x, y, direction, speed, life, ttl, width, hue] = pipeProps.slice(i, i + pipePropCount);

      drawPipe(x, y, life, ttl, width, hue);

      life++;
      x += Math.cos(direction) * speed;
      y += Math.sin(direction) * speed;
      let turnChance = !(tick % Math.round(Math.random() * turnChanceRange)) && (!(Math.round(x) % 6) || !(Math.round(y) % 6));
      let turnBias = Math.round(Math.random()) ? -1 : 1;
      direction += turnChance ? turnAmount * turnBias : 0;

      pipeProps.set([x, y, direction, speed, life, ttl, width, hue], i);

      checkBounds(x, y);
      if (life > ttl) initPipe(i);
    };

    const drawPipe = (x: number, y: number, life: number, ttl: number, width: number, hue: number) => {
      ctxA.save();
      ctxA.strokeStyle = `hsla(${hue},75%,50%,${fadeInOut(life, ttl) * 0.125})`;
      ctxA.beginPath();
      ctxA.arc(x, y, width, 0, Math.PI * 2);
      ctxA.stroke();
      ctxA.closePath();
      ctxA.restore();
    };

    const checkBounds = (x: number, y: number) => {
      if (x > canvasA.width) x = 0;
      if (x < 0) x = canvasA.width;
      if (y > canvasA.height) y = 0;
      if (y < 0) y = canvasA.height;
    };

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      
      canvasA.width = innerWidth;
      canvasA.height = innerHeight;

      ctxA.drawImage(canvasB, 0, 0);

      canvasB.width = innerWidth;
      canvasB.height = innerHeight;
      
      ctxB.drawImage(canvasA, 0, 0);

      center[0] = 0.5 * canvasA.width;
      center[1] = 0.5 * canvasA.height;
    };

    const render = () => {
      ctxB.save();
      ctxB.fillStyle = backgroundColor;
      ctxB.fillRect(0, 0, canvasB.width, canvasB.height);
      ctxB.restore();

      ctxB.save();
      ctxB.filter = 'blur(12px)';
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();

      ctxB.save();
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();
    };

    const draw = () => {
      updatePipes();
      render();
      requestAnimationFrame(draw);
    };

    const fadeInOut = (t: number, m: number) => {
      let hm = 0.5 * m;
      return Math.abs((t + hm) % m - hm) / hm;
    };

    resize();
    initPipes();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div ref={containerRef} className="content--canvas" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      <canvas ref={canvasARef} style={{ display: 'none' }} />
      <canvas ref={canvasBRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>
  );
};

export default PipelineBackground;