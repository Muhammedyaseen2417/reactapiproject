import axios from "axios"
import { useState } from "react"

function Add(){
    const [title,setTitile] = useState('')
    const [dis,setDis] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/task/',{title,dis}).then((res)=>{
            setTitile('')
            setDis('')
        }).catch(Error=>console.log(error.message)
        
    )
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" id="task" value={title} onChange={(e)=>setTitile(e.target.value)} />
            <input type="text" name="discription" id="discription" value={dis} onChange={(e)=>setDis(e.target.value)}/>
            <input type="submit" value="add" />
        </form>
    )
}
export default Add