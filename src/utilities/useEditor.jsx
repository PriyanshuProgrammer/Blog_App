import { useRef } from 'react';
import { Editor } from "primereact/editor";
import useSpotlight from './useSpotlight';
import './UseEditor.css';

function UseEditor({ value, onChange, ...rest }) {
  const containerRef = useRef(null);
  const { x, y } = useSpotlight(containerRef);

  return (
    <>
    <div
      className="card spotlight-container"
      ref={containerRef}
      style={{
        '--x': `${x}px`,
        '--y': `${y}px`
      }}
    >
      <Editor
        id="Editor"
        value={value}
        onTextChange={(e) => onChange(e.htmlValue)}
        className="spotlight-editor"
        style={{
          minHeight: "50vh",
          border: "3px solid #1e1e1e",
          backgroundColor: "transparent"
        }}
        {...rest}
      />
    </div>
  );
}

export default UseEditor;