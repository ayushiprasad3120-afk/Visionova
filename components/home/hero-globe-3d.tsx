"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * A real WebGL-rendered 3D globe: a translucent lit sphere, a wireframe
 * grid shell, a scatter of surface "node" points, and a few curved
 * connection arcs — all rotating together as one 3D object with genuine
 * perspective and lighting (not a flat SVG imitation).
 *
 * Client-only by nature (creates a WebGLRenderer on mount), so this
 * component should be loaded via `next/dynamic` with `ssr: false`.
 */
export function HeroGlobe3D({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const WINE = 0x5c1a2b;
    const SAND = 0xd9c7ad;
    const CREAM = 0xf7f1e8;

    let width = container.clientWidth || 560;
    let height = container.clientHeight || 560;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Lighting — soft ambient plus one warm key light for gentle shading
    scene.add(new THREE.AmbientLight(CREAM, 1.1));
    const keyLight = new THREE.PointLight(SAND, 2.2, 20);
    keyLight.position.set(-3, 2.5, 3);
    scene.add(keyLight);

    const group = new THREE.Group();
    scene.add(group);

    // Solid translucent sphere — gives the globe real volume and shading
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(1.4, 48, 48),
      new THREE.MeshStandardMaterial({
        color: WINE,
        transparent: true,
        opacity: 0.1,
        roughness: 0.55,
        metalness: 0.15,
      })
    );
    group.add(core);

    // Wireframe shell — reads as a digital globe grid, foreshortens naturally as it turns
    const wire = new THREE.Mesh(
      new THREE.SphereGeometry(1.42, 24, 16),
      new THREE.MeshBasicMaterial({ color: WINE, wireframe: true, transparent: true, opacity: 0.22 })
    );
    group.add(wire);

    // Surface node points — small scattered dots suggesting global hubs
    const NODE_COUNT = 46;
    const nodePositions = new Float32Array(NODE_COUNT * 3);
    const nodeVectors: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const phi = Math.acos(1 - 2 * ((i + 0.5) / NODE_COUNT));
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 1.46;
      const v = new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
      nodeVectors.push(v);
      nodePositions.set([v.x, v.y, v.z], i * 3);
    }
    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    const nodes = new THREE.Points(
      nodeGeometry,
      new THREE.PointsMaterial({ color: SAND, size: 0.045, transparent: true, opacity: 0.75, sizeAttenuation: true })
    );
    group.add(nodes);

    // A handful of curved connection arcs — stylized traffic/data flow between hubs
    const arcPairs: [number, number][] = [
      [2, 21],
      [9, 34],
      [15, 40],
      [5, 29],
    ];
    arcPairs.forEach(([a, b]) => {
      const start = nodeVectors[a];
      const end = nodeVectors[b];
      const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(2.1);
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(40);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({ color: SAND, transparent: true, opacity: 0.4 })
      );
      group.add(line);
    });

    group.rotation.x = 0.25;

    let frameId: number;
    let elapsed = 0;
    const clock = new THREE.Clock();

    function animate() {
      frameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      elapsed += delta;
      group.rotation.y += delta * 0.16;
      group.rotation.x = 0.25 + Math.sin(elapsed * 0.3) * 0.04;
      renderer.render(scene, camera);
    }
    animate();

    function handleResize() {
      if (!container) return;
      width = container.clientWidth || width;
      height = container.clientHeight || height;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      core.geometry.dispose();
      (core.material as THREE.Material).dispose();
      wire.geometry.dispose();
      (wire.material as THREE.Material).dispose();
      nodeGeometry.dispose();
      (nodes.material as THREE.Material).dispose();
      group.children.forEach((child) => {
        if (child instanceof THREE.Line) {
          child.geometry.dispose();
          (child.material as THREE.Material).dispose();
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={className} />;
}
