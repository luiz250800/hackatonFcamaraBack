import { Request, Response} from 'express';
import axios from 'axios';

const api = 'https://servicodados.ibge.gov.br/api/v1'

export default class LocalityController {

    async listAllStates(request: Request, response: Response) {
        const result = await axios.get(`${api}/localidades/estados`)
        return response.status(201).json(result.data)
    }

    async listAllCitiesByState(request: Request, response: Response) {
        const result = await axios.get(`${api}/localidades/estados/${request.params.sgState}/distritos`)
        return response.status(201).send(result.data)
    }
}