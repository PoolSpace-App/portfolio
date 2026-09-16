"use client"

import { ArrowUp, MessageCircleDashed, RotateCw } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { getLocalPortfolioAnswer, suggestedPortfolioQuestions } from "@/lib/portfolio-knowledge"
import { cn } from "@/lib/utils"

type PortfolioAnswer = {
  headline: string
  body: string
  focus: string
}

type ChatMessage = {
  id: string
  role: "user" | "assistant"
  text: string
  focus?: string
  headline?: string
}

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

async function fetchPortfolioAnswer(question: string): Promise<PortfolioAnswer> {
  try {
    const response = await fetch("/api/portfolio-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    })

    if (!response.ok) throw new Error("Unable to answer")

    const nextAnswer = (await response.json()) as PortfolioAnswer
    return {
      headline: nextAnswer.headline,
      body: nextAnswer.body,
      focus: nextAnswer.focus,
    }
  } catch {
    return getLocalPortfolioAnswer(question)
  }
}

function AssistantBubble({ message }: { message: ChatMessage }) {
  return (
    <div className="max-w-[92%] rounded-2xl rounded-tl-md border border-dashed border-slate-200 bg-white px-3.5 py-3 text-sm leading-relaxed text-slate-800 shadow-sm">
      {message.focus ? (
        <span className="mb-2 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500">
          {message.focus}
        </span>
      ) : null}
      {message.headline ? (
        <p className="font-semibold text-slate-900">{message.headline}</p>
      ) : null}
      <p className={cn(message.headline ? "mt-2" : undefined)}>{message.text}</p>
    </div>
  )
}

export default function PortfolioChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [status, setStatus] = useState<"ready" | "submitted" | "streaming">("ready")
  const [showScrollButton, setShowScrollButton] = useState(false)

  const viewportRef = useRef<HTMLDivElement>(null)
  const pinnedToBottomRef = useRef(true)
  const streamTimerRef = useRef<number | null>(null)

  const isBusy = status === "submitted" || status === "streaming"

  const scrollToBottom = useCallback((behavior: ScrollBehavior = "smooth") => {
    const viewport = viewportRef.current
    if (!viewport) return
    viewport.scrollTo({ top: viewport.scrollHeight, behavior })
  }, [])

  const handleViewportScroll = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const distanceFromBottom = viewport.scrollHeight - viewport.scrollTop - viewport.clientHeight
    const isPinned = distanceFromBottom < 48
    pinnedToBottomRef.current = isPinned
    setShowScrollButton(!isPinned)
  }, [])

  useEffect(() => {
    if (pinnedToBottomRef.current) {
      scrollToBottom(messages.length > 1 ? "smooth" : "auto")
    }
  }, [messages, scrollToBottom])

  useEffect(() => {
    return () => {
      if (streamTimerRef.current !== null) {
        window.clearInterval(streamTimerRef.current)
      }
    }
  }, [])

  const streamAssistantReply = useCallback(
    (assistantId: string, answer: PortfolioAnswer) => {
      const fullText = answer.body
      let index = 0

      setStatus("streaming")
      setMessages((current) =>
        current.map((message) =>
          message.id === assistantId
            ? {
                ...message,
                focus: answer.focus,
                headline: answer.headline,
                text: "",
              }
            : message,
        ),
      )

      streamTimerRef.current = window.setInterval(() => {
        index += 3
        const nextText = fullText.slice(0, index)

        setMessages((current) =>
          current.map((message) =>
            message.id === assistantId ? { ...message, text: nextText } : message,
          ),
        )

        if (pinnedToBottomRef.current) {
          scrollToBottom("auto")
        }

        if (index >= fullText.length) {
          if (streamTimerRef.current !== null) {
            window.clearInterval(streamTimerRef.current)
            streamTimerRef.current = null
          }
          setStatus("ready")
        }
      }, 16)
    },
    [scrollToBottom],
  )

  const sendQuestion = useCallback(
    async (question: string) => {
      const cleanQuestion = question.trim()
      if (!cleanQuestion || isBusy) return

      const userMessage: ChatMessage = {
        id: createId(),
        role: "user",
        text: cleanQuestion,
      }
      const assistantId = createId()

      setInput("")
      setStatus("submitted")
      pinnedToBottomRef.current = true
      setMessages((current) => [
        ...current,
        userMessage,
        { id: assistantId, role: "assistant", text: "Thinking through the portfolio knowledge base..." },
      ])

      const answer = await fetchPortfolioAnswer(cleanQuestion)
      streamAssistantReply(assistantId, answer)
    },
    [isBusy, streamAssistantReply],
  )

  const resetConversation = useCallback(() => {
    if (streamTimerRef.current !== null) {
      window.clearInterval(streamTimerRef.current)
      streamTimerRef.current = null
    }
    setMessages([])
    setInput("")
    setStatus("ready")
    pinnedToBottomRef.current = true
    setShowScrollButton(false)
  }, [])

  return (
    <TooltipProvider delayDuration={150}>
      <div className="portfolio-panel-frame h-full min-h-[32rem] w-full lg:min-h-0">
        <span
          aria-hidden
          className="portfolio-panel-frame-lines portfolio-panel-frame-lines-extend-r"
        />
        <span aria-hidden className="portfolio-panel-frame-lines portfolio-panel-frame-lines-extend-l" />
        <span
          aria-hidden
          className="portfolio-line-nodes portfolio-line-nodes-y portfolio-panel-frame-nodes pointer-events-none absolute inset-0"
        />
        <Card className="relative z-[1] flex h-full w-full flex-col gap-0 overflow-hidden rounded-none border border-dashed border-slate-200 bg-slate-50 shadow-sm">
        <CardHeader className="gap-1 portfolio-border-b bg-slate-50 px-4 py-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <CardTitle className="text-base font-semibold text-slate-900">Ask about Nqobile</CardTitle>
              <CardDescription className="text-slate-500">
                Answers from the portfolio knowledge base.
              </CardDescription>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-none border border-dashed border-slate-200 bg-white"
                  aria-label="Reset conversation"
                  onClick={resetConversation}
                  disabled={isBusy}
                >
                  <RotateCw className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Reset</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </CardHeader>

        <CardContent className="relative flex-1 overflow-hidden bg-slate-50 p-0">
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 px-4 text-center">
              <div className="flex h-10 w-10 items-center justify-center portfolio-border bg-white text-slate-500">
                <MessageCircleDashed className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-900">What would you like to know?</p>
                <p className="text-xs text-slate-500">Pick a prompt or ask your own question below.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {suggestedPortfolioQuestions.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => void sendQuestion(prompt)}
                    className="cursor-target border border-dashed border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-slate-900 hover:text-slate-900"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="relative h-full">
              <div
                ref={viewportRef}
                onScroll={handleViewportScroll}
                className="h-full overflow-y-auto px-4 py-4"
                role="log"
                aria-live="polite"
                aria-relevant="additions"
                aria-busy={isBusy}
              >
                <div className="flex flex-col gap-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
                    >
                      {message.role === "user" ? (
                        <div className="max-w-[88%] rounded-2xl rounded-tr-md bg-slate-900 px-3.5 py-2.5 text-sm leading-relaxed text-white">
                          {message.text}
                        </div>
                      ) : (
                        <AssistantBubble message={message} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {showScrollButton ? (
                <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center">
                  <Button
                    type="button"
                    size="sm"
                    variant="secondary"
                    className="pointer-events-auto h-8 rounded-full bg-white shadow-md"
                    onClick={() => {
                      pinnedToBottomRef.current = true
                      scrollToBottom()
                      setShowScrollButton(false)
                    }}
                  >
                    Jump to latest
                  </Button>
                </div>
              ) : null}
            </div>
          )}
        </CardContent>

        <CardFooter className="portfolio-border-t bg-slate-50 p-3">
          <form
            className="w-full"
            onSubmit={(event) => {
              event.preventDefault()
              void sendQuestion(input)
            }}
          >
            <div className="cursor-target border border-dashed border-slate-200 bg-white">
                <textarea
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault()
                      void sendQuestion(input)
                    }
                  }}
                  rows={2}
                  placeholder="Ask anything about Nqobile"
                  disabled={isBusy}
                  className="min-h-14 w-full resize-none bg-transparent px-3 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 disabled:opacity-60"
                />
                <div className="flex items-center justify-end px-2 pb-2">
                  <Button
                    type="submit"
                    size="icon"
                    className="h-8 w-8 rounded-none bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-900 disabled:opacity-100"
                    disabled={!input.trim() || isBusy}
                    aria-label="Send message"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                </div>
              </div>
          </form>
        </CardFooter>
      </Card>
      </div>
    </TooltipProvider>
  )
}
