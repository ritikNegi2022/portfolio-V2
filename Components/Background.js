import classes from './Background.module.scss';
import Bg from './bg_svgs/BgProvider';


function Background() {
  
    
  return (
    <>
      <div className={classes.main}>
        <Bg />
      </div>
    </>
  );
}



export default Background;
