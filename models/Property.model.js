const { Schema, model } = require("mongoose");

const propertySchema = new Schema({

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true,
    },

    type:{
        type: String,
        enum: ['piso', 'chalet']
    },
    name: {
        type: String,
        // unique: true -> Ideally, should be unique, but its up to you
    },
    status: {
        type: String,
        enum: ['segunda mano', 'obra nueva', 'pendiente inscripción', 'disponible', 'vendido', 'proindiviso', 'tapiado', 'inmueble con cargas', 'inmueble en siruación especial'],
    },
    description: {
        type    : String,
    },

    autonomousCommunity: {
        type: String,
    },
    city: {
        type: String,
    },
    location: {
        type: {
            type: String,
        },
        coordinates: [Number],
    },

    size: {
        type: Number,
    },
    rooms: {
        type: Number,
    },
    bathrooms: {
        type: Number,
    },

    image: {
        type: String,
    },

    price: {
        type: Number,
    },
    discountedPrice: {
        type: Number,
    },
    discount: {
        type: Number,
    },
},
{
    timestamps: true
}
);

const Property = model("Property", propertySchema);

module.exports = Property;