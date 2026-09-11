// The case-study section is full-width and theme-aware; each page manages its
// own layout (hero band + sticky nav). This passthrough exists so the section
// no longer inherits the removed root container.
export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
