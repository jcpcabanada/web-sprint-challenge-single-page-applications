import React, { useEffect , useState} from "react";
import {Route} from "react-router-dom";
import HomePage from "./Components/HomePage";
import OrderForm from "./Components/OrderForm";
import PizzaConfirm from "./Components/PizzaConfirm";
import Head from "./Components/Head";
import "./App.css";
import * as yup from 'yup';
import schema from "./validation/formSchema";
import axios from 'axios';

const initialFormValues = {
    //dropdown
    size:'',
    //Radio button
    sauce: '',
    //Checkboxes
    pepperoni: false,
    sausage: false,
    canadian_bacon: false,
    spicy_italian_sausage: false,
    grilled_chicken: false,
    onions: false,
    green_pepper: false,
    diced_tomatoes: false,
    black_olives: false,
    roasted_garlic: false,
    artichoke_hearts: false,
    three_cheese: false,
    pinapple: false,
    extra_cheese: false,
    //Text input
    name:'',
    instructions: '',
}
const initialFormErrors = {
    //dropdown
    size:'',
    //Radio button
    sauce: '',
    //Checkboxes
    pepperoni: false,
    sausage: false,
    canadian_bacon: false,
    spicy_italian_sausage: false,
    grilled_chicken: false,
    onions: false,
    green_pepper: false,
    diced_tomatoes: false,
    black_olives: false,
    roasted_garlic: false,
    artichoke_hearts: false,
    three_cheese: false,
    pineapple: false,
    extra_cheese: false,
    //Text input
    name:'',
    instructions: '',
}
const initialPizzas = []
const initialDisabled = true
const toppings = ['pepperoni', 'sausage', 'canadian_bacon', 'spicy_italian_sausage', 'grilled_chicken', 'onions', 'green_pepper', 'diced_tomatoes', 'black_olives', 'roasted_garlic', 'artichoke_hearts', 'three_cheese', 'pineapple', 'extra_cheese']

const App = () => {
//STATES
    const [pizzas, setPizzas] = useState(initialPizzas)
    const [formValues, setFormValues] = useState(initialFormValues) //obj
    const [formErrors, setFormErrors] = useState(initialFormErrors) //obj
    const [disabled, setDisabled] = useState(initialDisabled) //boolean


    const postNewPizza = (newPizza) => {
        axios
            .post('https://reqres.in/api/orders', newPizza)
            .then(res => {
                setPizzas([newPizza, ...pizzas]);
                // console.log(res.data)
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setFormValues(initialFormValues)
                window.location.href = '/PizzaConfirm';
            })
    }

    const validate = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({...formErrors, [name]: ''}))
            .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }


    const change = (name, value) => {
        validate(name, value);
        setFormValues({...formValues, [name]: value})
    }

    const submit = () => {
        const newPizza = {
            name: formValues.name.trim(),
            size: formValues.size.trim(),
            sauce: formValues.sauce.trim(),
            instructions: formValues.instructions.trim(),
            toppings: toppings.filter(topping => !!formValues[topping])
        }
        postNewPizza(newPizza);
    }

    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid));
    }, [formValues])


    return (
        <div className='mainContainer'>
            <Head />
            <Route path='/PizzaConfirm'>
                <PizzaConfirm />
            </Route>
            <Route path='/pizza'>
                <OrderForm
                    values={formValues}
                    change={change}
                    submit={submit}
                    errors={formErrors}
                    disabled={disabled}
                />
            </Route>
            <Route exact path='/'>
                <HomePage />
            </Route>
        </div>
    );
};
export default App;
