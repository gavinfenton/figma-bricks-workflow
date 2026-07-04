import type { LucideIcon } from "lucide-react"
import {
  MonitorSmartphone,
  LayoutGrid,
  Puzzle,
  Wand2,
  Tags,
  FileCode2,
  ArrowDown,
  RotateCcw,
} from "lucide-react"

type Stage = {
  id: string
  label: string
  tool: string
  title: string
  description: string
  action: string
  icon: LucideIcon
}

const stages: Stage[] = [
  {
    id: "stage-1",
    label: "Stage 1",
    tool: "Pre-flight Canvas Compiler",
    title: "Framework Alignment",
    description:
      "Export your framework's CSS utility classes, modifiers and recipes and paste them into the desktop app. The global set lives in the Core Global Framework (90% Box) that persists across projects; per-project overrides go in the clearable 10% Box.",
    action: 'Generate & Package Sync Payload → copied to clipboard',
    icon: LayoutGrid,
  },
  {
    id: "stage-2",
    label: "Stage 2",
    tool: "CF Framer",
    title: "Plugin Initialisation",
    description:
      "Open the layout in Figma, then launch CF Framer via Plugins > Development > Open Manifest. Paste the Production Output Bundle so your classes, modifiers and recipes load into the plugin's searchable autocomplete.",
    action: "Paste Production Output Bundle into import dialogue",
    icon: Puzzle,
  },
  {
    id: "stage-3",
    label: "Stage 3",
    tool: "Figma",
    title: "Figma Preparation",
    description:
      "Clean up the layout so CF Framer can read it. Detach the root and deeper frames from component instances, confirm every frame is Auto Layout, and remove any surplus frames to expose a correct nested hierarchy.",
    action: "Produce a clean, correctly structured nested hierarchy",
    icon: Wand2,
  },
  {
    id: "stage-4",
    label: "Stage 4",
    tool: "CF Framer",
    title: "Layer Tagging",
    description:
      "Work through the layer stack: select each frame, assign an HTML element tag, pick the matching CSS class from the loaded-only autocomplete, and apply modifiers. A counter tracks untagged frames until it hits zero.",
    action: 'Select root frame → "Copy Selected for Bricks"',
    icon: Tags,
  },
  {
    id: "stage-5",
    label: "Stage 5",
    tool: "Bricks · WordPress",
    title: "Compiler Output & Bricks Import",
    description:
      "The bundled local-thread Compiler converts the tagged hierarchy into a nested, class-driven Bricks JSON payload at paste time. The structure appears with correct nesting, assigned classes and original text intact — no manual correction.",
    action: "Paste into the Bricks structure panel",
    icon: FileCode2,
  },
]

function Connector() {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <ArrowDown className="size-6 text-primary/50" />
    </div>
  )
}

function AnchorNode({
  variant,
}: {
  variant: "start" | "end"
}) {
  const isStart = variant === "start"
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-md items-center gap-4 rounded-xl border-2 border-primary bg-primary px-5 py-4 text-primary-foreground shadow-lg">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15">
          {isStart ? (
            <MonitorSmartphone className="size-6" />
          ) : (
            <RotateCcw className="size-6" />
          )}
        </div>
        <div className="min-w-0">
          <p className="font-serif text-xs font-medium uppercase tracking-widest text-primary-foreground/70">
            {isStart ? "Start" : "Finish"}
          </p>
          <p className="font-serif text-base font-bold leading-tight text-balance">
            Development / Staging Site
          </p>
          <p className="mt-0.5 text-sm text-primary-foreground/80 text-pretty">
            {isStart
              ? "Begin in your WordPress dev environment with the framework you build on."
              : "Back in the Bricks builder — the page structure lands ready to edit."}
          </p>
        </div>
      </div>
    </div>
  )
}

function StageCard({ stage, index }: { stage: Stage; index: number }) {
  const Icon = stage.icon
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-2xl gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
        <div className="flex flex-col items-center gap-2">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
            <Icon className="size-6" />
          </div>
          <span className="flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {index + 1}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-serif text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {stage.label}
            </span>
            <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent-foreground">
              {stage.tool}
            </span>
          </div>
          <h3 className="mt-1 font-serif text-lg font-bold text-card-foreground text-balance">
            {stage.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
            {stage.description}
          </p>
          <div className="mt-3 flex items-start gap-2 rounded-lg border border-dashed border-border bg-secondary/50 px-3 py-2">
            <span className="mt-0.5 font-serif text-[10px] font-bold uppercase tracking-wider text-primary">
              Action
            </span>
            <span className="text-sm font-medium text-card-foreground">
              {stage.action}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function WorkflowDiagram() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:py-16">
      <header className="mb-10 text-center">
        <p className="font-serif text-sm font-semibold uppercase tracking-widest text-primary">
          Workflow Diagram
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-foreground text-balance sm:text-4xl">
          Figma-to-Bricks Compilation Pipeline
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
          A five-stage flow that starts and ends in your development / staging
          site, turning a tagged Figma layout into a nested, class-driven Bricks
          structure.
        </p>
      </header>

      <div className="flex flex-col">
        <AnchorNode variant="start" />
        {stages.map((stage, index) => (
          <div key={stage.id}>
            <Connector />
            <StageCard stage={stage} index={index} />
          </div>
        ))}
        <Connector />
        <AnchorNode variant="end" />
      </div>
    </section>
  )
}
