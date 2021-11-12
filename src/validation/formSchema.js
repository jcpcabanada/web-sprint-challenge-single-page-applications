import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name required for order!')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'extralarge'], 'Pick a Size!'),
    sauce: yup
        .string()
        .oneOf(['original', 'garlic', 'bbq', 'spinach'], 'Needs Some Sauce!'),
    pepperoni: yup
        .boolean(),
    sausage: yup
        .boolean(),
    canadian_bacon: yup
        .boolean(),
    spicy_italian_sausage: yup
        .boolean(),
    grilled_chicken: yup
        .boolean(),
    onions: yup
        .boolean(),
    green_pepper: yup
        .boolean(),
    diced_tomatoes: yup
        .boolean(),
    black_olives: yup
        .boolean(),
    roasted_garlic: yup
        .boolean(),
    artichoke_hearts: yup
        .boolean(),
    three_cheese: yup
        .boolean(),
    pineapple: yup
        .boolean(),
    extra_cheese: yup
        .boolean(),
    instructions: yup
        .string()
        .trim(),
})
export default formSchema;