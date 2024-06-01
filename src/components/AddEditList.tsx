import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEditList({ todoList , setTodoList } : { todoList : List[], setTodoList : any }) {
    const queryParams = new URLSearchParams(window.location.search);
    const editId = queryParams.get('id');
    
    // const []
    const title = useRef();
    const desc = useRef();
    const deadline = useRef();
    
    const navigate = useNavigate();
    const showList = (e : any) => {
        e.preventDefault();
        navigate('/');
    }
    const addList = () => {
        setTodoList((prev) => [...prev, { id : prev.length + 1, title : title.current.value, description : desc.current.value, deadline : deadline.current.value }]);
        title.current.value = '';
        desc.current.value = '';
        deadline.current.value = '';
    }
    const saveEdit = () => {
        let tempList = [...todoList];
        tempList.forEach((data) => {
            if(data.id == editId) {
                data.title = title.current.value;
                data.description =  desc.current.value;
                data.deadline = deadline.current.value;
            }
        });
        setTodoList(() => tempList);
        navigate('/');
    }
    useEffect(() => {
        if(editId) {
            let isGot = false;
             for(let list of todoList) {
                if(list.id == editId) {
                    title.current.value = list.title;
                    desc.current.value = list.description;
                    deadline.current.value = list.deadline;
                    isGot = true;
                    break;
                }
             }
             if(!isGot) {
                navigate('/');
             }
        }
    }, []);
    return (
        <div className='list'>
            <button onClick={showList}>Show All List</button>
            <div className='field'>
                <input type="text" placeholder='Title' ref={title} />
                <input type="text" placeholder='Description' ref={desc} />
                <input type="date" placeholder='Enter your text here' ref={deadline} />
            </div>

            <button onClick={editId ? saveEdit : addList}>{!editId ? "Add new list" : "Save" } </button>
        </div>
    )
}

export default AddEditList;