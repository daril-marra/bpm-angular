import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/user', () => {
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3defa5',
      firstName: 'Johnny',
      lastName: 'Stecchino',
      email: 'dante.ceccarini@gmail.com',
      username: 'DanCecc',
    })
  }),
]
