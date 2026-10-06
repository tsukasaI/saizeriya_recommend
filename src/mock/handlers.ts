import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('/login', () => {
    // ユーザーの認証をセッションに永続させる
    sessionStorage.setItem('is-authenticated', 'true')

    // 200のステータスコードで応答する
    return new HttpResponse(null, { status: 200 })
  }),

  http.get('/user', () => {
    // ユーザーが認証されているかどうかを確認する
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
      // 認証されていない場合、403エラーで応答する
      return HttpResponse.json(
        {
          errorMessage: 'Not authorized',
        },
        { status: 403 },
      )
    }

    // 認証された場合、模擬ユーザの情報を返す
    return HttpResponse.json({
      username: 'admin',
    })
  }),
]
