import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'

class DbContext {
  // Values = mongoose.model('Value', ValueSchema);
  // Account = mongoose.model('Account', AccountSchema);

  appliances = [
    {
      id: 1,
      name: 'blender',
      location: 'counter',
      use: 'make smoothies'
    },
    {
      id: 2,
      name: 'toaster',
      location: 'cupboard',
      use: 'make toast'
    },
    {
      id: 3,
      name: 'instantPot',
      location: 'pantry floor',
      use: 'cook frozen chicken quickly'
    }
  ]
}

export const dbContext = new DbContext()
