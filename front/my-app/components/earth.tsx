'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { loaderGLTFModel } from '@/lib/model';

function easeOutCirc(x: number): number {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Earth = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
  const [camera, setCamera] = useState<THREE.OrthographicCamera | null>(null);
  const [target] = useState(new THREE.Vector3(0, 0, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      200 * Math.sin(0.2 * Math.PI),
      10,
      200 * Math.cos(0.2 * Math.PI)
    )
  );
  const [scene] = useState(new THREE.Scene());
  const [controls, setControls] = useState<OrbitControls | null>(null);

  const handleWindowResize = useCallback(() => {
    const container = refContainer.current;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
      if (camera) {
        const scale = scH * 0.0005 + 1.8;
        camera.left = -scale;
        camera.right = scale;
        camera.top = scale;
        camera.bottom = -scale;
        camera.updateProjectionMatrix();
      }
    }
  }, [renderer, camera]);

  useEffect(() => {
    const container = refContainer.current;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const rendererInstance = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      rendererInstance.setPixelRatio(window.devicePixelRatio);
      rendererInstance.setSize(scW, scH);
      // 型キャストを使用してエラーを回避
      (rendererInstance as any).outputEncoding = THREE.SRGBColorSpace;;
      container.appendChild(rendererInstance.domElement);
      setRenderer(rendererInstance);

      const scale = scH * 0.0005 + 1.8;
      const cameraInstance = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      cameraInstance.position.copy(initialCameraPosition);
      cameraInstance.lookAt(target);
      setCamera(cameraInstance);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 10, 7.5);
      scene.add(directionalLight);

      const controlsInstance = new OrbitControls(cameraInstance, rendererInstance.domElement);
      controlsInstance.autoRotate = true;
      controlsInstance.target = target;
      setControls(controlsInstance);

      loaderGLTFModel(scene, '/earth_modified.glb', {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req: number | null = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);
        frame = frame <= 100 ? frame + 1 : frame;
        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          cameraInstance.position.y = 10;
          cameraInstance.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          cameraInstance.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          cameraInstance.lookAt(target);
        } else {
          controlsInstance.update();
        }

        rendererInstance.render(scene, cameraInstance);
      };

      return () => {
        if (req) cancelAnimationFrame(req);
        rendererInstance.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  return (
    <Box
      ref={refContainer}
      className='voxel-dog'
      m="auto"
      mb={['-40px', '-140px', '-200px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          ml="calc(0px - var(--spinner-size) /2)"
          mt="calc(0px - var(--spinner-size))"
        />
      )}
    </Box>
  );
};

export default Earth;
