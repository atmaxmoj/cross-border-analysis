interface InfoBoxProps {
  children: React.ReactNode
}

export default function InfoBox({ children }: InfoBoxProps) {
  return <div className="info-box">{children}</div>
}
