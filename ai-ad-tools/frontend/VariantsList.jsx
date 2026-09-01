// VariantsList.jsx - minimal React component to display generated variants
import React from 'react';

export default function VariantsList({ variants = [] }) {
  return (
    <div>
      <h3>Generated Variants</h3>
      <ul>
        {variants.map((v, i) => (
          <li key={i} style={{ marginBottom: 12 }}>
            <div style={{ whiteSpace: 'pre-wrap' }}>{v.text || v.url}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
