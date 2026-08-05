import { Container } from "@/components/layout/container";

export default function ProjectLoading() {
  return (
    <main className="section-shell min-h-[70vh] bg-cream" aria-busy="true">
      <Container>
        <span className="sr-only">Loading project</span>
        <div className="h-4 w-40 animate-pulse rounded bg-navy/10" />
        <div className="mt-10 h-16 max-w-3xl animate-pulse rounded bg-navy/10" />
        <div className="mt-8 h-64 animate-pulse rounded-[1.5rem] bg-white" />
      </Container>
    </main>
  );
}
