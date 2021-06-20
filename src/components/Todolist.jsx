import React from 'react'
import styled from 'styled-components'
function Todolist({todos, setTodos}) {

    return (
        <div>
            {todos.map( ele => {
                return (  
                    <Container key={ele.id}>          
                            <h3>{ele.name}</h3>
                           
                    </Container>  
                   
                )
            })}
        </div>
    )
}
const Container = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
`
export default Todolist
