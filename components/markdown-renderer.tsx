import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg max-w-none mb-16 dark:prose-invert">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <h1 className="text-4xl font-bold mb-6 text-blue-950" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-3xl font-bold mt-12 mb-6 text-blue-950" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-2xl font-bold mt-8 mb-4 text-blue-950" {...props} />,
          p: ({ node, ...props }) => <p className="text-gray-700 leading-relaxed mb-6" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700" {...props} />,
          li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-blue-600 pl-4 italic my-8 text-gray-600" {...props} />
          ),
          code: ({ node, ...props }) => (
            <code className="bg-gray-100 rounded px-1.5 py-0.5 font-mono text-sm" {...props} />
          ),
          pre: ({ node, ...props }) => (
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-8 font-mono text-sm" {...props} />
          ),
          img: ({ node, ...props }) => (
            <img className="rounded-2xl my-12 max-w-4xl mx-auto h-auto object-contain block shadow-sm border border-gray-100" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-4" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
