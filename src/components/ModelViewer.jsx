import '@google/model-viewer';

const ModelViewer = () => {
  return (
    <model-viewer
      src="/render/cocacola.glb"
      ar
      // ar-modes="webxr scene-viewer quick-look"
      // camera-controls
      poster="/render/poster.webp"
      shadow-intensity="5"
      camera-orbit="122.3deg 87.52deg 11.32m"
      field-of-view="18deg"
      style={{ position: 'absolute', width: '100%', height: '100%' }}
    ></model-viewer>
  );
};

export default ModelViewer;
