import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three'; // 型定義のためにインポート

export function loaderGLTFModel(
  scene: THREE.Scene, // 型を指定
  glbPath: string, // GLBファイルのパスは文字列
  options: { receiveShadow?: boolean; castShadow?: boolean } = { receiveShadow: true, castShadow: true }
): Promise<THREE.Object3D> {
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
        obj.receiveShadow = receiveShadow ?? true; // オプションのデフォルト値
        obj.castShadow = castShadow ?? true;
        scene.add(obj);

        obj.traverse(function (child) {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = castShadow ?? true;
            child.receiveShadow = receiveShadow ?? true;
          }
        });

        resolve(obj);
      },
      undefined,
      (error) => {
        console.error('Error loading GLTF model:', error); // エラーハンドリング追加
        reject(error);
      }
    );
  });
}
