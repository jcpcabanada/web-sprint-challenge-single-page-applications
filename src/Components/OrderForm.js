import React from "react";
import './OrderForm.css';


export default function OrderForm(props) {

    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }


    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
    }


    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <h1>Build Your Own Pizza</h1>
            <div className='formOrder'>
                <div className='formInputs'>

                    {/***********TEXT INPUT***********/}
                    <label>NAME:&nbsp;
                        <input
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                            id='name-input'
                        />
                    </label><br/><br/>
                    {/***********DROPDOWN***********/}
                    <label>CHOICE OF SIZE:&nbsp;
                        <select
                            onChange={onChange}
                            value={values.size}
                            name='size'
                            id='size-dropdown'
                        >
                            <option value=''>--Select A Size--</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                            <option value='extralarge'>Extra Large</option>
                        </select>
                    </label><br/><br/>
                    {/***********RADIOBUTTON***********/}
                    <label>SAUCES :</label><br/>
                    <label>Original Red
                        <input
                            type='radio'
                            name='sauce'
                            value='original'
                            onChange={onChange}
                            checked={values.sauce === 'original'}
                        />
                    </label>
                    <label>&nbsp;Garlic Ranch
                        <input
                            type='radio'
                            name='sauce'
                            value='garlic'
                            onChange={onChange}
                            checked={values.sauce === 'garlic'}
                        />
                    </label>
                    <label>&nbsp;BBQ
                        <input
                            type='radio'
                            name='sauce'
                            value='bbq'
                            onChange={onChange}
                            checked={values.sauce === 'bbq'}
                        />
                    </label>
                    <label>&nbsp;Spinach Alfredo
                        <input
                            type='radio'
                            name='sauce'
                            value='spinach'
                            onChange={onChange}
                            checked={values.sauce === 'spinach'}
                        />
                    </label><br/><br/>
                    {/***********CHECKBOX***********/}
                    <label>TOPPINGS: </label><br/>
                    <label>Pepperoni
                        <input
                            type='checkbox'
                            name='pepperoni'
                            onChange={onChange}
                            checked={values.pepperoni}
                        />
                    </label>
                    <label>&nbsp;Sausage
                        <input
                            type='checkbox'
                            name='sausage'
                            onChange={onChange}
                            checked={values.sausage}
                        />
                    </label>
                    <label>&nbsp;Canadian Bacon
                        <input
                            type='checkbox'
                            name='canadian_bacon'
                            onChange={onChange}
                            checked={values.canadian_bacon}
                        />
                    </label>
                    <br/>
                    <label>&nbsp;Spicy Italian Sausage
                        <input
                            type='checkbox'
                            name='spicy_italian_sausage'
                            onChange={onChange}
                            checked={values.spicy_italian_sausage}
                        />
                    </label>
                    <label>&nbsp;Grilled Chicken
                        <input
                            type='checkbox'
                            name='grilled_chicken'
                            onChange={onChange}
                            checked={values.grilled_chicken}
                        />
                    </label>
                    <br/>
                    <label>&nbsp;Onions
                        <input
                            type='checkbox'
                            name='onions'
                            onChange={onChange}
                            checked={values.onions}
                        />
                    </label>
                    <label>&nbsp;Green Pepper
                        <input
                            type='checkbox'
                            name='green_pepper'
                            onChange={onChange}
                            checked={values.green_pepper}
                        />
                    </label>
                    <label>&nbsp;Diced Tomatoes
                        <input
                            type='checkbox'
                            name='diced_tomatoes'
                            onChange={onChange}
                            checked={values.diced_tomatoes}
                        />
                    </label>
                    <br/>
                    <label>&nbsp;Black Olives
                        <input
                            type='checkbox'
                            name='black_olives'
                            onChange={onChange}
                            checked={values.black_olives}
                        />
                    </label>
                    <label>&nbsp;Roasted Garlic
                        <input
                            type='checkbox'
                            name='roasted_garlic'
                            onChange={onChange}
                            checked={values.roasted_garlic}
                        />
                    </label>
                    <label>&nbsp;Artichoke Hearts
                        <input
                            type='checkbox'
                            name='artichoke_hearts'
                            onChange={onChange}
                            checked={values.artichoke_hearts}
                        />
                    </label>
                    <br/>
                    <label>&nbsp;Three Cheese
                        <input
                            type='checkbox'
                            name='three_cheese'
                            onChange={onChange}
                            checked={values.three_cheese}
                        />
                    </label>
                    <label>&nbsp;Pineapple
                        <input
                            type='checkbox'
                            name='pineapple'
                            onChange={onChange}
                            checked={values.pineapple}
                        />
                    </label>
                    <label>&nbsp;Extra Cheese
                        <input
                            type='checkbox'
                            name='extra_cheese'
                            onChange={onChange}
                            checked={values.extra_cheese}
                        />
                    </label><br/><br/>
                    {/***********TEXT INPUT***********/}
                    <label>INSTRUCTIONS:&nbsp;
                        <input
                            value={values.instructions}
                            onChange={onChange}
                            name='instructions'
                            type='text'
                            id='special-text'
                        />
                    </label><br/><br/>
                    {/***********SUBMIT BUTTON***********/}
                    <div className='form-group submit'>
                        <button id='order-button' disabled={disabled}>ADD TO ORDER</button>
                        <div className='errors'>
                            <div>{errors.name}</div>
                            <div>{errors.size}</div>
                            <div>{errors.sauce}</div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}
