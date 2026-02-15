export default function GradientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="gradient-wrapper-container">
      {/* Gradiente esquina inferior izquierda */}
      <div className="gradient gradient-bottom-left" />

      {/* Gradiente esquina superior derecha */}
      <div className="gradient gradient-top-right" />

      {/* Gradiente centro */}
      <div className="gradient gradient-center" />

      {/* Contenido */}
      {children}
    </div>
  );
}
