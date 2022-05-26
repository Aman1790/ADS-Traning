import { useEffect ,useState} from 'react';
import Card from '../UI/Card';
import MealItem from './MealsItem/MealItem';
import classes from './AvailableMeals.module.css';




// const DUMMY_MEALS = [
 
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];


const AvailableMeals = () => {
const [meals,setMeals]= useState([]);
const [isloading,setIsLoading]= useState(true);
const [errors,setError]=useState();

useEffect(() => {
  const fetchMeals = async () => {
    
    const response = await fetch('https://my-project-78b0c-default-rtdb.firebaseio.com/Meals.json');
    const responseData = await response.json();

    if(!response.ok){
      throw	 new Error ('something went wrong')
    }
    const loadedMeals = [];

    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      });
    }

    setMeals(loadedMeals);
    setIsLoading(false)
  };

  
 fetchMeals().catch((error)=>{
  setIsLoading(false)
  setError(error.message)
 })



}, []);

if(isloading){
return<section className={classes.mealsLoading}><p>Loading </p></section>
}

if(errors){
  return<section className={classes.mealsError}><p>{errors} </p></section>

}

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;