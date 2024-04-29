const MyFirstReactComponent = ()=>{
    return (
        <>
            <h1>Topics Covered</h1>
            <br/>
            <p>The following is a list of all the topics we cover in the MDN learning area.</p>
            <br/>
            <a herf="#">Getting started with the web</a>
            <p>Provides a practical introduction to web development for complete beginners.</p>
            <br/>
            <a>HTML - Structuring the web</a>
            <p>HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</p>
            <br/>
            <a>CSS- Styling the web</a>
            <p>CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</p>
        </>
    );
}

ReactDOM.render(<MyFirstReactComponent/>,document.getElementById("root"));