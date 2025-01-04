import { useState } from "react"

function TaskList(){
    const [data,setdata]=useState([])
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Dis</th>
                </tr>
            </thead>
            <tbody>
                {data.map((value,index)=>(
                    <tr key={index}>
                        <td>{value.titile}</td>
                        <td>{value.dis}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    
        </>
    )

    
}
export default TaskList