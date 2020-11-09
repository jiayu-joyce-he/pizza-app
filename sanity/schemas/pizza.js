// import {MdLocalPizza as icon} from 'react-icons/md'
import PriceInput from '../components/PriceInput'

export default {
    // computer name
    name: 'pizza',
    // visible title
    title: 'Pizzas',
    type:'document',
    icon: () =>'🍕',
    // icon: icon,
    fields: [
        {
            name: 'name',
            title: 'Pizza Name',
            type: 'string',
            description: 'Name of the pizza'
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options:{
                source: 'name',
                maxLength: 100,
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the pizza in cents',
            validation: Rule => Rule.min(1000).max(50000),
            // TODO: add custom input component
            inputComponent: PriceInput
        },
        {
            name: 'toppings',
            title: 'Toppings',
            type: 'array',
            of: [{type:'reference', to: [{type: 'topping'}]}]
        }
    ],
    preview: {
        select: {
            name: 'name',
            media: 'image',
            topping0: 'toppings.0.name',
            topping1: 'toppings.1.name',
        },
        prepare: ({name, media, ...toppings}) => {
            // Filter undefined toppings out
            const tops = Object.values(toppings).filter(e => !!e)
            // Return the preview object
            return({
                title: name,
                media,
                subtitle: Object.values(tops).join(', ')
            })
        }
    }
}