import { useState } from 'react';
import * as classes from './Popup.module.css';

const LIST = [
  { id: 0, text: 'Самое важное и ключевое преимущество нашего препарата' },
  { id: 1, text: 'Второе по важности преимущество' },
  { id: 2, text: 'Ещё одно важное преимущество препарата' },
  { id: 3, text: 'Ещё одно не менее важное преимущество препарата' },
  { id: 4, text: 'Ещё одно важное преимущество препарата' },
  { id: 5, text: 'Ещё одно важное преимущество препарата' },
];

export const Popup = ({ open, handleClose }) => {
  const [pagination, setPagination] = useState(0);

  const changePagination = (isLeft) => {
    if (isLeft && pagination > 0) {
      setPagination((prev) => prev - 1);
    }

    if (!isLeft && pagination < 1) {
      setPagination((prev) => prev + 1);
    }
  }

  return (
    <div className={`${ classes.root } ${ !open && classes.close }`}>
      <div className={ classes.bg }></div>
      <div className={ classes.popupBlock }>
        <div className={ classes.popupContent }>
          <span
            className={`material-icons ${ classes.btnClose }`}
            onClick={ handleClose }
          >
            close
          </span>

          <div className={ classes.keyMessage }>
            Преимущества
            <div className={ classes.subtitle }>
              Brend <span className={ classes.bold }>XY</span>
            </div>
          </div>

          <div className={ classes.list }>
            { LIST.slice(pagination*3, (pagination+1)*3).map((listItem) => (
              <div key={ listItem.id } className={ classes.listItem }>
                <div className={ classes.listItemTitle }>0{ listItem.id+1 }</div>
                <div className={ classes.listItemContent }>
                  { listItem.text }
                </div>
              </div>
            ))}
          </div>

          <div className={ classes.pagination }>
            <span className={`material-icons ${ classes.paginationArrow }`} onClick={ () => changePagination(true) }>chevron_left</span>
            {Array(2).fill(0).map((_, index) => (
              <div
                key={ index }
                className={`${ classes.point } ${ index === pagination && classes.active }`}
                onClick={ setPagination.bind(null, index) }
              ></div>
            ))}
            <span className={`material-icons ${ classes.paginationArrow }`} onClick={ () => changePagination(false) }>chevron_right</span>
          </div>
        </div>
      </div>
    </div>
  );
}