import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("3D Asset Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <group>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1, 2, 1]} />
            <meshBasicMaterial color="red" wireframe />
          </mesh>
        </group>
      );
    }
    return this.props.children;
  }
}
