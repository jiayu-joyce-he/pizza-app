import {FaPepperHot as icon} from 'react-icons/fa'
import Logo from '../../gatsby/src/components/Logo'

export default {
    // computer name
    name: 'topping',
    // visible title
    title: 'Toppings',
    type:'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Topping Name',
            type: 'string',
            description: 'What is the name of the pizza'
        },
        {
            name: 'vegetarian',
            title: 'Vegetarian',
            type: 'boolean',
            description: 'What is the name of the pizza',
            options: {
                layout:'checkbox',
            }
        },
    ],
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian'
        },
        prepare: (fields) => ({
            title: `${fields.name} ${fields.vegetarian ? '🥬' :''}`
        })
    }
}