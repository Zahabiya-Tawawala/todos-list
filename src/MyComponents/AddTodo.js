import React, { useState } from 'react'

const AddTodo = (props) => {
    // to change the state of the input field we need to use the useState hook 
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    // ERROR in [eslint]
    // src\MyComponents\AddTodo.js
    // Line 9:9:  'e' is not defined  no-undef

    // Search for the keywords to learn more about each error.

    // webpack compiled with 1 error and 1 warning
    //    const submit = () => {
    //        e.preventDefault();
    // } in this case we need to pass the event as a parameter in the function to define e as e was not define in the avoive function code hence we were getting the error the corrected code is as follows : 

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Tiltle or Description cannot be blank");
        }
        else {
            props.addTodo(title, desc);
            setTitle('')
            setDesc('')  
        }
        // title = ""
        // desc = ""
    }


    return (
        <div className='container my-3'>
            <h3>Add a todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} className="form-control"
                        id="title"
                        aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)} className="form-control"
                        id="desc" />
                </div>

                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
