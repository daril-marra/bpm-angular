import { http, HttpResponse, PathParams } from 'msw'
import response from './sportello-inquiry/response.json'
import countries from './countries/countries'

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
  http.post('/api/elenco-movimenti-conto-corrente', () => {
    return HttpResponse.json(response)
  }),
  http.get('/api/belfiore/:belfiore', ({params}) => {
    const belfiore = params["belfiore"];
    const result = countries.find(element => element.codiceBelfiore === belfiore);
    return HttpResponse.json(result)
  })
]
