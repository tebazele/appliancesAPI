import { appliancesService } from "../services/AppliancesService.js";
import BaseController from "../utils/BaseController.js";

export class AppliancesController extends BaseController {
    constructor() {
        super('api/appliances')
        this.router
            .get('', this.getAll)
            .post('', this.create)
            .delete('/:id', this.remove)
    }

    async getAll(request, response, next) {
        try {
            const appliances = await appliancesService.getAll()
            return response.send(appliances)
        } catch (error) {
            next(error)
        }
    }

    async create(request, response, next) {
        try {
            const newAppliance = await appliancesService.create(request.body)
            return response.send(newAppliance)
        } catch (error) {
            next(error)
        }
    }

    async remove(request, response, next) {

        try {
            const message = await appliancesService.remove(request.params.id)
            return response.send(message)
        } catch (error) {
            next(error)
        }
    }
}