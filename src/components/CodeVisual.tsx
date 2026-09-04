export function CodeVisual() {
  return (
    <div className="code-visual" aria-label="Decorative code editor illustration">
      <span className="floating-symbol symbol-one">&lt;/&gt;</span>
      <span className="floating-symbol symbol-two">{'{}'}</span>
      <span className="floating-symbol symbol-three">git:main</span>
      <div className="editor-window">
        <div className="editor-toolbar">
          <div className="window-dots"><i /><i /><i /></div>
          <span>portfolio.tsx</span>
          <span className="toolbar-status">TSX</span>
        </div>
        <div className="code-lines">
          <div><b>1</b><code><em>const</em> <strong>developer</strong> = {'{'}</code></div>
          <div><b>2</b><code>&nbsp;&nbsp;name: <mark>'Job Tantay'</mark>,</code></div>
          <div><b>3</b><code>&nbsp;&nbsp;role: <mark>'Developer'</mark>,</code></div>
          <div><b>4</b><code>&nbsp;&nbsp;passion: <mark>'Turning ideas into meaningful digital experiences'</mark>,</code></div>
          <div><b>5</b><code>&nbsp;&nbsp;currently: <mark>'Building, learning, and improving'</mark>,</code></div>
          <div><b>6</b><code>&nbsp;&nbsp;status: <mark>'Open to opportunities'</mark>,</code></div>
          <div><b>7</b><code>{'}'}<span className="cursor" /></code></div>
          <div><b>8</b><code>&nbsp;</code></div>
          <div><b>9</b><code><em>export default</em> <strong>developer</strong></code></div>
        </div>
        <div className="editor-footer"><span>● ready</span><span>Ln 7, Col 2</span><span>{'>'} terminal</span></div>
      </div>
    </div>
  )
}
