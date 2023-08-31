import HTMLFlipBook from "react-pageflip";
import React from "react";
// eslint-disable-next-line react/display-name
const Page = React.forwardRef(( ref) => {
    return (
      <div className="demoPage" ref={ref}> 
        <h1>Page Header</h1>
        <p>{}</p>
        <p>Page number: {}</p>
      </div>
    );
  });
  
  export default function Book() {
    return (
        <>
        
      <HTMLFlipBook width={300} height={500}>
        <Page number="1">Page text</Page>
        <Page number="2">Page text</Page>
        <Page number="3">Page text</Page>
        <Page number="4">Page text</Page>
      </HTMLFlipBook>
        </>
    );
  }