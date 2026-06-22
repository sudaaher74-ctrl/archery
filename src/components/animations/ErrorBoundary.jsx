import React from 'react';
import { Html } from '@react-three/drei';

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
        <Html center position={[0, 2, 0]}>
          <div style={{ background: 'rgba(224,26,34,0.9)', padding: '20px', borderRadius: '10px', color: 'white', textAlign: 'center', width: '300px' }}>
            <h4>Missing Asset</h4>
            <p>Please place your realistic <code>archer.glb</code> file in the <code>/public/models/</code> directory to view the character animation.</p>
          </div>
        </Html>
      );
    }
    return this.props.children;
  }
}
