import React, { useState, useEffect } from "react";
import { IFilter } from "../../porfolio_types";
import './_filter.scss';

interface IProps {
  displayItems(names: string[]): void;
  activeFilter: IFilter[];
}
export const Filter = ({ displayItems, activeFilter }: IProps) => {
  //initializing state to 'big' components filter-state sent as prop
  const [techFilter, setTechFilter] = useState(activeFilter);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //  console.log("event.currentTarget", event.currentTarget);
    let updatedFilter = [...techFilter];
    //sets chosen input to checked/unchecked
    updatedFilter.map((item) => {
      const { id, checked } = event.target;

      //id needs to be string
      if ("id_" + item.id === id) {
        item.isChecked = checked;
      }
      return item;
    });
    setTechFilter(updatedFilter);
  };

  useEffect(() => {
    const checkedItems = techFilter.filter((item) => {
      return item.isChecked;
    });
    const checkedItemNames = checkedItems.map((item) => {
      return item.name;
    });
    //calling  prop-function sending checked names parameter up to parent comp
    displayItems(checkedItemNames);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [techFilter]);

  return (
    <section>
      <h2 className="small_heading">Techniques</h2>
      <section className="styled_filter_options">
        {techFilter.map((item, index) => {
          return (
            <label className="option" key={index}>
              {item.name}
              <input
                type="checkbox"
                id={`id_${item.id}`}
                className="sr_only"
                name={item.name}
                checked={item.isChecked}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
          );
        })}
      </section>
    </section>
  );
};
