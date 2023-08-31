import  { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

const MyFlipBook = () => {
    // eslint-disable-next-line no-unused-vars
    const [currentPage, setCurrentPage] = useState(0);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    // const renderPage = (pageNum) => {
    //     return (
    //         <div key={pageNum} className="page">
    //             <h1>Page {pageNum + 1}</h1>
    //             <h1>Page Aa</h1>
    //         </div>
    //     );
    // };

    return (
        // style={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden",padding:5 }}
        <div  className='book-container'>
            <HTMLFlipBook
            style={{outline: "1px solid #000",overflow: "hidden",justifyContent: "center",backgroundColor: "#EBE5D7"}}
                width={500}
                height={500}
                minWidth={315}
                minHeight={200}
                maxShadowOpacity={0.5}
                showCover={false}
                mobileScrollSupport={true}
                onFlip={onPageChange}
            >
                {/* {Array.from(Array(10), (_, i) => renderPage(i))} */}

                <h4>use Array.map to and make images and text that coming from api into book its sp fun to do </h4>
                <p>Fro EX :  data.map((item)={'>'}(
                    img =item.img 
                    text=item.text
                    ))</p>
                <div className='page'>
                    <h1>1</h1>
                    <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" height={300} />
                    
                </div>
                <div className='page'> <h1>2</h1>
                    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" height={300} /></div>
                <div className='page'> <h1>3</h1>
                    <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" height={300} /></div>
                <div className='page'> <h1>4</h1>
                    <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" height={300} /></div>

            </HTMLFlipBook>
        </div>
    );
};

export default MyFlipBook;