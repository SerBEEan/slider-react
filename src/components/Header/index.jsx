import classes from './Header.module.css';

export const Header = ({ handleChangeSlide }) => {
  return (
    <header className={ classes.root }>
      <div className={ classes.container }>
        <span className={`material-icons ${ classes.home }`} onClick={ () => handleChangeSlide(0) }>home</span>
        <span className={ classes.verticalLine }></span>
        <span className={ classes.link }>PROJECT</span>
      </div>
    </header>
  );
}