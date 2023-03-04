import classes from './filterTask.css'

let FilterTask = (props) => {
    function onFilterValueChanged(event){
    props.filterValueSelected(event.target.value)

     }

    return (<div className={classes.filterTasked}>
                <select name='isAvaiLable' onChange={onFilterValueChanged}>
                     <option value="all">все таски</option>
                     <option value="avaiLable">выполненные таски</option>
                     <option value="unAvaiLable">не выполненные таски</option>
                </select>
            </div>

    )


}
export default FilterTask