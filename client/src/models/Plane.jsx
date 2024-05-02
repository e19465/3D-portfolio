/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

Plane.propTypes = {
  isRotating: PropTypes.bool.isRequired,
};

export default Plane;
