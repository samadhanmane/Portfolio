import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  label?: string;
  isAnchor?: boolean;
  pulsePhase: number;
}

interface Packet {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export const SystemFlowVisualizer: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let mouseX = -1000;
    let mouseY = -1000;
    let isVisible = true;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Fixed architecture anchor points for AI systems
    const anchorLabels = [
      'INGESTION_STREAM',
      'VECTOR_INDEX',
      'RAG_STATE_MACHINE',
      'AGENT_AUDIT',
      'GROUNDED_SYNTHESIS'
    ];

    let nodes: Node[] = [];
    let packets: Packet[] = [];

    const initNodes = () => {
      nodes = [];
      packets = [];

      const isMobile = width < 768;
      const totalNodes = isMobile ? 18 : 34;

      // Create main system anchor nodes
      const anchorCount = isMobile ? 3 : anchorLabels.length;
      for (let i = 0; i < anchorCount; i++) {
        const angle = (i / anchorCount) * Math.PI * 2;
        const radius = Math.min(width, height) * (isMobile ? 0.35 : 0.28);
        const cx = width * 0.55 + Math.cos(angle) * radius;
        const cy = height * 0.5 + Math.sin(angle) * radius * 0.75;

        nodes.push({
          x: Math.max(40, Math.min(width - 40, cx)),
          y: Math.max(40, Math.min(height - 40, cy)),
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: isMobile ? 4 : 5,
          baseRadius: isMobile ? 4 : 5,
          label: anchorLabels[i],
          isAnchor: true,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }

      // Create surrounding ambient vector nodes
      for (let i = anchorCount; i < totalNodes; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 1.5,
          baseRadius: Math.random() * 1.5 + 1.5,
          isAnchor: false,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }

      // Seed packets
      const packetCount = isMobile ? 4 : 9;
      for (let i = 0; i < packetCount; i++) {
        const from = Math.floor(Math.random() * nodes.length);
        let to = Math.floor(Math.random() * nodes.length);
        if (to === from) to = (from + 1) % nodes.length;

        packets.push({
          fromNode: from,
          toNode: to,
          progress: Math.random(),
          speed: 0.003 + Math.random() * 0.004
        });
      }
    };

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    // Intersection observer to pause rendering when offscreen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !animationFrameId && !prefersReducedMotion) {
        render();
      }
    }, { threshold: 0.05 });

    observer.observe(canvas);
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    handleResize();

    const maxDistance = width < 768 ? 110 : 150;

    const render = () => {
      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid coordinate marks
      ctx.strokeStyle = 'rgba(243, 241, 234, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        if (!prefersReducedMotion) {
          nodeA.x += nodeA.vx;
          nodeA.y += nodeA.vy;

          // Gentle mouse repel/attract
          const dxMouse = mouseX - nodeA.x;
          const dyMouse = mouseY - nodeA.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          if (distMouse < 160 && distMouse > 0) {
            const force = (160 - distMouse) / 160;
            nodeA.x -= (dxMouse / distMouse) * force * 0.6;
            nodeA.y -= (dyMouse / distMouse) * force * 0.6;
          }

          // Boundary bounce
          if (nodeA.x < 20) { nodeA.x = 20; nodeA.vx *= -1; }
          if (nodeA.x > width - 20) { nodeA.x = width - 20; nodeA.vx *= -1; }
          if (nodeA.y < 20) { nodeA.y = 20; nodeA.vy *= -1; }
          if (nodeA.y > height - 20) { nodeA.y = height - 20; nodeA.vy *= -1; }
        }

        // Draw connections to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (nodeA.isAnchor || nodeB.isAnchor ? 0.12 : 0.05);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(243, 241, 234, ${alpha})`;
            ctx.lineWidth = nodeA.isAnchor && nodeB.isAnchor ? 1.2 : 0.8;
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }

      // Update & Draw Packets (traveling tokens)
      if (!prefersReducedMotion) {
        for (let p of packets) {
          p.progress += p.speed;
          if (p.progress >= 1) {
            p.progress = 0;
            p.fromNode = Math.floor(Math.random() * nodes.length);
            p.toNode = Math.floor(Math.random() * nodes.length);
            if (p.toNode === p.fromNode) p.toNode = (p.fromNode + 1) % nodes.length;
          }

          const n1 = nodes[p.fromNode];
          const n2 = nodes[p.toNode];
          if (!n1 || !n2) continue;

          const px = n1.x + (n2.x - n1.x) * p.progress;
          const py = n1.y + (n2.y - n1.y) * p.progress;

          // Packet glow
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(232, 154, 60, 0.85)';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(px, py, 5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(232, 154, 60, 0.2)';
          ctx.fill();
        }
      }

      // Draw nodes
      for (let node of nodes) {
        node.pulsePhase += 0.02;
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 1;

        if (node.isAnchor) {
          // Anchor ring
          ctx.beginPath();
          ctx.arc(node.x, node.y, (node.radius + 5) * pulse, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(232, 154, 60, 0.25)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Anchor core
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#E89A3C';
          ctx.fill();

          // Label
          if (node.label && width > 640) {
            ctx.font = '10px "JetBrains Mono", monospace';
            ctx.fillStyle = 'rgba(167, 165, 157, 0.6)';
            ctx.fillText(node.label, node.x + 12, node.y + 3);
          }
        } else {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(243, 241, 234, 0.4)';
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0B] via-transparent to-[#0C0C0B]/60" />
    </div>
  );
};

export default SystemFlowVisualizer;
