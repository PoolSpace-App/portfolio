import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose max-w-none text-sm leading-relaxed text-slate-500">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ ...props }) => (
            <h1 className="mb-6 text-4xl font-semibold tracking-tight text-slate-900" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="mb-6 mt-12 text-3xl font-semibold tracking-tight text-slate-900" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="mb-4 mt-8 text-2xl font-semibold tracking-tight text-slate-900" {...props} />
          ),
          p: ({ ...props }) => <p className="mb-6 text-sm leading-relaxed text-slate-500" {...props} />,
          ul: ({ ...props }) => (
            <ul className="mb-6 list-disc space-y-2 pl-6 text-sm leading-relaxed text-slate-500" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="mb-6 list-decimal space-y-2 pl-6 text-sm leading-relaxed text-slate-500" {...props} />
          ),
          li: ({ ...props }) => <li className="text-sm leading-relaxed text-slate-500" {...props} />,
          blockquote: ({ ...props }) => (
            <blockquote
              className="my-8 border-l border-dashed border-slate-200 pl-4 text-sm italic leading-relaxed text-slate-500"
              {...props}
            />
          ),
          code: ({ ...props }) => (
            <code className="bg-slate-50 px-1.5 py-0.5 font-mono text-sm text-slate-900" {...props} />
          ),
          pre: ({ ...props }) => (
            <pre
              className="my-8 overflow-x-auto portfolio-border bg-slate-900 p-4 font-mono text-sm text-slate-50"
              {...props}
            />
          ),
          img: ({ ...props }) => (
            <img
              className="my-12 block h-auto max-w-full portfolio-border grayscale transition-all duration-500 hover:grayscale-0"
              {...props}
            />
          ),
          a: ({ ...props }) => (
            <a className="font-medium text-slate-900 underline decoration-slate-200 underline-offset-4 hover:decoration-slate-900" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
