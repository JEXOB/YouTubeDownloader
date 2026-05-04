export default {
  async fetch(request) {

    const url = new URL(request.url)
    const target = url.searchParams.get("url")

    if (!target) {
      return new Response("Use ?url=https://example.com")
    }

    const response = await fetch(target, {
      method: request.method,
      headers: request.headers,
      body: request.body
    })

    return response
  }
}
