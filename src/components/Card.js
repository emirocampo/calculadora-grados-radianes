import React, { useState } from 'react'

const Card = () => {
    const [grades, setGrades] = useState(0)
    const [radians, setRadians] = useState(0)
    const [title, setTitle] = useState("Calculadora")
    function toRadians(e){
        let grade = e.target.value
        let radian = (e.target.value)*(Math.PI)/(180)
        setGrades(grade)
        setRadians(radian)
        setTitle("Calculadora a radianes")
    }
    function toGrades(e){
        let grade = (e.target.value)*(180)/(Math.PI)
        let radian = e.target.value
        setGrades(grade)
        setRadians(radian)
        setTitle("Calculadora a grados")
    }
    return(
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div>
                <label>Grados</label>
                <br/>
                <input className="w-100" value={grades} onChange={(e)=> toRadians(e)}/>
            </div>
            <div>
                <label>Radianes</label>
                <br/>
                <input className="w-100" value={radians} onChange={(e)=> toGrades(e)}/>
            </div>
        </div>
  </div>
  );
}

export default Card