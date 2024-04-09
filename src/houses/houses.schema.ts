import * as mongoose from 'mongoose';

export const HouseSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: function(address){
                let pattern = /^(Carrera|Calle|Diagonal|Transversal) \d+\w+ # \d+\w+ - \d+ \w+$/
                let test = pattern.test(address)
                return test;
            },
            message: props => `${props.value} Invalid Address!`
        }
    },
    city: {
        type: String,
        required: true,
        validate: {
            validator: async function(city){
                var response = await fetch('https://api-colombia.com/api/v1/City');
                var cities = await response.json();
                return cities.some(cities => cities.name.toUpperCase().includes(city.toUpperCase()));
            },
            message: props => `${props.value} The city doesnt belong to the country`
        }
    },
    state: {
        type: String,
        required: true,
        validate: {
            validator: async function(state){
                var response = await fetch('https://api-colombia.com/api/v1/Department');
                var departaments = await response.json();
                return departaments.some(departament => departament.name.toUpperCase().includes(state.toUpperCase()));
            },
            message: props => `${props.value} The state doesnt belong to the country`
        }
    },
    size: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    rooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    parking: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    code: {
        type: String,
        unique: true
    },
    image: {
        type: String,
    },
})


