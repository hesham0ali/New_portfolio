import { Container } from "@/components/layout/container";

export default function ProjectsLoading() {
  return (
    <main className="section-shell min-h-[70vh] bg-cream" aria-busy="true">
      <Container>
        <span className="sr-only">Loading projects</span>
        <div className="h-4 w-36 animate-pulse rounded bg-navy/10" />
        <div className="mt-6 h-14 max-w-3xl animate-pulse rounded bg-navy/10" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="h-96 animate-pulse rounded-[1.5rem] bg-white" />
          ))}
        </div>
      </Container>
    </main>
  );
}
