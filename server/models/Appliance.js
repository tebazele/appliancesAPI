import Mongoose from 'mongoose'

const Schema = Mongoose.Schema

export const ApplianceSchema = new Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: false },
        use: { type: String, required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

ApplianceSchema.virtual('creator', {
    localField: 'creatorID',
    foreignField: '_id',
    justOne: true,
    ref: 'Profile'
})