import classes from './Header.module.css';

export const Header = ({ handleChangeSlide, disabled }) => {
  return (
    <header className={`${ classes.root } ${ disabled && classes.disabled }`}>
      <div className={ classes.container }>
        <span className={`material-icons ${ classes.home }`} onClick={ () => handleChangeSlide(0) }>home</span>
        <span className={ classes.verticalLine }></span>
        <span className={ classes.link }>PROJECT</span>
      </div>
    </header>
  );
}