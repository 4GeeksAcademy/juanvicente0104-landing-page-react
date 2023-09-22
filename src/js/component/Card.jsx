import React from "react"

const Card = (props) => {
    console.log(props)
    return (
        <div className="col-12 col-md-3">
            <div className="card">
                <img src="https://picsum.photos/200/250" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <a href="#" className="btn btn-primary">Find out more!</a>
                </div>
            </div>
        </div>
    )
}

export default Card

