import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"
import { logger } from "../utils/Logger.js"

class AppliancesService {
    async getAll() {
        const appliances = await dbContext.appliances
        return appliances
    }
    async create(newAppliance) {
        // logger.log(newAppliance)
        newAppliance.id = dbContext.appliances[dbContext.appliances.length - 1].id + 1
        await dbContext.appliances.push(newAppliance)
        return newAppliance
    }
    async remove(id) {
        const appliance = await dbContext.appliances.find(b => b.id == id)
        if (!appliance) throw new BadRequest('no appliance with id ' + id)
        let index = dbContext.appliances.indexOf(appliance)
        dbContext.appliances.splice(index, 1)
        return `${appliance.name} removed`
    }

}

export const appliancesService = new AppliancesService()