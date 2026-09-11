// The About page is now theme-aware and manages its own container, matching the
// rest of the site. This passthrough remains so the route doesn't inherit the
// removed root container.
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
