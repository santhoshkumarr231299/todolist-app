import { useNavigate } from 'react-router-dom';

function ShowList({ todoList } : { todoList : List[] }) {
    const navigate = useNavigate();
    const editList = (id : number) => {
        navigate('/list?id='+id);
    }
    const addList = (e : any) => {
        e.preventDefault();
        navigate('/list');
    }
    return (
        <div className='all-list'>
            <button onClick={addList}>Add List</button>
            <div>
                {todoList?.map((data : any) => <div  key={data.id} className='data'>
                    <div>ID : {data.id}</div>
                    <div>Title : {data.title}</div>
                    <div>Description : {data.description}</div>
                    <div>Deadline : {data.deadline}</div>
                    <button onClick={() => editList(data.id)}>Edit List</button>
                    <br />
                </div>)}
            </div>
        </div>
    )
}

export default ShowList;