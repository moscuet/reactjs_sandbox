import React from 'react'

export default function Notes({notes}) {
    return (
        <div>
            <h1>My Notes!</h1>
            <ul>
                {notes.map( note=> <li key = {note.id}>{note.message}</li>)}
            </ul>       
        </div>
    )
}
