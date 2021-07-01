import classes from './Slide.module.css';

export const Slide = ({ numberSlide, children }) => {

    return (
        <div className={ classes.root }>
            <img
              className={ classes.slide }
              src={`/imgs/box${ numberSlide }/bg${ numberSlide }.png`}
              alt={`Слайд №${ numberSlide }`}
            />
            <div className={ classes.container }>
              { children }
            </div>
        </div>
    );
}