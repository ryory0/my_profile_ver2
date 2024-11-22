"use client";

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface LoaderOptions {
  receiveShadow?: boolean;
  castShadow?: boolean;
}

export function loaderGLTFModel(
  scene: THREE.Scene,           // 型を指定
  glbPath: string,              // 型を指定
  options: LoaderOptions = { receiveShadow: true, castShadow: true } // オプション型を指定
): Promise<THREE.Group> {       // 戻り値の型を指定
  const { receiveShadow, castShadow } = options;

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene; // GLTFのシーンを取得

        obj.name = 'dog';
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow ?? true;
        obj.castShadow = castShadow ?? true;

        scene.add(obj);

        // 子オブジェクトにも影の設定を適用
        obj.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).castShadow = castShadow ?? true;
            (child as THREE.Mesh).receiveShadow = receiveShadow ?? true;
          }
        });

        resolve(obj); // 成功時にGLTFモデルのオブジェクトを返す
      },
      undefined,
      (error) => {
        console.error('Error loading GLTF model:', error); // エラーハンドリング
        reject(error);
      }
    );
  });
}
