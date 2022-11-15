import React from 'react';
import Pagination from 'react-bootstrap/Pagination';


export const Main = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {

    let items = [];
    for (let number = 1; number <= Math.ceil(totalPosts / postsPerPage); number++) {
        items.push(
            <React.Fragment key={number}>
            <Pagination.Item  onClick={() => setCurrentPage(number)} active={number === currentPage }>
                {number}
            </Pagination.Item>
            </React.Fragment>
           
           );
        }

        const prevHandler = ()=>{
            if(currentPage>1){
                setCurrentPage(currentPage-1)
            }
        }

        const nextHandler = () =>{
            if(currentPage<10){
                setCurrentPage(currentPage+1)
            }
        }
        
        return (
            <div>   
            <Pagination >
            <Pagination.First  onClick={()=>setCurrentPage(1)}/>
            <Pagination.Prev onClick={prevHandler}/>
                {items}
                <Pagination.Next onClick={nextHandler}/>
                <Pagination.Last  onClick={() => setCurrentPage(totalPosts / postsPerPage)}/>
                </Pagination>
        </div>
    )
}
