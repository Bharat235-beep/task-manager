const { default: ShowTasks } = require("./ShowTasks")
export const metadata = {
    title: "Tasks",
   
  };
const ShowTasksPage=()=>{
    return(
        <>
        <ShowTasks/>
        </>
    )
}
export default ShowTasksPage