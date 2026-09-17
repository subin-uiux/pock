interface DimmedOverlayProps {
  open: boolean;
  onClick?: () => void;
}

export function DimmedOverlay({ open, onClick }: DimmedOverlayProps) {
  if (!open) return null;

  return (
    <div
      className="dimmed-overlay"
      role="presentation"
      onClick={onClick}
      aria-hidden="true"
    />
  );
}
