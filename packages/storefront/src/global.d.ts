declare interface Window {
  $wompi: {
    initialize: (cb: (data: { sessionId: string } | null, error: Error | null) => void) => void
  }
}
