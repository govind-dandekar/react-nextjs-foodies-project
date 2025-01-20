// file becomes active if sibling or nested pages.js are loading
import classes from './loading.module.css'

function MealsLoadingPage(){
	return <p className={classes.loading}>Fetching meals...</p>
}

export default MealsLoadingPage;