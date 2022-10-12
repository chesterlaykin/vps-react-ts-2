import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  incremented,
  amountAdded,
} from "@/redux/features/somefeature/somefeature-slice";
import { useFetchSomeOtherFeatureCategoryQuery } from "@/redux/features/someotherfeature-api/someotherfeature-api-slice";
import s from "./redux.module.scss";

export { Page };
// export
function Page() {
  const count = useSelector((state: any) => state.somefeature.value);
  const dispatch = useAppDispatch();

  const [numItems, setNumItems] = useState(10);
  const { data = [], isFetching } =
    useFetchSomeOtherFeatureCategoryQuery(numItems);

  function handleClick() {
    // increment by 1
    // dispatch(incremented());

    // increment by a fixed amount
    dispatch(amountAdded(3));
  }

  return (
    <div>
      <div className={s.reduxTests}>
      <p>
        <button onClick={handleClick}>count is: {count}</button>
      </p>
    </div>
      <div>
        <p>Items to fetch:</p>
        <select
          value={numItems}
          onChange={(e) => setNumItems(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>

      <div>
        <p>Number of items fetched: {data.length}</p>
      </div>
      <div className="dogs">
        <h2>Dogs</h2>
        {data.map((breed) => (
          <div style={{ display: "flex" }} key={breed.id}>
            <div>{breed.name}</div>
            <div>
              <img src={breed.image.url} alt={breed.name} height={250} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const documentProps = {
  title: "About",
  description: "Fun about page",
};
