import MealsSummary from "./MeaslSummary";
import AvailabeMeals from "./AvailableMeals";
import { Fragment } from "react";

const Meals = () => {
    return (
        <Fragment>

            <MealsSummary />
            <AvailabeMeals />
        </Fragment>
    )
}
export default Meals;